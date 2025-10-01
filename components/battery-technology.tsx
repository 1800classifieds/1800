import Image from "next/image"
import { Zap, RefreshCw, Shield, Gauge } from "lucide-react"

export function BatteryTechnology() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Battery image */}
          <div className="relative h-[500px] order-2 lg:order-1">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LgucnMiedPVkF4mJrnyS--0--lftbn_bg-rmvd%281%29-DCO9qbPTEfYa9HEqM23aOuBoemSlLr.png"
              alt="Swappable battery pack with green LED indicator"
              fill
              className="object-contain"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary mb-4">
                BATTERY TECHNOLOGY
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-balance">Swap. Ride. Repeat.</h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Revolutionary swappable battery system means you never have to wait for charging. Swap batteries in
                under 30 seconds and keep riding.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Fast Charging</h3>
                <p className="text-sm text-muted-foreground">Full charge in 3-4 hours with standard charger</p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Dual Battery</h3>
                <p className="text-sm text-muted-foreground">2 × 1.5 kWh batteries for extended range</p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Safe & Durable</h3>
                <p className="text-sm text-muted-foreground">IP67 rated, built to last 1000+ cycles</p>
              </div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gauge className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Smart BMS</h3>
                <p className="text-sm text-muted-foreground">Battery management system optimizes performance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
