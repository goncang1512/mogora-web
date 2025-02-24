"use client";
import { CodeBlock } from "@/component/client/prism";
import { Tabs, Accordion } from "mogora-ui";
import { Check, Clipboard } from "lucide-react";
import React from "react";
import { useGlobal } from "@/lib/context/GlobalProvider";
import Container from "@/component/layout/Container";

const AccordionCode: string = `
import { Accordion } from "mogora-ui";

export default function AccordionDemo() {
  return (
    <Accordion className="max-w-sm">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Section 1</Accordion.Trigger>
        <Accordion.Content>
          <p>Here is some content for Section 1.</p>
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Section 2</Accordion.Trigger>
        <Accordion.Content>
          <p>Explore more details in Section 2.</p>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  )
}`;

function AccordionPage() {
  const { copyToClipboard, copy } = useGlobal();

  return (
    <Container>
      <h1 className="text-3xl font-semibold">Accordion</h1>
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
          <Accordion className="max-w-sm">
            <Accordion.Item value={`item-1`}>
              <Accordion.Trigger>Section 1</Accordion.Trigger>
              <Accordion.Content>
                <p>Here is some content for Section 1.</p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value={`item-2`}>
              <Accordion.Trigger>Section 2</Accordion.Trigger>
              <Accordion.Content>
                <p>Explore more details in Section 2.</p>
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value={`item-3`}>
              <Accordion.Trigger>Section 3</Accordion.Trigger>
              <Accordion.Content>
                <p>Find useful insights in Section 3.</p>
              </Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(AccordionCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{AccordionCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
    </Container>
  );
}

export default AccordionPage;
