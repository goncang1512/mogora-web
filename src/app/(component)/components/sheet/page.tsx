"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Input, Sheet, Table, Tabs } from "mogora-ui";
import React from "react";

const SheetCode: string = `
import { Sheet, Input, Button } from "mogora-ui";

export default function SheetDemo() {
  return (
    <Sheet>
      <Sheet.Trigger>
        <Button variant={"clicki"}>Sheet</Button>
      </Sheet.Trigger>
      <Sheet.Content position="left" className="w-72 flex flex-col gap-2">
        <h1 className="text-start font-bold w-full">Account</h1>
        <p className="text-sm leading-4 font-medium text-slate-500">
          Make changes to your account here. Click save when you're done.
        </p>
        <Input className="focus:ring-slate-500" theme={"info"} placeholder="Email" />
        <Input className="focus:ring-slate-500" theme={"info"} placeholder="Username" />
      </Sheet.Content>
    </Sheet>
  )
}
`;

function SheetPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Sheet</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Sheet</HightLight> component is a side modal that can
        slide in and out from the left or right side of the screen. It serves as
        the main container for managing state and logic, while the Sheet.Trigger
        acts as the interactive element to open the Sheet, and the Sheet.Content
        holds the content, allowing customization of its position.
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
          {/* COPONENT */}
          <Sheet>
            <Sheet.Trigger>
              <Button variant={"clicki"}>Sheet</Button>
            </Sheet.Trigger>
            <Sheet.Content position="left" className="w-72 flex flex-col gap-2">
              <h1 className="text-start font-bold w-full">Account</h1>
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
            </Sheet.Content>
          </Sheet>
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
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Sheet",
    description: "The main component for managing the Sheet.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements to be rendered inside the Sheet.",
      },
      {
        prop: "open",
        type: "boolean",
        description: "Determines whether the Sheet is open or not.",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        description:
          "Callback function triggered when the Sheet state changes.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Sheet.Trigger",
    description: "The trigger component used to open the Sheet.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The element that can be clicked to open the Sheet.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Sheet.Content",
    description: "The component that displays the Sheet content.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the Sheet.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
      {
        prop: "position",
        type: '"left" | "right"',
        description: "Determines the position of the Sheet (left or right).",
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
                  <Table.Cell className="max-sm:max-w-[100px] w-[100px] break-words whitespace-normal">
                    {value.type}
                  </Table.Cell>
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

export default SheetPage;
