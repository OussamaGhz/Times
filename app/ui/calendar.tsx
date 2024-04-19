import React from 'react';

const names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const days = [30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 1, 2];

function Calendar() {
  return (
    <div className="calendar-container bg-white shadow rounded-lg max-w-6xl mx-auto p-0 overflow-hidden">
      <div className="calendar-header bg-gradient-to-b from-gray-50 to-transparent border-b border-gray-200 text-center p-5">
        <h1 className="text-lg m-0">November <button className="bg-transparent border-none p-0 text-gray-600 cursor-pointer">▾</button></h1>
        <p className="mt-1 text-sm font-semibold text-gray-500">2018</p>
      </div>
      <div className="calendar grid grid-cols-7 grid-rows-6">
        {names.map((name, index) => (
          <span key={index} className="day-name uppercase text-sm text-gray-400 border-b border-gray-200 text-center leading-[50px] font-medium">{name}</span>
        ))}
        {days.map((day, index) => (
          <div key={index} className={`day text-right p-4 text-sm box-border text-gray-400 ${index === 0 || index === 1 || index === 33 || index === 34 ? "day--disabled cursor-not-allowed bg-white" : ""}`}>
            {day}
          </div>
        
        ))}
      </div>
  
    </div>
  );
}
 
export default Calendar;
