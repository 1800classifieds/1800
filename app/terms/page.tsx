import { ClassifiedsHeader } from "@/components/classifieds-header"
import { ClassifiedsFooter } from "@/components/classifieds-footer"
import { BannerAd, SkyscraperAd } from "@/components/google-ad"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ClassifiedsHeader />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <BannerAd className="mx-auto" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-9">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
              <p className="text-muted-foreground text-lg mb-8">Last updated: January 2025</p>

              <div className="prose prose-lg max-w-none space-y-8">
                <section>
                  <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                  <p className="leading-relaxed text-foreground">
                    By accessing and using 1800 ("the Platform"), you accept and agree to be bound by these
                    Terms and Conditions. If you do not agree to these terms, please do not use our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">2. User Accounts</h2>
                  <p className="leading-relaxed text-foreground mb-3">
                    To post ads on 1800, you must create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>Provide accurate, current, and complete information during registration</li>
                    <li>Maintain the security of your password and account</li>
                    <li>Notify us immediately of any unauthorized use of your account</li>
                    <li>Be responsible for all activities that occur under your account</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">3. Posting Ads</h2>
                  <p className="leading-relaxed text-foreground mb-3">When posting ads, you agree to:</p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>Provide truthful and accurate information about items or services</li>
                    <li>Not post prohibited items (weapons, illegal substances, counterfeit goods, etc.)</li>
                    <li>Own the rights to any images or content you upload</li>
                    <li>Not post duplicate or spam advertisements</li>
                    <li>Comply with all applicable local, state, and national laws</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">4. Prohibited Activities</h2>
                  <p className="leading-relaxed text-foreground mb-3">Users are strictly prohibited from:</p>
                  <ul className="list-disc pl-6 space-y-2 text-foreground">
                    <li>Posting fraudulent, misleading, or deceptive advertisements</li>
                    <li>Engaging in any form of harassment or abusive behavior</li>
                    <li>Attempting to circumvent our security measures</li>
                    <li>Using automated systems to scrape or collect data from the Platform</li>
                    <li>Impersonating other users or entities</li>
                    <li>Posting content that infringes on intellectual property rights</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">5. Transaction Responsibility</h2>
                  <p className="leading-relaxed text-foreground">
                    1800 is a platform that connects buyers and sellers. We are not a party to any
                    transaction between users. All transactions are conducted directly between buyers and sellers. We do
                    not guarantee the quality, safety, or legality of items advertised, the truth or accuracy of
                    listings, or the ability of sellers to complete sales.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">6. Content Moderation</h2>
                  <p className="leading-relaxed text-foreground">
                    We reserve the right to remove any content that violates these terms or is deemed inappropriate. We
                    may suspend or terminate accounts that repeatedly violate our policies. However, we do not
                    pre-screen all content and are not responsible for user-generated content.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
                  <p className="leading-relaxed text-foreground">
                    The 1800 name, logo, and all related marks are trademarks of 1800 Limited.
                    All content on the Platform, including text, graphics, logos, and software, is the property of 1800
                    Classifieds or its content suppliers and is protected by copyright laws.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
                  <p className="leading-relaxed text-foreground">
                    1800 shall not be liable for any indirect, incidental, special, consequential, or
                    punitive damages resulting from your use of the Platform. We provide the service "as is" without
                    warranties of any kind, either express or implied.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
                  <p className="leading-relaxed text-foreground">
                    We reserve the right to modify these Terms and Conditions at any time. Changes will be effective
                    immediately upon posting. Your continued use of the Platform after changes constitutes acceptance of
                    the modified terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
                  <p className="leading-relaxed text-foreground">
                    For questions about these Terms and Conditions, please contact us at legal@1800classifieds.in
                  </p>
                </section>
              </div>
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
