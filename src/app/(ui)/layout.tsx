"use client";
import Mobilebar from "@/component/layout/Mobilebar";
import SideDashboard from "@/component/layout/SideLayout/SideDashboard";
import GlobalProvider from "@/lib/context/GlobalProvider";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const rightPadding = ["/dashboard/setting"];

function Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const stylePadding = rightPadding.includes(pathname) ? "w-[30%]" : "w-[10%]";

  return (
    <GlobalProvider>
      <div className="flex">
        <Mobilebar />
        <SideDashboard />
        <div className="flex-1 min-h-screen pl-0 md:pl-72 pt-14 overflow-x-hidden">
          {children}
        </div>
        <div className={`flex-none ${stylePadding} md:flex hidden`}></div>
      </div>
    </GlobalProvider>
  );
}

export default Layout;
