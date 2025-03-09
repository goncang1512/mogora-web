import Mobilebar from "@/component/layout/Mobilebar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Mobilebar />
      <div className="pt-14">{children}</div>
    </div>
  );
}

export default Layout;
