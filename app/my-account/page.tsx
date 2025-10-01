import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { UserDashboard } from "@/components/user-dashboard"
import { BannerAd, SquareAd } from "@/components/google-ad"
import { getSession } from "@/lib/auth/session"
import { query } from "@/lib/db/mysql"
import { redirect } from "next/navigation"

export default async function MyAccountPage() {
  const session = await getSession()

  if (!session) {
    redirect("/auth/login")
  }

  const userAds = await query<any>(
    `SELECT 
      ads.*,
      categories.name as category_name,
      categories.slug as category_slug
    FROM ads
    LEFT JOIN categories ON ads.category_id = categories.id
    WHERE ads.user_id = ?
    ORDER BY ads.created_at DESC`,
    [session.id],
  )

  // Transform data to match component interface
  const transformedAds = userAds.map((ad: any) => ({
    ...ad,
    categories: {
      name: ad.category_name,
      slug: ad.category_slug,
    },
  }))

  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <UserDashboard userAds={transformedAds || []} userEmail={session.email || ""} />

        <div className="mt-8 flex justify-center">
          <SquareAd />
        </div>
      </div>

      <div className="bg-white py-4 border-t">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <ClassifiedsFooter />
    </main>
  )
}
