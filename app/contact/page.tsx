"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real application, you would send this data to a server
      console.log("Contact form submitted:", formData)
      setSubmitted(true)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  return (
    <div>
      {/* Contact Hero */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
            <p className="text-xl text-blue-700">
              We're here to answer your questions and provide the information you need. Reach out to us through any of
              the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-blue-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Phone</h3>
                <p className="text-blue-700">(555) 123-4567</p>
                <p className="text-blue-600 text-sm mt-1">For appointments & inquiries</p>
                <p className="text-blue-700 mt-2">(555) 987-6543</p>
                <p className="text-blue-600 text-sm mt-1">Emergency dental care</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Email</h3>
                <p className="text-blue-700">info@brightsmile.com</p>
                <p className="text-blue-600 text-sm mt-1">General inquiries</p>
                <p className="text-blue-700 mt-2">appointments@brightsmile.com</p>
                <p className="text-blue-600 text-sm mt-1">Appointment scheduling</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Location</h3>
                <p className="text-blue-700">123 Dental Street</p>
                <p className="text-blue-700">Cityville, State 12345</p>
                <p className="text-blue-600 text-sm mt-2">Convenient parking available</p>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Office Hours</h3>
                <div className="text-blue-700">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <p className="text-blue-600 text-sm mt-2">Extended hours on Tuesdays & Thursdays</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map */}
            <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
              {/* In a real application, you would embed Google Maps here */}
              <div className="w-full h-full flex items-center justify-center bg-blue-50">
                <div className="text-center p-4">
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">Interactive Map</h3>
                  <p className="text-blue-700">123 Dental Street, Cityville, State 12345</p>
                  <p className="text-blue-600 text-sm mt-2">
                    In a real application, an interactive Google Map would be displayed here
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you as soon as possible</CardDescription>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <div className="text-center py-6">
                    <div className="flex justify-center mb-4">
                      <div className="rounded-full bg-green-100 p-3">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Message Sent!</h3>
                    <p className="text-blue-700">Thank you for contacting us. We'll respond to your message shortly.</p>
                    <Button
                      className="mt-4"
                      onClick={() => {
                        setSubmitted(false)
                        setFormData({ name: "", email: "", phone: "", message: "" })
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className={errors.name ? "border-red-500" : ""}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className={errors.email ? "border-red-500" : ""}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        className={errors.message ? "border-red-500" : ""}
                      />
                      {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">How to Find Us</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              We're conveniently located in the heart of Cityville, with easy access from major highways and public
              transportation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">By Car</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>From Highway 101: Take exit 25, turn right on Main Street, then left on Dental Street</li>
                  <li>From Downtown: Head north on Central Avenue for 2 miles, then right on Dental Street</li>
                  <li>Free parking available in our dedicated lot</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">By Public Transit</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>Bus Routes 10, 15, and 22 stop directly in front of our building</li>
                  <li>Cityville Metro: Exit at Central Station, 5-minute walk north</li>
                  <li>Regional Train: Cityville Station is 10 minutes away by bus (Route 15)</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-blue-100">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">Nearby Landmarks</h3>
                <ul className="space-y-2 text-blue-700">
                  <li>Across from Cityville Community Park</li>
                  <li>Next to Cityville Public Library</li>
                  <li>2 blocks south of Cityville Shopping Center</li>
                  <li>5-minute walk from Cityville Medical Center</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Dental Emergency?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We offer same-day emergency appointments. Call our emergency line for immediate assistance.
          </p>
          <div className="inline-block bg-white text-blue-900 rounded-lg px-6 py-4 text-center">
            <p className="text-lg font-semibold">Emergency Dental Hotline</p>
            <p className="text-2xl font-bold">(555) 987-6543</p>
          </div>
        </div>
      </section>
    </div>
  )
}
