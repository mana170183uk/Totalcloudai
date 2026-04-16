const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', '..', 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.jsonl');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}

function saveLead(lead) {
  ensureDataDir();
  const entry = {
    ...lead,
    timestamp: new Date().toISOString(),
  };
  fs.appendFileSync(LEADS_FILE, JSON.stringify(entry) + '\n');
  return entry;
}

module.exports = { saveLead };
