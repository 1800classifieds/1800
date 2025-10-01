import { getAdminUser } from "@/lib/db/admin"
import { query } from "@/lib/db/mysql"
import { AdminAuditLogsTable } from "@/components/admin/admin-audit-logs-table"

export default async function AdminAuditLogsPage() {
  const adminUser = await getAdminUser()

  // Fetch audit logs with admin user details
  const auditLogs = await query(`
    SELECT 
      aal.*,
      au.email as admin_email,
      au.role as admin_role
    FROM admin_audit_log aal
    LEFT JOIN admin_users au ON aal.admin_id = au.id
    ORDER BY aal.created_at DESC
    LIMIT 100
  `)

  // Transform to match expected format
  const formattedLogs = auditLogs.map((log: any) => ({
    ...log,
    admin_users: {
      email: log.admin_email,
      role: log.admin_role,
    },
  }))

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Audit Logs</h1>
        <p className="text-gray-600">Track all administrative actions and changes</p>
      </div>

      <AdminAuditLogsTable logs={formattedLogs || []} />
    </div>
  )
}
