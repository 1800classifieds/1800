import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, CheckCircle2, AlertCircle } from "lucide-react"

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Warranty Information</h1>
            <p className="text-xl text-muted-foreground">Comprehensive coverage for your peace of mind</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Vehicle Warranty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">3 Years</p>
                <p className="text-muted-foreground">
                  Comprehensive warranty covering all mechanical and electrical components of the scooter.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Battery Warranty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">5 Years</p>
                <p className="text-muted-foreground">
                  Extended warranty on the battery pack, ensuring long-term performance and reliability.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>What's Covered</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Manufacturing defects in materials and workmanship</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Battery performance degradation below 70% capacity</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Motor and controller malfunctions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Electrical system failures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Solar panel defects and performance issues</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Frame and body structural defects</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                What's Not Covered
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>Normal wear and tear (tires, brake pads, etc.)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>Damage due to accidents, misuse, or negligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>Modifications or repairs by unauthorized service centers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>Cosmetic damage (scratches, dents, paint chips)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>Damage from natural disasters or extreme weather</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Extended Warranty Available</h2>
            <p className="text-muted-foreground mb-4">
              Extend your coverage beyond the standard warranty period for continued peace of mind. Our extended
              warranty plans offer:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Additional 2-3 years of comprehensive coverage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Priority service at authorized centers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Roadside assistance included</span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground">
              Contact your nearest dealer or our customer support team to learn more about extended warranty options.
            </p>
          </div>
        </div>
      </div>

      <ElectrodeFooter />
    </main>
  )
}
