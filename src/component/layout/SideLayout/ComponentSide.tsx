import Link from "next/link";
import React from "react";

function ComponentSide() {
  return (
    <div className="md:flex hidden z-50 fixed border-r border-gray-300 h-screen left-0 w-64 pt-14">
      <div className="flex flex-col gap-2 text-base p-2 font-medium">
        <Link href="/component/accordion">Accordion</Link>
        <Link href="/component/badge">Badge</Link>
      </div>
    </div>
  );
}

export default ComponentSide;
