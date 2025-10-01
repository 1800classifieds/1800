-- Create pincodes table for India pin codes and area names
CREATE TABLE IF NOT EXISTS pincodes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  pincode TEXT NOT NULL UNIQUE,
  area_name TEXT NOT NULL,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_pincodes_pincode ON pincodes(pincode);
CREATE INDEX IF NOT EXISTS idx_pincodes_area ON pincodes(area_name);
CREATE INDEX IF NOT EXISTS idx_pincodes_state ON pincodes(state);

-- Enable Row Level Security
ALTER TABLE pincodes ENABLE ROW LEVEL SECURITY;

-- RLS Policy for pincodes (public read)
CREATE POLICY "Pincodes are viewable by everyone"
  ON pincodes FOR SELECT
  USING (true);

-- Add pincode columns to ads table
ALTER TABLE ads ADD COLUMN IF NOT EXISTS pincode TEXT;
ALTER TABLE ads ADD COLUMN IF NOT EXISTS area_name TEXT;
ALTER TABLE ads ADD COLUMN IF NOT EXISTS district TEXT;
ALTER TABLE ads ADD COLUMN IF NOT EXISTS state TEXT;

-- Create index for location-based searches
CREATE INDEX IF NOT EXISTS idx_ads_pincode ON ads(pincode);
CREATE INDEX IF NOT EXISTS idx_ads_state ON ads(state);
