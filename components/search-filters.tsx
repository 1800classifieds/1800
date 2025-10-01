"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface SearchFiltersProps {
  category?: string
}

interface PincodeData {
  pincode: string
  area_name: string
  district: string
  state: string
}

export function SearchFilters({ category }: SearchFiltersProps) {
  const [pincodeSearch, setPincodeSearch] = useState<string>("")
  const [pincodeResults, setPincodeResults] = useState<PincodeData[]>([])
  const [selectedPincode, setSelectedPincode] = useState<PincodeData | null>(null)
  const [showPincodeDropdown, setShowPincodeDropdown] = useState(false)
  const [selectedState, setSelectedState] = useState<string>("all")
  const [states, setStates] = useState<string[]>([])

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("/api/pincodes/states")
        const data = await response.json()

        if (data.states) {
          setStates(data.states)
        }
      } catch (error) {
        console.error("Error fetching states:", error)
      }
    }

    fetchStates()
  }, [])

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

  const handlePincodeSelect = (pincode: PincodeData) => {
    setSelectedPincode(pincode)
    setPincodeSearch(`${pincode.pincode} - ${pincode.area_name}`)
    setShowPincodeDropdown(false)
  }

  const handleClearFilters = () => {
    setPincodeSearch("")
    setSelectedPincode(null)
    setSelectedState("all")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="state">State</Label>
          <Select value={selectedState} onValueChange={setSelectedState}>
            <SelectTrigger id="state">
              <SelectValue placeholder="All States" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All States</SelectItem>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pincode-search">Pin Code / Area</Label>
          <div className="relative">
            <Input
              id="pincode-search"
              value={pincodeSearch}
              onChange={(e) => setPincodeSearch(e.target.value)}
              placeholder="Search by pin code or area..."
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
                    <div className="font-medium text-sm">
                      {result.pincode} - {result.area_name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {result.district}, {result.state}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
          {selectedPincode && (
            <p className="text-xs text-green-600">
              {selectedPincode.area_name}, {selectedPincode.district}
            </p>
          )}
        </div>

        {!category && (
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select>
              <SelectTrigger id="category">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
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
        )}

        <div className="space-y-2">
          <Label>Price Range</Label>
          <div className="flex gap-2">
            <Input type="number" placeholder="Min" />
            <Input type="number" placeholder="Max" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="sort">Sort By</Label>
          <Select defaultValue="newest">
            <SelectTrigger id="sort">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button className="w-full">Apply Filters</Button>
        <Button variant="outline" className="w-full bg-transparent" onClick={handleClearFilters}>
          Clear All
        </Button>
      </CardContent>
    </Card>
  )
}
