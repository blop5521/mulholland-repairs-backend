import { MapPin, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/repair', label: 'Repair Services' },
    { path: '/surfboard-showers', label: 'Surfboard Showers' },
    { path: '/high-voltage-art', label: 'High Voltage Art' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <div className="p-2">
              <img
                src="/Mulholland-Logo2-Color1000px.png"
                alt="Mulholland Repairs Logo"
                className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 object-contain"
              />
            </div>
              <div>
                <div className="font-bold text-xl">Mulholland Repairs</div>
                <div className="text-sm text-gray-400">Paddlesports Specialists</div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              The Seacoast's only paddlesports focused repair shop, specializing in 
              e-foil boards, surfboards, SUPs, kayaks, and custom Lichtenberg art.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact & Location</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=72+Coffin+Ave,+Haverhill,+MA"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics="footer-address"
                  className="text-gray-300 hover:text-blue-400 transition-colors leading-relaxed"
                >
                  <span className="block">72 Coffin Ave</span>
                  <span className="block">Marianna's Marina, Unit A15</span>
                  <span className="block">Haverhill, MA</span>
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.instagram.com/mulholland_repairs/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Mulholland Repairs IG</span>
              </a>
              <a 
                href="https://www.instagram.com/mulholland_high_voltage_art/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span>Mulholland High Voltage IG</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block text-gray-300 hover:text-blue-400 transition-colors text-sm"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Mulholland Repairs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

