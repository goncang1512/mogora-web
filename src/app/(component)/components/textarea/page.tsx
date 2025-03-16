"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Select, Table, Tabs, Textarea } from "mogora-ui";
import React, { useState } from "react";

const textareFunction = (
  variant: (typeof variants)[number],
  theme: (typeof themeses)[number]
) => {
  const CheckCode: string = `
import { Input } from "mogora-ui";
  
export default function TextareaDemo() {
  return (
    <div>
      <Textarea placeholder="goncang" variant={"${variant}"} theme={"${theme}"} className="w-sm" />
    </div>
  )
}
  `;

  return CheckCode;
};

const themeses = [
  "primary",
  "secondary",
  "danger",
  "success",
  "info",
  "warning",
  "accent",
] as const;

const variants = ["bordered", "underline"] as const;

const sortedComponentsLinks = [...themeses].sort();
const sortedVariants = [...variants].sort();

function TextareaPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof themeses)[number]>("primary");
  const [variant, setVariant] = useState<(typeof variants)[number]>("bordered");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Textarea</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Textarea</HightLight> component is a customizable
        multiline text input field. It supports various styles, sizes, and
        themes to fit different design requirements. Built using{" "}
        <HightLight>class-variance-authority</HightLight>, it allows easy
        customization while maintaining consistency.
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
          <Textarea
            placeholder="goncang"
            variant={variant}
            theme={theme}
            className="w-sm dark:text-slate-800"
          />
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(textareFunction(variant, theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{textareFunction(variant, theme)}</CodeBlock>
        </Tabs.Content>
        <div className="flex gap-3 flex-col">
          <div className="w-full md:w-lg gap-3 pt-4 flex">
            <Select>
              <Select.Trigger className="capitalize flex justify-between items-center">
                Themes
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
      <ApiComponent />
    </Container>
  );
}

const APIREFERENCES = [
  {
    title: "Textarea",
    description: "A customizable multiline text input field.",
    props: [
      {
        prop: "variant",
        type: `"bordered" | "underline"`,
        description: "Determines the styling variant of the textarea.",
      },
      {
        prop: "size",
        type: `"small" | "normal" | "large"`,
        description: "Defines the size of the textarea.",
      },
      {
        prop: "theme",
        type: `"primary" | "secondary" | "danger" | "warning" | "success" | "info" | "accent"`,
        description: "Sets the focus color theme.",
      },
      {
        prop: "placeholder",
        type: "string",
        description: "Placeholder text displayed when the textarea is empty.",
      },
      {
        prop: "className",
        type: "string",
        description: "Additional custom classes for styling.",
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

export default TextareaPage;
