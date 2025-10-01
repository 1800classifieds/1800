import Link from "next/link"

export function ElectrodeFooter() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-2xl font-bold mb-4">electrode</div>
            <p className="text-sm text-muted-foreground">The future of electric mobility</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/#products" className="hover:text-foreground transition-colors">
                  Thunder MX
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-foreground transition-colors">
                  Volt Racer
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/investors" className="hover:text-foreground transition-colors">
                  Investors
                </Link>
              </li>
              <li>
                <Link href="/dealers" className="hover:text-foreground transition-colors">
                  Dealers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="hover:text-foreground transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/service-centers" className="hover:text-foreground transition-colors">
                  Service Centers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 electrode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
