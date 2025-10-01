import Link from "next/link"
import { CarIcon, HomeIcon, BriefcaseIcon, WrenchIcon, SmartphoneIcon, GiftIcon } from "@/components/icons"

const categories = [
  { name: "Vehicles", slug: "vehicles", icon: CarIcon, color: "bg-blue-500" },
  { name: "Property", slug: "property", icon: HomeIcon, color: "bg-green-500" },
  { name: "Jobs", slug: "jobs", icon: BriefcaseIcon, color: "bg-purple-500" },
  { name: "Services", slug: "services", icon: WrenchIcon, color: "bg-orange-500" },
  { name: "Electronics", slug: "electronics", icon: SmartphoneIcon, color: "bg-indigo-500" },
  { name: "Free Stuff", slug: "free-stuff", icon: GiftIcon, color: "bg-emerald-500" },
]

export function CategoryGrid() {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="group flex flex-col items-center p-6 bg-white border-2 border-gray-100 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-200 hover:-translate-y-1"
              >
                <div
                  className={`${category.color} p-4 rounded-full mb-3 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-sm font-semibold text-center text-gray-700 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
