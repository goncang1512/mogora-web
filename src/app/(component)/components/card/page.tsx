"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard, EllipsisVertical } from "lucide-react";
import { Card, Popover, Tabs } from "mogora-ui";
import React from "react";

const SheetCode: string = `
import { Avatar } from "mogora-ui";

export default function CardDemo() {
  return (
    <Card>
      <Card.Picture
        src="https://i.pinimg.com/474x/d5/c1/13/d5c113254075c85d44d44496b4c44c40.jpg"
        className="h-64 object-cover"
      />
      <Card.Content>
        <div className="flex justify-between items-center">
          <Card.Title>Biggest enterprise</Card.Title>
          <Popover>
            <Popover.Trigger>
              <button className="hover:bg-gray-300 p-1 rounded-md">
                <EllipsisVertical size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Content className="w-32">
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Edit
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Delete
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Report
              </button>
            </Popover.Content>
          </Popover>
        </div>
        <Card.Description>
          Here are the biggest enterprise technology acquisitions of 2021
          so far, in reverse chronological order.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
`;

function CardPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Card</h1>
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
          <Card>
            <Card.Picture
              src="https://i.pinimg.com/474x/d5/c1/13/d5c113254075c85d44d44496b4c44c40.jpg"
              className="h-64 object-cover"
            />
            <Card.Content>
              <div className="flex justify-between items-center">
                <Card.Title>Biggest enterprise</Card.Title>
                <Popover>
                  <Popover.Trigger>
                    <button className="hover:bg-gray-300 p-1 rounded-md">
                      <EllipsisVertical size={20} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Content className="w-32">
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Edit
                    </button>
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Delete
                    </button>
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Report
                    </button>
                  </Popover.Content>
                </Popover>
              </div>
              <Card.Description>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </Card.Description>
            </Card.Content>
          </Card>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(SheetCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{SheetCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </Container>
  );
}

export default CardPage;
