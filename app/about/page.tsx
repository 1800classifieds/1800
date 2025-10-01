import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Award, Zap } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Electrode</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Pioneering the future of electric mobility in India
          </p>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg leading-relaxed">
              Electrode is India's leading manufacturer of solar-powered electric scooters, committed to revolutionizing
              urban transportation through sustainable innovation. Founded with a vision to make India self-reliant in
              clean energy transportation, we combine cutting-edge technology with traditional Indian craftsmanship.
            </p>

            <p className="text-lg leading-relaxed">
              Our mission is simple yet powerful: transform solar energy into motion, making electric mobility
              accessible to every Indian. As part of the Atmanirbhar Bharat initiative, we proudly design, develop, and
              manufacture all our products in India, creating jobs and fostering innovation in the electric vehicle
              ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Target className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To accelerate India's transition to sustainable transportation by providing innovative, solar-powered
                  electric vehicles that are affordable, reliable, and proudly Made in India.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  To become India's most trusted electric mobility brand, leading the charge towards a cleaner, greener
                  future while supporting the nation's self-reliance goals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Commitment</h3>
                <p className="text-muted-foreground">
                  Every Electrode scooter undergoes rigorous testing to ensure the highest standards of safety,
                  performance, and durability for Indian road conditions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Innovation First</h3>
                <p className="text-muted-foreground">
                  We invest heavily in R&D to develop proprietary solar charging technology and battery management
                  systems that set new industry benchmarks.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Why Choose Electrode?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>100% Made in India:</strong> Supporting local manufacturing and creating jobs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Solar-Powered:</strong> Harness the power of the sun for sustainable mobility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Advanced Technology:</strong> Cutting-edge battery and motor systems
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Affordable Pricing:</strong> Premium quality at accessible prices
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Nationwide Service:</strong> Comprehensive after-sales support across India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <ElectrodeFooter />
    </main>
  )
}
