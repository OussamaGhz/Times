import React, { Children } from "react";
import SideBar from "../ui/dashboard/sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-screen">
      <div className="flex-1">
        <SideBar />
      </div>
      <div className="flex-4">{children}</div>
    </div>
  );
};

export default Layout;
