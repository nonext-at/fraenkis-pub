import { Instagram, Facebook } from 'lucide-react'
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-800 py-8 relative z-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-sm text-center">&copy; {new Date().getFullYear()} Fränkis. Alle Rechte vorbehalten.</p>
                    <p className="text-center text-gray-500 text-sm">
                        Made with 🖤 by <a href="https://www.nonext.at/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors duration-300">nonext.at</a>
                    </p>
                    <div className="flex items-center space-x-6">
                        <Link 
                            href="https://www.instagram.com/fraenkis_lustenau/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Besuchen Sie uns auf Instagram"
                            className="text-gray-600 hover:text-[#0163AB] transition-colors duration-300"
                        >
                            <Instagram className="h-6 w-6" />
                        </Link>
                        <Link 
                            href="https://www.facebook.com/fraenkislustenau" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="Besuchen Sie uns auf Facebook"
                            className="text-gray-600 hover:text-[#0163AB] transition-colors duration-300"
                        >
                            <Facebook className="h-6 w-6" />
                        </Link>
                    </div> 
                </div>
            </div>
        </footer>
    )
}