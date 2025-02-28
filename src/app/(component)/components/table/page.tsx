"use client";
import { CodeBlock } from "@/component/client/prism";
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
          <Table variant={variant}>
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
        <div className="w-lg gap-3 pt-4 flex">
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
    </Container>
  );
}

export default TablePage;
