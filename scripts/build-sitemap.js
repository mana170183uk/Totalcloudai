#!/usr/bin/env node
// Auto-generate sitemap.xml from HTML files in public/.
// Runs as part of `npm run build` so any new page is indexed automatically.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'public');
const SITE = 'https://totalcloudai.com';
const OUT = path.join(ROOT, 'sitemap.xml');

// Files we never want in the sitemap (verification files, 404, brochures
// that should stay private, etc.)
const EXCLUDE = new Set([
  '404.html',
  'googlec9bfac36bbfda121.html',
  'BingSiteAuth.xml',
]);
const EXCLUDE_DIRS = new Set(['assets', 'css', 'js', 'public']);

// Per-URL priority + change frequency hints. Anything not listed gets
// sensible defaults based on path depth.
const PRIORITY = [
  { match: /^\/$/, priority: 1.0, changefreq: 'weekly' },
  { match: /^\/(services|products|platforms|pricing)$/, priority: 0.95, changefreq: 'weekly' },
  { match: /^\/blog$/, priority: 0.9, changefreq: 'weekly' },
  { match: /^\/(about|team|contact)$/, priority: 0.8, changefreq: 'monthly' },
  { match: /^\/services\//, priority: 0.9, changefreq: 'monthly' },
  { match: /^\/platforms\//, priority: 0.9, changefreq: 'monthly' },
  { match: /^\/blog\//, priority: 0.85, changefreq: 'monthly' },
  { match: /^\/brochures\//, priority: 0.6, changefreq: 'monthly' },
  { match: /^\/privacy$/, priority: 0.3, changefreq: 'yearly' },
];

function priorityFor(urlPath) {
  for (const rule of PRIORITY) {
    if (rule.match.test(urlPath)) return rule;
  }
  return { priority: 0.7, changefreq: 'monthly' };
}

function walk(dir, base = '') {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;
    if (EXCLUDE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    const rel = path.posix.join(base, entry.name);
    if (entry.isDirectory()) {
      out.push(...walk(full, rel));
    } else if (entry.isFile()) {
      if (EXCLUDE.has(entry.name)) continue;
      if (!entry.name.endsWith('.html')) continue;
      out.push({ rel, mtime: fs.statSync(full).mtime });
    }
  }
  return out;
}

function urlPath(rel) {
  // strip .html and trailing index
  let p = '/' + rel.replace(/\.html$/, '');
  p = p.replace(/\/index$/, '');
  if (p === '') p = '/';
  return p;
}

function isoDate(d) {
  return d.toISOString().slice(0, 10);
}

const files = walk(ROOT);
const urls = files.map(f => {
  const path = urlPath(f.rel);
  const { priority, changefreq } = priorityFor(path);
  return { loc: SITE + path, lastmod: isoDate(f.mtime), priority, changefreq };
}).sort((a, b) => a.priority < b.priority ? 1 : -1);

const xml = '<?xml version="1.0" encoding="UTF-8"?>\n'
  + '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
  + urls.map(u => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join('\n')
  + '\n</urlset>\n';

fs.writeFileSync(OUT, xml);
console.log(`✓ sitemap.xml regenerated with ${urls.length} URLs`);
