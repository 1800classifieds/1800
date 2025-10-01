"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon, EyeIcon } from "@/components/icons"
import { useRouter } from "next/navigation"

interface Listing {
  id: string
  title: string
  price: number
  status: string
  created_at: string
  expires_at: string | null
  is_paid: boolean
  payment_amount: number
  payment_status: string
  categories: { name: string; slug: string }
  profiles: { email: string }
  location: string
  area_name: string
  district: string
}

interface AdminListingsTableProps {
  listings: Listing[]
}

export function AdminListingsTable({ listings: initialListings }: AdminListingsTableProps) {
  const router = useRouter()
  const [listings, setListings] = useState(initialListings)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredListings = listings.filter((listing) => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || listing.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleStatusChange = async (listingId: string, newStatus: string) => {
    try {
      const response = await fetch(`/api/admin/listings/${listingId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        setListings(listings.map((l) => (l.id === listingId ? { ...l, status: newStatus } : l)))
        router.refresh()
      }
    } catch (error) {
      console.error("Error updating listing status:", error)
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700 border-green-300"
      case "pending":
        return "bg-amber-100 text-amber-700 border-amber-300"
      case "rejected":
        return "bg-red-100 text-red-700 border-red-300"
      case "expired":
        return "bg-gray-100 text-gray-700 border-gray-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  const formatTimeRemaining = (expiresAt: string | null) => {
    if (!expiresAt) return "No expiry"

    const now = new Date()
    const expiry = new Date(expiresAt)
    const daysRemaining = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

    if (daysRemaining < 0) return "Expired"
    if (daysRemaining === 0) return "Expires today"
    if (daysRemaining === 1) return "1 day left"
    return `${daysRemaining} days left`
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search listings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-2"
            />
          </div>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 border-2">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="space-y-4">
        {filteredListings.map((listing) => (
          <Card key={listing.id} className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{listing.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span className="font-semibold">₹{listing.price.toLocaleString()}</span>
                      <span>•</span>
                      <span>{listing.categories.name}</span>
                      <span>•</span>
                      <span>{listing.area_name ? `${listing.area_name}, ${listing.district}` : listing.location}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Posted by: {listing.profiles.email} • {new Date(listing.created_at).toLocaleDateString()}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      {listing.payment_status === "free" && (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300 text-xs">
                          Free Ad
                        </Badge>
                      )}
                      {listing.is_paid && (
                        <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300 text-xs">
                          Paid ₹{listing.payment_amount}
                        </Badge>
                      )}
                      {listing.expires_at && (
                        <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300 text-xs">
                          {formatTimeRemaining(listing.expires_at)}
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Badge className={`border-2 ${getStatusColor(listing.status)}`}>{listing.status}</Badge>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open(`/ad/${listing.id}`, "_blank")}
                  className="bg-transparent border-2"
                >
                  <EyeIcon className="h-4 w-4 mr-2" />
                  View
                </Button>

                {listing.status === "pending" && (
                  <>
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(listing.id, "active")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button size="sm" variant="destructive" onClick={() => handleStatusChange(listing.id, "rejected")}>
                      Reject
                    </Button>
                  </>
                )}

                {listing.status === "active" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleStatusChange(listing.id, "expired")}
                    className="bg-transparent border-2"
                  >
                    Deactivate
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}

        {filteredListings.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed">
            <p className="text-gray-500">No listings found</p>
          </Card>
        )}
      </div>
    </div>
  )
}
