"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, UserIcon } from "@/components/icons"
import { useRouter } from "next/navigation"

interface User {
  id: string
  email: string
  full_name: string | null
  phone: string | null
  created_at: string
  is_suspended: boolean
}

interface AdminUsersManagerProps {
  users: User[]
}

export function AdminUsersManager({ users: initialUsers }: AdminUsersManagerProps) {
  const router = useRouter()
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.full_name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSuspendToggle = async (userId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`/api/admin/users/${userId}/suspend`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_suspended: !currentStatus }),
      })

      if (response.ok) {
        setUsers(users.map((u) => (u.id === userId ? { ...u, is_suspended: !currentStatus } : u)))
        router.refresh()
      }
    } catch (error) {
      console.error("Error updating user suspension status:", error)
    }
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-2">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search users by email or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-12 border-2"
          />
        </div>
      </Card>

      <div className="space-y-4">
        {filteredUsers.map((user) => (
          <Card key={user.id} className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <UserIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900">{user.full_name || "No name"}</h3>
                    {user.is_suspended && (
                      <Badge className="bg-red-100 text-red-700 border-red-300 border-2">Suspended</Badge>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{user.email}</p>
                  {user.phone && <p className="text-sm text-gray-500">{user.phone}</p>}
                  <p className="text-xs text-gray-400 mt-2">Joined: {new Date(user.created_at).toLocaleDateString()}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant={user.is_suspended ? "default" : "destructive"}
                  onClick={() => handleSuspendToggle(user.id, user.is_suspended)}
                  className={user.is_suspended ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  {user.is_suspended ? "Unsuspend" : "Suspend"}
                </Button>
              </div>
            </div>
          </Card>
        ))}

        {filteredUsers.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed">
            <p className="text-gray-500">No users found</p>
          </Card>
        )}
      </div>
    </div>
  )
}
