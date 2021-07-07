CREATE TABLE IF NOT EXISTS db_version (
  version INTEGER,
  PRIMARY KEY(version) ON CONFLICT REPLACE
);

INSERT INTO db_version values (1);

CREATE TABLE IF NOT EXISTS account_transaction (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  value REAL,
  done INTEGER DEFAULT 0,
  date_created INTEGER,
  description TEXT,
  category_id INTEGER,
  account_id INTEGER,
  observation TEXT,
  tag_id INTEGER,
  remember_date INTEGER,
  ignore INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS account (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT,
  initial_balance REAL,
  actual_balance REAL
);

INSERT INTO account values (null, 'cartera', 0.0);


CREATE TABLE IF NOT EXISTS category (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  description TEXT
);

