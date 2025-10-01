"use client"

import { LogOutIcon, UserIcon } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import type { AdminUser } from "@/lib/db/admin"

interface AdminHeaderProps {
  adminUser: AdminUser
}

export function AdminHeader({ adminUser }: AdminHeaderProps) {
  const router = useRouter()

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" })
    router.push("/admin/login")
  }

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">1800 Classifieds Admin</h1>
          <p className="text-sm text-gray-500">Manage your platform</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-50 rounded-lg">
            <UserIcon className="h-5 w-5 text-gray-600" />
            <div>
              <p className="text-sm font-semibold text-gray-900">{adminUser.email}</p>
              <p className="text-xs text-gray-500 capitalize">{adminUser.role.replace("_", " ")}</p>
            </div>
          </div>

          <Button variant="outline" onClick={handleLogout} className="bg-transparent">
            <LogOutIcon className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </header>
  )
}
