CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  updates_consent INTEGER NOT NULL DEFAULT 0,
  purpose TEXT NOT NULL DEFAULT 'backup_locale',
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_leads_updates ON leads (updates_consent);
