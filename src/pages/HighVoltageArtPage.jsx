import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Zap, Upload, CheckCircle, Lightbulb, Palette, Sparkles } from 'lucide-react'

export function HighVoltageArtPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: '',
    images: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const artTypes = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Surfboard Lighting",
      description: "Transform vintage surfboards into stunning illuminated art pieces"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-orange-500" />,
      title: "Paddle Installations",
      description: "Custom electrical installations using paddles as artistic canvases"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-500" />,
      title: "Custom Electrical Art",
      description: "Unique lighting designs that blend craftsmanship with electrical artistry"
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prev => ({
      ...prev,
      images: files
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Art Project Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your high voltage art project submission. We'll review your concept 
              and get back to you within 24 hours to discuss design possibilities and next steps.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                notes: '',
                images: []
              })
            }}>
              Submit Another Project
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            High Voltage, High Vibes
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-purple-600">
              Electrical Art Installations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Where craftsmanship meets creativity. We transform surfboards, paddles, and other 
            water sports equipment into stunning electrical art pieces that illuminate spaces 
            with unique character and surf culture spirit.
          </p>
        </div>

        {/* Art Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Types of Electrical Art
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artTypes.map((art, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-yellow-50 to-purple-50 rounded-full w-fit">
                    {art.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{art.title}</CardTitle>
                  <CardDescription className="text-gray-600">{art.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Featured Installations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square bg-gradient-to-br from-yellow-100 to-purple-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Palette className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Art Installation {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Request Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-yellow-100 to-purple-100 rounded-full w-fit">
                <Zap className="h-8 w-8 text-purple-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Commission Your Art Piece</CardTitle>
              <CardDescription>
                Share your vision and we'll work together to create a unique electrical art installation.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Project Notes & Vision *</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    required
                    placeholder="Describe your vision for the electrical art piece. Include details about the space, desired lighting effects, color preferences, and any specific equipment you'd like to incorporate (surfboards, paddles, etc.). The more detail you provide, the better we can understand your vision."
                    rows={6}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Reference Images</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload inspiration images, space photos, or equipment you'd like to use
                    </p>
                    <Input
                      id="images"
                      name="images"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Label htmlFor="images" className="cursor-pointer">
                      <Button type="button" variant="outline" size="sm">
                        Choose Files
                      </Button>
                    </Label>
                    {formData.images.length > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        {formData.images.length} file(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-yellow-500 to-purple-600 hover:from-yellow-600 hover:to-purple-700" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Project...' : 'Submit Art Project'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Process Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Creative Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Concept</h3>
              <p className="text-gray-600 text-sm">
                We discuss your vision and develop a unique concept for your space.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Detailed design with electrical specifications and visual mockups.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Create</h3>
              <p className="text-gray-600 text-sm">
                Expert craftsmanship brings your electrical art vision to life.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Install</h3>
              <p className="text-gray-600 text-sm">
                Professional installation ensures safe and stunning results.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Note */}
        <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <Zap className="h-6 w-6 text-yellow-600 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-yellow-800 mb-2">Safety & Quality Assurance</h3>
              <p className="text-yellow-700 text-sm">
                All electrical art installations are designed and installed by qualified professionals 
                following local electrical codes and safety standards. We prioritize both artistic 
                vision and electrical safety in every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

