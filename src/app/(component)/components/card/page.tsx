"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard, EllipsisVertical } from "lucide-react";
import { Card, Popover, Table, Tabs } from "mogora-ui";
import React from "react";

const SheetCode: string = `
import { Avatar } from "mogora-ui";

export default function CardDemo() {
  return (
    <Card>
      <Card.Picture
        src="https://i.pinimg.com/474x/d5/c1/13/d5c113254075c85d44d44496b4c44c40.jpg"
        className="h-64 object-cover"
      />
      <Card.Content>
        <div className="flex justify-between items-center">
          <Card.Title>Biggest enterprise</Card.Title>
          <Popover>
            <Popover.Trigger>
              <button className="hover:bg-gray-300 p-1 rounded-md">
                <EllipsisVertical size={20} />
              </button>
            </Popover.Trigger>
            <Popover.Content className="w-32">
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Edit
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Delete
              </button>
              <button className="hover:bg-gray-200 rounded-md w-full py-1">
                Report
              </button>
            </Popover.Content>
          </Popover>
        </div>
        <Card.Description>
          Here are the biggest enterprise technology acquisitions of 2021
          so far, in reverse chronological order.
        </Card.Description>
      </Card.Content>
    </Card>
  )
}
`;

const contentApiReferences = [
  {
    title: "Card",
    description: "The main wrapper component for other sub-components.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
    ],
  },
  {
    title: "Card.Picture",
    description: "Displays an image inside the card.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "...props",
        type: "ImgHTMLAttributes<HTMLImageElement>",
        description: "Inherits all default attributes of the <img>",
      },
    ],
  },
  {
    title: "Card.Header",
    description: "The top section of the card, usually containing the title.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements inside the header.",
      },
      {
        prop: "...props",
        type: "HTMLAttributes<HTMLDivElement>",
        description: "Inherits all default attributes of the <div>",
      },
    ],
  },
  {
    title: "Card.Title",
    description: "Displays the title inside the card.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Title text or elements.",
      },
    ],
  },
  {
    title: "Card.Description",
    description: "Displays a description or additional text inside the card.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Description text.",
      },
    ],
  },
  {
    title: "Card.Content",
    description: "The main section of the card for primary content.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements inside the content.",
      },
    ],
  },
  {
    title: "Card.Footer",
    description:
      "The bottom section of the card, usually containing buttons or additional information.",
    props: [
      {
        prop: "className",
        type: "string",
        description: "Additional styling classes.",
      },
      {
        prop: "children",
        type: "ReactNode",
        description: "Elements inside the footer.",
      },
    ],
  },
];

function CardPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Card</h1>
      <SubTitle>Description</SubTitle>
      <div className="flex flex-col gap-3">
        <p>
          The <HightLight>Card</HightLight> component is a part of a UI library
          built with React and Tailwind CSS. This component is designed to
          display content in a flexible and customizable card format.
        </p>
        <p>
          The <HightLight>Card</HightLight> component supports various
          sub-components such as
          <HightLight>Picture</HightLight>, <HightLight>Header</HightLight>,{" "}
          <HightLight>Title</HightLight>, <HightLight>Description</HightLight>,{" "}
          <HightLight>Content</HightLight>, and <HightLight>Footer</HightLight>,
          allowing users to structure the card layout easily.
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
          <Card>
            <Card.Picture
              src="https://i.pinimg.com/474x/d5/c1/13/d5c113254075c85d44d44496b4c44c40.jpg"
              className="h-64 object-cover"
            />
            <Card.Content>
              <div className="flex justify-between items-center">
                <Card.Title>Biggest enterprise</Card.Title>
                <Popover>
                  <Popover.Trigger>
                    <button className="hover:bg-gray-300 p-1 rounded-md">
                      <EllipsisVertical size={20} />
                    </button>
                  </Popover.Trigger>
                  <Popover.Content className="w-32">
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Edit
                    </button>
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Delete
                    </button>
                    <button className="hover:bg-gray-200 rounded-md w-full py-1">
                      Report
                    </button>
                  </Popover.Content>
                </Popover>
              </div>
              <Card.Description>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </Card.Description>
            </Card.Content>
          </Card>
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
      <ApiAccordion />
    </Container>
  );
}

const ApiAccordion = () => {
  return (
    <div className="flex flex-col pb-10 pt-5">
      <SubTitle className="text-xl font-bold">API Reference</SubTitle>
      {contentApiReferences.map((data) => {
        return (
          <div key={data?.title} className="flex flex-col gap-3">
            <SubTitle>{data?.title}</SubTitle>
            <p>{data?.description}</p>
            <Table variant={"bordered"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Prop</Table.HeaderCell>
                  <Table.HeaderCell className="md:w-[100px]">
                    Type
                  </Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {data?.props.map((value, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{value.prop}</Table.Cell>
                    <Table.Cell
                      className="max-sm:max-w-[100px] w-[100px] break-words whitespace-normal"
                      title={value.type}
                    >
                      {value.type}
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
        By using the Card component, you can create elegant and easily
        customizable card layouts for your React application.
      </p>
    </div>
  );
};

export default CardPage;
