'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Clock, MapPin, Phone, Mail, Calendar, Target, PhoneIcon as WhatsApp, Instagram, Facebook, BeerIcon, MicVocal, Baby, Beer } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

// Replace with your actual Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWFpa2VydWRldiIsImEiOiJjbTEwaDJuZ3owZ3ZvMmlzNGRzZ3Y5OHl1In0.Gk1Lnu_x8a-Kc6ZyUzmlbg'

function MapboxMap() {
  const mapContainer = useRef(null)
  const map = useRef(null)
  const [lng] = useState(9.658043250341874)
  const [lat] = useState(47.43140631762227)
  const [zoom] = useState(8)

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: zoom
    });
  
    // Add navigation control (the +/- zoom buttons)
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
  
    const el = document.createElement('div');
    el.style.backgroundImage = 'url("/pin.png")';
    el.style.width = '30px'; // Set your image dimensions
    el.style.height = '50px';
    el.style.backgroundSize = 'cover'; // Ensure the image covers the div

    // Add a marker at the specified location
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat([lng, lat])
      .addTo(map.current);
  
    // Smoothly zoom in to the marker after the map loads
    map.current.on('load', () => {
      map.current.flyTo({
        center: [lng, lat],
        zoom: 18, // Target zoom level
        speed: 0.1, // Adjust the speed of the zoom
        curve: 1.5, // Makes the zoom more dramatic
        easing: (t) => t // Linear easing
      });
    });
  }, [lng, lat, zoom]);
  

  return <div ref={mapContainer} className="map-container skew-y-3 h-[400px] w-full rounded-lg shadow-md" />
}

