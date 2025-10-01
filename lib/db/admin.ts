import { query, queryOne } from "./mysql"
import { getSession } from "../auth/session"

export interface AdminUser {
  id: string
  email: string
  name: string
  role: string
  permissions: string[]
}

export async function getAdminUser(): Promise<AdminUser | null> {
  const session = await getSession()
  if (!session) return null

  const admin = await queryOne<any>(
    `SELECT u.*, r.name as role_name, r.permissions 
     FROM users u 
     LEFT JOIN admin_roles r ON u.role_id = r.id 
     WHERE u.id = ? AND u.is_admin = true`,
    [session.id],
  )

  if (!admin) return null

  return {
    id: admin.id,
    email: admin.email,
    name: admin.name,
    role: admin.role_name || "admin",
    permissions: admin.permissions ? JSON.parse(admin.permissions) : [],
  }
}

export async function isMasterAdmin(): Promise<boolean> {
  const admin = await getAdminUser()
  return admin?.role === "master_admin"
}

export async function checkAdminPermission(permission: string): Promise<boolean> {
  const admin = await getAdminUser()
  if (!admin) return false
  if (admin.role === "master_admin") return true
  return admin.permissions.includes(permission)
}

export async function logAdminAction(adminId: string, action: string, details: any): Promise<void> {
  await query("INSERT INTO audit_logs (admin_id, action, details, created_at) VALUES (?, ?, ?, NOW())", [
    adminId,
    action,
    JSON.stringify(details),
  ])
}
