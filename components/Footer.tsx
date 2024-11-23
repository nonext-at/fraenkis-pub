import { Instagram, Facebook } from 'lucide-react'
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-black font-bold py-6 relative z-0">
            <div className="container mx-auto px-6 text-center">
                <p>&copy; 2024 Fränkis. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <Link href="https://www.instagram.com/fraenkis_lustenau/" target="_blank" rel="noopener noreferrer">
                        <Instagram className=" h-6 w-6 text-black hover:text-[#0163AB] transition-all duration-300" />
                    </Link>
                    <Link href="https://www.facebook.com/fraenkislustenau" target="_blank" rel="noopener noreferrer">
                        <Facebook className=" h-6 w-6 text-black hover:text-[#0163AB] transition-all duration-300" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}