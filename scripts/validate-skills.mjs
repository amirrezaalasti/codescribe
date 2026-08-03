#!/usr/bin/env node
/**
 * Validate all skills under skills/ for agentskills.io compliance.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const SKILLS_DIR = path.join(ROOT, "skills");

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const MAX_NAME = 64;
const MAX_DESC = 1024;

function walkSkillDirs(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);
    const skillMd = path.join(full, "SKILL.md");
    if (fs.existsSync(skillMd)) {
      acc.push({ dir: full, name: entry.name, skillMd });
    } else {
      walkSkillDirs(full, acc);
    }
  }
  return acc;
}

function parseFrontmatter(content) {
  if (!content.startsWith("---\n") && !content.startsWith("---\r\n")) {
    return { error: "Missing YAML frontmatter (must start with ---)" };
  }
  const end = content.indexOf("\n---", 4);
  if (end === -1) return { error: "Unclosed YAML frontmatter" };
  const yaml = content.slice(4, end).trim();
  const body = content.slice(end + 4).replace(/^\r?\n/, "");
  const data = {};
  let currentKey = null;
  let multiline = false;
  let multiBuf = [];

  const flushMulti = () => {
    if (currentKey && multiline) {
      data[currentKey] = multiBuf.join(" ").trim();
      multiline = false;
      multiBuf = [];
      currentKey = null;
    }
  };

  for (const rawLine of yaml.split(/\r?\n/)) {
    const line = rawLine;
    if (multiline) {
      if (/^\s+/.test(line) || line.trim() === "") {
        multiBuf.push(line.trim());
        continue;
      }
      flushMulti();
    }
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    const [, key, rest] = m;
    if (rest === "" || /^[>|][+-]?$/.test(rest)) {
      currentKey = key;
      multiline = true;
      multiBuf = [];
      continue;
    }
    data[key] = rest.replace(/^["']|["']$/g, "").trim();
  }
  flushMulti();

  return { data, body, yaml };
}

function checkLocalLinks(skillDir, body) {
  const errors = [];
  const linkRe = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRe.exec(body)) !== null) {
    const href = match[2];
    if (/^(https?:|mailto:|cursor:|#)/i.test(href)) continue;
    const clean = href.split("#")[0];
    if (!clean) continue;
    const target = path.resolve(skillDir, clean);
    if (!fs.existsSync(target)) {
      errors.push(`Broken local link: ${href}`);
    }
  }
  return errors;
}

function validateSkill({ dir, name: folderName, skillMd }) {
  const errors = [];
  const content = fs.readFileSync(skillMd, "utf8");
  const parsed = parseFrontmatter(content);
  if (parsed.error) {
    errors.push(parsed.error);
    return errors;
  }
  const { data, body } = parsed;

  if (!data.name) errors.push("Missing required frontmatter field: name");
  if (!data.description) errors.push("Missing required frontmatter field: description");

  if (data.name) {
    if (data.name.length > MAX_NAME) {
      errors.push(`name exceeds ${MAX_NAME} chars (${data.name.length})`);
    }
    if (!NAME_RE.test(data.name)) {
      errors.push(
        `name must be lowercase alphanumeric with single hyphens: got "${data.name}"`
      );
    }
    if (data.name !== folderName) {
      errors.push(
        `name "${data.name}" must match folder name "${folderName}"`
      );
    }
  }

  if (data.description) {
    if (data.description.length > MAX_DESC) {
      errors.push(
        `description exceeds ${MAX_DESC} chars (${data.description.length})`
      );
    }
    if (data.description.trim().length === 0) {
      errors.push("description must be non-empty");
    }
  }

  if (!body || body.trim().length < 20) {
    errors.push("SKILL.md body is too short (need real instructions)");
  }

  errors.push(...checkLocalLinks(dir, body));
  return errors;
}

function main() {
  const skills = walkSkillDirs(SKILLS_DIR);
  if (skills.length === 0) {
    console.error("No skills found under skills/");
    process.exit(1);
  }

  let failed = 0;
  for (const skill of skills.sort((a, b) => a.dir.localeCompare(b.dir))) {
    const rel = path.relative(ROOT, skill.dir);
    const errors = validateSkill(skill);
    if (errors.length) {
      failed += 1;
      console.error(`FAIL ${rel}`);
      for (const e of errors) console.error(`  - ${e}`);
    } else {
      console.log(`OK   ${rel}`);
    }
  }

  console.log(`\n${skills.length - failed}/${skills.length} skills valid`);
  if (failed) process.exit(1);
}

main();
