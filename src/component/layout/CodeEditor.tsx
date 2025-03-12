"use client";
import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";

function CodeEditor({
  content,
  setContent,
  codeRef,
}: {
  content: string;
  setContent: (value: string) => void;
  codeRef: any;
}) {
  return (
    <CodeMirror
      ref={codeRef}
      className="min-h-screen"
      onChange={(value) => setContent(value)}
      value={content}
      height="auto"
      extensions={[javascript({ jsx: true })]}
      theme={vscodeDark}
      basicSetup={{ lineNumbers: true }}
    />
  );
}

export default CodeEditor;
