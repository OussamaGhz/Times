"use client";

import React, { useState } from "react";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
} from "react-icons/md";

import DashboardIcon from "../icon/dashboard";
import TeacherIcon from "../icon/teacher";

import { MenuSection } from "./sidebar-server"; // Import server component

import { XIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
const SideBar = () => {
  //

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Menu",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <DashboardIcon />,
        },
        {
          title: "Enseignants",
          path: "/dashboard/users",
          icon: <TeacherIcon />,
        },
        {
          title: "Salles",
          path: "/dashboard/products",
          icon: <DashboardIcon />,
        },
        {
          title: "Sections",
          path: "/dashboard/transactions",
          icon: <DashboardIcon />,
        },
      ],
    },
    {
      title: "Emplois du temps",
      list: [
        // TODO: this should be a Drowdown
        {
          title: "Annees Universitaires",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <div className=" flex bg-white border-b-4 md:max-w-209 z-50 h-screen relative shadow-r-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div
        className={`w-80 space-y-6 absolute inset-y-0 left-0 transform  rounded-lg ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10  bg-inherit z-10`}
      >
        <nav>
          <ul className="w-full">
            {menuItems.map((section) => (
              <MenuSection
                key={section.title}
                section={section}
                activePath={pathname}
              />
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-1 block md:hidden">
        <div className="shadow py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-gray-500 focus:outline-none md:hidden"
            >
              {isSidebarOpen ? (
                <XIcon className="h-5 w-5" />
              ) : (
                <MenuIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
