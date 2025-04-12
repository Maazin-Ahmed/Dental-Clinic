import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Clock, Users } from "lucide-react"

export default function AboutPage() {
  const coreValues = [
    {
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our practice, from patient care to the latest dental techniques.",
      icon: <Award className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Compassion",
      description:
        "We treat every patient with kindness, understanding, and respect, ensuring a comfortable experience.",
      icon: <Users className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Innovation",
      description: "We continuously invest in advanced technology and techniques to provide the best possible care.",
      icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    },
    {
      title: "Reliability",
      description:
        "We value your time and are committed to punctual appointments and dependable care you can count on.",
      icon: <Clock className="h-8 w-8 text-blue-500" />,
    },
  ]

  const doctors = [
    {
      name: "Dr. Sarah Miller",
      title: "Lead Dentist & Founder",
      image: "/placeholder.svg?height=400&width=400",
      education: "DDS, University of California",
      experience: "15+ years of experience",
      specialization: "Cosmetic Dentistry",
      bio: "Dr. Miller founded Bright Smile Dental Clinic with a vision to provide exceptional dental care in a comfortable environment. She specializes in cosmetic dentistry and is passionate about helping patients achieve their perfect smile.",
    },
    {
      name: "Dr. James Wilson",
      title: "Orthodontist",
      image: "/placeholder.svg?height=400&width=400",
      education: "DDS, Harvard University",
      experience: "12+ years of experience",
      specialization: "Orthodontics",
      bio: "Dr. Wilson is our orthodontics specialist with extensive experience in traditional braces and Invisalign treatments. He is dedicated to creating beautiful, straight smiles for patients of all ages.",
    },
    {
      name: "Dr. Emily Chen",
      title: "Pediatric Dentist",
      image: "/placeholder.svg?height=400&width=400",
      education: "DMD, University of Pennsylvania",
      experience: "8+ years of experience",
      specialization: "Pediatric Dentistry",
      bio: "Dr. Chen specializes in pediatric dentistry and is known for her gentle approach with young patients. She believes in creating positive dental experiences for children to establish lifelong oral health habits.",
    },
  ]

  return (
    <div>
      {/* About Hero */}
      <section className="bg-blue-50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">About Bright Smile Dental Clinic</h1>
            <p className="text-xl text-blue-700">
              Providing exceptional dental care to our community since 2008. Our mission is to help every patient
              achieve optimal oral health in a comfortable and caring environment.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic History */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Dental clinic building"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-blue-700 mb-4">
                Bright Smile Dental Clinic was founded in 2008 by Dr. Sarah Miller with a vision to create a dental
                practice that combines clinical excellence with a warm, welcoming atmosphere.
              </p>
              <p className="text-blue-700 mb-4">
                What began as a small practice has grown into a comprehensive dental center serving thousands of
                patients in our community. Throughout our growth, we've maintained our commitment to personalized care
                and building lasting relationships with our patients.
              </p>
              <p className="text-blue-700 mb-4">
                Today, our state-of-the-art facility is equipped with the latest dental technology, allowing us to
                provide the highest standard of care while ensuring patient comfort at every visit.
              </p>
              <p className="text-blue-700">
                Our team of experienced dentists and friendly staff work together to create positive dental experiences
                that keep our patients smiling for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              These principles guide everything we do at Bright Smile Dental Clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <Card key={index} className="border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{value.title}</h3>
                  <p className="text-blue-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Modern Facility</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Equipped with the latest technology to provide you with the best dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Reception Area", image: "/placeholder.svg?height=300&width=400" },
              { title: "Treatment Room", image: "/placeholder.svg?height=300&width=400" },
              { title: "Advanced Equipment", image: "/placeholder.svg?height=300&width=400" },
            ].map((item, index) => (
              <div key={index} className="relative h-64 rounded-lg overflow-hidden group">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-semibold p-4">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-100 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Office Hours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="flex justify-between text-blue-700">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between text-blue-700">
                  <span>Saturday:</span>
                  <span>9:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between text-blue-700">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
              <div className="text-blue-700">
                <p>
                  We offer extended hours on Tuesdays and Thursdays until 7:00 PM to accommodate our patients' busy
                  schedules.
                </p>
                <p className="mt-2">Emergency appointments available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Doctors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Meet Our Doctors</h2>
            <p className="text-lg text-blue-700 max-w-2xl mx-auto">
              Our team of experienced dental professionals is dedicated to providing you with the highest quality care
            </p>
          </div>

          <div className="space-y-12">
            {doctors.map((doctor, index) => (
              <div key={index} className="grid md:grid-cols-3 gap-8 items-center">
                <div className="relative h-80 rounded-lg overflow-hidden md:col-span-1">
                  <Image src={doctor.image || "/placeholder.svg"} alt={doctor.name} fill className="object-cover" />
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl font-bold text-blue-900">{doctor.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{doctor.title}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-blue-500 font-medium">Education</p>
                      <p className="text-blue-700">{doctor.education}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-500 font-medium">Experience</p>
                      <p className="text-blue-700">{doctor.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm text-blue-500 font-medium">Specialization</p>
                      <p className="text-blue-700">{doctor.specialization}</p>
                    </div>
                  </div>

                  <p className="text-blue-700">{doctor.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
