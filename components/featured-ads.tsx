import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, ClockIcon } from "@/components/icons"

const sampleAds = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB - Like New",
    price: "₹85,000",
    location: "Mumbai",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "2",
    title: "2019 Honda City VX - Excellent Condition",
    price: "₹8,50,000",
    location: "Delhi",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "3",
    title: "3 BHK Apartment for Rent",
    price: "₹35,000/month",
    location: "Bangalore",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "4",
    title: "MacBook Pro M2 16GB RAM",
    price: "₹1,45,000",
    location: "Pune",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "5",
    title: "Royal Enfield Classic 350 - 2021",
    price: "₹1,65,000",
    location: "Chennai",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "6",
    title: "L-Shaped Sofa Set - Premium Quality",
    price: "₹45,000",
    location: "Hyderabad",
    image: "/placeholder.svg?height=200&width=200",
  },
]

export function FeaturedAds() {
  return (
    <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-1">Latest Ads</h2>
            <p className="text-gray-600">Fresh listings just for you</p>
          </div>
          <Link
            href="/ads"
            className="text-primary hover:text-blue-700 font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all"
          >
            View all ads →
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sampleAds.map((ad) => (
            <Link
              key={ad.id}
              href={`/ad/${ad.id}`}
              className="group bg-white border-2 border-gray-100 rounded-xl hover:border-primary hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={ad.image || "/placeholder.svg"}
                  alt={ad.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                  NEW
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
                  {ad.title}
                </h3>
                <p className="text-lg font-bold text-primary mb-2">{ad.price}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center">
                    <MapPinIcon className="h-3 w-3 mr-1" />
                    <span>{ad.location}</span>
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-3 w-3 mr-1" />
                    <span>2h ago</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
