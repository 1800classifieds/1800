import Link from "next/link"
import { CarIcon, HomeIcon, SmartphoneIcon, BriefcaseIcon } from "@/components/icons"

const categories = [
  {
    name: "Vehicles",
    icon: CarIcon,
    count: "12,450",
    subcategories: ["Cars", "Motorcycles", "Scooters"],
  },
  {
    name: "Property",
    icon: HomeIcon,
    count: "8,920",
    subcategories: ["Houses for Sale", "Houses for Rent", "Lands & Plots"],
  },
  {
    name: "Electronics",
    icon: SmartphoneIcon,
    count: "15,680",
    subcategories: ["Mobile Phones", "Laptops", "TVs"],
  },
  {
    name: "Jobs",
    icon: BriefcaseIcon,
    count: "6,340",
    subcategories: ["IT & Software", "Sales & Marketing", "Healthcare"],
  },
]

export function CategoryListings() {
  return (
    <section className="py-12 bg-gray-100 border-t border-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-gray-900">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.name} className="space-y-3">
                <Link href={`/category/${category.name.toLowerCase()}`} className="flex items-center gap-3 group">
                  <div className="bg-blue-200 p-2 rounded-lg group-hover:bg-blue-300 transition-colors">
                    <Icon className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700 group-hover:text-blue-800 transition-colors">
                      {category.name}
                    </h3>
                    <span className="text-sm text-gray-700">({category.count})</span>
                  </div>
                </Link>
                <ul className="space-y-1.5 ml-14">
                  {category.subcategories.map((sub) => (
                    <li key={sub}>
                      <Link
                        href={`/category/${category.name.toLowerCase()}/${sub.toLowerCase()}`}
                        className="text-sm text-gray-700 hover:text-blue-700 hover:underline transition-colors"
                      >
                        {sub}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
