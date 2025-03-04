"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Select, Table, Tabs } from "mogora-ui";
import React, { useState } from "react";

const buttonCode = (variant: string) => {
  const ButtonCode = `
import { Button } from "mogora-ui"

export default function ButtonDemo() {
  return (
    <Button variant={"${variant}"}>Button</Button>
  )
}
`;

  return ButtonCode;
};

const variants = [
  "link",
  "primary",
  "secondry",
  "success",
  "danger",
  "warning",
  "info",
  "outline",
  "gost",
  "dark",
  "clicki",
  "shadow",
] as const;

const sizes = ["small", "normal", "large"];

const sortedComponentsLinks = [...variants].sort();
const sizeSorted = [...sizes].sort();

function ButtonPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof variants)[number]>("dark");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Button</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Button</HightLight> component is a versatile and
        customizable button element that supports various styles (variants) and
        sizes. It provides consistent styling using{" "}
        <HightLight>class-variance-authority (cva)</HightLight> and follows best
        practices for accessibility and usability.
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
          <Button variant={theme}>Button</Button>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(buttonCode(theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{buttonCode(theme)}</CodeBlock>
        </Tabs.Content>
        <div className="flex gap-3 flex-col">
          <h1 className="font-semibold hidden">Variants</h1>
          <div className="w-full md:w-sm pt-4">
            <Select>
              <Select.Trigger className="capitalize flex justify-between items-center">
                Variants
              </Select.Trigger>
              <Select.Content>
                {sortedComponentsLinks.map((name) => (
                  <Select.Item
                    key={name}
                    onClick={() => setTheme(name)}
                    value={name}
                    className="capitalize"
                  >
                    {name}
                  </Select.Item>
                ))}
              </Select.Content>
            </Select>
          </div>
        </div>
      </Tabs>
      <ApiAccordion />
    </Container>
  );
}

const jsonData = [
  {
    prop: "variant",
    type:
      sortedComponentsLinks
        ?.map((value, index) =>
          index + 1 === sortedComponentsLinks.length
            ? `"${value}"`
            : `"${value}" | `
        )
        .join("") || "",
    description: "Defines the visual style of the button.",
  },
  {
    prop: "size",
    type:
      sizeSorted
        ?.map((value, index) =>
          index + 1 === sizeSorted.length ? `"${value}"` : `"${value}" | `
        )
        .join("") || "",
    description: "Defines the size of the button.",
  },
  {
    prop: "children",
    type: "ReactNode",
    description: "The content inside the button.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional custom classes.",
  },
  {
    prop: "...props",
    type: "ButtonHTMLAttributes<HTMLButtonElement>",
    description: "Accepts standard button attributes.",
  },
];

const ApiAccordion = () => {
  return (
    <div className="flex flex-col pb-10 pt-5">
      <SubTitle className="text-xl font-bold">API Reference</SubTitle>
      <div className="flex flex-col gap-3">
        <SubTitle>Props</SubTitle>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Prop</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {jsonData.map((value) => (
              <Table.Row key={value.prop}>
                <Table.Cell>{value.prop}</Table.Cell>
                <Table.Cell
                  className="max-sm:max-w-[100px] w-[100px] break-words whitespace-normal"
                  title={
                    typeof value.type === "function"
                      ? (value.type as () => string)()
                      : value.type ?? "Unknown"
                  }
                >
                  {typeof value.type === "function"
                    ? (value.type as () => string)()
                    : value.type ?? "Unknown"}
                </Table.Cell>
                <Table.Cell>{value.description}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ButtonPage;
