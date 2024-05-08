import Calendar from "@/app/ui/calendar";
import React from "react";

const EmploiPage = () => {
  const information = [
    // Example data
    { day: "Dimanche", slot: 1, info: "Meeting with Client A" },
    { day: "Jeudi", slot: 2, info: "Team Standup Meeting" },
    { day: "Mardi", slot: 3, info: "Project Presentation" },
  ];
  return (
    <div>
      <Calendar info={information} />
    </div>
  );
};

export default EmploiPage;
