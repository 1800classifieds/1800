import Image from "next/image"
import { Zap, Shield, Leaf, Award } from "lucide-react"

export function MotorTechnology() {
  const features = [
    {
      icon: Zap,
      title: "High Power Output",
      description: "Custom-designed PMSM motor delivering exceptional torque and efficiency",
    },
    {
      icon: Leaf,
      title: "No Rare Earth Elements",
      description: "Sustainable motor design without rare earth magnets for eco-friendly production",
    },
    {
      icon: Shield,
      title: "5-Year Warranty",
      description: "Industry-leading warranty coverage for complete peace of mind",
    },
    {
      icon: Award,
      title: "Precision Engineering",
      description: "Advanced laminated steel construction for optimal performance",
    },
  ]

  return (
    <section id="motor" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Revolutionary Motor Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Custom-designed PMSM motor engineered for maximum efficiency without rare earth elements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Motor Image */}
          <div className="relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden bg-white border border-border shadow-2xl">
              <Image
                src="/pmsm-complete-exploded.jpg"
                alt="PMSM Motor exploded view showing stator core, rotor hub, magnets, and shaft with realistic metallic colors"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg font-bold text-lg">
              5-Year Warranty
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20">
              <h4 className="text-lg font-bold mb-2">Technical Specifications</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Laminated steel rotor and stator cores
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Bar wound wire for maximum efficiency
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Precision bearing support assembly
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Sustainable magnet-free design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
