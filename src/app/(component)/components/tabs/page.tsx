"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Card, Input, Select, Tabs } from "mogora-ui";
import React, { useState } from "react";

const tabsCode = (variant: string) => {
  const TabsCode: string = `
import { Tabs, Input } from "mogora-ui";

export default function TabsDemo() {
  return (
    <Tabs variant={"${variant}"} defaultValue="item-1" className="flex flex-col w-lg">
      <Tabs.List className="grid grid-cols-2">
        <Tabs.Trigger value="item-1">Item 1</Tabs.Trigger>
        <Tabs.Trigger value="item-2">Item 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="item-1" >
        <Card className="w-full p-3 flex flex-col gap-2">
          <h1 className="text-start font-bold w-full">Item 1</h1>
          <p className="text-sm leading-4 font-medium text-slate-500">
            Make changes to your account here. Click save when you're done.
          </p>D
          <Input className="focus:ring-slate-500" theme={"info"} placeholder="Email"/>
          <Input className="focus:ring-slate-500" theme={"info"} placeholder="Username"/>
        </Card>
      </Tabs.Content>
      <Tabs.Content value="item-2">
        <Card className="w-full p-3 flex flex-col gap-2">
          <h1 className="text-start font-bold w-full">Item 2</h1>
          <p className="text-sm leading-4 font-medium text-slate-500">
            Make changes to your account here. Click save when you're done.
          </p>
          <Input className="focus:ring-slate-500" theme={"info"} placeholder="Password"/>
          <Input className="focus:ring-slate-500" theme={"info"} placeholder="Confirm"/>
        </Card>
      </Tabs.Content>
    </Tabs>
  )
}`;

  return TabsCode;
};

const variants = ["default", "underline"] as const;

function TabsPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof variants)[number]>("default");

  return (
    <Container>
      <h1 className="text-3xl font-semibold">Tabs</h1>
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
          <Tabs
            variant={theme}
            defaultValue="item-1"
            className="flex flex-col w-sm"
          >
            <Tabs.List className="grid grid-cols-2">
              <Tabs.Trigger value="item-1">Item 1</Tabs.Trigger>
              <Tabs.Trigger value="item-2">Item 2</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              value="item-1"
              className="flex items-center justify-center"
            >
              <Card className="w-full p-3 flex flex-col gap-2">
                <h1 className="text-start font-bold w-full">Item 1</h1>
                <p className="text-sm leading-4 font-medium text-slate-500">
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </p>
                <Input
                  className="focus:ring-slate-500"
                  theme={"info"}
                  placeholder="Email"
                />
                <Input
                  className="focus:ring-slate-500"
                  theme={"info"}
                  placeholder="Username"
                />
              </Card>
            </Tabs.Content>
            <Tabs.Content value="item-2">
              <Card className="w-full p-3 flex flex-col gap-2">
                <h1 className="text-start font-bold w-full">Item 2</h1>
                <p className="text-sm leading-4 font-medium text-slate-500">
                  Make changes to your account here. Click save when you&apos;re
                  done.
                </p>
                <Input
                  className="focus:ring-slate-500"
                  theme={"info"}
                  placeholder="Password"
                />
                <Input
                  className="focus:ring-slate-500"
                  theme={"info"}
                  placeholder="Confirm"
                />
              </Card>
            </Tabs.Content>
          </Tabs>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(tabsCode(theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{tabsCode(theme)}</CodeBlock>
        </Tabs.Content>
        <div className="w-full md:w-sm flex gap-3">
          <Select>
            <Select.Trigger className="capitalize flex justify-between items-center">
              Variants
            </Select.Trigger>
            <Select.Content>
              {variants.map((name) => (
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
      </Tabs>
    </Container>
  );
}

export default TabsPage;
