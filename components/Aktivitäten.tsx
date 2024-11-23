import { MicVocal, Baby, Beer } from 'lucide-react'
import { motion } from "framer-motion";
import Image from 'next/image'



export default function Aktivitäten() {
    return (
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
                            date: '1h gratis Billiard - Jeden dritten Sonntag (13:00 - 18:00)',
                            image: '/family_billiard.jpg'
                        },
                        {
                            icon: Beer,
                            title: 'Frühschoppen',
                            date: 'Jeden ersten Sonntag (10:00 - 14:00)',
                            image: '/fruehschoppen.jpg'
                        },
                    ].map(({ title, date, image }) => (
                        <motion.div
                            key={title}
                            className="select-none bg-gray-50 rounded-lg shadow-md hover:shadow-blue-200 hover:scale-105 transition-all duration-200 overflow-hidden"
                            whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="relative h-56 w-full">
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
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}