"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { HomeIcon, TagIcon, UsersIcon, BriefcaseIcon, ClockIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import type { AdminUser } from "@/lib/db/admin"

interface AdminSidebarProps {
  adminUser: AdminUser
}

export function AdminSidebar({ adminUser }: AdminSidebarProps) {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: HomeIcon,
      permission: null,
    },
    {
      href: "/admin/listings",
      label: "Manage Listings",
      icon: TagIcon,
      permission: "manage_listings" as const,
    },
    {
      href: "/admin/categories",
      label: "Manage Categories",
      icon: BriefcaseIcon,
      permission: "manage_categories" as const,
    },
    {
      href: "/admin/users",
      label: "Manage Users",
      icon: UsersIcon,
      permission: "manage_users" as const,
    },
    {
      href: "/admin/admins",
      label: "Manage Admins",
      icon: UsersIcon,
      permission: "manage_admins" as const,
    },
    {
      href: "/admin/audit-logs",
      label: "Audit Logs",
      icon: ClockIcon,
      permission: null,
    },
  ]

  const filteredNavItems = navItems.filter((item) => !item.permission || adminUser.permissions[item.permission])

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-[calc(100vh-73px)]">
      <nav className="p-4 space-y-2">
        {filteredNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors",
                isActive ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50",
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
