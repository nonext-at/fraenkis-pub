'use client'
import { Button } from "@/components/ui/button"
// @ts-ignore
import { ChevronDown, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function FrankisPub() {
  const spieleLosRef = useRef<HTMLElement>(null)
  const zeitenRef = useRef<HTMLElement>(null)

  const scrollToSpieleLos = () => {
    spieleLosRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToZeiten = () => {
    zeitenRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0763a9] to-[#044575]">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/markus.jpg"
              alt="Fränkis Pub Atmosphäre"
              fill
              className="opacity-60 object-cover blur-lg"
              sizes="100vw"
              priority
            />
          </div>
        </div>
        <div className="relative z-10 text-center text-white w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Image
            src="/logo_white.png"
            alt="Fränkis Pub Atmosphäre"
            className="mix-blend-multiply mx-auto mb-8 drop-shadow-[0_0_30px_rgba(0,0,0,0.8)]"
            width={0}
            draggable={false}
            height={0}
            sizes="100vw"
            style={{ width: '40vw', height: 'auto', maxWidth: '375px' }}
          >
          </Image>
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 tracking-tight">Fränkis Pub</h1>
          <p className="text-xl sm:text-2xl mb-8 font-medium text-blue-100">Ein Lokal, nicht nur für Billard Fans.</p>
          <Button onClick={scrollToZeiten} className="bg-white text-[#0763a9] hover:bg-blue-50 transition-colors duration-300 text-lg py-3 px-8 rounded-full font-semibold">
            Öffnungszeiten
          </Button>
        </div>
        <motion.div
          className="absolute bottom-8 transform -translate-x-1/2 z-10 cursor-pointer"
          initial={{ y: 0 }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          onClick={scrollToSpieleLos}
        >
          <ChevronDown className="w-12 h-12 text-white hover:text-blue-300 transition-colors" />
          <span className="sr-only">Scroll nach unten</span>
        </motion.div>
      </section>

      {/* Games Section */}
      <section ref={spieleLosRef} id="spiele-los" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Unsere Angebote</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Bar", description: "Genießen Sie unsere Auswahl an Craft-Bieren und Cocktails", image: "/bar.jpg" },
              { name: "Billard", description: "Fordern Sie Ihre Freunde zu einer Partie an unseren Profi-Tischen heraus", image: "/billard.jpg" },
              { name: "Air Hockey", description: "Blitzschnelle Reflexe und Spaß garantiert!", image: "/airhockey.jpg" },
              { name: "Tischfußball", description: "Zeigen Sie Ihre Fähigkeiten an unseren Turnier-Kickertischen", image: "/tischfussball.jpg" },
              { name: "Darts", description: "Treffen Sie ins Schwarze mit unseren professionellen Dartscheiben", image: "/darts.jpg" },
              { name: "Flipperautomat", description: "Klassischer Spielspaß mit unserer Auswahl an Flipperautomaten", image: "/pinball.jpg" },
            ].map((game, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="relative h-48">
                  <Image
                    src={game.image}
                    alt={game.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{game.name}</h3>
                  <p className="text-gray-600">{game.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours Section */}
      <section ref={zeitenRef} className="py-24 bg-gradient-to-br from-[#0763a9] to-[#044575] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 tracking-tight">Öffnungszeiten</h2>
          <p className="text-center text-lg mb-8">Besuchen Sie uns und genießen Sie eine tolle Atmosphäre!</p>
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            {[
              { days: "Geöffnet jeden Tag", hours: "19:00 - 02:00 Uhr" },
            ].map((schedule, index) => (
              <div key={index} className="flex justify-between items-center mb-4 last:mb-0 text-lg">
                <span className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt"></i> {schedule.days}
                </span>
                <span className="font-semibold">{schedule.hours}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-white/80">
            <p>Sonderöffnungszeiten an Feiertagen & Events – aktuelle Infos findest Du auf unserem <a target="_blank" rel="noreferrer" href="https://www.instagram.com/fraenkis_lustenau/" className="underline">Instagram</a>-Kanal.</p>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center sm:mb-8 mb-16 tracking-tight">Besondere Veranstaltungen</h2>
          <div className="space-y-12 sm:space-y-24">
            {[
              {
                name: "Karaoke-Nächte",
                description: "Zeigen Sie Ihre Gesangskünste jeden Mittwoch ab 20 Uhr. Egal ob Sie ein Gesangstalent sind oder einfach nur Spaß haben wollen, unsere Karaoke-Nächte sind für jeden geeignet.",
                bgImage: "/karaoke.jpg",
              },
              {
                name: "Halloween-Party",
                description: "Feiern Sie mit uns am 31. Oktober. Verkleiden Sie sich als Ihre Lieblingsfigur aus Horrorfilmen oder -büchern und gewinnen Sie bei unseren Spiele- und Tanzwettbewerben tolle Preise.",
                bgImage: "/halloween.png",
              },

            ].map((event, index) => (
              <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-12`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={event.bgImage}
                      alt={event.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-2 sm:space-y-4">
                  <h3 className="text-2xl font-bold">{event.name}</h3>
                  <p className="text-gray-600 text-lg">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 tracking-tight">Kontakt</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: MapPin,
                title: "Adresse",
                content: "Widum 19, 6890 Lustenau",
                link: "https://maps.google.com/?q=Fränkis+Pub+Lustenau"
              },
              {
                icon: Phone,
                title: "Telefon",
                content: "+43 676 3807111",
                link: "tel:+436763807111"
              },
              {
                icon: Mail,
                title: "E-Mail",
                content: "info@frankis-pub.at",
                link: "mailto:info@frankis-pub.at"
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="block bg-white py-6 px-4 md:p-8 rounded-xl shadow-md text-center"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#0763a9]" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-[#044575] text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-6 text-white">© 2024 Fränkis Pub. Alle Rechte vorbehalten.</p>
          <div className="flex justify-center space-x-6">
            {[
              { icon: Facebook, label: "Facebook", link: 'https://www.facebook.com/fraenkislustenau' },
              { icon: Instagram, label: "Instagram", link: 'https://www.instagram.com/fraenkis_lustenau/' },
            ].map((social, index) => (
              <Link key={index} rel="noreferrer" target="_blank" href={social.link} className="text-white hover:text-white transition-colors">
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