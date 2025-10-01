import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from "lucide-react"
import Link from "next/link"

export default function DealersPage() {
  const dealers = [
    {
      name: "Electrode Delhi Showroom",
      address: "Connaught Place, New Delhi - 110001",
      phone: "+91 11 2345 6789",
      email: "delhi@electrode.in",
    },
    {
      name: "Electrode Mumbai Center",
      address: "Andheri West, Mumbai - 400053",
      phone: "+91 22 3456 7890",
      email: "mumbai@electrode.in",
    },
    {
      name: "Electrode Bangalore Hub",
      address: "Koramangala, Bangalore - 560034",
      phone: "+91 80 4567 8901",
      email: "bangalore@electrode.in",
    },
    {
      name: "Electrode Pune Outlet",
      address: "Hinjewadi, Pune - 411057",
      phone: "+91 20 5678 9012",
      email: "pune@electrode.in",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Our Dealers</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Visit our authorized dealers across India to experience Electrode scooters
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {dealers.map((dealer, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{dealer.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">{dealer.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <a href={`tel:${dealer.phone}`} className="text-muted-foreground hover:text-primary">
                      {dealer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <a href={`mailto:${dealer.email}`} className="text-muted-foreground hover:text-primary">
                      {dealer.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Become a Dealer</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Interested in partnering with Electrode? Join our growing network of dealers and be part of India's
              electric mobility revolution.
            </p>
            <Link href="/contact">
              <Button size="lg">Apply for Dealership</Button>
            </Link>
          </div>
        </div>
      </div>

      <ElectrodeFooter />
    </main>
  )
}
