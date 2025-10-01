import { NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function GET() {
  try {
    const reviews = await query(
      `SELECT id, user_name, user_location, rating, review_text, is_verified, created_at 
       FROM reviews 
       ORDER BY created_at DESC 
       LIMIT 50`,
    )

    return NextResponse.json({ reviews })
  } catch (error) {
    console.error("Error fetching reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
