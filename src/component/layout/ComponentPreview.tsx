"use client";
import { ComponentType } from "@/lib/utils/types";
import { Tabs } from "mogora-ui";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import React from "react";
import { SubTitle } from "../fragments/title";

interface ComponentPreviewProps {
  data: ComponentType;
}

function ComponentPreview({ data }: ComponentPreviewProps) {
  return (
    <div>
      <SubTitle className="pl-2">{data.name}</SubTitle>
      <Tabs defaultValue="preview">
        <Tabs.List className="w-max">
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="preview">preview</Tabs.Content>
        <Tabs.Content value="code" className="w-full">
          <CodeMirror
            className="w-full"
            minHeight="72vh"
            value={data.code}
            extensions={[javascript({ jsx: true })]}
            theme={vscodeDark}
            basicSetup={{ lineNumbers: true }}
            readOnly
          />
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export default ComponentPreview;
