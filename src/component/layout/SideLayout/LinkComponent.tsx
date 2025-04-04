"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

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
  "drawer",
];

const sortedComponentsLinks = [...ComponentsLinks].sort();

const styleBorderRight =
  "after:content-[''] after:w-[2.5px] after:absolute after:h-full after:bg-gray-600 after:py-1 after:top-0 after:rounded-sm after:-left-[2.5px] after:z-[9999]";

export const ComponentLink = () => {
  const pathaname = usePathname();
  return (
    <div className="flex flex-col gap-2 text-base w-full overflow-y-visible border-l-3 border-gray-200 ml-1 md:ml-3 mb-10">
      {sortedComponentsLinks?.map((name: string, index: number) => (
        <Link
          key={index}
          href={`/components/${name}`}
          className={`${
            pathaname === `/components/${name}` && `py-1 ${styleBorderRight}`
          } capitalize px-2 md:px-5 font-medium text-gray-600 relative z-[51]`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

// DOCS COMPONENT LINK
const DocsLink = ["introduction", "installation"];

export const ComponentDocs = () => {
  const pathaname = usePathname();

  return (
    <div className="flex flex-col gap-2 text-base w-full overflow-y-visible border-l-3 border-gray-200 ml-1 md:ml-3">
      {DocsLink?.map((name: string, index: number) => (
        <Link
          key={index}
          href={`/docs/${name}`}
          className={`${
            pathaname === `/docs/${name}` && `py-1 ${styleBorderRight}`
          } capitalize px-2 md:px-5 font-medium text-gray-600 relative z-[51]`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

// DASHBOARD COMPONENT LINK
const DashboardLink = ["create", "product", "setting"];

export function DashboardComponent() {
  const pathaname = usePathname();
  return (
    <div className="flex flex-col gap-2 text-base w-full overflow-y-visible border-l-3 border-gray-200 ml-1 md:ml-3">
      {DashboardLink?.map((name: string, index: number) => (
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
  );
}

// UI COMPONENT LINK
const UILINK = ["template", "layout"];
export function UiComponent() {
  const pathaname = usePathname();

  return (
    <div className="flex flex-col gap-2 text-base w-full overflow-y-visible border-l-3 border-gray-200 ml-1 md:ml-3">
      {UILINK?.map((name: string, index: number) => (
        <Link
          key={index}
          href={`/${name}`}
          className={`${
            pathaname === `/${name}` && `py-1 ${styleBorderRight}`
          } capitalize px-2 md:px-5 font-medium text-gray-600 relative z-[51]`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
