#!/usr/bin/env node
/**
 * Scaffold a new skill from templates/skill.
 *
 * Usage:
 *   npm run new-skill -- <category> <skill-name>
 *   npm run new-skill -- coding python-async
 *   npm run new-skill -- writing paper-acknowledgements
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const TEMPLATE = path.join(ROOT, "templates", "skill");
const SKILLS_DIR = path.join(ROOT, "skills");

const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const VALID_CATEGORIES = new Set(["coding", "writing", "meta"]);

function usage() {
  console.error(`Usage: npm run new-skill -- <category> <skill-name>

Categories: coding | writing | meta
Example:    npm run new-skill -- coding python-async`);
  process.exit(1);
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function main() {
  const [, , category, skillName] = process.argv;
  if (!category || !skillName) usage();
  if (!VALID_CATEGORIES.has(category)) {
    console.error(`Invalid category "${category}". Use: coding, writing, meta`);
    process.exit(1);
  }
  if (!NAME_RE.test(skillName) || skillName.length > 64) {
    console.error(
      `Invalid skill name "${skillName}". Use lowercase letters, digits, hyphens (max 64).`
    );
    process.exit(1);
  }

  const dest = path.join(SKILLS_DIR, category, skillName);
  if (fs.existsSync(dest)) {
    console.error(`Skill already exists: ${path.relative(ROOT, dest)}`);
    process.exit(1);
  }

  copyDir(TEMPLATE, dest);

  const skillMd = path.join(dest, "SKILL.md");
  let content = fs.readFileSync(skillMd, "utf8");
  content = content
    .replaceAll("{{NAME}}", skillName)
    .replaceAll("{{TITLE}}", skillName.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .replaceAll("{{CATEGORY}}", category);
  fs.writeFileSync(skillMd, content, "utf8");

  console.log(`Created ${path.relative(ROOT, dest)}`);
  console.log("Next: edit SKILL.md description and instructions, then run npm run check");
}

main();
