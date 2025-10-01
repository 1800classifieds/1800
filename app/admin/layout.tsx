import type React from "react"
import { getAdminUser } from "@/lib/db/admin"
import { redirect } from "next/navigation"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const adminUser = await getAdminUser()

  if (!adminUser) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader adminUser={adminUser} />
      <div className="flex">
        <AdminSidebar adminUser={adminUser} />
        <main className="flex-1 p-8">{children}</main>
      </div>
    </div>
  )
}
