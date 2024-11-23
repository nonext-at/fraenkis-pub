import { MapboxMap } from "@/utils/mapboxConfig";
import { MapPin } from 'lucide-react'

export default function Anfahrt() {
    return (
        <section id="anfahrt" className="py-20 bg-white skew-y-3 relative z-20 shadow-md">
            <div className="container mx-auto px-6 -skew-y-3">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Anfahrt</h2>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                    <div className="w-full md:w-1/2">
                        <MapboxMap />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <a href="https://maps.google.com/?q=Fränkis+Pub+Lustenau" target="_blank" rel="noopener noreferrer" className="text-[#0163AB] hover:underline"><MapPin className="inline mr-2" />Widum 19, 6890 Lustenau</a>
                        <p className="text-gray-600">Parken ist auf dem Kiesplatz neben dem Lokal möglich, ansonsten beim <br /> Spar auf dem öffentlichen Parkplatz.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}