import { type NextRequest, NextResponse } from "next/server"
import { getSession } from "@/lib/auth/session"
import { query, queryOne } from "@/lib/db/mysql"

export async function POST(request: NextRequest) {
  try {
    const session = await getSession()

    if (!session) {
      return NextResponse.json({ error: "You must be logged in to post an ad" }, { status: 401 })
    }

    const body = await request.json()
    const {
      title,
      description,
      price,
      location,
      pincode,
      area_name,
      district,
      state,
      contact_name,
      contact_email,
      contact_phone,
      category_id,
      image_url,
    } = body

    // Check user's active ads count
    const activeAdsResult = await queryOne<{ count: number }>(
      "SELECT COUNT(*) as count FROM ads WHERE user_id = ? AND status = 'active' AND expires_at > NOW()",
      [session.id],
    )

    const activeAdsCount = activeAdsResult?.count || 0
    const isFreeAdAvailable = activeAdsCount === 0
    const requiresPayment = !isFreeAdAvailable
    const paymentAmount = requiresPayment ? 18 : 0

    if (requiresPayment) {
      return NextResponse.json(
        {
          error: "Payment required",
          message: "Payment integration coming soon. This ad requires payment of ₹18.",
          requiresPayment: true,
          paymentAmount,
        },
        { status: 402 },
      )
    }

    // Calculate expiry date (20 days from now)
    const expiresAt = new Date()
    expiresAt.setDate(expiresAt.getDate() + 20)

    // Insert the ad
    const result = await query(
      `INSERT INTO ads (
        title, description, price, location, pincode, area_name, district, state,
        contact_name, contact_email, contact_phone, category_id, user_id,
        status, image_url, is_paid, payment_amount, payment_status, expires_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        description,
        price,
        location,
        pincode,
        area_name,
        district,
        state,
        contact_name,
        contact_email,
        contact_phone,
        category_id,
        session.id,
        "active",
        image_url || null,
        false,
        paymentAmount,
        "free",
        expiresAt,
      ],
    )

    const adId = (result as any).insertId

    return NextResponse.json({
      success: true,
      adId,
      message: "Ad created successfully",
    })
  } catch (error) {
    console.error("Error creating ad:", error)
    return NextResponse.json({ error: "Failed to create ad" }, { status: 500 })
  }
}
