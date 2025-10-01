import { NextResponse } from "next/server"
import { getSession } from "@/lib/auth/session"
import { queryOne } from "@/lib/db/mysql"

export async function GET() {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ count: 0, isFreeAdAvailable: true })
    }

    const result = await queryOne<{ count: number }>(
      "SELECT COUNT(*) as count FROM ads WHERE user_id = ? AND status = 'active' AND expires_at > NOW()",
      [session.id],
    )

    const count = result?.count || 0
    const isFreeAdAvailable = count === 0

    return NextResponse.json({ count, isFreeAdAvailable })
  } catch (error) {
    console.error("Error fetching user ad count:", error)
    return NextResponse.json({ error: "Failed to fetch ad count" }, { status: 500 })
  }
}
