'use client'
import BillardForm from '@/components/BillardReservieren'
import Öffnungszeiten from '@/components/Öffnungszeiten'
import Aktivitäten from '@/components/Aktivitäten'
import { useState, useEffect } from 'react'
import Kontakt from '@/components/Kontakt'
import Anfahrt from '@/components/Anfahrt'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import 'mapbox-gl/dist/mapbox-gl.css'
import Hero from '@/components/Hero'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden ">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex space-x-2">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 bg-white rounded-full"
                animate={{
                  y: [0, -10, 0],
                  backgroundColor: ['#fff', '#f00', '#fff'],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        </div>
      )}

      <div>
        <Header />
        <main className='bg-gray-100'>
          <Hero />
          <Aktivitäten />
          <Öffnungszeiten />
          <Anfahrt />
          <BillardForm />
          <Kontakt />
        </main>
        <Footer />
      </div>

    </div >
  )
}