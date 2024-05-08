import PageContainer from "./dashboard/page-container";

const timeSlots = [
  { slot: 1, time: "8h:00 - 9h:30" },
  { slot: 2, time: "9h:40 - 9h:30" },
  { slot: 3, time: "11h:20 - 12h:50" },
  { slot: 4, time: "13h:00 - 14h:30" },
  { slot: 5, time: "14h:40 - 16h:10" },
  { slot: 6, time: "16h:10 - 17h:50" },
];

const className = "border min-w-36 py-5 px-3 w-28";

type props = {
  day: string;
  slot: number;
  info: string;
};

const Calendar = ({ info }: { info: props[] }) => {
  return (
    <PageContainer>
      <div className="flex justify-center items-center p-10 text-[#556476]">
        <div className="overflow-x-auto max-h-[701] bg-white">
          <table className="table-auto border-collapse border">
            <thead className="bg-[#FAFAFA]">
              <tr>
                <th className=" w-2">
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
              {[
                "Diamnche",
                "Lundi",
                "Mardi",
                "Mercredi",
                "Jeudi",
                "Samedi",
              ].map((day) => (
                <tr key={day}>
                  <td className="py-10 w-2 text-center min-h-20 bg-[#FAFAFA]">
                    <div className="-rotate-90 font-semibold text-variable-collection-typography-2nd text-[14px]">
                      {day}
                    </div>
                  </td>
                  {timeSlots.map((time) => (
                    <td
                      key={time.slot}
                      className={`${className} min-h-20  border-dotted`}
                    >
                      {/* info for each cell */}
                      {info.map((item: props) => {
                        if (item.day === day && item.slot === time.slot) {
                          return (
                            <div
                              key={`${item.day}-${time.slot}`}
                              className="mt-2 flex justify-center items-center "
                            >
                              <span className="font-bold">{time.time}: </span>
                              {item.info}
                            </div>
                          );
                        }
                        return null;
                      })}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageContainer>
  );
};

export default Calendar;
