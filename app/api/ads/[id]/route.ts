import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth/session"
import { query, queryOne } from "@/lib/db/mysql"

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const adId = params.id

    // Verify the ad belongs to the user
    const ad = await queryOne<any>("SELECT user_id FROM ads WHERE id = ?", [adId])

    if (!ad || ad.user_id !== session.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Soft delete by updating status
    await query("UPDATE ads SET status = ? WHERE id = ?", ["deleted", adId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting ad:", error)
    return NextResponse.json({ error: "Failed to delete ad" }, { status: 500 })
  }
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const adId = params.id
    const { status } = await request.json()

    // Verify the ad belongs to the user
    const ad = await queryOne<any>("SELECT user_id FROM ads WHERE id = ?", [adId])

    if (!ad || ad.user_id !== session.id) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    // Update ad status
    await query("UPDATE ads SET status = ? WHERE id = ?", [status, adId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating ad:", error)
    return NextResponse.json({ error: "Failed to update ad" }, { status: 500 })
  }
}
