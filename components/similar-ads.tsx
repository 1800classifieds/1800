import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"

interface SimilarAdsProps {
  currentAdId: string
}

const similarAdsData = [
  {
    id: "2",
    title: "2019 Honda City VX - Excellent Condition",
    price: "₹8,50,000",
    location: "Delhi, NCR",
    image: "/sleek-red-city-car.png",
    category: "Vehicles",
    timeAgo: "5 hours ago",
  },
  {
    id: "4",
    title: "MacBook Pro M2 16GB RAM",
    price: "₹1,45,000",
    location: "Pune, Maharashtra",
    image: "/macbook-pro-laptop.png",
    category: "Electronics",
    timeAgo: "3 hours ago",
  },
  {
    id: "7",
    title: "Samsung 55 inch 4K Smart TV",
    price: "₹42,000",
    location: "Mumbai, Maharashtra",
    image: "/samsung-smart-tv-living-room.png",
    category: "Electronics",
    timeAgo: "4 hours ago",
  },
]

export function SimilarAds({ currentAdId }: SimilarAdsProps) {
  const filteredAds = similarAdsData.filter((ad) => ad.id !== currentAdId)

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Similar Ads</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAds.map((ad) => (
          <Link key={ad.id} href={`/ad/${ad.id}`}>
            <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
              <div className="relative aspect-video overflow-hidden rounded-t-lg">
                <Image src={ad.image || "/placeholder.svg"} alt={ad.title} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-white text-black">{ad.category}</Badge>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">{ad.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">{ad.price}</p>
                <div className="flex items-center text-sm text-muted-foreground gap-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span className="line-clamp-1">{ad.location}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-4 pb-4 pt-0">
                <div className="flex items-center text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 mr-1" />
                  {ad.timeAgo}
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
