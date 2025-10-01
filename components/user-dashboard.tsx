"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Eye, Trash2, Plus, Calendar, IndianRupee } from "lucide-react"
import { useRouter } from "next/navigation"

interface UserAd {
  id: string
  title: string
  price: number
  location: string
  area_name: string
  district: string
  state: string
  image_url: string | null
  categories: {
    name: string
    slug: string
  }
  created_at: string
  views: number
  status: string
  expires_at: string | null
  is_paid: boolean
  payment_amount: number
  payment_status: string
}

interface UserDashboardProps {
  userAds: UserAd[]
  userEmail: string
}

export function UserDashboard({ userAds: initialAds, userEmail }: UserDashboardProps) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("active")
  const [userAds, setUserAds] = useState(initialAds)

  const activeAds = userAds.filter(
    (ad) => ad.status === "active" && (!ad.expires_at || new Date(ad.expires_at) > new Date()),
  )
  const soldAds = userAds.filter((ad) => ad.status === "sold")
  const expiredAds = userAds.filter(
    (ad) => ad.status === "expired" || (ad.expires_at && new Date(ad.expires_at) <= new Date()),
  )

  const totalViews = activeAds.reduce((sum, ad) => sum + (ad.views || 0), 0)

  const handleDelete = async (adId: string) => {
    if (!confirm("Are you sure you want to delete this ad?")) return

    try {
      const response = await fetch(`/api/ads/${adId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setUserAds(userAds.filter((ad) => ad.id !== adId))
        router.refresh()
      }
    } catch (error) {
      console.error("Error deleting ad:", error)
    }
  }

  const handleMarkAsSold = async (adId: string) => {
    try {
      const response = await fetch(`/api/ads/${adId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "sold" }),
      })

      if (response.ok) {
        setUserAds(userAds.map((ad) => (ad.id === adId ? { ...ad, status: "sold" } : ad)))
        router.refresh()
      }
    } catch (error) {
      console.error("Error marking ad as sold:", error)
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

  const renderAdCard = (ad: UserAd, showActions = true) => (
    <Card key={ad.id}>
      <CardContent className="p-6">
        <div className="flex gap-6">
          <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
            {ad.image_url ? (
              <Image src={ad.image_url || "/placeholder.svg"} alt={ad.title} fill className="object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">No image</div>
            )}
            {ad.status === "sold" && <Badge className="absolute top-2 right-2 bg-green-600">Sold</Badge>}
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <Badge className="mb-2">{ad.categories.name}</Badge>
                <h3 className="text-xl font-semibold mb-1">{ad.title}</h3>
                <p className="text-2xl font-bold text-blue-600 mb-2">₹{ad.price.toLocaleString()}</p>

                <div className="flex items-center gap-3 mb-2">
                  {ad.payment_status === "free" && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-300">
                      Free Ad
                    </Badge>
                  )}
                  {ad.is_paid && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
                      <IndianRupee className="h-3 w-3 mr-1" />
                      Paid ₹{ad.payment_amount}
                    </Badge>
                  )}
                  {ad.expires_at && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-300">
                      <Calendar className="h-3 w-3 mr-1" />
                      {formatTimeRemaining(ad.expires_at)}
                    </Badge>
                  )}
                </div>
              </div>
              {showActions && (
                <div className="flex gap-2">
                  {ad.status === "active" && (
                    <Button variant="outline" size="sm" onClick={() => handleMarkAsSold(ad.id)}>
                      Mark as Sold
                    </Button>
                  )}
                  <Button variant="outline" size="sm" onClick={() => handleDelete(ad.id)}>
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                {ad.area_name ? `${ad.area_name}, ${ad.district}` : ad.location}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {new Date(ad.created_at).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {ad.views || 0} views
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">My Account</h1>
          <p className="text-muted-foreground">Manage your ads and account settings</p>
        </div>
        <Button asChild>
          <Link href="/post-ad">
            <Plus className="h-4 w-4 mr-2" />
            Post New Ad
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Active Ads</CardDescription>
            <CardTitle className="text-3xl">{activeAds.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Total Views</CardDescription>
            <CardTitle className="text-3xl">{totalViews}</CardTitle>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardDescription>Sold Items</CardDescription>
            <CardTitle className="text-3xl">{soldAds.length}</CardTitle>
          </CardHeader>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="active">Active ({activeAds.length})</TabsTrigger>
          <TabsTrigger value="sold">Sold ({soldAds.length})</TabsTrigger>
          <TabsTrigger value="expired">Expired ({expiredAds.length})</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="active" className="space-y-4">
          {activeAds.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground mb-4">You don't have any active ads</p>
                <Button asChild>
                  <Link href="/post-ad">Post Your First Ad</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            activeAds.map((ad) => renderAdCard(ad))
          )}
        </TabsContent>

        <TabsContent value="sold" className="space-y-4">
          {soldAds.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No sold items yet</p>
              </CardContent>
            </Card>
          ) : (
            soldAds.map((ad) => renderAdCard(ad, false))
          )}
        </TabsContent>

        <TabsContent value="expired" className="space-y-4">
          {expiredAds.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-muted-foreground">No expired ads</p>
              </CardContent>
            </Card>
          ) : (
            expiredAds.map((ad) => renderAdCard(ad, false))
          )}
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your account preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-4">Profile Information</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-medium">{userEmail}</p>
                  </div>
                  <Button variant="outline">Edit Profile</Button>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Ad Pricing</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground">
                    • First ad is <span className="font-semibold text-green-600">FREE</span> for 20 days
                  </p>
                  <p className="text-muted-foreground">
                    • Additional ads cost <span className="font-semibold">₹18</span> for 20 days
                  </p>
                  <p className="text-muted-foreground">• Ads automatically expire after 20 days</p>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4">Notifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Email Notifications</p>
                      <p className="text-sm text-muted-foreground">Receive updates about your ads</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enabled
                    </Button>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold mb-4 text-red-600">Danger Zone</h3>
                <Button variant="destructive">Delete Account</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
