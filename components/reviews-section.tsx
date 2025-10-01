"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const StarIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
)

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment:
      "Sold my old laptop within 2 days! The platform is so easy to use and I got genuine buyers. Highly recommend 1800 for quick sales.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    rating: 5,
    comment:
      "Found the perfect car at an amazing price. The seller was verified and the whole process was smooth. Best classifieds site in India!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 3,
    name: "Anita Desai",
    location: "Bangalore, Karnataka",
    rating: 5,
    comment:
      "I've been using 1800 for months now. Posted multiple ads for furniture and electronics. Always get quick responses from serious buyers.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 4,
    name: "Vikram Singh",
    location: "Pune, Maharashtra",
    rating: 5,
    comment:
      "Great platform for buying second-hand items. I furnished my entire apartment using 1800. Saved so much money!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 5,
    name: "Meera Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    comment:
      "As a small business owner, 1800 has been invaluable for selling excess inventory. The reach is incredible and posting ads is free!",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 6,
    name: "Arjun Reddy",
    location: "Hyderabad, Telangana",
    rating: 5,
    comment:
      "Found my dream bike here at half the showroom price. The verification system gives me confidence when dealing with sellers.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 7,
    name: "Kavita Nair",
    location: "Kochi, Kerala",
    rating: 4,
    comment:
      "Good experience overall. Found a great deal on a washing machine. Would have been 5 stars if the search was a bit faster.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
  {
    id: 8,
    name: "Sanjay Gupta",
    location: "Jaipur, Rajasthan",
    rating: 4,
    comment:
      "Decent platform for selling items. Got a fair price for my old furniture. The app could use some UI improvements though.",
    avatar: "/placeholder.svg?height=48&width=48",
  },
]

export function ReviewsSection() {
  const [selectedRating, setSelectedRating] = useState<number | "all">("all")

  const filteredReviews =
    selectedRating === "all" ? reviews : reviews.filter((review) => review.rating === selectedRating)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Users Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join millions of satisfied buyers and sellers across India
          </p>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
            <span className="ml-2 text-lg font-semibold">4.8 out of 5</span>
            <span className="text-muted-foreground ml-1">(12,450+ reviews)</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <Button
            variant={selectedRating === "all" ? "default" : "outline"}
            onClick={() => setSelectedRating("all")}
            className="rounded-full"
          >
            All Reviews
          </Button>
          <Button
            variant={selectedRating === 5 ? "default" : "outline"}
            onClick={() => setSelectedRating(5)}
            className="rounded-full"
          >
            <StarIcon className="w-4 h-4 mr-1 fill-current" />5 Stars
          </Button>
          <Button
            variant={selectedRating === 4 ? "default" : "outline"}
            onClick={() => setSelectedRating(4)}
            className="rounded-full"
          >
            <StarIcon className="w-4 h-4 mr-1 fill-current" />4 Stars
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={review.avatar || "/placeholder.svg"}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Trusted by over <span className="font-bold text-primary">5 million users</span> across India
          </p>
        </div>
      </div>
    </section>
  )
}
