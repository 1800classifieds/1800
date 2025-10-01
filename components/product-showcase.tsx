import Image from "next/image"

export function ProductShowcase() {
  const products = [
    {
      name: "Urban Glide",
      type: "Electric Scooter",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SUbUQZMZU9ytdaQtusU2--0--oemru-w933EvGTPFLGl7cPfFQM815LEoWH4D.jpg",
      description: "Premium white electric scooter with sleek modern design for city commuting",
      specs: "90 km/h • 180 km range",
    },
    {
      name: "Thunder MX",
      type: "Electric Scooter",
      image: "/green-electric-scooter-no-background.jpg",
      description: "Motocross-inspired electric scooter built for urban adventures",
      specs: "85 km/h • 170 km range",
    },
    {
      name: "Storm Rider",
      type: "Electric Scooter",
      image: "/red-electric-scooter-no-background.jpg",
      description: "Aggressive styling meets eco-friendly performance",
      specs: "90 km/h • 180 km range",
    },
  ]

  return (
    <section id="products" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">Our Models</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Engineered for performance, designed for the future
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-xl"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-muted/50 to-background">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-xs text-primary font-semibold mb-3">
                  {product.type}
                </div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{product.description}</p>
                <p className="text-xs font-semibold text-foreground/70 mb-4">{product.specs}</p>

                <button className="w-full px-4 py-2.5 bg-foreground hover:bg-foreground/90 text-background rounded-lg font-semibold text-sm transition-all">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
