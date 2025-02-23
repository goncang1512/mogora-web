import Mobilebar from "@/component/layout/Mobilebar";
import Sidebar from "@/component/layout/SideLayout/Sidebar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      <Mobilebar />
      <div className="flex-1 min-h-screen pl-0 md:pl-64 pt-14">{children}</div>
      <div className="flex-none w-[25%] md:flex hidden"></div>
    </div>
  );
}

export default Layout;
