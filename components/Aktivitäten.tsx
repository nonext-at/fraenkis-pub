'use client'

import { MicVocal, Baby, Beer, X, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

export default function Aktivitäten() {
    const [selectedActivity, setSelectedActivity] = useState(null)

    const activities = [
        {
            icon: MicVocal,
            title: 'Karaoke Abend',
            date: 'Jeden ersten Donnerstag',
            image: '/karaoke.jpeg',
            description: 'Erlebe einen spaßigen Karaoke-Abend mit Freunden und Familie. Mikrofone werden gestellt!',
        },
        {
            icon: Baby,
            title: 'Family Nachmittag',
            date: '1h gratis Billiard - Jeden dritten Sonntag (13:00 - 18:00)',
            image: '/family_billiard.jpg',
            description: 'Ein entspannter Nachmittag für die ganze Familie mit Spielen und Snacks.',
        },
        {
            icon: Beer,
            title: 'Frühschoppen',
            date: 'Jeden ersten Sonntag (10:00 - 14:00)',
            image: '/fruehschoppen.jpg',
            description: 'Genießen Sie ein herzhaftes Frühstück und frische Getränke in geselliger Runde.',
        },
    ]

    return (
        <>
            <section id="aktivitäten" className="py-20 relative bg-white skew-y-3 -mt-20 shadow-md">
                <div className="container mx-auto px-6 -skew-y-3">
                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Aktivitäten &amp; Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {activities.map(({ icon: Icon, title, date, image, description }) => (
                            <motion.div
                                key={title}
                                className="select-none bg-gray-50 rounded-lg shadow-md hover:shadow-blue-200 transition-all duration-200 overflow-hidden"
                                whileHover={{ scale: 1.02 }} 
                                onClick={() => setSelectedActivity({ title, date, image, description })}
                            >
                                <div className="relative h-56 w-full cursor-pointer">
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

            <AnimatePresence>
                {selectedActivity && (
                    <motion.div
                        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => setSelectedActivity(null)}
                    >
                        <motion.div
                            className="bg-white rounded-lg shadow-2xl max-w-lg w-full overflow-hidden"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="relative h-64 w-full">
                                <Image
                                    src={selectedActivity.image}
                                    alt={selectedActivity.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <button
                                    className="absolute top-4 right-4 text-white hover:text-gray-200 focus:outline-none z-30 bg-black/30 p-2 rounded-full transition-colors duration-200"
                                    onClick={() => setSelectedActivity(null)}
                                >
                                    <X size={24} />
                                </button>
                            </div>
                            <motion.div
                                className="p-6"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">{selectedActivity.title}</h3>
                                <p className="text-gray-600 mb-4 flex items-center">
                                    <Calendar className="mr-2 h-5 w-5" />
                                    {selectedActivity.date}
                                </p>
                                <p className="text-gray-700">{selectedActivity.description}</p>
                                <motion.button
                                    className="mt-6 w-full bg-[#0163AB] text-white py-2 px-4 rounded-md hover:bg-[#034f87] transition-colors duration-200"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedActivity(null)}
                                >
                                    Schließen
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}