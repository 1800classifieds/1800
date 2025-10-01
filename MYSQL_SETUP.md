# MySQL Setup Guide

This is the MySQL version of the classifieds platform. Follow these steps to set up your MySQL database.

## Prerequisites

You need a MySQL database. Options include:
- **PlanetScale** (MySQL-compatible, recommended)
- **AWS RDS MySQL**
- **DigitalOcean MySQL**
- **Local MySQL server**
- Any other MySQL hosting service

## Environment Variables

Add these environment variables to your project:

\`\`\`env
MYSQL_HOST=your-mysql-host.com
MYSQL_USER=your-username
MYSQL_PASSWORD=your-password
MYSQL_DATABASE=classifieds
MYSQL_PORT=3306
\`\`\`

### For Vercel Deployment

1. Go to your Vercel project settings
2. Navigate to Environment Variables
3. Add all the MySQL variables listed above
4. Redeploy your application

## Database Setup

Run the SQL scripts in order:

1. **Create Tables**: `scripts/mysql/01-create-tables.sql`
2. **Seed Categories**: `scripts/mysql/02-seed-categories.sql`
3. **Create Pincodes Table**: `scripts/mysql/03-create-pincodes-table.sql`
4. **Seed Pincodes**: `scripts/mysql/04-seed-pincodes.sql`

### How to Run Scripts

**Option 1: Using MySQL Client**
\`\`\`bash
mysql -h your-host -u your-user -p your-database < scripts/mysql/01-create-tables.sql
\`\`\`

**Option 2: Using phpMyAdmin or Database GUI**
- Copy the SQL content
- Paste into the SQL editor
- Execute

**Option 3: Using PlanetScale CLI**
\`\`\`bash
pscale shell your-database your-branch < scripts/mysql/01-create-tables.sql
\`\`\`

## Key Differences from PostgreSQL Version

- Uses `mysql2` package instead of Supabase client
- Connection pooling for better performance
- MySQL-specific data types (INT AUTO_INCREMENT, JSON, ENUM)
- Different query syntax in some places

## Testing the Connection

The application will automatically connect to MySQL using the environment variables. Check the console for any connection errors.

## Adding More Pin Codes

The seed script includes major cities. To add more pin codes:

1. Create a new SQL file: `scripts/mysql/05-add-more-pincodes.sql`
2. Use the same INSERT format:
\`\`\`sql
INSERT INTO pincodes (pincode, area, district, state) VALUES
('110001', 'Area Name', 'District', 'State')
ON DUPLICATE KEY UPDATE area=VALUES(area);
\`\`\`

## Support

For MySQL-specific issues, refer to:
- MySQL Documentation: https://dev.mysql.com/doc/
- mysql2 Package: https://github.com/sidorares/node-mysql2
