"use client";
import React from "react";
import { ComponentDocs, ComponentLink } from "./LinkComponent";

function ComponentSide() {
  return (
    <div className="md:flex bg-white hidden z-50 fixed border-r border-gray-300 h-screen left-0 w-72 pt-14 pb-2">
      <div className="overflow-y-auto w-full overflow-x-hidden scroll-bar pl-22">
        <h1 className="text-base font-bold pt-5 ml-2">Getting Started</h1>
        <ComponentDocs />
        <h1 className="text-base font-bold pt-5 ml-2">Components</h1>
        <ComponentLink />
      </div>
    </div>
  );
}

export default ComponentSide;
