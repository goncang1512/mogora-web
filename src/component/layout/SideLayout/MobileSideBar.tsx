"use client";
import { AlignLeft } from "lucide-react";
import { Sheet } from "mogora-ui";
import Link from "next/link";
import React from "react";
import { ComponentDocs, ComponentLink } from "./LinkComponent";

function MobileSideBar() {
  return (
    <Sheet>
      <Sheet.Trigger className="cursor-pointer md:hidden flex">
        <AlignLeft />
      </Sheet.Trigger>
      <Sheet.Content className="bg-white opacity-100 w-[70%] overflow-y-auto overflow-x-hidden">
        <div className="gap-2 items-start flex flex-col">
          <Link href={"/docs"}>Docs</Link>
          <Link href="/components">Components</Link>
          <Link href={"/"}>Template</Link>
        </div>
        <h1 className="text-base font-bold pt-5">Getting Started</h1>
        <ComponentDocs />
        <h1 className="text-base font-bold pt-5">Components</h1>
        <ComponentLink />
      </Sheet.Content>
    </Sheet>
  );
}

export default MobileSideBar;
