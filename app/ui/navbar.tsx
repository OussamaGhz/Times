"use client";

import React, { useEffect, useState } from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const dateString = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "2-digit",
      });

      const timeString = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      // Combine the date and time strings with a dash in between
      const formattedString = `${dateString} - ${timeString.toLowerCase()}`;
      setCurrentTime(formattedString);
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-[100px] bg-white flex items-center px-7 w-screen justify-between">
      <Image src={logo} alt="logo" />
      <span className="text-[#001D74] gap-4 text-[20px] font-[600] hidden lg:block">
        {currentTime}
      </span>
      <div className="flex items-center ">
        <button className="bg-blue-500  px-4 py-2 rounded-lg">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
