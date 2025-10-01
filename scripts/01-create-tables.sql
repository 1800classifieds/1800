-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  icon TEXT,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ads table
CREATE TABLE IF NOT EXISTS ads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2),
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  location TEXT,
  contact_name TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT,
  image_url TEXT,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'sold', 'expired', 'deleted')),
  views INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create ad_images table for multiple images per ad
CREATE TABLE IF NOT EXISTS ad_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ad_id UUID REFERENCES ads(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_ads_category ON ads(category_id);
CREATE INDEX IF NOT EXISTS idx_ads_user ON ads(user_id);
CREATE INDEX IF NOT EXISTS idx_ads_status ON ads(status);
CREATE INDEX IF NOT EXISTS idx_ads_created ON ads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ad_images_ad ON ad_images(ad_id);

-- Enable Row Level Security
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE ads ENABLE ROW LEVEL SECURITY;
ALTER TABLE ad_images ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories (public read)
CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT
  USING (true);

-- RLS Policies for ads
CREATE POLICY "Ads are viewable by everyone"
  ON ads FOR SELECT
  USING (status = 'active');

CREATE POLICY "Users can insert their own ads"
  ON ads FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own ads"
  ON ads FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own ads"
  ON ads FOR DELETE
  USING (auth.uid() = user_id);

-- RLS Policies for ad_images
CREATE POLICY "Ad images are viewable by everyone"
  ON ad_images FOR SELECT
  USING (true);

CREATE POLICY "Users can insert images for their own ads"
  ON ad_images FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM ads
      WHERE ads.id = ad_images.ad_id
      AND ads.user_id = auth.uid()
    )
  );

CREATE POLICY "Users can delete images from their own ads"
  ON ad_images FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM ads
      WHERE ads.id = ad_images.ad_id
      AND ads.user_id = auth.uid()
    )
  );
