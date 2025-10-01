import { checkAdminPermission } from "@/lib/db/admin"
import { redirect } from "next/navigation"
import { query } from "@/lib/db/mysql"
import { AdminCategoriesManager } from "@/components/admin/admin-categories-manager"

export default async function AdminCategoriesPage() {
  const hasPermission = await checkAdminPermission("manage_categories")

  if (!hasPermission) {
    redirect("/admin/listings")
  }

  const categories = await query(`
    SELECT * FROM categories
    ORDER BY name ASC
  `)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Categories</h1>
        <p className="text-gray-600">Add, edit, and organize listing categories</p>
      </div>

      <AdminCategoriesManager categories={categories || []} />
    </div>
  )
}
