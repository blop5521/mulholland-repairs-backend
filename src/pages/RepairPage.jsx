import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Wrench, Zap, Bike, Waves, Upload, CheckCircle } from 'lucide-react'

export function RepairPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
    images: []
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const equipmentTypes = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "E-foil Boards & Wings",
      description: "Specialized repair for electric hydrofoil boards and wing components"
    },
    {
      icon: <Bike className="h-8 w-8 text-gray-600" />,
      title: "Carbon Fiber Bicycles",
      description: "Expert carbon fiber repair and restoration services"
    },
    {
      icon: <Waves className="h-8 w-8 text-blue-600" />,
      title: "Surfboards",
      description: "Professional surfboard ding repair and restoration"
    },
    {
      icon: <Waves className="h-8 w-8 text-teal-600" />,
      title: "Stand Up Paddle Boards",
      description: "SUP repair for all board types and materials"
    },
    {
      icon: <Waves className="h-8 w-8 text-green-600" />,
      title: "Kayaks & Canoes",
      description: "Comprehensive repair for recreational and racing craft"
    },
    {
      icon: <Waves className="h-8 w-8 text-purple-600" />,
      title: "Dragon Boats & Outrigger Canoes",
      description: "Specialized repair for racing and traditional watercraft"
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
    
    try {
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('description', formData.description)
      
      // Add images to FormData
      if (formData.images.length > 0) {
        for (let i = 0; i < formData.images.length; i++) {
          formDataToSend.append('images', formData.images[i])
        }
      }

      const response = await fetch('https://mulholland-backend.onrender.com/api/forms/repair', {
        method: 'POST',
        body: formDataToSend
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        console.error('Form submission failed')
        alert('Failed to submit form. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Failed to submit form. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Repair Request Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your repair request. We'll review your submission and get back to you 
              within 24 hours with an initial assessment and timeline.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                phone: '',
                description: '',
                images: []
              })
            }}>
              Submit Another Request
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Repair Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert repair and restoration for all types of paddlesports equipment. 
            From high-tech e-foils to traditional wooden canoes, we handle it all with precision and care.
          </p>
        </div>

        {/* Equipment Types */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Equipment We Service
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipmentTypes.map((equipment, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-3 p-3 bg-gray-50 rounded-full w-fit">
                    {equipment.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold">{equipment.title}</CardTitle>
                  <CardDescription className="text-sm">{equipment.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Repair Request Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Wrench className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Request a Repair Quote</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you with an assessment and timeline.
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
                  <Label htmlFor="description">Description of the Problem *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    placeholder="Please describe the damage or issue in detail. Include information about how it happened, what equipment it is, and any other relevant details."
                    rows={5}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="images">Photos of Damage</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 mb-2">
                      Upload photos of the damage to help us assess the repair
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
                    <Button 
                      type="button" 
                      variant="outline" 
                      size="sm"
                      onClick={() => document.getElementById('images').click()}
                      className="cursor-pointer"
                    >
                      Choose Files
                    </Button>
                    {formData.images.length > 0 && (
                      <p className="text-sm text-green-600 mt-2">
                        {formData.images.length} file(s) selected
                      </p>
                    )}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Repair Request'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Process Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Our Repair Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                We review your submission and provide an initial assessment within 24 hours.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quote & Timeline</h3>
              <p className="text-gray-600 text-sm">
                Detailed quote with materials, labor, and estimated completion time.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Repair</h3>
              <p className="text-gray-600 text-sm">
                Professional repair using quality materials and proven techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

