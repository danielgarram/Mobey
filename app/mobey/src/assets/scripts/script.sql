CREATE TABLE IF NOT EXISTS db_version (
  version INTEGER,
  PRIMARY KEY(version) ON CONFLICT REPLACE
);

INSERT INTO db_version values (1);