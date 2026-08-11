/* Small helpers shared by the scripts in tools/. No dependencies. */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const SHARED_DIR = path.join(ROOT, "shared");
export const SITES_DIR = path.join(ROOT, "sites");
export const DIST_DIR = path.join(ROOT, "dist");
export const REGISTRY = path.join(ROOT, "sites.json");

export function readRegistry() {
  const data = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
  if (!Array.isArray(data.sites)) throw new Error('sites.json: expected a "sites" array');
  return data;
}

/** Look a site up by folder name or domain (with or without www.). */
export function findSite(sites, key) {
  if (!key) return null;
  const needle = String(key).toLowerCase().replace(/^www\./, "");
  return (
    sites.find((s) => s.name.toLowerCase() === needle) ||
    sites.find((s) => s.domain.toLowerCase().replace(/^www\./, "") === needle) ||
    null
  );
}

export function siteDir(site) {
  return path.join(SITES_DIR, site.name);
}

/**
 * Recursively copy `from` into `to`.
 * @param {(absPath:string, entry:fs.Dirent) => boolean} [filter] return false to skip
 * @returns {number} files written
 */
export function copyDir(from, to, filter) {
  let count = 0;
  if (!fs.existsSync(from)) return 0;
  fs.mkdirSync(to, { recursive: true });

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    if (filter && !filter(src, entry)) continue;

    const dest = path.join(to, entry.name);

    if (entry.isDirectory()) {
      count += copyDir(src, dest, filter);
    } else {
      fs.copyFileSync(src, dest);
      count += 1;
    }
  }

  return count;
}

/** Parse `--key value`, `--key=value` and bare positional arguments. */
export function parseArgs(argv) {
  const flags = {};
  const positional = [];

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith("--")) {
      positional.push(arg);
      continue;
    }
    const body = arg.slice(2);
    const eq = body.indexOf("=");
    if (eq !== -1) {
      flags[body.slice(0, eq)] = body.slice(eq + 1);
    } else if (argv[i + 1] && !argv[i + 1].startsWith("--")) {
      flags[body] = argv[i + 1];
      i += 1;
    } else {
      flags[body] = true;
    }
  }

  return { flags, positional };
}

export const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2"
};
