
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'
import Test from './pages/Test'
import Experiences from './pages/Experiences'
import HowItWorks from './pages/HowItWorks'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onLoadComplete={handleLoadComplete} />
  }

  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/experiences" element={<Experiences />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App
