"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ComponentsLinks = ["create", "template", "product", "setting"];

const styleBorderRight =
  "after:content-[''] after:w-[2.5px] after:absolute after:h-full after:bg-gray-600 after:py-1 after:top-0 after:rounded-sm after:-left-[2.5px] after:z-[9999]";

function SideDashboard() {
  const pathaname = usePathname();
  return (
    <div className="md:flex bg-white hidden z-50 fixed border-r border-gray-300 h-screen left-0 w-72 pt-14">
      <div className="overflow-y-auto w-full overflow-x-hidden scroll-bar pl-22">
        <h1 className="text-base font-bold pt-5 ml-2">Dashboard</h1>
        <div className="flex flex-col gap-2 text-base w-full overflow-y-visible border-l-3 border-gray-200 ml-1 md:ml-3 mb-10">
          {ComponentsLinks?.map((name: string, index: number) => (
            <Link
              key={index}
              href={`/dashboard/${name}`}
              className={`${
                pathaname === `/dashboard/${name}` && `py-1 ${styleBorderRight}`
              } capitalize px-2 md:px-5 font-medium text-gray-600 relative z-[51]`}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideDashboard;
