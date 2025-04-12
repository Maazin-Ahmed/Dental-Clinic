"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Star, StarHalf } from "lucide-react"

interface Review {
  id: number
  name: string
  rating: number
  text: string
  service: string
  date: string
}

export default function ReviewsPage() {
  const allReviews: Review[] = [
    {
      id: 1,
      name: "Sarah J.",
      rating: 5,
      text: "Dr. Miller and her team are amazing! They made me feel comfortable during my entire visit. My teeth have never looked better after my whitening treatment. The office is modern and clean, and the staff is friendly and professional.",
      service: "Teeth Whitening",
      date: "March 15, 2023",
    },
    {
      id: 2,
      name: "Michael T.",
      rating: 5,
      text: "I've been terrified of dentists my whole life, but this clinic changed everything. The staff is patient and understanding. Dr. Wilson took the time to explain everything and made sure I was comfortable throughout my procedure. Highly recommend!",
      service: "Regular Check-up",
      date: "February 3, 2023",
    },
    {
      id: 3,
      name: "Jennifer L.",
      rating: 4,
      text: "Professional service in a modern, clean environment. The new digital x-ray technology they use is impressive and much more comfortable than traditional x-rays. The only reason for 4 stars instead of 5 is the wait time was a bit longer than expected.",
      service: "Dental Implants",
      date: "April 22, 2023",
    },
    {
      id: 4,
      name: "Robert K.",
      rating: 5,
      text: "My daughter was very nervous about her first dental visit, but the pediatric dentist was fantastic with her. They have a special way with children that puts them at ease. The office even has a small play area in the waiting room!",
      service: "Pediatric Dentistry",
      date: "January 12, 2023",
    },
    {
      id: 5,
      name: "Emily S.",
      rating: 4.5,
      text: "I had a dental emergency while visiting from out of town, and they fit me in the same day. Dr. Miller was gentle and fixed my broken crown quickly. I'm so grateful for their prompt and professional care during a stressful situation.",
      service: "Emergency Care",
      date: "May 8, 2023",
    },
    {
      id: 6,
      name: "David P.",
      rating: 5,
      text: "I've been coming to Bright Smile for over 3 years now, and I wouldn't go anywhere else. The hygienists are thorough but gentle, and Dr. Chen always takes time to answer all my questions. My whole family comes here now!",
      service: "Regular Check-up",
      date: "March 30, 2023",
    },
    {
      id: 7,
      name: "Amanda R.",
      rating: 3.5,
      text: "The dental work itself was excellent, but I had some issues with billing and insurance. The front desk staff was helpful in resolving the confusion, but it took several calls to get everything straightened out.",
      service: "Root Canal",
      date: "February 17, 2023",
    },
    {
      id: 8,
      name: "Thomas B.",
      rating: 5,
      text: "I recently completed my Invisalign treatment, and I couldn't be happier with the results! Dr. Wilson was attentive throughout the entire process, and the staff was always accommodating with appointment scheduling. My smile looks amazing now!",
      service: "Orthodontics",
      date: "April 5, 2023",
    },
    {
      id: 9,
      name: "Sophia M.",
      rating: 4,
      text: "The clinic is beautiful and modern with state-of-the-art equipment. My cleaning was thorough and the hygienist was very knowledgeable. The only downside was parking can be a bit challenging during peak hours.",
      service: "Teeth Cleaning",
      date: "May 19, 2023",
    },
    {
      id: 10,
      name: "James H.",
      rating: 5,
      text: "After years of being self-conscious about my smile, I finally decided to get veneers. The results are beyond what I could have imagined! Dr. Miller is truly an artist, and her attention to detail is impressive. Worth every penny!",
      service: "Cosmetic Dentistry",
      date: "January 25, 2023",
    },
  ]

  const [serviceFilter, setServiceFilter] = useState<string>("all")
  const [ratingFilter, setRatingFilter] = useState<string>("all")

  // Filter reviews based on selected filters
  const filteredReviews = allReviews.filter((review) => {
    const matchesService = serviceFilter === "all" || review.service === serviceFilter
    const matchesRating =
      ratingFilter === "all" ||
      (ratingFilter === "5" && review.rating === 5) ||
      (ratingFilter === "4" && review.rating >= 4 && review.rating < 5) ||
      (ratingFilter === "3" && review.rating >= 3 && review.rating < 4) ||
      (ratingFilter === "1-2" && review.rating < 3)
    return matchesService && matchesRating
  })

  // Get unique services for filter dropdown
  const services = Array.from(new Set(allReviews.map((review) => review.service)))

  // Generate star rating display
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    // Add empty stars to make total of 5
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-5 w-5 text-gray-300" />)
    }

    return stars
  }

  return (
    <div>
      {/* Reviews Hero */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Patient Reviews</h1>
            <p className="text-xl text-blue-700">
              See what our patients have to say about their experience at Bright Smile Dental Clinic.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="space-y-2">
              <Label htmlFor="service-filter">Filter by Service</Label>
              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger id="service-filter">
                  <SelectValue placeholder="All Services" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {services.map((service) => (
                    <SelectItem key={service} value={service}>
                      {service}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rating-filter">Filter by Rating</Label>
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger id="rating-filter">
                  <SelectValue placeholder="All Ratings" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="5">5 Stars</SelectItem>
                  <SelectItem value="4">4+ Stars</SelectItem>
                  <SelectItem value="3">3+ Stars</SelectItem>
                  <SelectItem value="1-2">1-2 Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Reviews Display */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <Card key={review.id} className="border-blue-100">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-blue-900 font-medium">{review.rating}</span>
                    </div>
                    <p className="text-blue-700 mb-4 italic">"{review.text}"</p>
                    <div className="flex justify-between items-end mt-4">
                      <div>
                        <p className="font-semibold text-blue-900">{review.name}</p>
                        <p className="text-sm text-blue-600">{review.service}</p>
                      </div>
                      <p className="text-sm text-blue-500">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <p className="text-lg text-blue-700">No reviews match your selected filters.</p>
              </div>
            )}
          </div>

          {/* Review Stats */}
          <div className="mt-16 max-w-4xl mx-auto bg-blue-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Why Our Patients Love Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-700 mb-2">4.8</p>
                <p className="text-blue-600">Average Rating</p>
                <div className="flex justify-center mt-2">{renderStars(4.8)}</div>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700 mb-2">98%</p>
                <p className="text-blue-600">Would Recommend</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-700 mb-2">1,500+</p>
                <p className="text-blue-600">Happy Patients</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
