import { Clock1Icon, MoreHorizontal, Thermometer } from "lucide-react";
import PageContainer from "../dashboard/page-container";
import ClockIcon from "../icon/clock";
import Lecture from "./lecture-item";
import TD from "./td-item";
import TP from "./tp-item";

const timeSlots = [
  { slot: 1, time: "8h:00 - 9h:30" },
  { slot: 2, time: "9h:40 - 11h:10" },
  { slot: 3, time: "11h:20 - 12h:50" },
  { slot: 4, time: "13h:00 - 14h:30" },
  { slot: 5, time: "14h:40 - 16h:10" },
  { slot: 6, time: "16h:10 - 17h:50" },
];

const className = "border w-[160.774px] max-w-[170.774px] px-1 max-h-24"; // Static height and width

const Calendar = () => {
  return (
    <div className="flex justify-center items-center text-[#556476]">
      <div className=" max-h-[701px] bg-white">
        <table className="table-auto border-collapse border ">
          <thead className="bg-[#FAFAFA]">
            <tr>
              <th className="w-2 rotate-45">
                <span className="text-[8px]">Crenaux</span>
                <hr />
                <span className="text-[8px]">Jours</span>
              </th>
              {timeSlots.map((time) => (
                <th
                  key={time.slot}
                  className={`${className} font-semibold text-[14px] tracking-[0] leading-[normal] border-0`}
                >
                  {time.time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Samedi"].map(
              (day, index) => (
                <tr key={index}>
                  <td className="py-10 w-2 text-center min-h-20 bg-[#FAFAFA]">
                    <div className="-rotate-90 font-semibold text-variable-collection-typography-2nd text-[14px]">
                      {day}
                    </div>
                  </td>
                  {timeSlots.map((time) => (
                    <td
                      key={time.slot}
                      className={`${className} border-dotted overflow-hidden`}
                    >
                    
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
