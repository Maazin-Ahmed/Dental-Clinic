import Link from "next/link"
import { SmileIcon as Tooth, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <Tooth className="h-6 w-6 text-blue-300" />
              <span className="ml-2 text-xl font-bold">Bright Smile</span>
            </div>
            <p className="text-blue-200 mb-4">
              Providing exceptional dental care for the whole family in a comfortable and welcoming environment.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Patient Reviews", href: "/reviews" },
                { name: "Book Appointment", href: "/appointment" },
                { name: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-200 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                "General Dentistry",
                "Cosmetic Dentistry",
                "Orthodontics",
                "Pediatric Dentistry",
                "Dental Implants",
                "Emergency Care",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <span className="text-blue-200">123 Dental Street, Cityville, State 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <span className="text-blue-200">(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <span className="text-blue-200">info@brightsmile.com</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                <div className="text-blue-200">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Bright Smile Dental Clinic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
