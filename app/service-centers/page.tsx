import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Clock, Wrench } from "lucide-react"

export default function ServiceCentersPage() {
  const serviceCenters = [
    {
      name: "Electrode Service Center - Delhi NCR",
      address: "Sector 18, Noida, Uttar Pradesh - 201301",
      phone: "+91 120 456 7890",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      name: "Electrode Service Center - Mumbai",
      address: "Goregaon East, Mumbai, Maharashtra - 400063",
      phone: "+91 22 6789 0123",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      name: "Electrode Service Center - Bangalore",
      address: "Whitefield, Bangalore, Karnataka - 560066",
      phone: "+91 80 7890 1234",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      name: "Electrode Service Center - Pune",
      address: "Wakad, Pune, Maharashtra - 411057",
      phone: "+91 20 8901 2345",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      name: "Electrode Service Center - Hyderabad",
      address: "Gachibowli, Hyderabad, Telangana - 500032",
      phone: "+91 40 9012 3456",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
    {
      name: "Electrode Service Center - Chennai",
      address: "OMR, Chennai, Tamil Nadu - 600096",
      phone: "+91 44 0123 4567",
      hours: "Mon-Sat: 9:00 AM - 7:00 PM",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Wrench className="h-16 w-16 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Centers</h1>
            <p className="text-xl text-muted-foreground">
              Expert care for your Electrode scooter at authorized service centers across India
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {serviceCenters.map((center, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{center.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{center.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <a href={`tel:${center.phone}`} className="text-muted-foreground hover:text-primary">
                      {center.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{center.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Roadside Assistance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Genuine Parts</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Service Centers</p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Service Promise</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Trained Technicians:</strong> All our service staff are factory-trained and certified
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Genuine Parts:</strong> We use only authentic Electrode parts for all repairs
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Quick Turnaround:</strong> Most services completed within 24 hours
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Transparent Pricing:</strong> No hidden charges, clear estimates before work begins
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">✓</span>
                <span>
                  <strong>Warranty Protection:</strong> All service work is covered under warranty
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
