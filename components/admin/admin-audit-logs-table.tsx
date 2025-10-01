"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { SearchIcon, ClockIcon } from "@/components/icons"

interface AuditLog {
  id: string
  admin_id: string
  action: string
  entity_type: string
  entity_id: string
  details: Record<string, unknown> | null
  created_at: string
  admin_users: {
    email: string
    role: string
  } | null
}

interface AdminAuditLogsTableProps {
  logs: AuditLog[]
}

export function AdminAuditLogsTable({ logs }: AdminAuditLogsTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [actionFilter, setActionFilter] = useState("all")
  const [entityFilter, setEntityFilter] = useState("all")

  const filteredLogs = logs.filter((log) => {
    const matchesSearch =
      log.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.entity_type.toLowerCase().includes(searchTerm.toLowerCase()) ||
      log.admin_users?.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesAction = actionFilter === "all" || log.action === actionFilter
    const matchesEntity = entityFilter === "all" || log.entity_type === entityFilter

    return matchesSearch && matchesAction && matchesEntity
  })

  const getActionColor = (action: string) => {
    if (action.includes("create") || action.includes("approve")) {
      return "bg-green-100 text-green-700 border-green-300"
    }
    if (action.includes("delete") || action.includes("reject") || action.includes("suspend")) {
      return "bg-red-100 text-red-700 border-red-300"
    }
    if (action.includes("update") || action.includes("edit")) {
      return "bg-blue-100 text-blue-700 border-blue-300"
    }
    return "bg-gray-100 text-gray-700 border-gray-300"
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <div className="space-y-6">
      <Card className="p-6 border-2">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search logs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-2"
            />
          </div>
          <Select value={actionFilter} onValueChange={setActionFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 border-2">
              <SelectValue placeholder="Filter by action" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Actions</SelectItem>
              <SelectItem value="create">Create</SelectItem>
              <SelectItem value="update">Update</SelectItem>
              <SelectItem value="delete">Delete</SelectItem>
              <SelectItem value="approve">Approve</SelectItem>
              <SelectItem value="reject">Reject</SelectItem>
              <SelectItem value="suspend">Suspend</SelectItem>
            </SelectContent>
          </Select>
          <Select value={entityFilter} onValueChange={setEntityFilter}>
            <SelectTrigger className="w-full md:w-48 h-12 border-2">
              <SelectValue placeholder="Filter by entity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Entities</SelectItem>
              <SelectItem value="ad">Ads</SelectItem>
              <SelectItem value="category">Categories</SelectItem>
              <SelectItem value="user">Users</SelectItem>
              <SelectItem value="admin">Admins</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>

      <div className="space-y-3">
        {filteredLogs.map((log) => (
          <Card key={log.id} className="p-5 border-2 hover:shadow-md transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Badge className={`border-2 ${getActionColor(log.action)}`}>{log.action}</Badge>
                  <span className="text-sm font-semibold text-gray-700 capitalize">{log.entity_type}</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Admin:</span> {log.admin_users?.email || "Unknown"}
                    {log.admin_users?.role && (
                      <span className="text-gray-400 ml-2">({log.admin_users.role.replace("_", " ")})</span>
                    )}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Entity ID:</span>{" "}
                    <code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{log.entity_id}</code>
                  </p>
                  {log.details && Object.keys(log.details).length > 0 && (
                    <details className="text-sm text-gray-600 mt-2">
                      <summary className="cursor-pointer font-medium hover:text-gray-900">View Details</summary>
                      <pre className="mt-2 p-3 bg-gray-50 rounded text-xs overflow-x-auto border">
                        {JSON.stringify(log.details, null, 2)}
                      </pre>
                    </details>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ClockIcon className="h-4 w-4" />
                <span>{formatDate(log.created_at)}</span>
              </div>
            </div>
          </Card>
        ))}

        {filteredLogs.length === 0 && (
          <Card className="p-12 text-center border-2 border-dashed">
            <ClockIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">No audit logs found</p>
          </Card>
        )}
      </div>
    </div>
  )
}
