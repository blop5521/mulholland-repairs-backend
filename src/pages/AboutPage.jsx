import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Clock, Award, Users } from 'lucide-react'

export function AboutPage() {
  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Craftsmanship",
      description: "Years of experience working with all types of paddlesports equipment, from traditional wooden canoes to cutting-edge e-foil technology."
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Community Focused",
      description: "Serving the New England paddlesports community with personalized service and deep understanding of local conditions and needs."
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      title: "Reliable Service",
      description: "Transparent timelines, quality materials, and consistent communication throughout every project, from simple repairs to custom installations."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Mulholland Repairs
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Seacoast's premier destination for paddlesports repair, custom installations, 
            and electrical art. Where expertise meets passion for water sports.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Mulholland Repairs was born from a passion for water sports and a commitment to 
                  keeping the paddlesports community on the water. Located in the heart of the 
                  Seacoast region at Marianna's Marina, we've established ourselves as the go-to 
                  destination for specialized repair services.
                </p>
                <p>
                  What started as a need for quality repair services in an underserved niche has 
                  evolved into a comprehensive operation offering everything from precision e-foil 
                  repairs to custom surfboard shower installations and unique electrical art pieces.
                </p>
                <p>
                  Our workshop combines traditional craftsmanship techniques with modern technology, 
                  ensuring that whether you're bringing in a vintage wooden paddle or the latest 
                  carbon fiber racing board, you'll receive expert care tailored to your equipment's 
                  specific needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <p className="text-gray-600">Workshop Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Specializations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Repair Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  E-foil boards and wing systems
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Carbon fiber bicycle frames
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Surfboard ding repair and restoration
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  SUP board damage repair
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Kayak and canoe hull repair
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                  Racing craft maintenance
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Custom Installations</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Surfboard-shaped outdoor showers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Premium valve and hardware options
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Custom wood selection and finishing
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Electrical art installations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Illuminated surfboard displays
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  Custom lighting designs
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-2xl shadow-lg p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visit Our Workshop</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Marianna's Marina</p>
                    <p>72 Coffin Ave, Unit A15</p>
                    <p>Haverhill, MA</p>
                  </div>
                </div>
                <p className="text-blue-100">
                  Conveniently located at one of the region's premier marinas, our workshop 
                  is easily accessible for drop-off and pickup of your equipment. We're 
                  surrounded by the water sports community we serve.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 rounded-xl p-8">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-blue-200" />
                <p className="text-blue-100">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you need a repair, want to discuss a custom installation, or have 
            questions about our services, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/repair" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Request a Repair
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

