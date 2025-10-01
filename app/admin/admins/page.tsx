import { checkAdminPermission } from "@/lib/db/admin"
import { redirect } from "next/navigation"
import { query } from "@/lib/db/mysql"
import { AdminRolesManager } from "@/components/admin/admin-roles-manager"

export default async function AdminRolesPage() {
  const hasPermission = await checkAdminPermission("manage_admins")

  if (!hasPermission) {
    redirect("/admin/listings")
  }

  const admins = await query(`
    SELECT * FROM admin_users
    ORDER BY created_at DESC
  `)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Admins</h1>
        <p className="text-gray-600">Manage admin users and their permissions</p>
      </div>

      <AdminRolesManager admins={admins || []} />
    </div>
  )
}
