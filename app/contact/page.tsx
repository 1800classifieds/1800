import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { EnquiryForm } from "@/components/enquiry-form"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Us</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            We'd love to hear from you. Get in touch with our team.
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <EnquiryForm />
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Head Office</h3>
                      <p className="text-muted-foreground">
                        Electrode Technologies Pvt. Ltd.
                        <br />
                        Plot No. 123, Industrial Area
                        <br />
                        Sector 45, Gurugram
                        <br />
                        Haryana - 122003, India
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Phone</h3>
                      <p className="text-muted-foreground">
                        Sales: +91 1800 123 4567
                        <br />
                        Support: +91 1800 765 4321
                        <br />
                        Dealership: +91 98765 43210
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email</h3>
                      <p className="text-muted-foreground">
                        General: info@electrode.in
                        <br />
                        Sales: sales@electrode.in
                        <br />
                        Support: support@electrode.in
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday: 10:00 AM - 4:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <ElectrodeFooter />
    </main>
  )
}
