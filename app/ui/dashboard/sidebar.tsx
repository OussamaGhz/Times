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

import { MenuSection } from "./sidebar-server"; // Import server component

import { XIcon, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
const SideBar = () => {
  //

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
    {
      title: "User",
      list: [
        {
          title: "Settings",
          path: "/dashboard/settings",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Help",
          path: "/dashboard/help",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];

  const pathname = usePathname();

  return (
    <div className=" flex bg-white border-b-4 max-w-262 z-50">
      <div
        className={`w-80 space-y-6 pl-2 py-7 absolute inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out mt-10 bg-inherit z-10`}
      >
        <nav>
          <ul className="py-5 w-full">
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
        <div className="shadow px-4 py-4">
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
