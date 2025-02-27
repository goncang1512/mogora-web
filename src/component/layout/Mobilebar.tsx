"use client";
import { Sheet } from "mogora-ui";
import Link from "next/link";
import React from "react";
import { AlignLeft } from "lucide-react";
import { ComponentDocs, ComponentLink } from "./SideLayout/LinkComponent";
import { usePathname } from "next/navigation";

function Mobilebar() {
  const pathname = usePathname();
  return (
    <div className="bg-white border-b border-gray-300 h-14 z-50 w-full fixed top-0">
      <div className="flex items-center md:justify-start justify-between gap-5 h-full px-5">
        <Link href={"/"} className="font-bold text-xl">
          Mogora UI
        </Link>
        <div className="gap-2 items-center md:flex hidden">
          {pathname === "/" && (
            <>
              <Link href={"/docs"}>Docs</Link>
              <Link href="/components">Components</Link>
            </>
          )}
          <Link href={"/"}>Template</Link>
        </div>
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
      </div>
    </div>
  );
}

export default Mobilebar;
