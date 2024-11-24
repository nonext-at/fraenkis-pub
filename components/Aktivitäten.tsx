import { MicVocal, Baby, Beer, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Aktivitäten() {
    const [selectedActivity, setSelectedActivity] = useState(null);

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
    ];

    return (
        <section id="aktivitäten" className="py-20 bg-white skew-y-3 -mt-20 shadow-md">
            <div className="container mx-auto px-6 -skew-y-3">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Aktivitäten &amp; Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {activities.map(({ title, date, image, description }) => (
                        <motion.div
                            key={title}
                            className="select-none bg-gray-50 rounded-lg shadow-md hover:shadow-blue-200 transition-all duration-200 overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
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

            {/* Modal */}
            <AnimatePresence>
                {selectedActivity && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => setSelectedActivity(null)}
                    >
                        <div className="-skew-y-3">
                            <motion.div
                                className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                {/* Close Icon */}
                                <button
                                    className="absolute top-2 right-1 text-black hover:text-gray-800 focus:outline-none z-30"
                                    onClick={() => setSelectedActivity(null)}
                                >
                                    <X size={24} />
                                </button>

                                <div className="relative h-40 w-full mb-4">
                                    <Image
                                        src={selectedActivity.image}
                                        alt={selectedActivity.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-lg"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold mb-2">{selectedActivity.title}</h3>
                                <p className="text-gray-600 mb-4">{selectedActivity.date}</p>
                                <p className="text-gray-700">{selectedActivity.description}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
