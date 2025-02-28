"use client";
import { CodeBlock } from "@/component/client/prism";
import { Tabs, Accordion, Table } from "mogora-ui";
import { Check, Clipboard } from "lucide-react";
import React from "react";
import { useGlobal } from "@/lib/context/GlobalProvider";
import Container from "@/component/layout/Container";
import { SubTitle } from "@/component/fragments/title";

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
      <SubTitle>Description</SubTitle>
      <p>
        The <span className="bg-gray-200 px-2 rounded-md">Accordion</span>{" "}
        component is a UI component that allows users to dynamically show and
        hide content by clicking a trigger element. This component uses React
        context to manage the state of the currently open item.
      </p>
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

      {/* API */}
      <ApiAccordion />

      {/* Customization */}
      <SubTitle className="text-2xl font-bold">Customization</SubTitle>
      <p className="pb-10">
        This component uses{" "}
        <span className="bg-gray-200 px-2 rounded-md">Tailwind CSS</span> for
        styling. You can add additional CSS classes through the{" "}
        <span className="bg-gray-200 px-2 rounded-md">className</span> prop to
        customize the appearance as needed.
      </p>
    </Container>
  );
}

const ApiAccordion = () => {
  return (
    <div className="flex flex-col gap-3">
      <SubTitle className="text-2xl font-bold">API Reference</SubTitle>
      <div className="flex flex-col gap-3">
        <SubTitle>Accordion</SubTitle>
        <p className="font-medium font-poppins">
          The main component that wraps all items in a single accordion group.
        </p>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Accordion.Item</SubTitle>
        <p>A component for each item in the accordion.</p>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>value</Table.Cell>
              <Table.Cell>string | number</Table.Cell>
              <Table.Cell>A unique value that identifies this item.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Accordion.Trigger</SubTitle>
        <p>A button component used to open or close the content.</p>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Accordion.Content</SubTitle>
        <p>A component that contains content that can be expanded or hidden.</p>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default AccordionPage;
