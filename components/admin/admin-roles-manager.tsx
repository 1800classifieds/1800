"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { PlusIcon, UserIcon } from "@/components/icons"
import { useRouter } from "next/navigation"

interface AdminUser {
  id: number
  email: string
  role: "super_admin" | "admin" | "moderator"
  permissions: {
    manage_listings: boolean
    manage_categories: boolean
    manage_users: boolean
    manage_admins: boolean
  }
  is_active: boolean
}

interface AdminRolesManagerProps {
  admins: AdminUser[]
}

export function AdminRolesManager({ admins: initialAdmins }: AdminRolesManagerProps) {
  const router = useRouter()
  const [admins, setAdmins] = useState(initialAdmins)
  const [isAdding, setIsAdding] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    role: "moderator" as "super_admin" | "admin" | "moderator",
    permissions: {
      manage_listings: false,
      manage_categories: false,
      manage_users: false,
      manage_admins: false,
    },
  })

  // ✅ Create new admin via API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const res = await fetch("/api/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })

    const result = await res.json()

    if (result.success) {
      setAdmins([...admins, { id: result.id, ...formData, is_active: true }])
      setIsAdding(false)
      setFormData({
        email: "",
        role: "moderator",
        permissions: {
          manage_listings: false,
          manage_categories: false,
          manage_users: false,
          manage_admins: false,
        },
      })
      router.refresh()
    } else {
      console.error(result.error)
    }
  }

  // ✅ Toggle admin active/inactive via API
  const handleToggleActive = async (adminId: number, currentStatus: boolean) => {
    const res = await fetch(`/api/admins/${adminId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_active: !currentStatus }),
    })

    const result = await res.json()

    if (result.success) {
      setAdmins(admins.map((a) => (a.id === adminId ? { ...a, is_active: !currentStatus } : a)))
      router.refresh()
    } else {
      console.error(result.error)
    }
  }

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "super_admin":
        return "bg-purple-100 text-purple-700 border-purple-300"
      case "admin":
        return "bg-blue-100 text-blue-700 border-blue-300"
      case "moderator":
        return "bg-green-100 text-green-700 border-green-300"
      default:
        return "bg-gray-100 text-gray-700 border-gray-300"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => setIsAdding(true)} disabled={isAdding} className="bg-blue-600 hover:bg-blue-700">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Admin
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Add New Admin</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="admin@example.com"
                required
                className="border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={(value: any) => setFormData({ ...formData, role: value })}>
                <SelectTrigger id="role" className="border-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moderator">Moderator</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="super_admin">Super Admin</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Permissions</Label>
              <div className="space-y-3 bg-white p-4 rounded-lg border-2">
                {Object.keys(formData.permissions).map((key) => (
                  <div key={key} className="flex items-center gap-3">
                    <Checkbox
                      id={key}
                      checked={(formData.permissions as any)[key]}
                      onCheckedChange={(checked) =>
                        setFormData({
                          ...formData,
                          permissions: { ...formData.permissions, [key]: checked as boolean },
                        })
                      }
                    />
                    <Label htmlFor={key} className="cursor-pointer font-normal capitalize">
                      {key.replace("_", " ")}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                Create Admin
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsAdding(false)}
                className="bg-transparent border-2"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="space-y-4">
        {admins.map((admin) => (
          <Card key={admin.id} className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-bold text-gray-900">{admin.email}</h3>
                    <Badge className={`border-2 ${getRoleBadgeColor(admin.role)}`}>
                      {admin.role.replace("_", " ")}
                    </Badge>
                    {!admin.is_active && (
                      <Badge className="bg-red-100 text-red-700 border-red-300 border-2">Inactive</Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {admin.permissions.manage_listings && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Listings</span>
                    )}
                    {admin.permissions.manage_categories && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Categories</span>
                    )}
                    {admin.permissions.manage_users && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Users</span>
                    )}
                    {admin.permissions.manage_admins && (
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">Admins</span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={admin.is_active ? "destructive" : "default"}
                  onClick={() => handleToggleActive(admin.id, admin.is_active)}
                  className={!admin.is_active ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {admin.is_active ? "Deactivate" : "Activate"}
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {admins.length === 0 && !isAdding && (
          <Card className="p-12 text-center border-2 border-dashed">
            <UserIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 mb-4">No admin users yet</p>
            <Button onClick={() => setIsAdding(true)} className="bg-blue-600 hover:bg-blue-700">
              <PlusIcon className="h-4 w-4 mr-2" />
              Add Your First Admin
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
