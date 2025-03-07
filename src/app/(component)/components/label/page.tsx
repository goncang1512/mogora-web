"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Input, Label, Tabs } from "mogora-ui";
import React from "react";

const LabelCode: string = `
import { Label } from "mogora-ui";

export default function LabelDemo() {
  return (
    <Label>Label</Label>
  )
}
`;

const usageLabelCode: string = `
import { Label, Input } from "mogora-ui";

export default function LabelDemo() {
  return (
    <div className="flex flex-col gap-2 w-sm">
      <Label htmlFor="username">Username</Label>
      <Input theme={"primary"} id="username" name="username" placeholder="Jhon Doe"/>
    </div>
  )
}
`;

function LabelPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container className="pb-10">
      <h1 className="text-3xl font-semibold">Label</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Label</HightLight> component is a semantic and
        accessible label element designed to pair with form inputs. It includes
        built-in styling using class-variance-authority (cva) and supports
        customization via additional class names.
      </p>
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
          <Label>Label</Label>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(LabelCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{LabelCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>

      <div>
        <SubTitle>Usage</SubTitle>
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
            <div className="flex flex-col gap-2 w-sm">
              <Label htmlFor="username">Username</Label>
              <Input
                theme={"primary"}
                id="username"
                name="username"
                placeholder="Jhon Doe"
              />
            </div>
          </Tabs.Content>
          <Tabs.Content
            value="code"
            className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
          >
            {/* CODE */}
            <div className="absolute top-4 right-8">
              <button
                onClick={() => copyToClipboard(usageLabelCode)}
                className="text-white hover:bg-gray-500 p-1 rounded-md"
              >
                {copy ? <Check size={17} /> : <Clipboard size={17} />}
              </button>
            </div>
            <CodeBlock>{usageLabelCode}</CodeBlock>
          </Tabs.Content>
        </Tabs>
      </div>
    </Container>
  );
}

export default LabelPage;
