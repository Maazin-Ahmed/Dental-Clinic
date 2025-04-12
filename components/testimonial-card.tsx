import { Card, CardContent } from "@/components/ui/card"
import { Star, StarHalf } from "lucide-react"

interface TestimonialProps {
  testimonial: {
    name: string
    rating: number
    text: string
    service: string
  }
}

export default function TestimonialCard({ testimonial }: TestimonialProps) {
  const { name, rating, text, service } = testimonial

  // Generate star rating
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-5 w-5 fill-yellow-400 text-yellow-400" />)
    }

    return stars
  }

  return (
    <Card className="h-full border-blue-100">
      <CardContent className="p-6">
        <div className="flex mb-2">{renderStars()}</div>
        <p className="text-blue-700 mb-4 italic">"{text}"</p>
        <div className="mt-auto">
          <p className="font-semibold text-blue-900">{name}</p>
          <p className="text-sm text-blue-600">{service}</p>
        </div>
      </CardContent>
    </Card>
  )
}
