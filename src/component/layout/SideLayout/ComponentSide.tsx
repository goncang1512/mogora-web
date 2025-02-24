import Link from "next/link";
import React from "react";

function ComponentSide() {
  return (
    <div className="md:flex hidden z-50 fixed border-r border-gray-300 h-screen left-0 w-64 pt-14">
      <ComponentLink />
    </div>
  );
}

const ComponentsLinks = [
  "accordion",
  "avatar",
  "badge",
  "button",
  "card",
  "checkbox",
  "input",
  "label",
  "modal",
  "popover",
  "select",
  "sheet",
  "table",
  "textarea",
  "toggle",
  "tabs",
];

const sortedComponentsLinks = [...ComponentsLinks].sort();

export const ComponentLink = () => {
  return (
    <div className="flex flex-col gap-2 text-base py-2 px-0 md:px-10">
      {sortedComponentsLinks?.map((name: string, index: number) => (
        <Link key={index} href={`/components/${name}`} className="capitalize">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ComponentSide;
