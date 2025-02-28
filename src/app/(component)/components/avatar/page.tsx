"use client";
import { CodeBlock } from "@/component/client/prism";
import { SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Avatar, Table, Tabs } from "mogora-ui";
import React from "react";

const SheetCode: string = `
import { Avatar } from "mogora-ui";

export default function AvatarDemo() {
  return (
    <Avatar>
      <Avatar.Image src="https://github.com/shadcn.png" alt="CN" />
      <Avatar.Fallback>CN</Avatar.Fallback>
    </Avatar>
  )
}
`;

function AvatarPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Avatar</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <span className="bg-gray-200 px-2 rounded-md">Avatar</span>{" "}
        component is a component used to display an avatar image with a fallback
        in case of an error while loading the image.
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
          className="w-full flex items-center justify-center border border-gray-300 p-3 rounded-md mt-3 h-[60vh] overflow-auto"
        >
          {/* COPONENT */}
          <Avatar>
            <Avatar.Image src="https://github.com/shadcn.png" alt="CN" />
            <Avatar.Fallback>CN</Avatar.Fallback>
          </Avatar>
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
    <div className="flex flex-col gap-3 pb-10">
      <SubTitle className="text-2xl font-bold">API Reference</SubTitle>
      <div className="flex flex-col gap-3">
        <SubTitle>Avatar</SubTitle>
        <p className="font-medium font-poppins">
          The main component that provides context for managing the{" "}
          <span className="bg-gray-200 px-2 rounded-md">isLoaded</span> and{" "}
          <span className="bg-gray-200 px-2 rounded-md">hasError</span> state.
          Props: Does not accept direct props.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Avatar.Image</SubTitle>
        <p>A component for displaying an avatar image.</p>
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
              <Table.Cell>src</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>Avatar image URL.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>alt</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>Alternative text for the image.</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>className</Table.Cell>
              <Table.Cell>string</Table.Cell>
              <Table.Cell>
                (Optional) Adds a custom class for styling
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>...props</Table.Cell>
              <Table.Cell>ImgHTMLAttributes&lt;HTMLImageElement&gt;</Table.Cell>
              <Table.Cell>
                Additional properties for the &lt;img&gt; element.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Avatar.Fallback</SubTitle>
        <p>A component that is displayed if the image fails to load.</p>
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
              <Table.Cell>children</Table.Cell>
              <Table.Cell>ReactNode</Table.Cell>
              <Table.Cell>
                Fallback content, such as the user&apos;s initials.
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div className="flex flex-col gap-3">
        <SubTitle>Avatar.Fallback</SubTitle>
        <ul>
          <ol className="list-decimal pl-5">
            <li>
              The <span className="bg-gray-200 px-2 rounded-md">Avatar</span>{" "}
              component uses{" "}
              <span className="bg-gray-200 px-2 rounded-md">AvatarContext</span>{" "}
              to store the status of whether the image has loaded (
              <span className="bg-gray-200 px-2 rounded-md">isLoaded</span>) or
              an error has occurred (
              <span className="bg-gray-200 px-2 rounded-md">hasError</span>).
            </li>
            <li>
              <span className="bg-gray-200 px-2 rounded-md">Avatar.Image</span>{" "}
              will display the image if it loads successfully and hide it while
              it is still loading.
            </li>
            <li>
              If the image fails to load,{" "}
              <span className="bg-gray-200 px-2 rounded-md">
                Avatar.Fallback
              </span>{" "}
              will be displayed as a replacement.
            </li>
          </ol>
        </ul>
      </div>
    </div>
  );
};

export default AvatarPage;
