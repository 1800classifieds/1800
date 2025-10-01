import { ElectrodeNav } from "@/components/electrode-nav"
import { ElectrodeFooter } from "@/components/electrode-footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is the range of Electrode scooters?",
      answer:
        "Our scooters offer a range of 80-120 km on a single charge, depending on the model and riding conditions. The solar panels can extend the range by an additional 10-15 km per day in optimal sunlight conditions.",
    },
    {
      question: "How long does it take to charge the battery?",
      answer:
        "A full charge takes approximately 4-5 hours using a standard home charger. Fast charging options are available that can charge up to 80% in just 2 hours. Solar charging provides supplementary power throughout the day.",
    },
    {
      question: "What is the top speed?",
      answer:
        "Our scooters have a top speed of 65-75 km/h, making them perfect for city commuting while ensuring safety and efficiency.",
    },
    {
      question: "Are Electrode scooters eligible for government subsidies?",
      answer:
        "Yes! Electrode scooters are eligible for FAME II subsidies and various state-level incentives. The exact subsidy amount varies by state and can reduce the purchase price significantly.",
    },
    {
      question: "What is the warranty period?",
      answer:
        "We offer a comprehensive 3-year warranty on the vehicle and a 5-year warranty on the battery. Extended warranty options are also available.",
    },
    {
      question: "How does the solar charging work?",
      answer:
        "Our scooters feature integrated solar panels that continuously charge the battery during daylight hours. This innovative technology can add 10-15 km of range per day, reducing your dependence on grid electricity.",
    },
    {
      question: "What are the maintenance requirements?",
      answer:
        "Electric scooters require minimal maintenance compared to petrol vehicles. Regular checks include tire pressure, brake pads, and battery health. We recommend servicing every 6 months or 5,000 km.",
    },
    {
      question: "Can I test ride before purchasing?",
      answer:
        "Visit any of our authorized dealers to schedule a test ride. Experience the smooth, silent, and powerful performance of Electrode scooters firsthand.",
    },
    {
      question: "What payment options are available?",
      answer:
        "We offer flexible payment options including cash, EMI plans, and partnerships with leading banks for easy financing. Down payments start from as low as 10%.",
    },
    {
      question: "Is there a service network across India?",
      answer:
        "Yes, we have an extensive service network across major cities in India. Our service centers are equipped with trained technicians and genuine spare parts to ensure your scooter stays in perfect condition.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <ElectrodeNav />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Find answers to common questions about Electrode scooters
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>

      <ElectrodeFooter />
    </main>
  )
}
