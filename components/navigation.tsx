import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          <Logo className="text-gray-900 scale-90 md:scale-100" />
          <div className="hidden md:flex items-center gap-6">
            <Link href="/companies" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Companies
            </Link>
            <Link href="/secondary-market" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">
              Secondary Market
            </Link>
          </div>
          <div className="flex items-center gap-1.5 md:gap-4">
            <Button
              variant="ghost"
              className="text-gray-700 hover:text-gray-900 text-xs md:text-base px-2 py-1.5 md:px-4 md:py-2 h-auto"
            >
              Login
            </Button>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs md:text-base px-2 py-1.5 md:px-4 md:py-2 h-auto">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
