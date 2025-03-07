"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard, EllipsisVertical } from "lucide-react";
import { Button, Popover, Table, Tabs } from "mogora-ui";
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
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Popover</HightLight> is a UI component used to display
        temporary content that appears around a trigger element. This component
        can be used to display menus, tooltips, or additional information for
        users.
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
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Popover",
    description: "",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements to be rendered inside the popover.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Popover.Trigger",
    description:
      "The trigger component used to display the popover when clicked.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The element that can be clicked to show the popover.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Popover.Content",
    description: "The component that contains the displayed popover content.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the popover.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
      {
        prop: "align",
        type: `"left" | "right"`,
        description: "Determines the alignment of the popover content.",
      },
    ],
  },
];

const ApiComponent = () => {
  return (
    <div className="flex flex-col gap-2 pb-10">
      <SubTitle className="text-xl font-bold">API Reference</SubTitle>
      {APIREFERENCES.map((data) => (
        <div key={data.title}>
          <SubTitle>{data.title}</SubTitle>
          <p>{data.description}</p>
          <Table variant="bordered">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Prop</Table.HeaderCell>
                <Table.HeaderCell className="w-[300px]">Type</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.props?.map((value) => (
                <Table.Row key={value.prop}>
                  <Table.Cell>{value.prop}</Table.Cell>
                  <Table.Cell>{value.type}</Table.Cell>
                  <Table.Cell>{value.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}
    </div>
  );
};

export default PopoverPage;
