import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { AdDetail } from "@/components/ad-detail"
import { SimilarAds } from "@/components/similar-ads"
import { BannerAd, SquareAd, SkyscraperAd } from "@/components/google-ad"

export default function AdDetailPage({ params }: { params: { id: string } }) {
  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            <AdDetail adId={params.id} />

            <div className="mt-8 flex justify-center">
              <SquareAd />
            </div>

            <div className="mt-12">
              <SimilarAds currentAdId={params.id} />
            </div>
          </div>

          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-4">
              <SkyscraperAd />
            </div>
          </aside>
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
