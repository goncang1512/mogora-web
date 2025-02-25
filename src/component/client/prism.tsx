"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import "@/lib/code.css";

export const CodeBlock = ({ children }: { children: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [children]);

  return (
    <pre
      suppressHydrationWarning
      className="w-full h-[60vh] overflow-auto px-2 rounded-md"
    >
      <code className="language-jsx">{children}</code>
    </pre>
  );
};
