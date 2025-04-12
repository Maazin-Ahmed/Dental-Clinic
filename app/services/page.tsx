import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle } from "lucide-react"

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Preventive Dentistry",
      description: "Regular care to maintain oral health and prevent dental issues",
      image: "/placeholder.svg?height=300&width=500",
      services: [
        {
          name: "Dental Cleanings",
          description: "Professional cleaning to remove plaque and tartar buildup",
          price: "$120",
        },
        {
          name: "Dental Exams",
          description: "Comprehensive examination of your oral health",
          price: "$85",
        },
        {
          name: "Digital X-Rays",
          description: "Low-radiation digital imaging for diagnostic purposes",
          price: "$75",
        },
        {
          name: "Fluoride Treatments",
          description: "Application of fluoride to strengthen tooth enamel",
          price: "$45",
        },
        {
          name: "Dental Sealants",
          description: "Protective coating applied to prevent decay",
          price: "$60 per tooth",
        },
      ],
    },
    {
      title: "Cosmetic Dentistry",
      description: "Procedures to enhance the appearance of your smile",
      image: "/placeholder.svg?height=300&width=500",
      services: [
        {
          name: "Teeth Whitening",
          description: "Professional whitening to remove stains and discoloration",
          price: "$350",
        },
        {
          name: "Porcelain Veneers",
          description: "Custom-made shells to cover the front surface of teeth",
          price: "$1,200 per tooth",
        },
        {
          name: "Dental Bonding",
          description: "Application of tooth-colored resin to repair damaged teeth",
          price: "$300 - $600 per tooth",
        },
        {
          name: "Smile Makeover",
          description: "Comprehensive treatment plan to transform your smile",
          price: "Consultation required",
        },
      ],
    },
    {
      title: "Restorative Dentistry",
      description: "Procedures to repair damaged teeth and restore function",
      image: "/placeholder.svg?height=300&width=500",
      services: [
        {
          name: "Dental Fillings",
          description: "Tooth-colored composite fillings to repair cavities",
          price: "$150 - $300",
        },
        {
          name: "Dental Crowns",
          description: "Custom-made caps to cover and protect damaged teeth",
          price: "$1,000 - $1,500",
        },
        {
          name: "Dental Bridges",
          description: "Fixed appliances to replace missing teeth",
          price: "$2,500 - $5,000",
        },
        {
          name: "Dental Implants",
          description: "Permanent replacement for missing teeth",
          price: "$3,000 - $4,500 per implant",
        },
        {
          name: "Dentures",
          description: "Removable appliances to replace missing teeth",
          price: "$1,500 - $3,000",
        },
      ],
    },
    {
      title: "Specialty Services",
      description: "Specialized treatments for specific dental needs",
      image: "/placeholder.svg?height=300&width=500",
      services: [
        {
          name: "Orthodontics",
          description: "Traditional braces and clear aligners to straighten teeth",
          price: "Starting at $3,500",
        },
        {
          name: "Root Canal Therapy",
          description: "Treatment to save infected or severely damaged teeth",
          price: "$700 - $1,200",
        },
        {
          name: "Periodontal Treatment",
          description: "Treatment for gum disease and related conditions",
          price: "$200 - $1,500",
        },
        {
          name: "Oral Surgery",
          description: "Surgical procedures including extractions and wisdom teeth removal",
          price: "$150 - $650 per tooth",
        },
        {
          name: "Emergency Dental Care",
          description: "Immediate care for dental emergencies",
          price: "Varies based on treatment",
        },
      ],
    },
  ]

  const faqs = [
    {
      question: "Do you accept dental insurance?",
      answer:
        "Yes, we accept most major dental insurance plans. Please contact our office to verify your specific coverage before your appointment.",
    },
    {
      question: "How often should I visit the dentist?",
      answer:
        "We recommend visiting the dentist every six months for regular check-ups and cleanings. However, some patients may require more frequent visits based on their oral health needs.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, professional teeth whitening is safe when performed by a qualified dentist. We use high-quality products and customize the treatment to ensure your comfort and safety.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and maintenance, dental implants can last a lifetime. Regular dental check-ups and good oral hygiene are essential for the longevity of your implants.",
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer:
        "Contact our office immediately. We reserve time in our daily schedule for emergency patients. If the emergency occurs outside of regular business hours, call our emergency number provided on our voicemail.",
    },
    {
      question: "Do you offer payment plans?",
      answer:
        "Yes, we offer flexible payment plans to help make dental care more affordable. We also accept most major credit cards and offer financing options through CareCredit.",
    },
  ]

  return (
    <div>
      {/* Services Hero */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Our Dental Services</h1>
            <p className="text-xl text-blue-700">
              Comprehensive dental care for patients of all ages. From routine check-ups to advanced procedures, we
              provide quality care in a comfortable environment.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {serviceCategories.map((category, index) => (
              <div key={index}>
                <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
                  <div className={`${index % 2 === 1 ? "md:order-last" : ""}`}>
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">{category.title}</h2>
                    <p className="text-lg text-blue-700 mb-6">{category.description}</p>
                    <ul className="space-y-2">
                      {category.services.slice(0, 3).map((service, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                          <span className="text-blue-700">{service.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, idx) => (
                    <Card key={idx} className="border-blue-100">
                      <CardHeader>
                        <CardTitle className="text-blue-900">{service.name}</CardTitle>
                        <CardDescription className="text-blue-600">{service.price}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-blue-700">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Insurance & Payment Options</h2>
              <p className="text-blue-700 mb-4">
                We accept most major dental insurance plans and are in-network providers for many insurance companies.
                Our team will help you maximize your benefits and minimize out-of-pocket expenses.
              </p>
              <p className="text-blue-700 mb-4">
                For patients without insurance, we offer a variety of payment options to make dental care affordable:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">Flexible payment plans</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">CareCredit financing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">Cash, check, and all major credit cards accepted</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <span className="text-blue-700">Discount for payment in full at time of service</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/contact">Contact Us About Insurance</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-4 rounded-lg flex items-center justify-center h-24">
                  <Image
                    src="/placeholder-logo.svg"
                    alt={`Insurance provider ${i}`}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Find answers to common questions about our services and dental care
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-blue-900 font-medium text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-blue-700">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule your appointment and experience our exceptional dental care.
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