export default function Component() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  /* useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    controls.start({
      x: cursorPosition.x - 20,
      y: cursorPosition.y - 20,
      transition: { type: 'spring', mass: 0.1, stiffness: 10000 },
    })
  }, [cursorPosition, controls]) */

  const [isLoading, setIsLoading] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = 'auto'
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 overflow-hidden cursor-none">
      {/* <motion.div
        className="hidden sm:block fixed text-4xl pointer-events-none z-50"
        animate={controls}
        style={{ userSelect: 'none' }}
      >
        🎱
      </motion.div> */}
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
        <header className="fixed w-full z-40 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <div className="flex items-center"> 
              <span className="text-xl font-bold text-gray-800">Fränkis Pub</span>
            </div>
            <nav>
              <ul className="sm:flex space-x-6 hidden">
                {['Home', 'Aktivitäten', 'Öffnungszeiten', 'Anfahrt', 'Kontakt', 'Reservieren'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-md font-bold mb-10 text-center text-gray-800 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transition-transform duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/fraenkis_lustenau/" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transition-transform duration-200" />
              </Link>
              <Link href="https://www.facebook.com/fraenkislustenau" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6 text-gray-600 hover:text-blue-600 transition-colors duration-300 hover:scale-105 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </header>
        <main className='bg-gradient-to-br from-blue-100 via-indigo-100 to-sky-100'>
          <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-indigo-200 to-sky-200 opacity-70" />
            <div className="absolute inset-0" />
            <div className="text-center z-10">
              <Image draggable={false} src={"/logo.png"} className='select-none mx-auto mb-6 drop-shadow-[0_0_25px_white]' width={300} height={300} alt=''></Image>
              <h1 className="select-none text-4xl sm:text-5xl text-white font-bold drop-shadow-lg">
                Willkommen im <br />
                <span className="select-none text-6xl sm:text-7xl bg-gradient-to-r from-[#0163AB] drop-shadow-[0_0_15px_white] to-[#2674ac] text-transparent bg-clip-text">
                  Fränkis Pub
                </span>
              </h1>
            </div>
          </section>

          <section id="aktivitäten" className="py-20 bg-white skew-y-3 -mt-20 shadow-md">
          <div className="container mx-auto px-6 -skew-y-3">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Aktivitäten &amp; Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: MicVocal, 
                  title: 'Karaoke Abend', 
                  date: 'Jeden ersten Donnerstag', 
                  image: '/karaoke.jpeg'
                },
                { 
                  icon: Baby, 
                  title: 'Family Nachmittag', 
                  date: 'Jeden dritten Sonntag (13:00 - 18:00)', 
                  image: '/family_billiard.jpg'
                },
                { 
                  icon: Beer, 
                  title: 'Frühschoppen', 
                  date: 'Jeden ersten Sonntag (10:00 - 14:00)', 
                  image: '/fruehschoppen.jpg'
                },
              ].map(({ icon: Icon, title, date, image }) => (
                <motion.div
                  key={title}
                  className="select-none bg-gray-50 rounded-lg shadow-md hover:shadow-blue-200 transition-shadow duration-300 hover:scale-105 transition-transform duration-200 overflow-hidden"
                  whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-48 w-full">
                    <Image 
                      src={image} 
                      alt={title} 
                      layout="fill" 
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{title}</h3>
                      <p className="text-sm">{date}</p>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <Icon className="w-8 h-8 text-[#0163AB]" />
                    <button className="px-4 py-2 bg-[#0163AB] text-white rounded-md hover:bg-[#267fbe] transition-colors duration-300">
                      Mehr Info
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

          <section id="öffnungszeiten" className="py-20 bg-gray-200 -skew-y-3 relative z-10 shadow-md">
            <div className="container mx-auto px-6 -skew-y-3">
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Öffnungszeiten</h2>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span className="font-semibold">Jeden Tag:</span>
                    <span>19:00 - 02:00</span>
                  </li> 
                </ul>
              </div>
            </div>
          </section>

          <section id="anfahrt" className="py-20 bg-white skew-y-3 relative z-20 shadow-md">
            <div className="container mx-auto px-6 -skew-y-3">
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Anfahrt</h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-full md:w-1/2">
                  <MapboxMap />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-[#0163AB]"><MapPin className="inline mr-2" />Widum 19, 6890 Lustenau</p> 
                  <p className="text-gray-600">Parken ist auf dem Kiesplatz neben dem Lokal möglich, ansonsten beim <br /> Spar auf dem öffentlichen Parkplatz.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="whatsapp" className="py-20 bg-gray-200 -skew-y-3 relative z-10">
            <div className="container mx-auto px-6 -skew-y-3">
              <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Tritt unserer <span className='text-[#0163AB]'>WhatsApp</span>-Gruppe bei</h2>
              <div className="flex flex-col items-center">
                <Image
                  draggable={false}
                  src="/qr.png"
                  alt="WhatsApp QR-Code"
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md mb-4"
                />
                <p className="text-gray-600 text-center">Scanne diesen QR-Code mit deinem Handy, um unserer WhatsApp-Gruppe beizutreten <br /> und über Events und Aktionen auf dem Laufenden zu bleiben!</p>
              </div> 
          </div>
        </section>

        <section id="kontakt" className="py-20 bg-white skew-y-3 relative z-20 shadow-md">
          <div className="container mx-auto px-6 -skew-y-3">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Kontakt</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8">
              <div className="space-y-4">
                <p className="flex items-center text-gray-600"><Phone className="mr-2 text-[#0163AB]" /> +43 676 3807111</p>
                <p className="flex items-center text-gray-600"><Mail className="mr-2 text-[#0163AB]" /> info@fränkis.at</p>
                <p className="flex items-center text-gray-600"><MapPin className="mr-2 text-[#0163AB]" /> Widum 19, 6890 Lustenau</p> 
              </div>
              <div className="w-full md:w-1/2 max-w-md">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="cursor-none w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="cursor-none w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                    required
                  />
                  <textarea
                    placeholder="Nachricht"
                    rows={4}
                    className="cursor-none w-full p-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                    required
                  ></textarea>
                  <motion.button
                    type="submit"
                    className="cursor-none w-full bg-gradient-to-r from-[#0163AB] to-[#267fbe] text-white font-semibold py-2 rounded-md transition-colors duration-300 hover:scale-105 transition-transform duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Nachricht senden
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="reservieren" className="py-20 bg-gray-200 -skew-y-3 relative z-10">
          <div className="container mx-auto px-6 -skew-y-3">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Billiard Tisch reservieren</h2>
            <form className="max-w-md mx-auto space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              />
              <input
                type="tel"
                placeholder="Telefonnummer"
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              />
              <input
                type="date"
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              />
              <input
                type="time"
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              />
              <select
                className="cursor-none w-full p-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                required
              >
                <option value="">Tischnummer</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <motion.button
                type="submit"
                className="cursor-none w-full bg-gradient-to-r from-[#0164ab] to-[#267fbe] text-white font-semibold py-2 rounded-md transition-colors duration-300 hover:scale-105 transition-transform duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  handleClick()
                }}
              >
                Reservieren
              </motion.button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 text-black font-bold py-6 relative z-30">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Fränkis. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://www.instagram.com/fraenkis_lustenau/" target="_blank" rel="noopener noreferrer">
              <Instagram className="cursor-none h-6 w-6 text-black hover:text-blue-400 transition-colors duration-300 hover:scale-105 transition-transform duration-200" />
            </Link>
            <Link href="https://www.facebook.com/fraenkislustenau" target="_blank" rel="noopener noreferrer">
              <Facebook className="cursor-none h-6 w-6 text-black hover:text-blue-400 transition-colors duration-300 hover:scale-105 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
    </div >
  )
}