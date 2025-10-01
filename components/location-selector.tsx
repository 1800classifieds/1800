"use client"

import { useState } from "react"
import { MapPin } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const indianStates = [
  {
    name: "Andhra Pradesh",
    cities: ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati"],
  },
  {
    name: "Arunachal Pradesh",
    cities: ["Itanagar", "Naharlagun", "Pasighat"],
  },
  {
    name: "Assam",
    cities: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon"],
  },
  {
    name: "Bihar",
    cities: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia"],
  },
  {
    name: "Chhattisgarh",
    cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"],
  },
  {
    name: "Goa",
    cities: ["Panaji", "Margao", "Vasco da Gama", "Mapusa"],
  },
  {
    name: "Gujarat",
    cities: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar"],
  },
  {
    name: "Haryana",
    cities: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Hisar"],
  },
  {
    name: "Himachal Pradesh",
    cities: ["Shimla", "Dharamshala", "Solan", "Mandi", "Kullu"],
  },
  {
    name: "Jharkhand",
    cities: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
  },
  {
    name: "Karnataka",
    cities: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum", "Gulbarga"],
  },
  {
    name: "Kerala",
    cities: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"],
  },
  {
    name: "Madhya Pradesh",
    cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar"],
  },
  {
    name: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
  },
  {
    name: "Manipur",
    cities: ["Imphal", "Thoubal", "Bishnupur"],
  },
  {
    name: "Meghalaya",
    cities: ["Shillong", "Tura", "Jowai"],
  },
  {
    name: "Mizoram",
    cities: ["Aizawl", "Lunglei", "Champhai"],
  },
  {
    name: "Nagaland",
    cities: ["Kohima", "Dimapur", "Mokokchung"],
  },
  {
    name: "Odisha",
    cities: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur"],
  },
  {
    name: "Punjab",
    cities: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  },
  {
    name: "Rajasthan",
    cities: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner"],
  },
  {
    name: "Sikkim",
    cities: ["Gangtok", "Namchi", "Gyalshing"],
  },
  {
    name: "Tamil Nadu",
    cities: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli"],
  },
  {
    name: "Telangana",
    cities: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  },
  {
    name: "Tripura",
    cities: ["Agartala", "Udaipur", "Dharmanagar"],
  },
  {
    name: "Uttar Pradesh",
    cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Noida"],
  },
  {
    name: "Uttarakhand",
    cities: ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur"],
  },
  {
    name: "West Bengal",
    cities: ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri"],
  },
]

const unionTerritories = [
  {
    name: "Andaman and Nicobar Islands",
    cities: ["Port Blair"],
  },
  {
    name: "Chandigarh",
    cities: ["Chandigarh"],
  },
  {
    name: "Dadra and Nagar Haveli and Daman and Diu",
    cities: ["Daman", "Diu", "Silvassa"],
  },
  {
    name: "Delhi",
    cities: ["New Delhi", "North Delhi", "South Delhi", "East Delhi", "West Delhi"],
  },
  {
    name: "Jammu and Kashmir",
    cities: ["Srinagar", "Jammu", "Anantnag"],
  },
  {
    name: "Ladakh",
    cities: ["Leh", "Kargil"],
  },
  {
    name: "Lakshadweep",
    cities: ["Kavaratti"],
  },
  {
    name: "Puducherry",
    cities: ["Puducherry", "Karaikal", "Mahe", "Yanam"],
  },
]

const majorCities = [
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Hyderabad",
  "Ahmedabad",
  "Chennai",
  "Kolkata",
  "Surat",
  "Pune",
  "Jaipur",
  "Lucknow",
  "Kanpur",
  "Nagpur",
  "Indore",
  "Thane",
  "Bhopal",
  "Visakhapatnam",
  "Pimpri-Chinchwad",
  "Patna",
  "Vadodara",
  "Ghaziabad",
  "Ludhiana",
  "Agra",
  "Nashik",
  "Faridabad",
  "Meerut",
  "Rajkot",
  "Kalyan-Dombivali",
  "Vasai-Virar",
  "Varanasi",
  "Srinagar",
  "Aurangabad",
  "Dhanbad",
  "Amritsar",
  "Navi Mumbai",
  "Allahabad",
  "Ranchi",
  "Howrah",
  "Coimbatore",
  "Jabalpur",
  "Gwalior",
  "Vijayawada",
  "Jodhpur",
  "Madurai",
  "Raipur",
  "Kota",
  "Chandigarh",
  "Guwahati",
]

export function LocationSelector() {
  const [activeTab, setActiveTab] = useState("states")

  return (
    <div className="w-full">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin className="h-5 w-5 text-secondary" />
          <h2 className="text-xl font-bold text-slate-900">Select a location</h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-xs grid-cols-2 mb-4">
            <TabsTrigger
              value="states"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-semibold text-sm py-2"
            >
              STATES
            </TabsTrigger>
            <TabsTrigger
              value="cities"
              className="data-[state=active]:bg-primary data-[state=active]:text-white font-semibold text-sm py-2"
            >
              CITIES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="states" className="mt-0">
            <ScrollArea className="h-[400px] w-full">
              <div className="space-y-4">
                {/* Indian States */}
                <div>
                  <h3 className="text-base font-bold text-primary mb-2">India</h3>
                  <div className="space-y-3">
                    {indianStates.map((state) => (
                      <div key={state.name} className="border-b border-slate-200 pb-2">
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm">{state.name}</h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 ml-2">
                          {state.cities.map((city) => (
                            <button
                              key={city}
                              className="text-xs text-primary hover:underline hover:text-blue-700 transition-colors"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Union Territories */}
                <div className="border-t pt-3">
                  <h3 className="text-base font-bold text-primary mb-2">Union Territories</h3>
                  <div className="space-y-3">
                    {unionTerritories.map((territory) => (
                      <div key={territory.name} className="border-b border-slate-200 pb-2">
                        <h4 className="font-semibold text-slate-900 mb-1 text-sm">{territory.name}</h4>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 ml-2">
                          {territory.cities.map((city) => (
                            <button
                              key={city}
                              className="text-xs text-primary hover:underline hover:text-blue-700 transition-colors"
                            >
                              {city}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="cities" className="mt-0">
            <ScrollArea className="h-[400px] w-full">
              <div>
                <h3 className="text-base font-bold text-primary mb-2">Major Cities</h3>
                <div className="flex flex-wrap gap-x-6 gap-y-2">
                  {majorCities.map((city) => (
                    <button
                      key={city}
                      className="text-xs text-primary hover:underline hover:text-blue-700 transition-colors"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
