-- Create a function to automatically expire ads
CREATE OR REPLACE FUNCTION expire_old_ads()
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  -- Update ads that have passed their expiry date
  UPDATE ads
  SET status = 'expired'
  WHERE status = 'active'
    AND expires_at IS NOT NULL
    AND expires_at < NOW();
END;
$$;

-- Note: To run this automatically, you would need to set up a cron job
-- In Supabase, you can use pg_cron extension:
-- SELECT cron.schedule('expire-ads', '0 0 * * *', 'SELECT expire_old_ads();');
-- This would run daily at midnight

-- For now, admins can manually call this function or it will be handled by the app
