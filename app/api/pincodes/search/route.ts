import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const search = searchParams.get("q") || ""

    if (search.length < 3) {
      return NextResponse.json({ results: [] })
    }

    const results = await query(
      `SELECT pincode, area_name, district, state 
       FROM pincodes 
       WHERE pincode LIKE ? OR area_name LIKE ? OR district LIKE ?
       LIMIT 10`,
      [`%${search}%`, `%${search}%`, `%${search}%`],
    )

    return NextResponse.json({ results })
  } catch (error) {
    console.error("Error searching pincodes:", error)
    return NextResponse.json({ error: "Failed to search pincodes" }, { status: 500 })
  }
}
