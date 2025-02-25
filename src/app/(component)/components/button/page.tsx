"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Select, Tabs } from "mogora-ui";
import React, { useState } from "react";

const buttonCode = (variant: string) => {
  const ButtonCode = `
import { Button } from "mogora-ui"

export default function ButtonDemo() {
  return (
    <Button variant={"${variant}"}>Button</Button>
  )
}
`;

  return ButtonCode;
};

const variants = [
  "link",
  "primary",
  "secondry",
  "success",
  "danger",
  "warning",
  "info",
  "outline",
  "gost",
  "dark",
  "clicki",
  "shadow",
] as const;

const sortedComponentsLinks = [...variants].sort();

function ButtonPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof variants)[number]>("dark");
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
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh]"
        >
          <Button variant={theme}>Button</Button>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(buttonCode(theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{buttonCode(theme)}</CodeBlock>
        </Tabs.Content>
        <div className="flex gap-3 flex-col">
          <h1 className="font-semibold hidden">Variants</h1>
          <div className="w-sm pt-4">
            <Select>
              <Select.Trigger className="capitalize flex justify-between items-center">
                Variants
              </Select.Trigger>
              <Select.Content>
                {sortedComponentsLinks.map((name) => (
                  <Select.Item
                    key={name}
                    onClick={() => setTheme(name)}
                    value={name}
                    className="capitalize"
                  >
                    {name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
        </div>
      </Tabs>
    </Container>
  );
}

export default ButtonPage;
