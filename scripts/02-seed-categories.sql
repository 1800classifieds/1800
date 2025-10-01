-- Insert categories (excluding Pets as requested)
INSERT INTO categories (name, slug, icon, description) VALUES
  ('Vehicles', 'vehicles', '🚗', 'Cars, motorcycles, vans, and other vehicles'),
  ('Property', 'property', '🏠', 'Houses, flats, land for sale or rent'),
  ('Jobs', 'jobs', '💼', 'Job vacancies and career opportunities'),
  ('Services', 'services', '🔧', 'Professional and personal services'),
  ('Electronics', 'electronics', '📱', 'Phones, computers, TVs, and gadgets'),
  ('Home & Garden', 'home-garden', '🛋️', 'Furniture, appliances, and garden items'),
  ('Fashion', 'fashion', '👔', 'Clothing, shoes, and accessories'),
  ('Sports & Leisure', 'sports-leisure', '⚽', 'Sports equipment and leisure items'),
  ('Baby & Kids', 'baby-kids', '👶', 'Baby items, toys, and children''s products'),
  ('Books & Music', 'books-music', '📚', 'Books, CDs, DVDs, and instruments'),
  ('Business', 'business', '🏢', 'Business equipment and opportunities'),
  ('Other', 'other', '📦', 'Everything else')
ON CONFLICT (slug) DO NOTHING;
