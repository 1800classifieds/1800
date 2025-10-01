-- MySQL Database Schema for Unlisted Shares Classifieds

-- Users table
CREATE TABLE IF NOT EXISTS users (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  is_admin BOOLEAN DEFAULT FALSE,
  role_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_is_admin (is_admin)
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) UNIQUE NOT NULL,
  description TEXT,
  icon VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
);

-- Pincodes table
CREATE TABLE IF NOT EXISTS pincodes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pincode VARCHAR(10) NOT NULL,
  area_name VARCHAR(255) NOT NULL,
  district VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_pincode (pincode),
  INDEX idx_area (area_name),
  INDEX idx_district (district)
);

-- Ads table
CREATE TABLE IF NOT EXISTS ads (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id VARCHAR(36) NOT NULL,
  category_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(12, 2) NOT NULL,
  location VARCHAR(255),
  pincode VARCHAR(10),
  area_name VARCHAR(255),
  district VARCHAR(100),
  state VARCHAR(100),
  contact_name VARCHAR(100) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20) NOT NULL,
  image_url TEXT,
  status ENUM('active', 'expired', 'deleted', 'pending') DEFAULT 'active',
  is_paid BOOLEAN DEFAULT FALSE,
  payment_amount DECIMAL(10, 2) DEFAULT 0,
  payment_status ENUM('free', 'pending', 'completed', 'failed') DEFAULT 'free',
  expires_at TIMESTAMP NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (category_id) REFERENCES categories(id),
  INDEX idx_user (user_id),
  INDEX idx_category (category_id),
  INDEX idx_status (status),
  INDEX idx_pincode (pincode),
  INDEX idx_expires (expires_at),
  INDEX idx_created (created_at)
);

-- Admin roles table
CREATE TABLE IF NOT EXISTS admin_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) UNIQUE NOT NULL,
  permissions JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Admin users table (for tracking admin-specific data)
CREATE TABLE IF NOT EXISTS admin_users (
  id VARCHAR(36) PRIMARY KEY,
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id) REFERENCES users(id) ON DELETE CASCADE
);

-- Audit logs table
CREATE TABLE IF NOT EXISTS audit_logs (
  id INT AUTO_INCREMENT PRIMARY KEY,
  admin_id VARCHAR(36) NOT NULL,
  action VARCHAR(100) NOT NULL,
  details JSON,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (admin_id) REFERENCES users(id),
  INDEX idx_admin (admin_id),
  INDEX idx_created (created_at)
);

-- Insert default categories
INSERT INTO categories (name, slug, description, icon) VALUES
('Vehicles', 'vehicles', 'Cars, bikes, and other vehicles', 'car'),
('Property', 'property', 'Real estate and properties', 'building'),
('Jobs', 'jobs', 'Job listings and opportunities', 'briefcase'),
('Services', 'services', 'Professional services', 'wrench'),
('Electronics', 'electronics', 'Phones, laptops, and gadgets', 'smartphone'),
('Home & Garden', 'home-garden', 'Furniture and home items', 'home'),
('Fashion', 'fashion', 'Clothing and accessories', 'shirt'),
('Sports & Leisure', 'sports-leisure', 'Sports equipment and hobbies', 'dumbbell'),
('Baby & Kids', 'baby-kids', 'Baby and children items', 'baby'),
('Books & Music', 'books-music', 'Books, music, and media', 'book'),
('Business', 'business', 'Business equipment and services', 'briefcase'),
('Other', 'other', 'Miscellaneous items', 'grid')
ON DUPLICATE KEY UPDATE name=name;

-- Insert default admin role
INSERT INTO admin_roles (name, permissions) VALUES
('master_admin', '["all"]'),
('admin', '["manage_listings", "manage_users", "view_analytics"]'),
('moderator', '["manage_listings"]')
ON DUPLICATE KEY UPDATE name=name;
