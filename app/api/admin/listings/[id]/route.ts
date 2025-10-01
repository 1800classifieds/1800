import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { status } = await request.json()
    const listingId = params.id

    await query("UPDATE ads SET status = ? WHERE id = ?", [status, listingId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating listing status:", error)
    return NextResponse.json({ error: "Failed to update listing" }, { status: 500 })
  }
}
