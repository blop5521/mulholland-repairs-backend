import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Waves, CheckCircle, Droplets } from 'lucide-react'

export function SurfboardShowersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    valve: '',
    shape: '',
    wood: '',
    length: [6.5]
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const valveOptions = [
    { id: 'stainless', name: 'Stainless Steel', image: '/api/placeholder/150/150' },
    { id: 'black', name: 'Black', image: '/api/placeholder/150/150' },
    { id: 'brass', name: 'Brushed Brass', image: '/api/placeholder/150/150' },
    { id: 'gold', name: 'Polished Gold', image: '/api/placeholder/150/150' },
    { id: 'rose', name: 'Rose Gold', image: '/api/placeholder/150/150' }
  ]

  const shapeOptions = [
    { id: 'pin', name: 'Pin Tail', image: '/api/placeholder/150/200' },
    { id: 'fish', name: 'Fish Tail', image: '/api/placeholder/150/200' },
    { id: 'round', name: 'Round Tail', image: '/api/placeholder/150/200' },
    { id: 'square', name: 'Square Tail', image: '/api/placeholder/150/200' }
  ]

  const woodOptions = [
    { value: 'maple', label: 'Maple' },
    { value: 'poplar', label: 'Poplar' },
    { value: 'meranti', label: 'Meranti' },
    { value: 'oak', label: 'Oak' },
    { value: 'purple-heart', label: 'Purple Heart' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleValveSelect = (valveId) => {
    setFormData(prev => ({
      ...prev,
      valve: valveId
    }))
  }

  const handleShapeSelect = (shapeId) => {
    setFormData(prev => ({
      ...prev,
      shape: shapeId
    }))
  }

  const handleWoodChange = (value) => {
    setFormData(prev => ({
      ...prev,
      wood: value
    }))
  }

  const handleLengthChange = (value) => {
    setFormData(prev => ({
      ...prev,
      length: value
    }))
  }

  const formatLength = (length) => {
    const feet = Math.floor(length)
    const inches = Math.round((length - feet) * 12)
    return `${feet}'${inches}"`
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Surfboard Shower Order Submitted!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for your custom surfboard shower order. We'll contact you within 24 hours 
              to discuss design details, timeline, and installation options.
            </p>
            <Button onClick={() => {
              setIsSubmitted(false)
              setFormData({
                name: '',
                email: '',
                valve: '',
                shape: '',
                wood: '',
                length: [6.5]
              })
            }}>
              Create Another Order
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
            Custom Surfboard Showers
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your outdoor space with a custom surfboard-shaped shower. 
            Choose from premium materials and finishes to create a unique piece that combines 
            functionality with surf culture aesthetics.
          </p>
        </div>

        {/* Features */}
        <div className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Why Choose Our Surfboard Showers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Droplets className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Materials</h3>
              <p className="text-gray-600 text-sm">
                High-quality wood options and marine-grade hardware for durability and beauty.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-teal-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Waves className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Custom Shapes</h3>
              <p className="text-gray-600 text-sm">
                Choose from classic surfboard tail shapes to match your style and space.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold text-lg">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600 text-sm">
                Handcrafted by experienced artisans who understand both form and function.
              </p>
            </div>
          </div>
        </div>

        {/* Order Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
                <Waves className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Design Your Surfboard Shower</CardTitle>
              <CardDescription>
                Customize every detail to create the perfect outdoor shower for your space.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Info */}
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

                {/* Valve Options */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Valve Finish *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {valveOptions.map((valve) => (
                      <div
                        key={valve.id}
                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-all ${
                          formData.valve === valve.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleValveSelect(valve.id)}
                      >
                        <div className="w-full h-20 bg-gray-100 rounded mb-2 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Valve Image</span>
                        </div>
                        <p className="text-sm font-medium">{valve.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Surfboard Shape */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Surfboard Shape *</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {shapeOptions.map((shape) => (
                      <div
                        key={shape.id}
                        className={`cursor-pointer border-2 rounded-lg p-4 text-center transition-all ${
                          formData.shape === shape.id
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleShapeSelect(shape.id)}
                      >
                        <div className="w-full h-32 bg-gray-100 rounded mb-2 flex items-center justify-center">
                          <span className="text-xs text-gray-500">Shape Image</span>
                        </div>
                        <p className="text-sm font-medium">{shape.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wood Type */}
                <div className="space-y-2">
                  <Label htmlFor="wood" className="text-lg font-semibold">Wood Type *</Label>
                  <Select value={formData.wood} onValueChange={handleWoodChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select wood type" />
                    </SelectTrigger>
                    <SelectContent>
                      {woodOptions.map((wood) => (
                        <SelectItem key={wood.value} value={wood.value}>
                          {wood.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Board Length */}
                <div className="space-y-4">
                  <Label className="text-lg font-semibold">Board Length *</Label>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>5'10"</span>
                      <span className="font-semibold text-lg text-blue-600">
                        {formatLength(formData.length[0])}
                      </span>
                      <span>7'6"</span>
                    </div>
                    <Slider
                      value={formData.length}
                      onValueChange={handleLengthChange}
                      min={5.83} // 5'10"
                      max={7.5}  // 7'6"
                      step={0.08} // 1 inch increments
                      className="w-full"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.valve || !formData.shape || !formData.wood}
                >
                  {isSubmitting ? 'Submitting Order...' : 'Submit Custom Order'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Process Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Custom Order Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">1</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Design</h3>
              <p className="text-gray-600 text-sm">
                Submit your custom specifications and we'll create a detailed design.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Quote</h3>
              <p className="text-gray-600 text-sm">
                Receive a detailed quote with materials, labor, and timeline.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Craft</h3>
              <p className="text-gray-600 text-sm">
                Expert craftsmanship brings your custom shower to life.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold text-lg">4</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Install</h3>
              <p className="text-gray-600 text-sm">
                Professional installation ensures perfect function and finish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

