"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Select, Tabs } from "mogora-ui";
import React from "react";

const SelectCode: string = `
import { Select } from "mogora-ui";

export default function SelectDemo() {
  return (
    <Select className="w-sm">
      <Select.Trigger>Options</Select.Trigger>
      <Select.Content>
        <Select.Item value="options-1">Option 1</Select.Item>
        <Select.Item value="options-2">Option 2</Select.Item>
        <Select.Item value="options-3">Option 3</Select.Item>
        <Select.Item value="options-4">Option 4</Select.Item>
      </Select.Content>
    </Select>
  )
}
`;

function SelectPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Button</h1>
      <Tabs defaultValue="preview" variant={"underline"}>
        <Tabs.List className="gap-0">
          <Tabs.Trigger value="preview" className="font-semibold">
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger value="code" className="font-semibold">
            Code
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="preview"
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh] overflow-auto"
        >
          {/* COPONENT */}
          <Select className="w-sm">
            <Select.Trigger>Options</Select.Trigger>
            <Select.Content>
              <Select.Item value="options-1">Option 1</Select.Item>
              <Select.Item value="options-2">Option 2</Select.Item>
              <Select.Item value="options-3">Option 3</Select.Item>
              <Select.Item value="options-4">Option 4</Select.Item>
            </Select.Content>
          </Select>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(SelectCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{SelectCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </Container>
  );
}

export default SelectPage;
