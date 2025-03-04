"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Select, Table, Tabs } from "mogora-ui";
import React, { useState } from "react";

const tableFunction = (variant: (typeof variants)[number]) => {
  const tableCode: string = `
import { Table } from "mogora-ui";

export default function TableDemo() {
  return (
    <Table variant={"${variant}"}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Nama</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>HP</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>goncang</Table.Cell>
          <Table.Cell>goncang@gmail.com</Table.Cell>
          <Table.Cell>085133212312</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>samudera</Table.Cell>
          <Table.Cell>samudera@gmail.com</Table.Cell>
          <Table.Cell>081357579420</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>nasution</Table.Cell>
          <Table.Cell>nasution@gmail.com</Table.Cell>
          <Table.Cell>082234223334</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}
`;

  return tableCode;
};

const variants = ["default", "zebra", "bordered"] as const;
const sortedVariants = [...variants].sort();

function TablePage() {
  const { copyToClipboard, copy } = useGlobal();
  const [variant, setVariant] = useState<(typeof variants)[number]>("default");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Table</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Table</HightLight> component is a flexible and
        customizable table for rendering tabular data. It supports variants,
        sizes, and styling via <HightLight>class-variance-authority</HightLight>
        . Composed of subcomponents (<HightLight>Table</HightLight>,{" "}
        <HightLight>Table.Header</HightLight>,{" "}
        <HightLight>Table.HeaderCell</HightLight>,{" "}
        <HightLight>Table.Cell</HightLight>, <HightLight>Table.Row</HightLight>,{" "}
        <HightLight>Table.Body</HightLight>), it ensures structured and styled
        tables.
      </p>
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
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh] overflow-auto px-10"
        >
          {/* COMPONENT */}
          <Table className="w-md" variant={variant}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Nama</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>HP</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>goncang</Table.Cell>
                <Table.Cell>goncang@gmail.com</Table.Cell>
                <Table.Cell>081357579420</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>samudera</Table.Cell>
                <Table.Cell>samudera@gmail.com</Table.Cell>
                <Table.Cell>081357579420</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>nasution</Table.Cell>
                <Table.Cell>nasution@gmail.com</Table.Cell>
                <Table.Cell>081357579420</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(tableFunction(variant))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{tableFunction(variant)}</CodeBlock>
        </Tabs.Content>
        <div className="w-full md:w-sm gap-3 pt-4 flex">
          <Select>
            <Select.Trigger className="capitalize flex justify-between items-center">
              Variants
            </Select.Trigger>
            <Select.Content>
              {sortedVariants.map((name) => (
                <Select.Item
                  key={name}
                  onClick={() => setVariant(name)}
                  value={name}
                  className="capitalize"
                >
                  {name}
                </Select.Item>
              ))}
            </Select.Content>
          </Select>
        </div>
      </Tabs>
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Table",
    description: "The main table component that wraps all subcomponents.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements to be rendered inside the table.",
      },
      {
        prop: "variant",
        type: "'default' | 'zebra' | 'bordered'",
        description: "Determines the style of the table.",
      },
      {
        prop: "size",
        type: "'default' | 'normal'",
        description: "Defines the table size.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Table.Row",
    description: "Defines a table row.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the row.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Table.HeaderCell",
    description: "Defines a table header cell.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the header cell.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Table.Cell",
    description: "Defines a table data cell.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Content to be displayed inside the cell.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Table.Body",
    description: "Defines the body section of the table.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Rows to be displayed inside the table body.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
  {
    title: "Table.Header",
    description: "Defines the header section of the table.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "Rows to be displayed inside the table header.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional classes for styling.",
      },
    ],
  },
];

const ApiComponent = () => {
  return (
    <div className="flex flex-col gap-4">
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

export default TablePage;
