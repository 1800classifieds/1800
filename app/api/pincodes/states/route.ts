import { NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function GET() {
  try {
    const results = await query(`SELECT DISTINCT state FROM pincodes ORDER BY state`)

    const states = results.map((row: any) => row.state)

    return NextResponse.json({ states })
  } catch (error) {
    console.error("Error fetching states:", error)
    return NextResponse.json({ error: "Failed to fetch states" }, { status: 500 })
  }
}
