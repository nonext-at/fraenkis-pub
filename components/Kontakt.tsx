import { MapPin, Phone, Mail } from 'lucide-react'
import { motion } from "framer-motion";
import EmailLink from "./EmailLink";
import { useEffect, useState } from 'react';


export default function Kontakt() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isBot, setIsBot] = useState<boolean>(false);

    const [emailValid, setEmailValid] = useState(true);
    const [allowSubmit, setAllowSubmit] = useState(false);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(regex.test(email));
        return regex.test(email);
    };

    useEffect(() => {
        if (isBot) {
            setAllowSubmit(false);
            console.error("Bot detected!");
        }
        if (name.trim() && email.trim() && message.trim() && validateEmail(email)) setAllowSubmit(true)
        else setAllowSubmit(false)
    }, [name, email, message, isBot]);

    return (
        <section id="kontakt" className="py-20 bg-white relative z-0 shadow-md">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Kontakt</h2>
                <div className="flex flex-col md:flex-row justify-around items-center gap-8">
                    <div className="space-y-4">
                        <a className="flex items-center text-gray-600 hover:underline" href="tel:+436763807111"><Phone className="mr-2 text-[#0163AB]" /> +43 676 3807111</a>
                        <span className="flex items-center text-gray-600 hover:underline"><Mail className="mr-2 text-[#0163AB]" /> <EmailLink /></span>
                        <a className="flex items-center text-gray-600 hover:underline" href="https://maps.google.com/?q=Fränkis+Pub+Lustenau"><MapPin className="mr-2 text-[#0163AB]" /> Widum 19, 6890 Lustenau</a>
                    </div>
                    <div className="w-full md:w-1/2 max-w-md">
                        <form className="space-y-4">
                            <input
                                type="checkbox"
                                placeholder="Validation"
                                onChange={(e) => setIsBot(e.target.checked)}
                                hidden
                            />
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className={"w-full p-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200 " + (!emailValid && "border-red-500")}
                                onChange={(e) => setEmail(e.target.value)}
                                onBlur={(e) => validateEmail(e.target.value)}
                                required
                            />
                            <textarea
                                placeholder="Nachricht"
                                rows={4}
                                className="w-full p-2 border bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                            <motion.button
                                type="submit"
                                className={"w-full bg-gradient-to-r from-[#0163AB] to-[#267fbe] text-white font-semibold py-2 rounded-md hover:scale-105 transition-all duration-200" + (!allowSubmit && " opacity-60")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Nachricht senden
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}