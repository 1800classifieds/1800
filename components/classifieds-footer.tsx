import Link from "next/link"
import { FacebookIcon, TwitterIcon, InstagramIcon, MailIcon } from "@/components/icons"

export function ClassifiedsFooter() {
  return (
    <footer className="bg-gradient-to-r from-primary via-blue-600 to-primary text-white">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-bold">1800 Classifieds</h3>
              </div>
              <p className="text-white/90 text-sm leading-relaxed mb-4">
                Trusted platform for buying and selling. Post your ad for free and reach thousands of buyers.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <FacebookIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <InstagramIcon className="h-5 w-5" />
                </Link>
                <Link href="#" className="bg-white/20 hover:bg-white/30 p-2 rounded-full transition-colors">
                  <MailIcon className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <Link href="/about" className="hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-secondary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base">Support</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <Link href="/faq" className="hover:text-secondary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-secondary transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-base">Popular Categories</h4>
              <ul className="space-y-2 text-sm text-white/90">
                <li>
                  <Link href="/category/vehicles" className="hover:text-secondary transition-colors">
                    Vehicles
                  </Link>
                </li>
                <li>
                  <Link href="/category/property" className="hover:text-secondary transition-colors">
                    Property
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/90">
            <p>&copy; {new Date().getFullYear()} 1800 Classifieds Limited. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
