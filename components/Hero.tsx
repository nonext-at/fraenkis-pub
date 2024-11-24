'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Hero({ whatsapp, news }) {
    const [popupVisible, setPopupVisible] = useState(true)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)

        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <section id="home" className="h-screen flex items-center justify-center relative overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover blur-md"
                src="/bg-video.mp4"
                //@ts-ignore
                type="video/webm"
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute inset-0 bg-blue-400/60 opacity-40" />

            <div className="text-center z-10">
                <Image draggable={false} src={"/logo_white.png"} className='select-none mx-auto mb-6 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]' width={300} height={300} alt=''></Image>
                <h1 className="select-none text-4xl sm:text-5xl text-white font-bold drop-shadow-lg">
                    Willkommen im <br />
                    <span className="select-none text-6xl sm:text-7xl drop-shadow-[0px_0px_15px_rgba(0,0,0,0.5)] text-white bg-clip-text">
                        Fränkis Pub
                    </span>
                </h1>
            </div>

            {popupVisible && (
                <motion.div
                    initial={{ opacity: 0, y: isMobile ? 20 : -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: isMobile ? 20 : -50 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`fixed ${
                        isMobile ? 'bottom-4 left-4 right-4' : 'top-24 right-10 max-w-lg'
                    } bg-gradient-to-r from-gray-100/90 to-gray-200/90 text-black px-3 sm:px-8 py-3 sm:py-4 rounded-lg shadow-lg flex items-center gap-2 sm:gap-6 z-50`}
                >
                    <div className="flex-1">
                        <p className="text-sm sm:text-lg font-bold mb-0 sm:mb-2">
                        🎉 {news.titel}
                        </p>
                        <p className="text-xs sm:text-base">
                            {news.text}
                            <a
                                href={'#aktivitäten'}
                                onClick={() => setPopupVisible(false)}
                                className="ml-1 sm:ml-2 text-black underline font-bold hover:text-gray-600 transition-colors duration-300"
                            >
                                Mehr anzeigen
                            </a>
                        </p>
                    </div>
                    <button
                        onClick={() => setPopupVisible(false)}
                        className="text-black text-lg sm:text-2xl hover:text-gray-600 transition-colors duration-300 focus:outline-none"
                    >
                        ✕
                    </button>
                </motion.div>
            )}

            <Image
                draggable={false}
                src={whatsapp['qr-code']}
                alt="WhatsApp QR-Code"
                width={120}
                height={120}
                className="rounded-lg shadow-md mb-4 absolute bottom-24 left-6 lg:bottom-28 xl:bottom-36 skew-y-3 hidden md:block"
            />

            <a href={whatsapp['link']} target='_blank' className="md:flex skew-y-3 absolute bottom-28 left-40 lg:bottom-32 xl:bottom-36 rounded-full p-2 bg-white/60 items-center text-white leading-none lg:rounded-full hidden" role="alert">
                <span className="flex rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3">Neu</span>
                <span className="font-semibold mr-2 text-left flex-auto">Tritt unserer Whatsapp Gruppe bei</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </a>

            <a href={whatsapp.link} target='_blank' className="md:hidden absolute top-24 rounded-full p-2 bg-green-400/60 items-center text-white leading-none lg:rounded-full flex" role="alert">
                <span className="flex rounded-full bg-green-400 uppercase px-2 py-1 text-xs font-bold mr-3">Neu</span>
                <span className="font-semibold mr-2 text-left flex-auto">Tritt unserer Whatsapp Gruppe bei</span>
                <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
            </a>
        </section>
    )
}