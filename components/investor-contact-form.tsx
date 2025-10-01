"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function InvestorContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    investmentRange: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Investor form submitted:", formData)
    // Handle form submission
    alert("Thank you for your interest! Our investment team will contact you shortly.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      investmentRange: "",
      message: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg shadow-lg border border-border">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="investor-name">Full Name *</Label>
          <Input
            id="investor-name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="investor-email">Email Address *</Label>
          <Input
            id="investor-email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="investor-phone">Phone Number *</Label>
          <Input
            id="investor-phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 98765 43210"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="investor-company">Company/Organization</Label>
          <Input
            id="investor-company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            placeholder="Your company name (optional)"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="investment-range">Investment Interest Range *</Label>
        <Select
          required
          value={formData.investmentRange}
          onValueChange={(value) => setFormData({ ...formData, investmentRange: value })}
        >
          <SelectTrigger id="investment-range">
            <SelectValue placeholder="Select investment range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="under-10L">Under ₹10 Lakhs</SelectItem>
            <SelectItem value="10L-50L">₹10 Lakhs - ₹50 Lakhs</SelectItem>
            <SelectItem value="50L-1Cr">₹50 Lakhs - ₹1 Crore</SelectItem>
            <SelectItem value="1Cr-5Cr">₹1 Crore - ₹5 Crores</SelectItem>
            <SelectItem value="above-5Cr">Above ₹5 Crores</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="investor-message">Message *</Label>
        <Textarea
          id="investor-message"
          required
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your investment interests and any questions you have..."
          rows={5}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Submit Investment Inquiry
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        By submitting this form, you agree to be contacted by our investment team regarding investment opportunities.
      </p>
    </form>
  )
}
