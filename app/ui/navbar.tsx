import React from "react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-white flex items-center px-7">
      <Image src={logo} alt="logo" />
    </div>
  );
};

export default Navbar;
