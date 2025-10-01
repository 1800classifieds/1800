import { checkAdminPermission } from "@/lib/db/admin"
import { redirect } from "next/navigation"
import { query } from "@/lib/db/mysql"
import { AdminUsersManager } from "@/components/admin/admin-users-manager"

export default async function AdminUsersPage() {
  const hasPermission = await checkAdminPermission("manage_users")

  if (!hasPermission) {
    redirect("/admin/listings")
  }

  const users = await query(`
    SELECT * FROM user_profiles
    ORDER BY created_at DESC
    LIMIT 100
  `)

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Manage Users</h1>
        <p className="text-gray-600">View and manage user accounts</p>
      </div>

      <AdminUsersManager users={users || []} />
    </div>
  )
}
