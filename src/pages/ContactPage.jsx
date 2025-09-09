import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin, Instagram, Facebook, Clock, Phone, Mail } from 'lucide-react'

export function ContactPage() {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email",
      description: "Best for detailed inquiries and project discussions",
      contact: "info@mulhollandrepairs.com",
      action: "mailto:info@mulhollandrepairs.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-green-600" />,
      title: "Phone",
      description: "For urgent repairs and quick questions",
      contact: "(555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <Instagram className="h-6 w-6 text-pink-600" />,
      title: "Instagram",
      description: "Follow our latest projects and repairs",
      contact: "@mulhollandrepairs",
      action: "#"
    }
  ]

  const services = [
    {
      title: "Repair Services",
      description: "Expert repair for all paddlesports equipment",
      link: "/repair",
      linkText: "Request Repair Quote"
    },
    {
      title: "Surfboard Showers",
      description: "Custom outdoor shower installations",
      link: "/surfboard-showers",
      linkText: "Design Your Shower"
    },
    {
      title: "High Voltage Art",
      description: "Unique electrical art installations",
      link: "/high-voltage-art",
      linkText: "Commission Art Piece"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your project or have questions about our services? 
            We're here to help bring your paddlesports and art visions to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Methods</h2>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-gray-50 rounded-lg">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-gray-900">{method.title}</h3>
                          <p className="text-gray-600 text-sm mb-2">{method.description}</p>
                          <a 
                            href={method.action}
                            className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                          >
                            {method.contact}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Location */}
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <CardTitle className="text-xl">Workshop Location</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900">Marianna's Marina</p>
                    <p className="text-gray-600">72 Coffin Ave, Unit A15</p>
                    <p className="text-gray-600">Haverhill, MA</p>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-start space-x-2">
                      <Clock className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">Workshop Hours</p>
                        <p className="text-blue-700 text-sm">By appointment only</p>
                        <p className="text-blue-700 text-sm">Contact us to schedule a visit</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Follow Our Work</CardTitle>
                <CardDescription>
                  Stay updated with our latest projects and repairs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <div>
                      <p className="font-medium text-gray-900">Mulholland Repairs</p>
                      <p className="text-sm text-gray-600">@mulhollandrepairs</p>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Mulholland Repairs</p>
                      <p className="text-sm text-gray-600">Facebook Page</p>
                    </div>
                  </a>
                  <a 
                    href="#" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-purple-600" />
                    <div>
                      <p className="font-medium text-gray-900">Mulholland High Voltage</p>
                      <p className="text-sm text-gray-600">@mulhollandhighvoltage</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services Quick Access */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Service Access</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <a 
                        href={service.link}
                        className="inline-flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                      >
                        {service.linkText}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">How long do repairs typically take?</h4>
                    <p className="text-gray-600 text-sm">
                      Repair timelines vary based on damage extent and parts availability. 
                      We provide estimated timelines with every quote.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Do you offer pickup and delivery?</h4>
                    <p className="text-gray-600 text-sm">
                      We can arrange pickup and delivery for larger items or customers 
                      in the local area. Contact us to discuss options.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">What's included in a repair quote?</h4>
                    <p className="text-gray-600 text-sm">
                      All quotes include materials, labor, and estimated completion time. 
                      No hidden fees or surprise charges.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Can you work with insurance claims?</h4>
                    <p className="text-gray-600 text-sm">
                      Yes, we can provide detailed documentation and work with insurance 
                      companies for covered damage claims.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-orange-800 mb-2">Emergency Repairs</h3>
                  <p className="text-orange-700 text-sm mb-2">
                    For urgent repairs that affect safety or prevent you from getting on the water, 
                    call us directly. We'll do our best to accommodate emergency situations.
                  </p>
                  <a 
                    href="tel:+15551234567"
                    className="text-orange-600 hover:text-orange-700 font-medium transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

