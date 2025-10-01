import Link from "next/link"
import Image from "next/image"
import { MapPinIcon, ClockIcon, EyeIcon } from "@/components/icons"

const allAds = [
  {
    id: "1",
    title: "iPhone 14 Pro Max 256GB - Like New",
    price: "₹85,000",
    location: "Mumbai",
    image: "/placeholder.svg?height=200&width=300",
    category: "Electronics",
    time: "2h ago",
    views: 245,
  },
  {
    id: "2",
    title: "2019 Honda City VX - Excellent Condition",
    price: "₹8,50,000",
    location: "Delhi",
    image: "/placeholder.svg?height=200&width=300",
    category: "Vehicles",
    time: "3h ago",
    views: 189,
  },
]

export function AdListings() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {allAds.map((ad) => (
          <div
            key={ad.id}
            className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
          >
            <div className="relative aspect-[3/2] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
              <Link href={`/ad/${ad.id}`}>
                <Image
                  src={ad.image || "/placeholder.svg"}
                  alt={ad.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <div className="absolute top-2 left-2">
                <span className="bg-white/95 backdrop-blur-sm text-gray-700 text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md flex items-center gap-1">
                  <EyeIcon className="h-2.5 w-2.5 text-primary" />
                  {ad.views}
                </span>
              </div>
            </div>
            <Link href={`/ad/${ad.id}`} className="block p-2.5">
              <h3 className="text-xs font-bold text-gray-800 line-clamp-2 mb-2 min-h-[2rem] group-hover:text-primary transition-colors leading-tight">
                {ad.title}
              </h3>
              <p className="text-base font-extrabold text-primary mb-2">{ad.price}</p>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPinIcon className="h-3 w-3 text-primary" />
                  <span className="font-medium text-[10px]">{ad.location}</span>
                </div>
                <div className="flex items-center gap-1 text-gray-500">
                  <ClockIcon className="h-3 w-3" />
                  <span className="text-[10px]">{ad.time}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
