import { Zap, Battery, Plug, RefreshCw, Clock, Gauge } from "lucide-react"

export function SpecsSection() {
  const specs = [
    {
      label: "Top Speed",
      value: "90 km/h",
      icon: Zap,
      description: "Powerful acceleration",
    },
    {
      label: "Range",
      value: "180 km",
      icon: Battery,
      description: "Single charge distance",
    },
    {
      label: "Battery Capacity",
      value: "2 × 1.5 kWh",
      icon: Plug,
      description: "Dual battery system",
    },
    {
      label: "Swappable Batteries",
      value: "30 sec",
      icon: RefreshCw,
      description: "Quick swap time",
    },
    {
      label: "Charge Time",
      value: "3-4 hours",
      icon: Clock,
      description: "Full charge duration",
    },
    {
      label: "Motor Power",
      value: "3 kW Peak",
      icon: Gauge,
      description: "Maximum output",
    },
  ]

  return (
    <section id="specs" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Technical Specifications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Cutting-edge technology for maximum performance
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {specs.map((spec) => {
            const Icon = spec.icon
            return (
              <div
                key={spec.label}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-foreground mb-1">{spec.value}</div>
                    <div className="text-sm font-semibold text-foreground/80 mb-1">{spec.label}</div>
                    <div className="text-xs text-muted-foreground">{spec.description}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
