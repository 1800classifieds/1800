"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { XIcon } from "@/components/icons"
import { useRouter } from "next/navigation"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const UploadIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
)

interface PincodeData {
  pincode: string
  area_name: string
  district: string
  state: string
}

export function PostAdForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [images, setImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [category, setCategory] = useState<string>("")
  const [pincodeSearch, setPincodeSearch] = useState<string>("")
  const [pincodeResults, setPincodeResults] = useState<PincodeData[]>([])
  const [selectedPincode, setSelectedPincode] = useState<PincodeData | null>(null)
  const [showPincodeDropdown, setShowPincodeDropdown] = useState(false)
  const [userActiveAdsCount, setUserActiveAdsCount] = useState<number>(0)
  const [isFreeAdAvailable, setIsFreeAdAvailable] = useState<boolean>(true)
  const [isLoadingAdCount, setIsLoadingAdCount] = useState<boolean>(true)

  useEffect(() => {
    const searchPincodes = async () => {
      if (pincodeSearch.length < 3) {
        setPincodeResults([])
        return
      }

      try {
        const response = await fetch(`/api/pincodes/search?q=${encodeURIComponent(pincodeSearch)}`)
        const data = await response.json()

        if (data.results) {
          setPincodeResults(data.results)
          setShowPincodeDropdown(true)
        }
      } catch (error) {
        console.error("Error searching pincodes:", error)
      }
    }

    const debounce = setTimeout(searchPincodes, 300)
    return () => clearTimeout(debounce)
  }, [pincodeSearch])

  useEffect(() => {
    const checkUserAds = async () => {
      try {
        const response = await fetch("/api/ads/user-count")
        const data = await response.json()

        setUserActiveAdsCount(data.count || 0)
        setIsFreeAdAvailable(data.isFreeAdAvailable)
      } catch (error) {
        console.error("Error fetching user ad count:", error)
      } finally {
        setIsLoadingAdCount(false)
      }
    }

    checkUserAds()
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const newImages = Array.from(files).map((file) => URL.createObjectURL(file))
      setImages((prev) => [...prev, ...newImages].slice(0, 5))
    }
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index))
  }

  const handlePincodeSelect = (pincode: PincodeData) => {
    setSelectedPincode(pincode)
    setPincodeSearch(`${pincode.pincode} - ${pincode.area_name}, ${pincode.district}`)
    setShowPincodeDropdown(false)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      if (!selectedPincode) {
        setError("Please select a valid pincode from the dropdown.")
        return
      }

      const formData = new FormData(e.currentTarget)
      const title = formData.get("title") as string
      const description = formData.get("description") as string
      const price = formData.get("price") as string
      const location = formData.get("location") as string
      const contactName = formData.get("contact-name") as string
      const contactEmail = formData.get("contact-email") as string
      const contactPhone = formData.get("contact-phone") as string

      // Get category ID from slug
      const categoryMap: Record<string, number> = {
        vehicles: 1,
        property: 2,
        jobs: 3,
        services: 4,
        electronics: 5,
        "home-garden": 6,
        fashion: 7,
        "sports-leisure": 8,
        "baby-kids": 9,
        "books-music": 10,
        business: 11,
        other: 12,
      }

      const categoryId = categoryMap[category]

      if (!categoryId) {
        setError("Invalid category selected. Please try again.")
        return
      }

      const response = await fetch("/api/ads/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          price: Number.parseFloat(price),
          location,
          pincode: selectedPincode.pincode,
          area_name: selectedPincode.area_name,
          district: selectedPincode.district,
          state: selectedPincode.state,
          contact_name: contactName,
          contact_email: contactEmail,
          contact_phone: contactPhone,
          category_id: categoryId,
          image_url: images[0] || null,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        if (response.status === 401) {
          setError("You must be logged in to post an ad. Please log in and try again.")
          router.push("/auth/login")
          return
        }

        if (response.status === 402) {
          setError(data.message || "Payment required for additional ads.")
          return
        }

        setError(data.error || "Failed to create ad. Please try again.")
        return
      }

      router.push(`/ad/${data.adId}`)
    } catch (err) {
      console.error("Unexpected error:", err)
      setError("An unexpected error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">{error}</div>}

      {!isLoadingAdCount && (
        <Alert className="mb-6 border-blue-200 bg-blue-50">
          <AlertTitle className="text-blue-900 font-semibold">Ad Pricing Information</AlertTitle>
          <AlertDescription className="text-blue-800">
            {isFreeAdAvailable ? (
              <>
                <p className="font-medium">🎉 Your first ad is FREE!</p>
                <p className="text-sm mt-1">This ad will be listed for 20 days at no cost.</p>
              </>
            ) : (
              <>
                <p className="font-medium">Additional Ad: ₹18 for 20 days</p>
                <p className="text-sm mt-1">
                  You currently have {userActiveAdsCount} active ad{userActiveAdsCount !== 1 ? "s" : ""}. Additional ads
                  cost ₹18 and will be listed for 20 days.
                </p>
              </>
            )}
          </AlertDescription>
        </Alert>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Ad Details</CardTitle>
          <CardDescription>Provide accurate information to attract more buyers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="category">
              Category <span className="text-red-500">*</span>
            </Label>
            <Select required value={category} onValueChange={setCategory}>
              <SelectTrigger id="category">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vehicles">Vehicles</SelectItem>
                <SelectItem value="property">Property</SelectItem>
                <SelectItem value="jobs">Jobs</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="home-garden">Home & Garden</SelectItem>
                <SelectItem value="fashion">Fashion</SelectItem>
                <SelectItem value="sports-leisure">Sports & Leisure</SelectItem>
                <SelectItem value="baby-kids">Baby & Kids</SelectItem>
                <SelectItem value="books-music">Books & Music</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">
              Ad Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              name="title"
              placeholder="e.g., iPhone 14 Pro Max 256GB - Like New"
              required
              maxLength={100}
            />
            <p className="text-xs text-muted-foreground">Be specific and descriptive (max 100 characters)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">
              Description <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your item in detail. Include condition, features, and any other relevant information..."
              required
              rows={6}
              maxLength={2000}
            />
            <p className="text-xs text-muted-foreground">Provide detailed information (max 2000 characters)</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">
              Price (₹) <span className="text-red-500">*</span>
            </Label>
            <Input id="price" name="price" type="number" placeholder="e.g., 85000" required min="0" />
            <p className="text-xs text-muted-foreground">Enter 0 for free items or negotiable prices</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="pincode-search">
              Pin Code & Location <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Input
                id="pincode-search"
                value={pincodeSearch}
                onChange={(e) => setPincodeSearch(e.target.value)}
                placeholder="Search by pin code, area, or district..."
                required
                autoComplete="off"
              />
              {showPincodeDropdown && pincodeResults.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {pincodeResults.map((result) => (
                    <button
                      key={result.pincode}
                      type="button"
                      onClick={() => handlePincodeSelect(result)}
                      className="w-full px-4 py-2 text-left hover:bg-gray-100 border-b last:border-b-0"
                    >
                      <div className="font-medium">
                        {result.pincode} - {result.area_name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {result.district}, {result.state}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
            {selectedPincode && (
              <p className="text-xs text-green-600">
                Selected: {selectedPincode.area_name}, {selectedPincode.district}, {selectedPincode.state}
              </p>
            )}
            <p className="text-xs text-muted-foreground">Start typing to search for your location</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Additional Location Details</Label>
            <Input id="location" name="location" placeholder="e.g., Near Metro Station, Landmark" />
            <p className="text-xs text-muted-foreground">Optional: Add landmarks or additional details</p>
          </div>

          <div className="space-y-2">
            <Label>Images (Max 5)</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <UploadIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
              <p className="text-xs text-muted-foreground mb-4">PNG, JPG up to 5MB each</p>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
                id="image-upload"
              />
              <Button type="button" variant="outline" onClick={() => document.getElementById("image-upload")?.click()}>
                Choose Files
              </Button>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-5 gap-2 mt-4">
                {images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden border">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <XIcon className="h-3 w-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>How buyers can reach you</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="contact-name">
              Your Name <span className="text-red-500">*</span>
            </Label>
            <Input id="contact-name" name="contact-name" placeholder="e.g., Rajesh Kumar" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="contact-email"
              name="contact-email"
              type="email"
              placeholder="e.g., rajesh@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input id="contact-phone" name="contact-phone" type="tel" placeholder="e.g., +91 98765 43210" required />
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex gap-4">
        <Button type="submit" size="lg" className="flex-1" disabled={isSubmitting}>
          {isSubmitting ? "Posting..." : "Post Ad"}
        </Button>
        <Button type="button" variant="outline" size="lg" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>

      <p className="text-xs text-muted-foreground text-center mt-4">
        By posting this ad, you agree to our Terms & Conditions and Privacy Policy
      </p>
    </form>
  )
}
