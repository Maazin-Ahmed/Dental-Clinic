"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AppointmentPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reason: "",
    date: undefined as Date | undefined,
    timePreference: "",
    isNewPatient: false,
    notes: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [appointmentId, setAppointmentId] = useState("")

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.reason) newErrors.reason = "Reason for visit is required"
    if (!formData.date) newErrors.date = "Preferred date is required"
    if (!formData.timePreference) newErrors.timePreference = "Time preference is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Generate a unique appointment ID
      const randomNum = Math.floor(Math.random() * 10000)
        .toString()
        .padStart(4, "0")
      const dateStr = formData.date ? format(formData.date, "yyyyMMdd") : ""
      const generatedId = `APT-${dateStr}-${randomNum}`

      setAppointmentId(generatedId)
      setSubmitted(true)

      // In a real application, you would send this data to a server
      console.log("Form submitted:", { ...formData, appointmentId: generatedId })
    }
  }

  const handleChange = (field: string, value: any) => {
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

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-12 md:py-24">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-green-100 p-3">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <CardTitle className="text-2xl text-blue-900">Appointment Request Received</CardTitle>
            <CardDescription>
              Thank you for requesting an appointment. Our team will contact you shortly to confirm.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="border rounded-lg p-4 bg-blue-50">
                <p className="text-center font-medium text-blue-900 mb-2">Your Appointment ID</p>
                <p className="text-center text-2xl font-bold text-blue-700">{appointmentId}</p>
                <p className="text-center text-sm text-blue-600 mt-2">Please save this ID for your reference</p>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-blue-900">Appointment Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-blue-600">Name</p>
                    <p className="font-medium">
                      {formData.firstName} {formData.lastName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Contact</p>
                    <p className="font-medium">{formData.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Reason for Visit</p>
                    <p className="font-medium">{formData.reason}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Requested Date</p>
                    <p className="font-medium">{formData.date ? format(formData.date, "MMMM d, yyyy") : ""}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Preferred Time</p>
                    <p className="font-medium">{formData.timePreference}</p>
                  </div>
                  <div>
                    <p className="text-sm text-blue-600">Patient Status</p>
                    <p className="font-medium">{formData.isNewPatient ? "New Patient" : "Existing Patient"}</p>
                  </div>
                </div>

                {formData.notes && (
                  <div>
                    <p className="text-sm text-blue-600">Additional Notes</p>
                    <p className="font-medium">{formData.notes}</p>
                  </div>
                )}
              </div>

              <div className="text-center space-y-4">
                <p className="text-blue-700">Our staff will contact you within 24 hours to confirm your appointment.</p>
                <Button onClick={() => router.push("/")}>Return to Home</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      {/* Appointment Hero */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Book Your Appointment</h1>
            <p className="text-xl text-blue-700">
              Schedule your visit with our dental professionals. Fill out the form below and we'll contact you to
              confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-900">Appointment Request Form</CardTitle>
              <CardDescription>Please provide your information and preferred appointment time</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-900">Personal Information</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">
                        First Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">
                        Last Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-blue-900">Appointment Details</h3>

                  <div className="space-y-2">
                    <Label htmlFor="reason">
                      Reason for Visit <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.reason} onValueChange={(value) => handleChange("reason", value)}>
                      <SelectTrigger id="reason" className={errors.reason ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="check-up">Regular Check-up</SelectItem>
                        <SelectItem value="cleaning">Teeth Cleaning</SelectItem>
                        <SelectItem value="toothache">Toothache/Pain</SelectItem>
                        <SelectItem value="cosmetic">Cosmetic Consultation</SelectItem>
                        <SelectItem value="emergency">Dental Emergency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">
                        Preferred Date <span className="text-red-500">*</span>
                      </Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !formData.date && "text-muted-foreground",
                              errors.date && "border-red-500",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {formData.date ? format(formData.date, "PPP") : <span>Select date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={formData.date}
                            onSelect={(date) => handleChange("date", date)}
                            initialFocus
                            disabled={(date) => {
                              // Disable past dates and Sundays
                              const today = new Date()
                              today.setHours(0, 0, 0, 0)
                              return date < today || date.getDay() === 0
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                      {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="timePreference">
                        Preferred Time <span className="text-red-500">*</span>
                      </Label>
                      <RadioGroup
                        value={formData.timePreference}
                        onValueChange={(value) => handleChange("timePreference", value)}
                        className={errors.timePreference ? "border border-red-500 rounded-md p-2" : ""}
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="morning" id="morning" />
                          <Label htmlFor="morning">Morning (8AM - 12PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="afternoon" id="afternoon" />
                          <Label htmlFor="afternoon">Afternoon (12PM - 4PM)</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="evening" id="evening" />
                          <Label htmlFor="evening">Evening (4PM - 6PM)</Label>
                        </div>
                      </RadioGroup>
                      {errors.timePreference && <p className="text-red-500 text-sm">{errors.timePreference}</p>}
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isNewPatient"
                      checked={formData.isNewPatient}
                      onCheckedChange={(checked) => handleChange("isNewPatient", checked === true)}
                    />
                    <Label htmlFor="isNewPatient">I am a new patient</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes or Concerns</Label>
                    <Textarea
                      id="notes"
                      placeholder="Please share any specific concerns or questions you have"
                      value={formData.notes}
                      onChange={(e) => handleChange("notes", e.target.value)}
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full">
                    Request Appointment
                  </Button>
                  <p className="text-center text-sm text-blue-600 mt-2">
                    Our team will contact you to confirm your appointment
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
