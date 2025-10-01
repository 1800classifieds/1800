import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { InvestorContactForm } from "@/components/investor-contact-form"
import { TrendingUp, Users, Globe, Award } from "lucide-react"

export default function InvestorsPage() {
  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Invest in the Future of Electric Mobility
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Join us in revolutionizing sustainable transportation in India. Be part of the Atmanirbhar Bharat movement
              with cutting-edge solar-powered electric scooters.
            </p>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Invest in Electrode?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growing Market</h3>
              <p className="text-muted-foreground">
                India's EV market is projected to grow at 49% CAGR, reaching $152 billion by 2030
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Technology</h3>
              <p className="text-muted-foreground">
                Proprietary solar-powered technology with advanced battery management systems
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Made in India</h3>
              <p className="text-muted-foreground">
                Supporting Atmanirbhar Bharat with 100% indigenous design and manufacturing
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strong Team</h3>
              <p className="text-muted-foreground">
                Experienced leadership with proven track record in automotive and clean energy sectors
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Investment Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Market Opportunity</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 2-wheeler segment dominates Indian EV market (95%+ share)</li>
                  <li>• Government incentives under FAME II scheme</li>
                  <li>• Rising fuel costs driving EV adoption</li>
                  <li>• Growing environmental consciousness</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Competitive Advantages</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Unique solar charging technology</li>
                  <li>• Lower total cost of ownership</li>
                  <li>• Strong brand positioning</li>
                  <li>• Scalable manufacturing infrastructure</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Financial Projections</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Target 50,000 units in Year 1</li>
                  <li>• Projected revenue of ₹500 Cr by Year 3</li>
                  <li>• Break-even expected in 18-24 months</li>
                  <li>• Strong unit economics with 25%+ margins</li>
                </ul>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-3">Use of Funds</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Manufacturing capacity expansion (40%)</li>
                  <li>• R&D and product development (25%)</li>
                  <li>• Marketing and brand building (20%)</li>
                  <li>• Working capital and operations (15%)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-xl text-muted-foreground">
                Interested in investing? Fill out the form below and our investment team will reach out to you with
                detailed information.
              </p>
            </div>
            <InvestorContactForm />
          </div>
        </div>
      </section>

      <ElectrodeFooter />
    </main>
  )
}
