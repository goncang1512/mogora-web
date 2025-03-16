"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Checkbox, Select, Table, Tabs } from "mogora-ui";
import React, { useState } from "react";

const checkboxCode = (variant: string) => {
  const CheckCode: string = `
import { Checkbox } from "mogora-ui";

export default function ChecboxDemo() {
  return (
    <div>
      <Checkbox variant={"${variant}"} name="check" />
    </div>
  )
}
  `;

  return CheckCode;
};

const themeses = [
  "primary",
  "success",
  "danger",
  "warning",
  "accent",
  "info",
] as const;

const sortedComponentsLinks = [...themeses].sort();
const sizes = ["sm", "md", "lg"];

const contentPropCheckbox = [
  {
    title: "Checkbox",
    description: "A styled checkbox component supporting variants and sizes.",
    props: [
      {
        prop: "name",
        type: "string",
        description: "The unique name/id for the checkbox input.",
      },
      {
        prop: "variant",
        type: () =>
          sortedComponentsLinks
            ?.map((value, index) =>
              index + 1 === sortedComponentsLinks.length
                ? `"${value}"`
                : `"${value}" | `
            )
            .join("") || "",
        description:
          "Sets the visual style of the checkbox. Default is default.",
      },
      {
        prop: "size",
        type: () =>
          sizes
            ?.map((value, index) =>
              index + 1 === sizes.length ? `"${value}"` : `"${value}" | `
            )
            .join("") || "",
        description: "Defines the checkbox size. Default is md.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
    ],
  },
];

function CheckboxPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof themeses)[number]>("primary");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Checkbox</h1>
      <SubTitle>Description</SubTitle>
      <div className="flex flex-col gap-3">
        <p>
          The <HightLight>Checkbox</HightLight> component is a customizable
          checkbox built with React and Tailwind CSS, utilizing
          <HightLight>class-variance-authority</HightLight> for styling
          variants. It provides different styles (
          <HightLight>variant</HightLight>) and sizes (
          <HightLight>size</HightLight>) to fit various UI needs. The component
          leverages the <HightLight>peer</HightLight> utility in Tailwind CSS to
          enhance styling co
        </p>
      </div>
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
          <Checkbox variant={theme} name="check" />
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(checkboxCode(theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{checkboxCode(theme)}</CodeBlock>
        </Tabs.Content>
        <div className="flex gap-3 flex-col">
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
                    className="capitalize dark:text-slate-800"
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

const ApiAccordion = () => {
  return (
    <div className="flex flex-col pb-10 pt-5">
      <SubTitle className="text-xl font-bold">API Reference</SubTitle>
      {contentPropCheckbox.map((data) => {
        return (
          <div key={data?.title} className="flex flex-col gap-3">
            <SubTitle>{data?.title}</SubTitle>
            <p>{data?.description}</p>
            <Table variant={"bordered"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Prop</Table.HeaderCell>
                  <Table.HeaderCell className="w-[300px]">
                    Type
                  </Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data?.props.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{value.prop}</Table.Cell>
                    <Table.Cell>
                      {typeof value.type === "function"
                        ? value.type()
                        : value.type}
                    </Table.Cell>
                    <Table.Cell>{value.description}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        );
      })}

      <p className="pt-5">
        The <HightLight>Checkbox</HightLight> component provides an accessible
        and flexible way to include styled checkboxes in your React application.
      </p>
    </div>
  );
};

export default CheckboxPage;
