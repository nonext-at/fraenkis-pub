import { Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className="fixed w-full z-40 bg-white bg-opacity-80 backdrop-blur-md shadow-md">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                <div className="flex items-center">

                    <Image
                        draggable={false}
                        src="/logo_blue.png"
                        alt="Logo"
                        width={100}
                        height={40}
                        priority
                        className="select-none mx-auto drop-shadow-[0_0_3px_rgba(0,0,0,0.2)]"
                        style={{
                            width: "100px", // Explicitly set width
                            height: "40px", // Explicitly set height
                        }}
                    />


                </div>
                <nav>
                    <ul className="lg:flex space-x-7 hidden">
                        {['Home', 'Aktivitäten', 'Öffnungszeiten', 'Anfahrt', 'Reservieren', 'Kontakt'].map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    className="text-md font-bold mb-10 text-center text-gray-800 hover:text-[#0163AB] transition-all duration-300"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="flex space-x-4">
                    <Link href="https://www.instagram.com/fraenkis_lustenau/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="h-6 w-6 text-gray-600 hover:text-[#0163AB] duration-300 transition-all" />
                    </Link>
                    <Link href="https://www.facebook.com/fraenkislustenau" target="_blank" rel="noopener noreferrer">
                        <Facebook className="h-6 w-6 text-gray-600 hover:text-[#0163AB] duration-300 transition-all" />
                    </Link>
                </div>
            </div>
        </header>
    )
}