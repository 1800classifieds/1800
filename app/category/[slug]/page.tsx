import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { AdListings } from "@/components/ad-listings"
import { SearchFilters } from "@/components/search-filters"
import { notFound } from "next/navigation"
import { BannerAd, SkyscraperAd, InFeedAd } from "@/components/google-ad"

const categories = [
  "vehicles",
  "property",
  "jobs",
  "services",
  "electronics",
  "home-garden",
  "fashion",
  "sports-leisure",
  "baby-kids",
  "books-music",
  "business",
  "free-stuff",
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  if (!categories.includes(params.slug)) {
    notFound()
  }

  const categoryName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>

        <div className="mb-6">
          <InFeedAd />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <SearchFilters category={params.slug} />

            <div className="mt-6 hidden lg:block">
              <SkyscraperAd />
            </div>
          </aside>
          <div className="lg:col-span-3">
            <AdListings category={params.slug} />
          </div>
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

export function generateStaticParams() {
  return categories.map((slug) => ({
    slug,
  }))
}
