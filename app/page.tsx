import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  const services = [
    {
      title: "Preventive Care",
      description: "Regular check-ups and cleanings to maintain your oral health",
      icon: "🦷",
    },
    {
      title: "Cosmetic Dentistry",
      description: "Enhance your smile with our advanced cosmetic procedures",
      icon: "✨",
    },
    {
      title: "Restorative Services",
      description: "Restore function and appearance with our restorative treatments",
      icon: "🔧",
    },
    {
      title: "Emergency Care",
      description: "Immediate attention for dental emergencies when you need it most",
      icon: "🚑",
    },
  ]

  const testimonials = [
    {
      name: "Sarah J.",
      rating: 5,
      text: "Dr. Miller and his team are amazing! They made me feel comfortable during my entire visit. My teeth have never looked better!",
      service: "Teeth Whitening",
    },
    {
      name: "Michael T.",
      rating: 5,
      text: "I've been terrified of dentists my whole life, but this clinic changed everything. The staff is patient and understanding. Highly recommend!",
      service: "Regular Check-up",
    },
    {
      name: "Jennifer L.",
      rating: 4,
      text: "Professional service in a modern, clean environment. The new digital x-ray technology they use is impressive and much more comfortable.",
      service: "Dental Implants",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] md:h-[600px] bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">Your Smile, Our Passion</h1>
            <p className="text-xl text-blue-700 mb-8">
              Experience exceptional dental care in a comfortable and welcoming environment. Our team is dedicated to
              helping you achieve your best smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/appointment">Book an Appointment</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Dental clinic team"
            fill
            className="object-cover object-right-bottom opacity-80 md:opacity-100"
            priority
          />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              We offer a comprehensive range of dental services to meet all your oral health needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-blue-100 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                  <p className="text-blue-700">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Clinic */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Welcome to Bright Smile Dental Clinic</h2>
              <p className="text-blue-700 mb-6">
                For over 15 years, we've been providing exceptional dental care to our community. Our modern facility is
                equipped with the latest technology to ensure you receive the highest quality treatment in a comfortable
                environment.
              </p>

              <ul className="space-y-3">
                {[
                  "State-of-the-art equipment and techniques",
                  "Compassionate and experienced dental team",
                  "Comfortable and relaxing environment",
                  "Personalized treatment plans for every patient",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                    <span className="text-blue-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button className="mt-8" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Dental clinic interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our patients have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/reviews">Read More Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Visit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step towards a healthier smile today. Our friendly team is ready to assist you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/appointment">Book an Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-blue-800" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
