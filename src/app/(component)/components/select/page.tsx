"use client";
import { CodeBlock } from "@/component/client/prism";
import { SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Select, Table, Tabs } from "mogora-ui";
import React from "react";

const SelectCode: string = `
import { Select } from "mogora-ui";

export default function SelectDemo() {
  return (
    <Select className="w-sm">
      <Select.Trigger>Options</Select.Trigger>
      <Select.Content>
        <Select.Item value="options-1">Option 1</Select.Item>
        <Select.Item value="options-2">Option 2</Select.Item>
        <Select.Item value="options-3">Option 3</Select.Item>
        <Select.Item value="options-4">Option 4</Select.Item>
      </Select.Content>
    </Select>
  )
}
`;

function SelectPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Select</h1>
      <SubTitle>Description</SubTitle>
      <p>
        Select is a UI component used to create customizable dropdown
        selections. This component allows users to choose an option from a list
        and is designed with flexibility in mind, supporting different styles
        and behaviors.
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
          <Select className="w-sm">
            <Select.Trigger>Options</Select.Trigger>
            <Select.Content>
              <Select.Item value="options-1">Option 1</Select.Item>
              <Select.Item value="options-2">Option 2</Select.Item>
              <Select.Item value="options-3">Option 3</Select.Item>
              <Select.Item value="options-4">Option 4</Select.Item>
            </Select.Content>
          </Select>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(SelectCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{SelectCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Select",
    description:
      "A component that provides a customizable select dropdown for users to choose from.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements to be rendered inside the select component.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
      {
        prop: "name",
        type: "string",
        description: "The name attribute for the hidden input field.",
      },
      {
        prop: "value",
        type: "string",
        description: "The currently selected value.",
      },
      {
        prop: "onChange",
        type: "(e: React.ChangeEvent<HTMLInputElement>) => void",
        description: "Callback function triggered when the value changes.",
      },
    ],
  },
  {
    title: "Select.Trigger",
    description:
      "The trigger component used to display the select dropdown when clicked.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The element that can be clicked to show the dropdown.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
      {
        prop: "icon",
        type: "ReactNode | boolean",
        description:
          "Optional icon displayed alongside the selected value. Set to `false` to disable the default icon.",
      },
    ],
  },
  {
    title: "Select.Content",
    description: "The component that contains the displayed dropdown content.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the dropdown.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Select.Item",
    description: "An item inside the dropdown list.",
    props: [
      {
        prop: "children",
        type: "string",
        description: "The text content of the item.",
      },
      {
        prop: "value",
        type: "string",
        description: "The value associated with the item.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
      {
        prop: "onClick",
        type: "(e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void",
        description: "Callback function triggered when the item is clicked.",
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

export default SelectPage;
