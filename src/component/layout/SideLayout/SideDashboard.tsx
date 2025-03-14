"use client";
import React from "react";
import { DashboardComponent, UiComponent } from "./LinkComponent";

function SideDashboard() {
  return (
    <div className="md:flex bg-white hidden fixed border-r border-gray-300 h-screen left-0 w-72 pt-14">
      <div className="overflow-y-auto w-full overflow-x-hidden scroll-bar pl-22">
        <h1 className="text-base font-bold pt-5 ml-2">Dashboard</h1>
        <DashboardComponent />
        <h1 className="text-base font-bold ml-2 pt-5">UI</h1>
        <UiComponent />
      </div>
    </div>
  );
}

export default SideDashboard;
