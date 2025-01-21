import React, { useState } from 'react';

interface TimePickerProps {
  selectedTime: string;
  setSelectedTime: (time: string) => void;
}

const TimePicker: React.FC<TimePickerProps> = ({ selectedTime, setSelectedTime }) => {
  const [isOpen, setIsOpen] = useState(false);

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 19; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 bg-white rounded-md cursor-pointer text-gray-800 hover:scale-105 transition-transform duration-200"
      >
        {selectedTime || "Uhrzeit auswählen"}
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white shadow-md rounded-md mt-2 p-4 z-50 overflow-y-auto max-h-64">
          <div className="grid grid-cols-4 gap-2">
            {timeSlots.map((time) => (
              <div
                key={time}
                className={`p-2 ${
                  selectedTime === time
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-blue-500 hover:text-white"
                } text-center cursor-pointer rounded-md`}
                onClick={() => {
                  setSelectedTime(time);
                  setIsOpen(false);
                }}
              >
                {time}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
