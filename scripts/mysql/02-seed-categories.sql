-- Seed categories
INSERT INTO categories (name, slug, icon) VALUES
('Sports & Leisure', 'sports-leisure', 'Dumbbell'),
('Baby & Kids', 'baby-kids', 'Baby'),
('Books & Music', 'books-music', 'Book'),
('Home & Garden', 'home-garden', 'Home'),
('Free Stuff', 'free-stuff', 'Gift')
ON DUPLICATE KEY UPDATE name=VALUES(name);
