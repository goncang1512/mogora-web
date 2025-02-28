"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Badge, Button, Table, Tabs } from "mogora-ui";
import React, { useState } from "react";

const badgeCode = (variant: string) => {
  const BadgeCode: string = `
import { Badge } from "mogora-ui";

export default function BadgeDemo() {
  return (
    <Badge variant={"${variant}"}>Badge</Badge>
  )
}
`;

  return BadgeCode;
};

const variants = ["default", "outline", "secondary"] as const;

function BadgePage() {
  const { copyToClipboard, copy } = useGlobal();
  const [theme, setTheme] = useState<(typeof variants)[number]>("default");
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Badge</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <span className="bg-gray-200 px-2 rounded-md">Badge</span> component
        is used to display a small badge with various style variants.
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
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh] gap-3"
        >
          <Badge variant={theme}>Badge</Badge>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          <div className="absolute top-4 right-3">
            <button
              onClick={() => copyToClipboard(badgeCode(theme))}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{badgeCode(theme)}</CodeBlock>
        </Tabs.Content>
        <div className="flex gap-3 flex-col">
          <h1 className="font-semibold">Variants</h1>
          <div className="flex gap-3">
            {variants.map((name, index) => (
              <Button
                key={index}
                onClick={() => setTheme(name)}
                className="capitalize"
              >
                {name}
              </Button>
            ))}
          </div>
        </div>
      </Tabs>
      <ApiAccordion />
    </Container>
  );
}

const ApiAccordion = () => {
  return (
    <div className="flex flex-col gap-3 pb-10">
      <SubTitle className="text-2xl font-bold">API Reference</SubTitle>
      <div className="flex flex-col gap-3">
        <SubTitle>Badge</SubTitle>
        <p className="font-medium font-poppins">
          A badge component that can be customized with various variants.
        </p>

        <Table variant={"bordered"}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Type</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>children</Table.Cell>
              <Table.Cell>ReactNode</Table.Cell>
              <Table.Cell>Content inside the badge.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>variant</Table.Cell>
              <Table.Cell>
                &quot;default&quot; | &quot;secondary&quot; |
                &quot;outline&quot;
              </Table.Cell>
              <Table.Cell>Badge appearance variants.</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Varian Badge</SubTitle>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Variant</Table.HeaderCell>
              <Table.HeaderCell>Description</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>default</Table.Cell>
              <Table.Cell>
                Background <HightLight>bg-primary</HightLight>, text{" "}
                <HightLight>text-primary-foreground</HightLight>.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>secondary</Table.Cell>
              <Table.Cell>
                Background <HightLight>bg-secondary</HightLight>, text{" "}
                <HightLight>text-secondary-foreground</HightLight>.
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>outline</Table.Cell>
              <Table.Cell>
                Text colored <HightLight>text-foreground</HightLight>, without a
                background.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default BadgePage;
