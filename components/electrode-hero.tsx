import Image from "next/image"

export function ElectrodeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/30 via-white to-blue-50/50" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-semibold text-primary">
              Proudly Made in India 🇮🇳
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Unlock the Future of Electric Mobility
            </h1>

            <p className="text-xl sm:text-2xl text-foreground/80 text-balance leading-relaxed">
              From the rays of the sun to the roads of India — we turn solar power into motion.{" "}
              <span className="font-semibold text-foreground">Proudly Made in India</span>, for an{" "}
              <span className="font-semibold text-foreground">Atmanirbhar Bharat</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button className="px-8 py-4 bg-foreground hover:bg-foreground/90 text-background rounded-lg font-semibold text-base transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                Explore Investment
              </button>
              <button className="px-8 py-4 bg-background hover:bg-muted border-2 border-border text-foreground rounded-lg font-semibold text-base transition-all">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">90</div>
                <div className="text-sm text-muted-foreground">km/h Speed</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">180</div>
                <div className="text-sm text-muted-foreground">km Range</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl sm:text-4xl font-bold text-foreground">3.0</div>
                <div className="text-sm text-muted-foreground">kWh Battery</div>
              </div>
            </div>
          </div>

          <div className="relative lg:h-[600px] h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl blur-3xl" />
            <Image
              src="/images/atmanirbhar-bharat-logo.jpg"
              alt="Atmanirbhar Bharat Logo"
              fill
              className="object-contain drop-shadow-2xl relative z-10 p-12"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
