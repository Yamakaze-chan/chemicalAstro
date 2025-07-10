CREATE TABLE IF NOT EXISTS email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  sent_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE
);

-- ++++++++++++++++++++++++++++++++++

CREATE TABLE contact (
  id INTEGER PRIMARY KEY,
  nameCustomer TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  businessType TEXT,
  businessCategory TEXT,
  messageCustomer TEXT,
  createdAt TEXT NOT NULL DEFAULT (datetime('now')),
  status TEXT CHECK(status IN ('read', 'unread')) DEFAULT 'unread'
);

CREATE TABLE news (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  createdAt TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE outstandingproducts (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  image TEXT
);

-- Main chemical table
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  formula TEXT,
  molarMass TEXT,
  cas TEXT,
  einecs TEXT,
  hsCode TEXT,
  image TEXT
);

CREATE TABLE chemical_properties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chemical_id INTEGER NOT NULL,
  prop_key TEXT NOT NULL,
  prop_value TEXT,
  FOREIGN KEY (chemical_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Related table for multiple images
CREATE TABLE chemical_images (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chemical_id INTEGER NOT NULL,
  image TEXT NOT NULL,
  FOREIGN KEY (chemical_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Related table for tags
CREATE TABLE chemical_tags (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chemical_id INTEGER NOT NULL,
  tag TEXT NOT NULL,
  FOREIGN KEY (chemical_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Related table for specifications
CREATE TABLE chemical_specifications (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chemical_id INTEGER NOT NULL,
  row_index INTEGER NOT NULL,
  col_key TEXT NOT NULL,
  value TEXT,
  FOREIGN KEY (chemical_id) REFERENCES products(id) ON DELETE CASCADE
);