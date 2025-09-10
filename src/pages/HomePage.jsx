import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Wrench, Waves, Zap, MapPin, Instagram, Facebook } from 'lucide-react'

export function HomePage() {
  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-600" />,
      title: "Repair Services",
      description: "Expert repair for kayaks, canoes, standup paddleboards, e-foil boards, and surfboards.",
      link: "/repair",
      features: ["Kayaks", "Canoes", "All paddlesports equipment"]
    },
    {
      icon: <Waves className="h-8 w-8 text-teal-600" />,
      title: "Surfboard Showers",
      description: "Custom surfboard-shaped outdoor showers with premium materials and finishes.",
      link: "/surfboard-showers",
      features: ["Multiple valve options", "Various wood types", "Custom shapes & sizes"]
    },
    {
      icon: <Zap className="h-8 w-8 text-orange-600" />,
      title: "High Voltage Art",
      description: "Unique Lichtenberg art installations using surfboards and paddles as creative canvases.",
      link: "/high-voltage-art",
      features: ["Custom Lichtenberg art", "Coffee Tables", "Custom Fractal Colors"]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Seacoast's Only
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-teal-200">
                Paddlesports Repair Shop
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Expert repair services, custom surfboard showers, and unique Lichtenberg art. 
              Serving the New England paddlesports community with precision and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/repair" className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white text-blue-900 hover:bg-blue-100 h-11 px-8 rounded-md">
                Get a Repair Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-900">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From precision repairs to custom Lichtenberg Art, we bring expertise and craftsmanship 
              to every project in the paddlesports world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit group-hover:bg-blue-50 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="w-full group-hover:bg-blue-700 transition-colors">
                    <Link to={service.link}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premier Accounts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premier Accounts We Maintain
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As the trusted repair partner for New England's premier paddlesports retailers, 
              we provide expert maintenance and repair services that keep their equipment performing at its best.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <a href="https://paddleboston.com/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/paddleBostong.jpeg"
                    alt="Paddle Boston - Premier Account"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Paddle Boston</h3>
                    <p className="text-blue-100 text-sm">Premium paddlesports equipment specialist</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    We proudly maintain Paddle Boston's extensive inventory of high-end kayaks, canoes, and standup paddleboards, 
                    ensuring their customers receive the best possible equipment performance.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Visit Website</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>

            <a href="https://www.paddlelincoln.com/" target="_blank" rel="noopener noreferrer" className="group block">
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src="/lincolnCanoeKayak.jpeg"
                    alt="Lincoln Canoe and Kayak - Premier Account"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Lincoln Canoe & Kayak</h3>
                    <p className="text-blue-100 text-sm">Leading watersports retailer in the Northeast</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    As Lincoln Canoe & Kayak's dedicated repair partner, we provide comprehensive maintenance services 
                    that keep their premium fleet in top condition for their discerning customers.
                  </p>
                  <div className="flex items-center text-blue-600 font-semibold">
                    <span>Visit Website</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Precision Craftsmanship for Water Sports Enthusiasts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located at Marianna's Marina in Haverhill, MA, Mulholland Repairs has established itself 
                as the premier destination for paddlesports equipment repair and custom installations 
                throughout the Seacoast region.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our expertise spans from high-tech e-foil boards to traditional wooden canoes, 
                ensuring that every piece of equipment receives the specialized care it deserves.
              </p>
              <Button asChild size="lg">
                <Link to="/about">
                  Learn About Our Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 mr-2" />
                  <h3 className="text-xl font-semibold">Visit Our Workshop</h3>
                </div>
                <div className="space-y-2 text-blue-100">
                  <p>72 Coffin Ave</p>
                  <p>Marianna's Marina, Unit A15</p>
                  <p>Haverhill, MA</p>
                </div>
                <div className="mt-6 pt-6 border-t border-blue-400">
                  <h4 className="font-semibold mb-3">Follow Our Work</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                      <Instagram className="h-5 w-5 mr-2" />
                      <span className="text-sm">Instagram</span>
                    </a>
                    <a href="#" className="flex items-center text-blue-100 hover:text-white transition-colors">
                      <Facebook className="h-5 w-5 mr-2" />
                      <span className="text-sm">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you need a repair, want a custom surfboard shower, or have an idea for electrical art, 
            we're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/repair">Request Repair Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

