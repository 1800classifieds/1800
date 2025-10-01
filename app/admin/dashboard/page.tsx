import { getAdminUser, isMasterAdmin } from "@/lib/db/admin"
import { query } from "@/lib/db/mysql"
import { Card } from "@/components/ui/card"
import { TagIcon, UsersIcon, BriefcaseIcon, ClockIcon } from "@/components/icons"
import { redirect } from "next/navigation"

export default async function AdminDashboardPage() {
  const adminUser = await getAdminUser()

  if (adminUser && !isMasterAdmin(adminUser)) {
    redirect("/admin/listings")
  }

  // Fetch stats
  const [totalAdsResult] = await query(`SELECT COUNT(*) as count FROM ads`)
  const totalAds = totalAdsResult?.count || 0

  const [activeAdsResult] = await query(`SELECT COUNT(*) as count FROM ads WHERE status = 'active'`)
  const activeAds = activeAdsResult?.count || 0

  const [pendingAdsResult] = await query(`SELECT COUNT(*) as count FROM ads WHERE status = 'pending'`)
  const pendingAds = pendingAdsResult?.count || 0

  const [totalUsersResult] = await query(`SELECT COUNT(*) as count FROM user_profiles`)
  const totalUsers = totalUsersResult?.count || 0

  const [totalCategoriesResult] = await query(`SELECT COUNT(*) as count FROM categories`)
  const totalCategories = totalCategoriesResult?.count || 0

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, {adminUser?.email}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
              <TagIcon className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalAds}</h3>
          <p className="text-sm text-gray-600">Total Listings</p>
        </Card>

        <Card className="p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <TagIcon className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{activeAds}</h3>
          <p className="text-sm text-gray-600">Active Listings</p>
        </Card>

        <Card className="p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <ClockIcon className="h-6 w-6 text-amber-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{pendingAds}</h3>
          <p className="text-sm text-gray-600">Pending Approval</p>
        </Card>

        <Card className="p-6 border-2">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
              <UsersIcon className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{totalUsers}</h3>
          <p className="text-sm text-gray-600">Total Users</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="p-6 border-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a href="/admin/listings" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <TagIcon className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Manage Listings</p>
                  <p className="text-sm text-gray-600">Review and moderate ads</p>
                </div>
              </div>
            </a>
            <a href="/admin/categories" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <BriefcaseIcon className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Manage Categories</p>
                  <p className="text-sm text-gray-600">Add or edit categories</p>
                </div>
              </div>
            </a>
            <a href="/admin/users" className="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <UsersIcon className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">Manage Users</p>
                  <p className="text-sm text-gray-600">View and manage user accounts</p>
                </div>
              </div>
            </a>
          </div>
        </Card>

        <Card className="p-6 border-2">
          <h2 className="text-xl font-bold text-gray-900 mb-4">System Info</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Categories</span>
              <span className="font-semibold text-gray-900">{totalCategories}</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-gray-600">Your Role</span>
              <span className="font-semibold text-gray-900 capitalize">{adminUser?.role.replace("_", " ")}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Status</span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                Active
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
