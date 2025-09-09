import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { RepairPage } from './pages/RepairPage'
import { SurfboardShowersPage } from './pages/SurfboardShowersPage'
import { HighVoltageArtPage } from './pages/HighVoltageArtPage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import './App.css'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/repair" element={<RepairPage />} />
            <Route path="/surfboard-showers" element={<SurfboardShowersPage />} />
            <Route path="/high-voltage-art" element={<HighVoltageArtPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

