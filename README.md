# 1800 Classifieds Landing Page

A modern, responsive classifieds landing page built with Next.js 14, React 19, and Tailwind CSS 4.

## Features

- 🎨 Modern, clean design with blue and orange color scheme
- 📱 Fully responsive layout
- ⭐ User reviews section with filtering
- 🔍 Advanced search and filtering
- 📦 Category browsing
- 🎯 Featured ads showcase
- 💼 Professional footer with social links

## Getting Started

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── reviews-section.tsx # User reviews component
│   ├── classifieds-header.tsx
│   ├── search-filter-bar.tsx
│   ├── category-grid.tsx
│   ├── featured-ads.tsx
│   ├── ad-listings.tsx
│   ├── category-listings.tsx
│   ├── classifieds-footer.tsx
│   ├── google-ad.tsx
│   └── icons.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── package.json
\`\`\`

## Technologies Used

- **Next.js 14** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Radix UI** - Accessible components

## Customization

### Colors

Edit the color scheme in `app/globals.css`:
- Primary: Blue (`--primary`)
- Secondary: Orange (`--secondary`)
- Accent: Purple (`--accent`)

### Reviews

Modify the reviews data in `components/reviews-section.tsx`

### Categories

Update categories in `components/category-grid.tsx` and `components/category-listings.tsx`

## Deployment

Deploy to Vercel:

\`\`\`bash
npm run build
\`\`\`

Then push to GitHub and connect to Vercel for automatic deployments.

## License

MIT
