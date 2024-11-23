interface CustomDropdownProps {
    selectedTable: string;
    setSelectedTable: (table: string) => void;
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
}

export default function CustomDropdown({ selectedTable, setSelectedTable, dropdownOpen, setDropdownOpen }: CustomDropdownProps) {
    return (
        <div className="relative">
            <div
                className="w-full p-2 bg-white rounded-md cursor-pointer text-gray-800 hover:scale-105 transition-transform duration-200"
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                {selectedTable || "Tischnummer auswählen"}
            </div>
            {dropdownOpen && (
                <div className="absolute left-0 w-full bg-white shadow-md rounded-md mt-2 z-20">
                    {["1", "2", "3", "4"].map((num) => (
                        <div
                            key={num}
                            className="p-2 hover:bg-gray-100 cursor-pointer"
                            onClick={() => {
                                setSelectedTable(num);
                                setDropdownOpen(false);
                            }}
                        >
                            Tisch {num}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}