"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, Clock, Eye, Phone, Mail, Share2, Flag, ChevronLeft, ChevronRight } from "lucide-react"

interface AdDetailProps {
  adId: string
}

const adData: Record<string, any> = {
  "1": {
    id: "1",
    title: "iPhone 14 Pro Max 256GB - Like New",
    price: "₹85,000",
    description:
      "Selling my iPhone 14 Pro Max in excellent condition. Barely used for 3 months. Comes with original box, charger, and all accessories. No scratches or dents. Battery health at 100%. Reason for selling: Upgrading to newer model. Serious buyers only please.",
    location: "Mumbai, Maharashtra",
    images: ["/iphone-14-pro-on-desk.png", "/placeholder.svg?height=400&width=600"],
    category: "Electronics",
    timeAgo: "2 hours ago",
    views: 127,
    contactName: "Rajesh Kumar",
    contactEmail: "rajesh@example.com",
    contactPhone: "+91 98765 43210",
    postedDate: "2024-01-15",
  },
}

export function AdDetail({ adId }: AdDetailProps) {
  const ad = adData[adId] || adData["1"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ad.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ad.images.length) % ad.images.length)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2 space-y-6">
        <Card>
          <CardContent className="p-0">
            <div className="relative aspect-video bg-slate-100 rounded-t-lg overflow-hidden">
              <Image
                src={ad.images[currentImageIndex] || "/placeholder.svg"}
                alt={ad.title}
                fill
                className="object-contain"
              />
              {ad.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {ad.images.map((_: any, index: number) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className="mb-2">{ad.category}</Badge>
                  <h1 className="text-3xl font-bold mb-2">{ad.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {ad.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {ad.timeAgo}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      {ad.views} views
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Flag className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="text-4xl font-bold text-blue-600 mb-6">{ad.price}</div>

              <Separator className="my-6" />

              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{ad.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="sticky top-24">
          <CardContent className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-4">Seller Information</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Name</p>
                  <p className="font-medium">{ad.contactName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-medium">{ad.location}</p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <Button className="w-full" size="lg">
                <Phone className="h-4 w-4 mr-2" />
                Show Phone Number
              </Button>
              <Button variant="outline" className="w-full bg-transparent" size="lg" asChild>
                <Link href={`mailto:${ad.contactEmail}`}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
                </Link>
              </Button>
            </div>

            <Separator />

            <div className="text-xs text-muted-foreground space-y-1">
              <p>Ad ID: {ad.id}</p>
              <p>Posted: {ad.timeAgo}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
