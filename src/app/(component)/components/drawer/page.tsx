"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Drawer, Table, Tabs } from "mogora-ui";
import React from "react";

const DRAWERCODE: string = `
import { Drawer, Button } from "mogora-ui";

export default function DrawerDemo() {
  return (
    <Drawer>
      <Drawer.Trigger>
        <Button variant="clicki">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Content>
        <div className="h-full flex flex-col items-center pt-5 md:w-md w-full">
          <h2 className="text-lg font-bold">Drawer Title</h2>
          <p className="mt-2">This is a simple Drawer example.</p>
        </div>
      </Drawer.Content>
    </Drawer>
  )
}
`;

function DrawerPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Drawer</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Drawer</HightLight> component is a fully customizable
        and accessible drawer modal component built with React and TypeScript.
        It provides an intuitive and smooth user experience, supporting drag
        interactions and seamless state management.
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
          <Drawer>
            <Drawer.Trigger>
              <Button variant="clicki">Open Drawer</Button>
            </Drawer.Trigger>
            <Drawer.Content>
              <div className="h-full flex flex-col items-center pt-5 md:w-md w-full">
                <h2 className="text-lg font-bold">Drawer Title</h2>
                <p className="mt-2">This is a simple Drawer example.</p>
              </div>
            </Drawer.Content>
          </Drawer>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(DRAWERCODE)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{DRAWERCODE}</CodeBlock>
        </Tabs.Content>
      </Tabs>
      <ApiDrawer />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Drawer",
    description: "The main component that manages the state of the drawer.",
    props: [
      {
        prop: "open",
        type: "boolean",
        description: "Controls whether the drawer is open or not.",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback fired when the drawer state changes.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for the drawer container.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Components inside the drawer provider.",
      },
    ],
  },
  {
    title: "Drawer.Trigger",
    description: "A component that toggles the drawer open or closed.",
    props: [
      {
        prop: "onClick",
        type: "(e: React.MouseEvent) => void",
        description: "Function to handle click events.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for the trigger.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements inside the trigger.",
      },
    ],
  },
  {
    title: "Drawer.Content",
    description: "The content container inside the drawer.",
    props: [
      {
        prop: "render",
        type: "() => ReactNode",
        description: "Optional function to render a custom header.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for the content.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements inside the drawer content.",
      },
    ],
  },
];

const ApiDrawer = () => {
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

export default DrawerPage;
