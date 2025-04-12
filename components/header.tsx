"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SmileIcon as Tooth, Menu, X, Phone } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Tooth className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-blue-900">Bright Smile</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-blue-700 hover:text-blue-900 font-medium transition-colors",
                  pathname === item.href && "text-blue-900 font-semibold",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact & Appointment Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              <span>(555) 123-4567</span>
            </div>
            <Button asChild>
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-blue-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-blue-700 hover:text-blue-900 font-medium transition-colors py-2",
                    pathname === item.href && "text-blue-900 font-semibold",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <Button asChild className="w-full">
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
