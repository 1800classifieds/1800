-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL,
  user_location VARCHAR(100) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_verified BOOLEAN DEFAULT FALSE,
  INDEX idx_rating (rating),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample reviews
INSERT INTO reviews (user_name, user_location, rating, review_text, is_verified) VALUES
('Rajesh Kumar', 'Mumbai, Maharashtra', 5, 'Excellent platform! I sold my car withiw let me create a reviews table and connect the reviews section to MySQL. First, let me create the database schema:

<CodeProject id="unlisted-shares-landing" taskNameActive="Adding reviews database" taskNameComplete="Added reviews database">

```sql file="scripts/mysql/04-create-reviews-table.sql"
-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_name VARCHAR(100) NOT NULL,
  user_location VARCHAR(100) NOT NULL,
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  review_text TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  is_verified BOOLEAN DEFAULT FALSE,
  INDEX idx_rating (rating),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Insert sample reviews
INSERT INTO reviews (user_name, user_location, rating, review_text, is_verified) VALUES
('Rajesh Kumar', 'Mumbai, Maharashtra', 5, 'Excellent platform! I sold my car within 2 days. The process was smooth and the buyers were genuine. Highly recommended for anyone looking to sell quickly.', TRUE),
('Priya Sharma', 'Delhi, NCR', 5, 'Best classified ads platform in India. I found my dream apartment here. The search filters are very helpful and the listings are always up to date.', TRUE),
('Amit Patel', 'Ahmedabad, Gujarat', 4, 'Good experience overall. Posted my electronics and got multiple inquiries. The only suggestion would be to add more payment options.', TRUE),
('Sneha Reddy', 'Hyderabad, Telangana', 5, 'Amazing service! I have been using this platform for 6 months now. Sold multiple items and the customer support is very responsive.', TRUE),
('Vikram Singh', 'Bangalore, Karnataka', 5, 'Very user-friendly interface. I am not tech-savvy but I could easily post my ad and manage inquiries. Great job!', TRUE),
('Anita Desai', 'Pune, Maharashtra', 4, 'Reliable platform with genuine buyers. I sold my furniture set quickly. Would appreciate if they add a chat feature for easier communication.', TRUE),
('Rahul Verma', 'Jaipur, Rajasthan', 5, 'Outstanding experience! The free first ad is a great initiative. I got excellent response for my property listing.', TRUE),
('Meera Iyer', 'Chennai, Tamil Nadu', 4, 'Good platform for buying and selling. Found some great deals on electronics. The verification process could be faster though.', TRUE);
