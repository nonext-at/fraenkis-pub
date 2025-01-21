'use client'
import { motion } from "framer-motion";
import CustomDropdown from "./ui/CustomDropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import StatusFeedback from "./StatusFeedback";
import TimePicker from "./TimePicker";

const months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

export default function BillardForm() {

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth'
        return () => {
            document.documentElement.style.scrollBehavior = 'auto'
        }
    }, [])
    const [selectedDate, setSelectedDate] = useState("");
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState<boolean>(true)
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [selectedTable, setSelectedTable] = useState("");
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isBot, setIsBot] = useState<boolean>(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [allowSubmit, setAllowSubmit] = useState<boolean>(false)
    const [selectedTime, setSelectedTime] = useState("")

    useEffect(() => {
        if (isBot) {
            setAllowSubmit(false)
            console.error("Bot detected!")
        }
        if (name.trim() && email.trim() && phone.trim() && selectedTable.trim() && validateEmail(email)) {
            setAllowSubmit(true)
        } else {
            setAllowSubmit(false)
        }
    }, [name, email, phone, selectedTable, isBot])

    useEffect(() => {
        const today = new Date();
        setSelectedDate(
            `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(
                2,
                "0"
            )}-${String(today.getDate()).padStart(2, "0")}`
        );
    }, []);

    useEffect(() => {
        if (selectedTable && selectedDate && email.trim() && name.trim() && phone && validateEmail(email)) setAllowSubmit(true)
        else setAllowSubmit(false)
    }, [selectedTable, selectedDate, email, name, phone, emailValid]);

    const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

    const generateDays = () => {
        const days = [];
        for (let i = 1; i <= daysInMonth(selectedMonth, selectedYear); i++) {
            days.push(i);
        }
        return days;
    };

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmailValid(regex.test(email));
        return regex.test(email);
    };

    const [status, setStatus] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!allowSubmit) return

        setStatus("Sending...")

        try {
            const response = await axios.post("/api/billiard", {
                name,
                email,
                phone,
                selectedDate,
                selectedTime,
                selectedTable,
            })

            if (response.status === 200) {
                setStatus("Message sent successfully!")
                setName("")
                setEmail("")
                setPhone("")
                setSelectedDate("")
                setSelectedTime("")
                setSelectedTable("")
            } else {
                setStatus(`Error: ${response.data.message}`)
            }
        } catch (error) {
            console.error(error)
            setStatus("Error: Failed to send message.")
        }
    }

    return (
        <section
            id="reservieren"
            className="py-20 bg-gray-200 -skew-y-3 relative z-10"
        >
            <div className="container mx-auto px-6 -skew-y-3 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold mb-2 text-center text-gray-800">
                    Billiard Tisch reservieren
                </h2>
                <p className="text-sm max-w-[50rem] mx-auto mb-6 text-center text-gray-400">Wir bemühen uns, Ihren gewünschten Tisch bereitzustellen. Bitte beachten Sie jedoch, dass die Auswahl eines bestimmten Tisches nicht garantiert werden kann. Ein Tisch wird in jedem Fall für Sie freigehalten.</p>
                <div className="w-full max-w-md pl-24">
                    <StatusFeedback status={status} />
                </div>
                <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
                    <input type="checkbox" placeholder="Validation" onChange={(e) => setIsBot(e.target.checked)} hidden />
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className={"w-full p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200 " + (!emailValid && "border-red-500")}
                        required
                        value={email}
                        onBlur={(e) => validateEmail(e.target.value)}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="tel"
                        placeholder="Telefonnummer"
                        className="w-full p-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 hover:scale-105 transition-transform duration-200"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {/* Custom Date Picker */}
                    <div className="relative">
                        <div
                            onClick={() => setIsDatePickerOpen(!isDatePickerOpen)}
                            className="w-full p-2 bg-white rounded-md cursor-pointer text-gray-800 hover:scale-105 transition-transform duration-200"
                        >
                            {selectedDate || "Datum auswählen"}
                        </div>
                        {isDatePickerOpen && (
                            <div
                                className="absolute w-full bg-white shadow-md rounded-md mt-2 p-4 z-50 overflow-y-auto max-h-64"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <button
                                        onClick={() =>
                                            setSelectedMonth(
                                                (prev) => (prev === 0 ? 11 : prev - 1)
                                            )
                                        }
                                        className="p-2 bg-gray-200 rounded-md"
                                    >
                                        &lt;
                                    </button>
                                    <span className="font-semibold text-gray-800">
                                        {months[selectedMonth]} {selectedYear}
                                    </span>
                                    <button
                                        onClick={() =>
                                            setSelectedMonth(
                                                (prev) => (prev === 11 ? 0 : prev + 1)
                                            )
                                        }
                                        className="p-2 bg-gray-200 rounded-md"
                                    >
                                        &gt;
                                    </button>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {generateDays().map((day) => (
                                        <div
                                            key={day}
                                            className={`p-2 ${selectedDate ===
                                                `${selectedYear}-${String(selectedMonth + 1).padStart(
                                                    2,
                                                    "0"
                                                )}-${String(day).padStart(2, "0")}`
                                                ? "bg-blue-500 text-white"
                                                : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                                                } text-center cursor-pointer rounded-md`}
                                            onClick={() => {
                                                setSelectedDate(
                                                    `${selectedYear}-${String(
                                                        selectedMonth + 1
                                                    ).padStart(2, "0")}-${String(day).padStart(2, "0")}`
                                                );
                                                setIsDatePickerOpen(false);
                                            }}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <TimePicker selectedTime={selectedTime} setSelectedTime={setSelectedTime}  />
                    <CustomDropdown
                        selectedTable={selectedTable}
                        setSelectedTable={setSelectedTable}
                        dropdownOpen={dropdownOpen}
                        setDropdownOpen={setDropdownOpen}
                    />
                    <motion.button
                        type="submit"
                        className={"w-full bg-gradient-to-r from-[#0164ab] to-[#267fbe] text-white font-semibold py-2 rounded-md hover:scale-105 transition-all duration-200" + (!allowSubmit && " opacity-60")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={!allowSubmit}

                    >
                        Reservieren
                    </motion.button>
                </form>
            </div>
        </section >
    )
}