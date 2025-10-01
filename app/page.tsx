import { ClassifiedsHeader } from "@/components/classifieds-header"
import { SearchFilterBar } from "@/components/search-filter-bar"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedAds } from "@/components/featured-ads"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { AdListings } from "@/components/ad-listings"
import { CategoryListings } from "@/components/category-listings"
import { ReviewsSection } from "@/components/reviews-section"
import { BannerAd, SquareAd, InFeedAd } from "@/components/google-ad"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <ClassifiedsHeader />
      <SearchFilterBar />

      <main>
        <CategoryGrid />

        <div className="container mx-auto px-4 py-4">
          <BannerAd className="mb-8" />
        </div>

        <FeaturedAds />

        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-800">All Listings</h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-sm font-medium">
                    Grid View
                  </button>
                  <button className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg hover:border-primary transition-colors text-sm font-medium">
                    List View
                  </button>
                </div>
              </div>
              <AdListings />

              <div className="mt-8">
                <InFeedAd />
              </div>
            </div>

            <aside className="lg:w-80 space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-4">
                <h3 className="font-bold text-lg mb-4 text-gray-800">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-primary">→</span> Post a Free Ad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-primary">→</span> My Ads
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-primary">→</span> Saved Searches
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                      <span className="text-primary">→</span> Messages
                    </a>
                  </li>
                </ul>
              </div>

              <SquareAd />

              <div className="bg-gradient-to-br from-primary to-blue-600 rounded-xl p-6 shadow-lg text-white">
                <h3 className="font-bold text-xl mb-3">Sell Faster!</h3>
                <p className="text-sm mb-4 text-blue-50">
                  Promote your ad to reach more buyers and sell up to 3x faster
                </p>
                <button className="w-full bg-white text-primary font-semibold py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors">
                  Promote Now
                </button>
              </div>
            </aside>
          </div>
        </div>

        <ReviewsSection />
        <CategoryListings />
      </main>

      <ClassifiedsFooter />
    </div>
  )
}
