import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Zap } from "lucide-react"

export function ElectrodeNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative bg-gradient-to-r from-primary via-accent to-secondary p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
            </div>
            <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              electrode
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            <Link
              href="#products"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              Products
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#battery"
              className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors relative group"
            >
              Battery Tech
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#specs"
              className="text-sm font-medium text-foreground/70 hover:text-secondary transition-colors relative group"
            >
              Specs
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-foreground/70 hover:text-foreground hover:bg-muted"
            >
              Sign In
            </Button>
            <Button className="relative overflow-hidden group bg-gradient-to-r from-primary via-accent to-secondary text-white border-0 shadow-lg hover:shadow-xl transition-all">
              <span className="relative z-10">Book Test Ride</span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary via-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
