import { MapPin, Instagram, Facebook, Waves } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-2 rounded-lg">
                <Waves className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">Mulholland Repairs</div>
                <div className="text-sm text-gray-400">Paddlesports Specialists</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              The Seacoast's only paddlesports focused repair shop, specializing in 
              e-foil boards, surfboards, SUPs, kayaks, and custom electrical art.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>72 Coffin Ave</div>
                  <div>Marianna's Marina, Unit A15</div>
                  <div>Haverhill, MA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Mulholland Repairs IG</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Mulholland Repairs Facebook</span>
              </a>
              <a 
                href="#" 
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Mulholland High Voltage IG</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mulholland Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

