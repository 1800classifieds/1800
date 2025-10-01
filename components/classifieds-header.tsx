"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { SearchIcon, UserIcon, PlusIcon } from "@/components/icons"

export function ClassifiedsHeader() {
  return (
    <header className="bg-gradient-to-r from-primary via-blue-600 to-primary sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center group">
            <div className="text-2xl font-bold text-white">1800</div>
          </Link>

          <div className="flex-1 max-w-2xl mx-6 hidden md:block">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="search"
                placeholder="Search for anything..."
                className="pl-12 pr-4 h-12 bg-white border-0 rounded-full shadow-md focus:shadow-lg transition-shadow"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button
              asChild
              className="bg-secondary hover:bg-orange-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Link href="/post-ad">
                <PlusIcon className="h-4 w-4 mr-2" />
                Post FREE ad
              </Link>
            </Button>

            <Button asChild variant="ghost" className="text-white hover:bg-white/20 font-medium">
              <Link href="/auth/login">
                <UserIcon className="h-5 w-5 mr-2" />
                Login
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:hidden pb-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search for anything..."
              className="pl-12 pr-4 h-12 bg-white border-0 rounded-full shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
