export default function Öffnungszeiten() {
    return (
        <section id="öffnungszeiten" className="py-20 bg-gray-200 -skew-y-3 relative z-20 shadow-md">
            <div className="container mx-auto px-6 -skew-y-3">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Öffnungszeiten</h2>
                <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
                    <ul className="space-y-2">
                        <li className="flex justify-between">
                            <span className="font-semibold">Jeden Tag:</span>
                            <span>19:00 - 02:00</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}