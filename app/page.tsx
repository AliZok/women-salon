import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"
import Link from "next/link"

// Remove this line:
// import { ScissorsIcon, ClockIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline"
// import { StarIcon as StarSolidIcon } from "@heroicons/react/24/solid"

// Replace with Iconsax imports:
import { Scissor, Clock, Location, Call, Sms, Star1 } from "iconsax-react"

export default function HairSalonPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-[#fc006f]/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Replace <ScissorsIcon className="h-8 w-8 text-[#fc006f]" /> with <Scissor size="32" color="#a80049" /> */}
            <Scissor size="32" color="white" />
            <span className="text-2xl font-bold text-[#fc006f]">Luxe Salon</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="hover:text-[#fc006f] transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#fc006f] transition-colors">
              Services
            </Link>
            <Link href="#about" className="hover:text-[#fc006f] transition-colors">
              About
            </Link>
            <Link href="#gallery" className="hover:text-[#fc006f] transition-colors">
              Gallery
            </Link>
            <Link href="#contact" className="hover:text-[#fc006f] transition-colors">
              Contact
            </Link>
          </nav>
          <Button className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer">Book Now</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
        <Image
          src="/images/woman.jpg"
          alt="Luxury Hair Salon Interior"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Transform Your</span>
            <br />
            <span className="text-[#fc006f]">Beauty</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Experience luxury hair styling and treatments at our premium salon. Where elegance meets expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#fc006f] text-black hover:bg-[#cc0159] text-lg px-8 py-3 cursor-pointer">
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#fc006f] text-[#fc006f] hover:bg-[#fc006f] hover:text-black text-lg px-8 py-3 bg-transparent"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-[#292929]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">Premium</span> Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Indulge in our comprehensive range of luxury hair and beauty services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hair Cutting & Styling",
                description: "Expert cuts and styling for all hair types",
                price: "From $80",
                image: "/images/girl-1.jpg",
              },
              {
                title: "Hair Coloring",
                description: "Premium coloring techniques and treatments",
                price: "From $120",
                image: "/images/girl-2.jpg",
              },
              {
                title: "Hair Treatments",
                description: "Nourishing treatments for healthy hair",
                price: "From $60",
                image: "/images/wave-hairs.jpg",
              },
              {
                title: "Bridal Styling",
                description: "Special occasion and bridal hair styling",
                price: "From $150",
                image: "/images/girl-3.avif",
              },
              {
                title: "Extensions",
                description: "Premium hair extensions and styling",
                price: "From $200",
                image: "/images/girl-4.jpg",
              },
              {
                title: "Keratin Treatment",
                description: "Smoothing and strengthening treatments",
                price: "From $180",
                image: "/images/girl-5.avif",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-[#292929] border-[#fc006f]/20 hover:border-[#fc006f]/40 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#fc006f] mb-2">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#fc006f]">{service.price}</span>
                    <Button size="sm" className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer">
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-[#fc006f]">About</span> Luxe Salon
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                With over 15 years of experience in luxury hair styling, Luxe Salon has become the premier destination
                for discerning clients who demand excellence. Our team of master stylists combines artistic vision with
                technical expertise to create stunning transformations.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We use only the finest products and cutting-edge techniques to ensure every client leaves feeling
                confident and beautiful. Our commitment to excellence and personalized service has made us the trusted
                choice for celebrities, professionals, and style enthusiasts alike.
              </p>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">15+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">5000+</div>
                  <div className="text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#fc006f]">10+</div>
                  <div className="text-gray-300">Expert Stylists</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/dance-woman.jpg"
                alt="Salon Interior"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#fc006f] text-black p-6 rounded-lg">
                <div className="flex items-center space-x-2">
                  {/* Replace <StarSolidIcon className="h-6 w-6" /> with <Star1 size="24" color="#a80049" variant="Bold" /> */}
                  <Star1 size="24" color="#FFD700" variant="Bold" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <div className="text-sm">Google Reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-b from-[#292929] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">Our</span> Work
            </h2>
            <p className="text-xl text-gray-300">Discover the artistry and craftsmanship in every transformation</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              {
                id: 1,
                title: "Elegant Updo",
                description: "Classic bridal styling",
                image: "/images/girl-1.jpg",
                category: "Bridal"
              },
              {
                id: 2,
                title: "Modern Bob",
                description: "Contemporary short cut",
                image: "/images/girl-2.jpg",
                category: "Cutting"
              },
              {
                id: 3,
                title: "Balayage Highlights",
                description: "Natural sun-kissed look",
                image: "/images/wave-hairs.jpg",
                category: "Coloring"
              },
              {
                id: 4,
                title: "Voluminous Curls",
                description: "Dramatic styling",
                image: "/images/girl-3.avif",
                category: "Styling"
              },
              {
                id: 5,
                title: "Sleek Straight",
                description: "Smooth and shiny",
                image: "/images/girl-4.jpg",
                category: "Treatment"
              },
              {
                id: 6,
                title: "Textured Layers",
                description: "Movement and volume",
                image: "/images/girl-5.avif",
                category: "Cutting"
              },
              {
                id: 7,
                title: "Romantic Waves",
                description: "Soft and feminine",
                image: "/images/girl-6.avif",
                category: "Styling"
              },
              {
                id: 8,
                title: "Bold Color",
                description: "Vibrant transformation",
                image: "/images/girl-7.jpg",
                category: "Coloring"
              },
              {
                id: 9,
                title: "Golden Highlights",
                description: "Luxurious golden tones",
                image: "/images/girl-8.jpg",
                category: "Coloring"
              },
              {
                id: 10,
                title: "Natural Beauty",
                description: "Effortless elegance",
                image: "/images/girl-9.webp",
                category: "Styling"
              },
              {
                id: 11,
                title: "Pink Perfection",
                description: "Bold and beautiful",
                image: "/images/girl-12.jpg",
                category: "Coloring"
              },
              {
                id: 12,
                title: "Lady Beauty",
                description: "Timeless sophistication",
                image: "/images/girl-10.jpg",
                category: "Styling"
              },
              {
                id: 13,
                title: "Dance Beauty",
                description: "Dynamic movement styling",
                image: "/images/girl-13.jpg",
                category: "Styling"
              },
              {
                id: 14,
                title: "Gold Woman",
                description: "Luxury golden transformation",
                image: "/images/girl14.jpg",
                category: "Coloring"
              },
              {
                id: 15,
                title: "Woman Elegance",
                description: "Sophisticated beauty",
                image: "/images/dance-woman.jpg",
                category: "Styling"
              },
              {
                id: 16,
                title: "Girl Eleven",
                description: "Modern chic styling",
                image: "/images/girl-11.jpg",
                category: "Cutting"
              }
            ].map((item) => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-lg mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-200 text-sm text-center mb-3">{item.description}</p>
                  <span className="text-[#fc006f] text-xs font-semibold bg-black/50 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <Button size="sm" className="bg-[#fc006f] text-black hover:bg-[#cc0159] cursor-pointer mt-3">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">Client</span> Reviews
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                review:
                  "Absolutely incredible experience! The stylists are true artists and the salon atmosphere is so luxurious.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                review: "Best salon in the city. Professional service, amazing results, and worth every penny.",
                rating: 5,
              },
              {
                name: "Emma Williams",
                review:
                  "I've been coming here for years and they never disappoint. Always leave feeling like a million dollars!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-[#292929] border-[#fc006f]/20">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {/* Replace <StarSolidIcon key={i} className="h-5 w-5 text-[#fc006f]" /> with <Star1 key={i} size="20" color="#a80049" variant="Bold" /> */}
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star1 key={i} size="20" color="#FFD700" variant="Bold" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.review}&rdquo;</p>
                  <div className="font-semibold text-[#fc006f]">{testimonial.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#292929] to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-[#fc006f]">Get In</span> Touch
            </h2>
            <p className="text-xl text-gray-300">Ready to transform your look? Book your appointment today</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#fc006f] mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  {/* Replace <MapPinIcon className="h-6 w-6 text-[#fc006f]" /> with <Location size="24" color="#a80049" /> */}
                  <Location size="24" color="#a80049" />
                  <span className="text-gray-300">123 Luxury Avenue, Downtown, NY 10001</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <PhoneIcon className="h-6 w-6 text-[#fc006f]" /> with <Call size="24" color="#a80049" /> */}
                  <Call size="24" color="#a80049" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <EnvelopeIcon className="h-6 w-6 text-[#fc006f]" /> with <Sms size="24" color="#a80049" /> */}
                  <Sms size="24" color="#a80049" />
                  <span className="text-gray-300">info@luxesalon.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  {/* Replace <ClockIcon className="h-6 w-6 text-[#fc006f]" /> with <Clock size="24" color="#a80049" /> */}
                  <Clock size="24" color="#a80049" />
                  <div className="text-gray-300">
                    <div>Mon-Fri: 9:00 AM - 8:00 PM</div>
                    <div>Sat-Sun: 10:00 AM - 6:00 PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#fc006f] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </Link>
                  <Link href="#" className="text-gray-300 hover:text-[#fc006f] transition-colors">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            <Card className="bg-[#292929] border-[#fc006f]/20">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#fc006f] mb-6">Book Appointment</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name"
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    />
                    <Input
                      placeholder="Last Name"
                      className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email"
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                  />
                  <Input type="date" className="bg-black border-gray-700 text-white focus:border-[#fc006f]" />
                  <Textarea
                    placeholder="Service Details / Special Requests"
                    className="bg-black border-gray-700 text-white placeholder-gray-400 focus:border-[#fc006f]"
                    rows={4}
                  />
                  <Button className="w-full bg-[#fc006f] text-black hover:bg-[#cc0159] text-lg py-3 cursor-pointer">
                    Book Appointment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#fc006f]/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/* Replace <ScissorsIcon className="h-6 w-6 text-[#fc006f]" /> with <Scissor size="32" color="#a80049" /> */}
              <Scissor size="32" color="white" />
              <span className="text-xl font-bold text-[#fc006f]">Luxe Salon</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Luxe Salon. All rights reserved.</p>
              <p className="text-sm mt-1">Luxury Hair Styling & Beauty Services</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
