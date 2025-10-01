-- Add payment and expiry fields to ads table
ALTER TABLE ads 
ADD COLUMN IF NOT EXISTS is_paid BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS payment_amount DECIMAL(10, 2) DEFAULT 0,
ADD COLUMN IF NOT EXISTS expires_at TIMESTAMP WITH TIME ZONE,
ADD COLUMN IF NOT EXISTS payment_id TEXT,
ADD COLUMN IF NOT EXISTS payment_status TEXT CHECK (payment_status IN ('pending', 'completed', 'failed', 'free'));

-- Set expiry date for existing ads (20 days from created_at)
UPDATE ads 
SET expires_at = created_at + INTERVAL '20 days',
    payment_status = 'free'
WHERE expires_at IS NULL;

-- Create index for expiry queries
CREATE INDEX IF NOT EXISTS idx_ads_expires ON ads(expires_at);

-- Update RLS policy to include expired ads check
DROP POLICY IF EXISTS "Ads are viewable by everyone" ON ads;
CREATE POLICY "Ads are viewable by everyone"
  ON ads FOR SELECT
  USING (status = 'active' AND (expires_at IS NULL OR expires_at > NOW()));
