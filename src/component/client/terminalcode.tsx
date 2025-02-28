"use client";
import React, { HTMLAttributes, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/command-line/prism-command-line.css";
import "prismjs/plugins/command-line/prism-command-line.js";
import "@/lib/styles/code.css";
import { twClass } from "mogora-ui";

interface TerminalBlockProps extends HTMLAttributes<HTMLPreElement> {
  children: React.ReactNode;
}

export const TerminalBlock = ({
  children,
  className,
  ...props
}: TerminalBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <pre
      suppressHydrationWarning
      className={twClass(
        "command-line w-full h-[60vh] overflow-auto px-4 py-3 rounded-md bg-black text-white",
        className
      )}
      data-prompt="$"
      {...props}
    >
      <code className="language-bash">{children}</code>
    </pre>
  );
};
