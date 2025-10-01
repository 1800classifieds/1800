import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { PostAdForm } from "@/components/post-ad-form"
import { BannerAd, SquareAd } from "@/components/google-ad"

export default function PostAdPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Post Your Ad</h1>
          <p className="text-muted-foreground mb-8">First ad free for 20 days • Additional ads ₹18 for 20 days</p>

          <div className="mb-8 flex justify-center">
            <SquareAd />
          </div>

          <PostAdForm />
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
