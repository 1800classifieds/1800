"use client"

import type React from "react"
import { useEffect } from "react"

interface GoogleAdProps {
  slot: string
  format?: "auto" | "fluid" | "rectangle" | "vertical" | "horizontal"
  style?: React.CSSProperties
  className?: string
  responsive?: boolean
}

export function GoogleAd({ slot, format = "auto", style, className = "", responsive = true }: GoogleAdProps) {
  useEffect(() => {
    try {
      if (typeof window !== "undefined" && (window as any).adsbygoogle) {
        ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      }
    } catch (err) {
      console.error("AdSense error:", err)
    }
  }, [])

  return (
    <div className={`google-ad-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
          textAlign: "center",
          ...style,
        }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  )
}

export function BannerAd({ className }: { className?: string }) {
  return <GoogleAd slot="1234567890" format="horizontal" className={className} style={{ minHeight: "90px" }} />
}

export function SquareAd({ className }: { className?: string }) {
  return (
    <GoogleAd
      slot="2345678901"
      format="rectangle"
      className={className}
      style={{ minHeight: "250px", minWidth: "250px" }}
    />
  )
}

export function InFeedAd({ className }: { className?: string }) {
  return <GoogleAd slot="4567890123" format="fluid" className={className} style={{ minHeight: "100px" }} />
}

export function SkyscraperAd({ className }: { className?: string }) {
  return (
    <GoogleAd
      slot="5678901234"
      format="vertical"
      className={className}
      style={{ minHeight: "600px", minWidth: "160px" }}
    />
  )
}