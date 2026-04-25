#!/usr/bin/env node
// Ping IndexNow with all current sitemap URLs after a deploy.
// Bing, Yandex, Naver, Seznam, and now Google honour this.
// Single API call submits up to 10,000 URLs.

const fs = require('fs');
const path = require('path');
const https = require('https');

const KEY = 'b1455ec1f478c24a354993d214af8dee';
const HOST = 'totalcloudai.com';
const SITEMAP = path.join(__dirname, '..', 'public', 'sitemap.xml');

if (!fs.existsSync(SITEMAP)) {
  console.error('sitemap.xml not found — run build first');
  process.exit(1);
}

const xml = fs.readFileSync(SITEMAP, 'utf8');
const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g)).map(m => m[1]);

if (!urls.length) {
  console.error('No URLs extracted from sitemap');
  process.exit(1);
}

const body = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: urls,
});

const req = https.request({
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/IndexNow',
  method: 'POST',
  headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) },
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    if (res.statusCode === 200 || res.statusCode === 202) {
      console.log(`✓ IndexNow pinged: ${urls.length} URLs submitted (HTTP ${res.statusCode})`);
    } else {
      console.error(`✗ IndexNow returned HTTP ${res.statusCode}: ${data}`);
      process.exit(1);
    }
  });
});

req.on('error', e => { console.error('IndexNow error:', e.message); process.exit(1); });
req.write(body);
req.end();
