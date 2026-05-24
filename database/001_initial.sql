CREATE TABLE IF NOT EXISTS collections (
  id SERIAL PRIMARY KEY,
  slug VARCHAR(100) UNIQUE NOT NULL,
  name VARCHAR(200),
  floor_price DECIMAL(20,8),
  volume_24h DECIMAL(20,8),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS floor_history (
  id SERIAL PRIMARY KEY,
  collection_id INTEGER REFERENCES collections(id),
  floor_price DECIMAL(20,8),
  recorded_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS whale_transactions (
  id SERIAL PRIMARY KEY,
  wallet VARCHAR(42),
  action VARCHAR(10),
  collection VARCHAR(100),
  price DECIMAL(20,8),
  token_id INTEGER,
  tx_hash VARCHAR(66),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_floor_history_collection ON floor_history(collection_id);
CREATE INDEX idx_whale_created ON whale_transactions(created_at);
