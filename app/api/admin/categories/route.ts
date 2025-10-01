import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function POST(request: NextRequest) {
  try {
    const { name, slug, description, icon } = await request.json()

    const result = await query("INSERT INTO categories (name, slug, description, icon) VALUES (?, ?, ?, ?)", [
      name,
      slug,
      description || null,
      icon || null,
    ])

    const insertId = (result as any).insertId

    return NextResponse.json({
      success: true,
      category: { id: insertId, name, slug, description, icon },
    })
  } catch (error) {
    console.error("Error creating category:", error)
    return NextResponse.json({ error: "Failed to create category" }, { status: 500 })
  }
}
