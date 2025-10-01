-- Create pincodes table for Indian pin codes
CREATE TABLE IF NOT EXISTS pincodes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pincode VARCHAR(6) NOT NULL UNIQUE,
  area VARCHAR(255) NOT NULL,
  district VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_pincode (pincode),
  INDEX idx_state (state),
  INDEX idx_district (district),
  INDEX idx_area (area)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
