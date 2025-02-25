"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard, EllipsisVertical } from "lucide-react";
import { Button, Popover, Tabs } from "mogora-ui";
import React from "react";

const popoverCode: string = `
import { Popover, Button } from "mogora-ui";

export default function PopoverDemo() {
  return (
    <Popover>
      <Popover.Trigger>
        <Button className="px-2">
          <EllipsisVertical />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <div className="p-4">This is a Popover Content</div>
      </Popover.Content>
    </Popover>
  )
}
`;

function PopoverPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Popover</h1>
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
          {/* COMPONENT */}
          <Popover>
            <Popover.Trigger>
              <Button className="px-2">
                <EllipsisVertical />
              </Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="p-4">This is a Popover Content</div>
            </Popover.Content>
          </Popover>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(popoverCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{popoverCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </Container>
  );
}

export default PopoverPage;
