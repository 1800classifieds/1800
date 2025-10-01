-- This script creates the first super admin
-- Replace 'your-email@example.com' with your actual email
-- You'll need to sign up with this email first, then run this script

-- Insert super admin (update the email to match your signup email)
INSERT INTO admin_users (id, email, role, permissions, is_active)
SELECT 
  id,
  email,
  'super_admin',
  '{"manage_listings": true, "manage_categories": true, "manage_users": true, "manage_admins": true}'::jsonb,
  true
FROM auth.users
WHERE email = 'admin@example.com' -- CHANGE THIS TO YOUR EMAIL
ON CONFLICT (id) DO UPDATE
SET role = 'super_admin',
    permissions = '{"manage_listings": true, "manage_categories": true, "manage_users": true, "manage_admins": true}'::jsonb,
    is_active = true;
