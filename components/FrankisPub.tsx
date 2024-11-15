'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Beer, Dices, Music, Calendar, Clock } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function FrankisPub() {
  const spieleLosRef = useRef<HTMLElement>(null)
  const zeitenRef = useRef<HTMLElement>(null)

  const scrollToSpieleLos = () => {
    spieleLosRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToZeiten = () => {
    zeitenRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const games = [
    { name: "Bar", image: "/bar.jpg", icon: Beer },
    { name: "Billard", image: "/billard.jpg", icon: Dices },
    { name: "Air Hockey", image: "/airhockey.jpg", icon: Dices },
    { name: "Tischfußball", image: "/tischfussball.jpg", icon: Dices },
    { name: "Darts", image: "/darts.jpg", icon: Dices },
    { name: "Flipperautomat", image: "/pinball.jpg", icon: Dices },
  ]

  const events = [
    { name: "Karaoke-Nächte", description: "Jeden ersten Donnerstag des Monats", image: "/karaoke.jpg" },
    { name: "Family Nachmittag", description: "Jeden dritten Sonntag - 1h gratis Billiard", image: "/family_billiard.jpg" },
    { name: "Frühschoppen", description: "Jeden ersten Sonntag von 10:00 - 14:00", image: "/fruehschoppen.jpg" },
  ]

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date()
      const day = now.getDay()
      const hour = now.getHours()
      setIsOpen((hour >= 19 || hour < 2))
    }

    checkIfOpen()
    const interval = setInterval(checkIfOpen, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 ">
          <div className="absolute inset-0 w-full h-full">
            <Image draggable={false}
              src="/salva.jpg"
              alt="Fränkis Pub Atmosphäre"
              fill
              className="object-cover blur-sm select-none"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="relative z-10 text-center text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image draggable={false}
            src="/logo_white.png"
            alt="Fränkis Pub Logo"
            className="mix-blend-multiply select-none mx-auto mb-8 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '40vw', height: 'auto', maxWidth: '375px' }}
          />
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">Fränkis Pub</h1>
          <p className="text-xl sm:text-2xl mb-8 font-medium text-gray-200">Ein Lokal, nicht nur für Billard Fans.</p>
          <Button onClick={scrollToZeiten} className="bg-white text-gray-600 hover:bg-gray-50 transition-colors duration-300 text-lg py-3 px-8 rounded-full font-semibold">
            Öffnungszeiten
          </Button>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToSpieleLos}
        >
          <ChevronDown className="w-12 h-12 text-white hover:text-gray-300 transition-colors" />
          <span className="sr-only">Scroll nach unten</span>
        </motion.div>
      </section>

      {/* Games Section */}
      <section ref={spieleLosRef} id="spiele-los" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-gray-900">Unsere Angebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64">
                    <Image
                      src={game.image}
                      alt={game.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-white">{game.name}</h3>
                      <game.icon className="w-8 h-8 text-white opacity-75" />
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="oeffnungszeiten" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-gray-900">Öffnungszeiten</h2>
          <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.2)] overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Beer className="w-12 h-12" />
                <h3 className="text-3xl font-bold">Wann kannst du uns besuchen?</h3>
                <Clock className="w-12 h-12" />
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Reguläre Öffnungszeiten</h4>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg">Jeden Tag von <b>19:00 - 02:00</b></span>
                    {/* <span className="text-lg font-medium">19:00 - 02:00 Uhr</span> */}
                  </div>
                  <div className={`inline-block py-2 px-4 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold`}>
                    {isOpen ? 'Jetzt geöffnet' : 'Derzeit geschlossen'}
                  </div>
                  <p className="mt-4 text-sm text-gray-600 italic">
                    Wer früher kommt, kann länger trinken!
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-4">Sonderöffnungszeiten</h4>
                  <p className="mb-4">
                    An Feiertagen und für spezielle Events können unsere Öffnungszeiten variieren.
                  </p>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>Aktuelle Updates:</span>
                  </div>
                  <Link 
                    href="https://www.instagram.com/fraenkis_lustenau/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-gray-200 text-black py-2 px-4 rounded-full hover:bg-opacity-90 transition-colors duration-300"
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    <span>Folge uns auf Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-gray-900">Besondere Veranstaltungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={event.image}
                      alt={event.name}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
                      <h3 className="text-2xl font-bold text-white mb-2">{event.name}</h3>
                      <p className="text-md text-white font-medium">
                        {event.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 z-0 bg-gradient-to-t from-black/70 to-transparent p-12"></div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours and Contact Section */}
      <section id="kontakt" className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-gray-900">Kontakt</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.1)] overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Kontaktiere uns</h3>
                <ul className="space-y-4">
                  <li>
                    <a href="tel:+436763807111" className="flex items-center group">
                      <div className="bg-gray-100 p-3 rounded-full shadow-md mr-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Telefon</p>
                        <p className="text-lg font-medium">+43 676 3807111</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:info@frankis-pub.at" className="flex items-center group">
                      <div className="bg-gray-100 p-3 rounded-full shadow-md mr-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <Mail className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">E-Mail</p>
                        <p className="text-lg font-medium">info@frankis-pub.at</p>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="https://maps.google.com/?q=Fränkis+Pub+Lustenau" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                      <div className="bg-gray-100 p-3 rounded-full shadow-md mr-4 group-hover:bg-gray-200 transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Adresse</p>
                        <p className="text-lg font-medium">Widum 19, 6890 Lustenau</p>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Folge uns</h3>
                <p className="mb-6 text-gray-600">Bleib auf dem Laufenden über unsere neuesten Events und Angebote!</p>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://www.facebook.com/fraenkislustenau" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-gray-100 px-4 py-2 rounded-full shadow-md text-gray-600 hover:bg-gray-200 transition-colors duration-300 w-full"
                  >
                    <Facebook className="w-5 h-5 mr-3" />
                    <span>Besuche uns auf Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/fraenkis_lustenau/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-gray-100 px-4 py-2 rounded-full shadow-md text-gray-600 hover:bg-gray-200 transition-colors duration-300 w-full"
                  >
                    <Instagram className="w-5 h-5 mr-3" />
                    <span>Folge uns auf Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-6 text-gray-400">© 2024 Fränkis Pub. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Facebook, label: "Facebook", link: 'https://www.facebook.com/fraenkislustenau' },
              { icon: Instagram, label: "Instagram", link: 'https://www.instagram.com/fraenkis_lustenau/' },
            ].map((social, index) => (
              <Link key={index} href={social.link} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <social.icon className="w-6 h-6" />
                <span className="sr-only">{social.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}