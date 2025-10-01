"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { PlusIcon, TagIcon } from "@/components/icons"
import { useRouter } from "next/navigation"

interface Category {
  id: string
  name: string
  slug: string
  description: string | null
  icon: string | null
}

interface AdminCategoriesManagerProps {
  categories: Category[]
}

export function AdminCategoriesManager({ categories: initialCategories }: AdminCategoriesManagerProps) {
  const router = useRouter()
  const [categories, setCategories] = useState(initialCategories)
  const [isAdding, setIsAdding] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    slug: "",
    description: "",
    icon: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingId) {
        // Update existing category
        const response = await fetch(`/api/admin/categories/${editingId}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setCategories(categories.map((c) => (c.id === editingId ? { ...c, ...formData } : c)))
          setEditingId(null)
          setFormData({ name: "", slug: "", description: "", icon: "" })
          router.refresh()
        }
      } else {
        // Add new category
        const response = await fetch("/api/admin/categories", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })

        const data = await response.json()

        if (response.ok && data.category) {
          setCategories([...categories, data.category])
          setIsAdding(false)
          setFormData({ name: "", slug: "", description: "", icon: "" })
          router.refresh()
        }
      }
    } catch (error) {
      console.error("Error saving category:", error)
    }
  }

  const handleEdit = (category: Category) => {
    setEditingId(category.id)
    setFormData({
      name: category.name,
      slug: category.slug,
      description: category.description || "",
      icon: category.icon || "",
    })
    setIsAdding(true)
  }

  const handleDelete = async (categoryId: string) => {
    if (!confirm("Are you sure you want to delete this category?")) return

    try {
      const response = await fetch(`/api/admin/categories/${categoryId}`, {
        method: "DELETE",
      })

      if (response.ok) {
        setCategories(categories.filter((c) => c.id !== categoryId))
        router.refresh()
      }
    } catch (error) {
      console.error("Error deleting category:", error)
    }
  }

  const handleCancel = () => {
    setIsAdding(false)
    setEditingId(null)
    setFormData({ name: "", slug: "", description: "", icon: "" })
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-end">
        <Button onClick={() => setIsAdding(true)} disabled={isAdding} className="bg-blue-600 hover:bg-blue-700">
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Category
        </Button>
      </div>

      {isAdding && (
        <Card className="p-6 border-2 border-blue-200 bg-blue-50">
          <h2 className="text-xl font-bold text-gray-900 mb-6">{editingId ? "Edit Category" : "Add New Category"}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Category Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g., Electronics"
                  required
                  className="border-2"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug</Label>
                <Input
                  id="slug"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  placeholder="e.g., electronics"
                  required
                  className="border-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Brief description of this category..."
                rows={3}
                className="border-2"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="icon">Icon (optional)</Label>
              <Input
                id="icon"
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                placeholder="Icon name or emoji"
                className="border-2"
              />
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="bg-green-600 hover:bg-green-700">
                {editingId ? "Update Category" : "Create Category"}
              </Button>
              <Button type="button" variant="outline" onClick={handleCancel} className="bg-transparent border-2">
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <Card key={category.id} className="p-6 border-2 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  {category.icon ? (
                    <span className="text-xl">{category.icon}</span>
                  ) : (
                    <TagIcon className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{category.name}</h3>
                  <p className="text-sm text-gray-500">{category.slug}</p>
                </div>
              </div>
            </div>

            {category.description && <p className="text-sm text-gray-600 mb-4">{category.description}</p>}

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleEdit(category)}
                className="flex-1 bg-transparent border-2"
              >
                Edit
              </Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(category.id)} className="flex-1">
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {categories.length === 0 && !isAdding && (
        <Card className="p-12 text-center border-2 border-dashed">
          <TagIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 mb-4">No categories yet</p>
          <Button onClick={() => setIsAdding(true)} className="bg-blue-600 hover:bg-blue-700">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add Your First Category
          </Button>
        </Card>
      )}
    </div>
  )
}
