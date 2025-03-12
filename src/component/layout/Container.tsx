"use client";
import { twClass } from "mogora-ui";
import React from "react";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={twClass("pr-3 py-3 pl-3 md:pl-10", className)}>
      {children}
    </div>
  );
}

export default Container;
