"use client";
import Mobilebar from "@/component/layout/Mobilebar";
import ComponentSide from "@/component/layout/SideLayout/ComponentSide";
import React from "react";
import GlobalProvider from "@/lib/context/GlobalProvider";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <div className="flex">
        <ComponentSide />
        <Mobilebar />
        <div className="flex-1 min-h-screen pl-0 md:pl-64 pt-14">
          {children}
        </div>
        <div className="flex-none w-[30%] md:flex hidden"></div>
      </div>
    </GlobalProvider>
  );
}

export default Layout;
