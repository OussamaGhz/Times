"use client";
import React, { Children } from "react";
import SideBar from "../ui/dashboard/sidebar";
import { useSession, getSession, signOut } from "next-auth/react";
import { redirect } from "next/navigation";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") {
    redirect("/login");
  }
  return (
    <div className="flex justify-between w-screen">
      <div className=" bg-white">
        <SideBar />
        <button onClick={() => signOut()}>Logout</button>
      </div>
      <div className="flex-4">{children}</div>
    </div>
  );
};

export default Layout;
