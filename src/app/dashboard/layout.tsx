import Mobilebar from "@/component/layout/Mobilebar";
import SideDashboard from "@/component/layout/SideLayout/SideDashboard";
import GlobalProvider from "@/lib/context/GlobalProvider";
import { getPathname } from "@/lib/utils/pathname";
import React, { ReactNode } from "react";

const rightPadding = ["/dashboard/setting"];

async function Layout({ children }: { children: ReactNode }) {
  const pathname = await getPathname();

  return (
    <GlobalProvider>
      <div className="flex">
        <SideDashboard />
        <Mobilebar />
        <div className="flex-1 min-h-screen pl-0 md:pl-72 pt-14 overflow-x-hidden">
          {children}
        </div>
        <div
          className={`flex-none ${
            rightPadding.includes(pathname) ? "w-[30%]" : "w-[10%]"
          } md:flex hidden`}
        ></div>
      </div>
    </GlobalProvider>
  );
}

export default Layout;
