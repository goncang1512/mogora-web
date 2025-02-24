"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Badge, Tabs } from "mogora-ui";
import React from "react";

const BadgeCode: string = `
import { Badge } from "mogora-ui";

export default function BadgeDemo() {
  return (
    <div>
      <Badge>Badge</Badge>
      <Badge variant={"secondary"}>Badge</Badge>
      <Badge variant={"outline"}>Badge</Badge>
      <Badge variant={"destructive"}>Badge</Badge>
    </div>
  )
}
`;

function BadgePage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Badge</h1>
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
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh] gap-3"
        >
          <Badge>Badge</Badge>
          <Badge variant={"secondary"}>Badge</Badge>
          <Badge variant={"outline"}>Badge</Badge>
          <Badge variant={"destructive"}>Badge</Badge>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(BadgeCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{BadgeCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </Container>
  );
}

export default BadgePage;
