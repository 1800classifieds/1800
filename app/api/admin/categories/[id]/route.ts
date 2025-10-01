import { type NextRequest, NextResponse } from "next/server"
import { query } from "@/lib/db/mysql"

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { name, slug, description, icon } = await request.json()
    const categoryId = params.id

    await query("UPDATE categories SET name = ?, slug = ?, description = ?, icon = ? WHERE id = ?", [
      name,
      slug,
      description || null,
      icon || null,
      categoryId,
    ])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error updating category:", error)
    return NextResponse.json({ error: "Failed to update category" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const categoryId = params.id

    await query("DELETE FROM categories WHERE id = ?", [categoryId])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error deleting category:", error)
    return NextResponse.json({ error: "Failed to delete category" }, { status: 500 })
  }
}
