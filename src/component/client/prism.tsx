"use client";
import React, { HTMLAttributes, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "@/lib/code.css";
import { twClass } from "mogora-ui";

interface codeBlokProps extends HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
  language?: string;
}

export const CodeBlock = ({
  children,
  className,
  language = "language-jsx",
  ...props
}: codeBlokProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <pre
      suppressHydrationWarning
      className={twClass(
        "w-full h-[60vh] overflow-auto px-2 rounded-md",
        className
      )}
      {...props}
    >
      <code className={language}>{children}</code>
    </pre>
  );
};
