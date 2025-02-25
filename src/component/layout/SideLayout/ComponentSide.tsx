import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ComponentSide() {
  return (
    <div className="md:flex bg-white hidden z-50 fixed border-r border-gray-300 h-screen left-0 w-72 pt-14">
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
  const pathaname = usePathname();
  return (
    <div className="flex flex-col gap-2 text-base py-2 px-3 w-full">
      {sortedComponentsLinks?.map((name: string, index: number) => (
        <Link
          key={index}
          href={`/components/${name}`}
          className={`${
            pathaname === `/components/${name}` && "bg-gray-100"
          } capitalize px-0 md:px-10 py-0.5 rounded-md`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ComponentSide;
