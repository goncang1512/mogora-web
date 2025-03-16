"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Input, Label, Select, Table, Tabs } from "mogora-ui";
import React, { useState } from "react";

const inputCode = (
  variant: (typeof variants)[number],
  theme: (typeof themeses)[number]
) => {
  const CheckCode: string = `
import { Input } from "mogora-ui";
  
export default function InputDemo() {
  return (
    <div>
      <Input placeholder="Username" variant={"${variant}"} theme={"${theme}"} className="w-sm" />
    </div>
  )
}
  `;

  return CheckCode;
};

const floatingLabel: string = `
import { Input, Label } from "mogora-ui";

export default function LabelFloating() {
  return (
    <div>
      // Bordered Variant
      <div className="relative flex flex-col gap-2">
        <Input theme={"primary"} id="username" name="username" variant={"bordered"} placeholder=" " className="peer" />
        <Label
          htmlFor="username" className="float-[default]">
          Username
        </Label>
      </div>

      // Underline Variant
      <div className="relative flex flex-col gap-2">
        <Input theme={"primary"} id="email" name="email" variant={"underline"} placeholder=" " className="peer" />
        <Label htmlFor="email" className="float-[underline]">
          Email
        </Label>
      </div>
    </div>
  )
}
`;

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

function InputPage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof themeses)[number]>("primary");
  const [variant, setVariant] = useState<(typeof variants)[number]>("bordered");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Input</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Input</HightLight> component is a customizable and
        accessible input field built using{" "}
        <HightLight>class-variance-authority</HightLight> (
        <HightLight>cva</HightLight>) and <HightLight>Tailwind CSS</HightLight>.
        It supports multiple variants, sizes, and themes to match different
        design needs.
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
          <Input
            placeholder="Username"
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
              onClick={() => copyToClipboard(inputCode(variant, theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{inputCode(variant, theme)}</CodeBlock>
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
      <div className="pt-10">
        <SubTitle>Floating Label</SubTitle>
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
            <div className="w-sm flex flex-col gap-10">
              <div className="relative flex flex-col gap-2">
                <Input
                  theme={"primary"}
                  id="username"
                  name="username"
                  variant={"bordered"}
                  placeholder=" "
                  className="peer dark:text-slate-800"
                />
                <Label htmlFor="username" className="float-[default]">
                  Username
                </Label>
              </div>
              <div className="relative flex flex-col gap-2  ">
                <Input
                  theme={"primary"}
                  id="email"
                  name="email"
                  variant={"underline"}
                  placeholder=" "
                  className="peer dark:text-slate-800"
                />
                <Label htmlFor="email" className="float-[underline]">
                  Email
                </Label>
              </div>
            </div>
          </Tabs.Content>
          <Tabs.Content
            value="code"
            className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
          >
            {/* CODE */}
            <div className="absolute top-4 right-8">
              <button
                onClick={() => copyToClipboard(floatingLabel)}
                className="text-white hover:bg-gray-500 p-1 rounded-md"
              >
                {copy ? <Check size={17} /> : <Clipboard size={17} />}
              </button>
            </div>
            <CodeBlock>{floatingLabel}</CodeBlock>
          </Tabs.Content>
        </Tabs>
      </div>
      <ApiInput />
    </Container>
  );
}

const contentPropInput = [
  {
    prop: "variant",
    type: `"bordered" | "underline"`,
    description: "Defines the style of the input field.",
  },
  {
    prop: "size",
    type: `"small" | "normal" | "large"`,
    description: "Sets the size of the input field.",
  },
  {
    prop: "theme",
    type: `"primary" | "secondary" | "danger" | "warning" | "success" | "info" | "accent"`,
    description: "Specifies the focus color theme of the input.",
  },
  {
    prop: "className",
    type: "string",
    description: "Additional custom classes for styling.",
  },
  {
    prop: "...props",
    type: "InputHTMLAttributes<HTMLInputElement>",
    description: "Inherits all standard HTML input attributes.",
  },
];

const ApiInput = () => {
  return (
    <div className="flex flex-col pb-10 pt-5">
      <SubTitle className="text-xl font-bold">API Reference</SubTitle>
      <div className="flex flex-col gap-3">
        <SubTitle>Prop</SubTitle>
        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Prop</Table.HeaderCell>
              <Table.HeaderCell className="w-[300px]">Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {contentPropInput?.map((value, index) => (
              <Table.Row key={index}>
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

      <p className="pt-5">
        The <HightLight>Checkbox</HightLight> component provides an accessible
        and flexible way to include styled checkboxes in your React application.
      </p>
    </div>
  );
};

export default InputPage;
