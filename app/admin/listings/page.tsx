import { checkAdminPermission } from "@/lib/db/admin"
import { redirect } from "next/navigation"
import { query } from "@/lib/db/mysql"
import { AdminListingsTable } from "@/components/admin/admin-listings-table"

export default async function AdminListingsPage() {
  const hasPermission = await checkAdminPermission("manage_listings")

  if (!hasPermission) {
    redirect("/admin/dashboard")
  }

  const listings = await query(`
    SELECT 
      a.*,
      c.name as category_name,
      c.slug as category_slug,
      u.email as user_email
    FROM ads a
    LEFT JOIN categories c ON a.category_id = c.id
    LEFT JOIN user_profiles u ON a.user_id = u.id
    ORDER BY a.created_at DESC
    LIMIT 50
  `)

  // Transform to match expected format
  const formattedListings = listings.map((listing: any) => ({
    ...listing,
    categories: {
      name: listing.category_name,
      slug: listing.category_slug,
    },
    profiles: {
      email: listing.user_email,
    },
  }))

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Listings</h1>
        <p className="text-gray-600">Review, approve, and moderate classified ads</p>
      </div>

      <AdminListingsTable listings={formattedListings || []} />
    </div>
  )
}
