import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import { Quicksand } from "next/font/google"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "1800 Classifieds - Buy & Sell Anything",
  description:
    "Trusted classifieds platform. Post free ads for vehicles, property, electronics, jobs, and more. Buy and sell locally with millions of users.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={quicksand.variable}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
