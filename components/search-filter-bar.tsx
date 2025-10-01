"use client"

import { useState } from "react"
import { SearchIcon, MapPinIcon, TagIcon, SlidersHorizontalIcon, XIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SearchFilterBar() {
  const [showAdvanced, setShowAdvanced] = useState(false)

  return (
    <div className="bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row gap-3">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="What are you looking for?"
              className="pl-12 pr-4 h-12 border-gray-300 focus:border-blue-500 rounded-lg"
            />
          </div>

          <Select>
            <SelectTrigger className="w-full lg:w-48 h-12 border-gray-300 rounded-lg">
              <TagIcon className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="vehicles">Vehicles</SelectItem>
              <SelectItem value="property">Property</SelectItem>
              <SelectItem value="electronics">Electronics</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-full lg:w-48 h-12 border-gray-300 rounded-lg">
              <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
              <SelectValue placeholder="All India" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All India</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
            </SelectContent>
          </Select>

          <Button className="h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
            <SearchIcon className="h-5 w-5 mr-2" />
            Search
          </Button>

          <Button
            variant="outline"
            className="h-12 px-4 border-gray-300 rounded-lg bg-transparent"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            <SlidersHorizontalIcon className="h-5 w-5" />
          </Button>
        </div>

        {showAdvanced && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Advanced Filters</h3>
              <Button variant="ghost" size="sm" onClick={() => setShowAdvanced(false)} className="h-8 w-8 p-0">
                <XIcon className="h-4 w-4" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Price Range</label>
                <div className="flex gap-2">
                  <Input type="number" placeholder="Min" className="h-10" />
                  <Input type="number" placeholder="Max" className="h-10" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
