import { Battery, RotateCcw, Smartphone, Mountain, Leaf, Zap } from "lucide-react"

export function FeaturesGrid() {
  const features = [
    {
      title: "Swappable Battery System",
      description:
        "Never wait for charging. Swap batteries in seconds and keep riding with our innovative dual-battery design.",
      icon: Battery,
    },
    {
      title: "Regenerative Braking",
      description: "Recover energy while braking to extend your range and maximize efficiency on every ride.",
      icon: RotateCcw,
    },
    {
      title: "Smart Connectivity",
      description:
        "Track your rides, monitor battery health, customize settings, and get real-time diagnostics via our mobile app.",
      icon: Smartphone,
    },
    {
      title: "All-Terrain Ready",
      description: "Motocross-inspired suspension and robust build quality handles any road condition with confidence.",
      icon: Mountain,
    },
    {
      title: "Zero Emissions",
      description:
        "100% electric power means zero emissions, reduced noise pollution, and a cleaner environment for everyone.",
      icon: Leaf,
    },
    {
      title: "Instant Torque",
      description:
        "Electric motors deliver maximum torque from zero RPM for thrilling acceleration and responsive performance.",
      icon: Zap,
    },
  ]

  return (
    <section id="features" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Built for Adventure</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every feature designed to enhance your riding experience
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
