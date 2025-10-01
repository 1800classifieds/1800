import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { AdListings } from "@/components/ad-listings"
import { SearchFilters } from "@/components/search-filters"

export default function AdsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">All Classified Ads</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <SearchFilters />
          </aside>
          <div className="lg:col-span-3">
            <AdListings />
          </div>
        </div>
      </div>
      <ClassifiedsFooter />
    </main>
  )
}
