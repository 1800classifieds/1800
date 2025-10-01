import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { is_suspended } = await request.json()
    const userId = params.id

    await query("UPDATE users SET is_suspended = ? WHERE id = ?", [is_suspended, userId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating user suspension status:", error)
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 })
  }
}
