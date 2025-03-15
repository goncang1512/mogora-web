"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard, EllipsisVertical } from "lucide-react";
import { Table, Tabs, Toggle } from "mogora-ui";
import React from "react";

const toggleCode: string = `
import { Toggle } from "mogora-ui";
import { EllipsisVertical  } from "lucide-react";

export default function ToggleDemo() {
  return (
    <Toggle className="size-10">
      <EllipsisVertical size={30} />
    </Toggle>
  )
}
`;

function TogglePage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Toggle</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Toggle</HightLight> component is a customizable button
        that maintains a pressed state. It allows users to toggle between two
        states and provides optional controlled and uncontrolled behavior.
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
          <Toggle className="size-10 dark:text-slate-800">
            <EllipsisVertical size={30} />
          </Toggle>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(toggleCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{toggleCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Toggle",
    description:
      "A button component that toggles between pressed and unpressed states.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the toggle button.",
      },
      {
        prop: "pressed",
        type: "boolean",
        description: "Controlled state of the toggle button.",
      },
      {
        prop: "defaultPressed",
        type: "boolean",
        description: "Initial state of the toggle button in uncontrolled mode.",
      },
      {
        prop: "onPressedChange",
        type: "(open: boolean) => void",
        description:
          "Callback function triggered when the pressed state changes.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional CSS classes for styling the button.",
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

export default TogglePage;
