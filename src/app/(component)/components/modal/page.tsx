"use client";
import { CodeBlock } from "@/component/client/prism";
import { HightLight, SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Input, Modal, Table, Tabs } from "mogora-ui";
import React from "react";

const ModalCode: string = `
import { Modal, Input, Button } from "mogora-ui";

export default function ModalDemo() {
  return (
    <Modal>
      <Modal.Trigger>
        <Button variant={"clicki"}>Open</Button>
      </Modal.Trigger>
      <Modal.Content className="flex flex-col gap-2">
        <h1 className="text-start font-bold w-full">Account</h1>
        <p className="text-sm leading-4 font-medium text-slate-500">
          Make changes to your account here. Click save when you're done.
        </p>
        <Input className="focus:ring-slate-500" theme={"info"} placeholder="Email" />
        <Input className="focus:ring-slate-500" theme={"info"} placeholder="Username" />
      </Modal.Content>
    </Modal>
  )
}
`;

function ModalPage() {
  const { copyToClipboard, copy } = useGlobal();
  return (
    <Container>
      <h1 className="text-3xl font-semibold">Modal</h1>
      <SubTitle>Description</SubTitle>
      <p>
        The <HightLight>Modal</HightLight> component provides a simple way to
        create modals in a React application. It includes a context-based API
        for managing modal state and provides <HightLight>Trigger</HightLight>{" "}
        and <HightLight>Content</HightLight> subcomponents for interaction and
        display.
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
          <Modal>
            <Modal.Trigger>
              <Button variant={"clicki"}>Open</Button>
            </Modal.Trigger>
            <Modal.Content className="flex flex-col gap-2">
              <h1 className="text-start font-bold w-full">Account</h1>
              <p className="text-sm leading-4 font-medium text-slate-500">
                Make changes to your account here. Click save when you&apos;re
                done.
              </p>
              <Input
                className="focus:ring-slate-500"
                theme={"info"}
                placeholder="Email"
              />
              <Input
                className="focus:ring-slate-500"
                theme={"info"}
                placeholder="Username"
              />
            </Modal.Content>
          </Modal>
        </Tabs.Content>
        <Tabs.Content
          value="code"
          className="w-full relative flex-col py-0  flex items-center justify-center rounded-md mt-3 h-[60vh]"
        >
          {/* CODE */}
          <div className="absolute top-4 right-8">
            <button
              onClick={() => copyToClipboard(ModalCode)}
              className="text-white hover:bg-gray-500 p-1 rounded-md"
            >
              {copy ? <Check size={17} /> : <Clipboard size={17} />}
            </button>
          </div>
          <CodeBlock>{ModalCode}</CodeBlock>
        </Tabs.Content>
      </Tabs>
      <ApiModal />
    </Container>
  );
}

const modalContent = [
  {
    title: "Modal Component",
    description:
      "The Modal component serves as the main wrapper for the modal system. It provides context for managing the modal state.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The components inside the modal provider.",
      },
      {
        prop: "open",
        type: "boolean",
        description: "Controls whether the modal is open or closed.",
      },
      {
        prop: "onOpenChange",
        type: "(open: boolean) => void",
        description: "Callback when modal visibility changes.",
      },
      {
        prop: "className",
        type: "string",
        description: "Custom class names for styling.",
      },
      {
        prop: "...props",
        type: "HTMLAttributes<HTMLDivElement>",
        description: "Additional props for the container.",
      },
    ],
  },
  {
    title: "Modal.Trigger",
    description:
      "The Trigger component acts as a clickable element to open the modal.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The button or element that triggers the modal.",
      },
      {
        prop: "...props",
        type: "HTMLAttributes<HTMLSpanElement>",
        description: "Additional props for customization.",
      },
    ],
  },
  {
    title: "Modal.Content",
    description:
      "The Content component represents the actual modal content. Clicking outside it will close the modal.",
    props: [
      {
        prop: "children",
        type: "ReactNode",
        description: "The content inside the modal.",
      },
      {
        prop: "className",
        type: "string",
        description: "Custom class names for styling.",
      },
      {
        prop: "...props",
        type: "HTMLAttributes<HTMLDivElement>",
        description: "Additional props for customization.",
      },
    ],
  },
];

const ApiModal = () => {
  return (
    <div className="flex flex-col pb-10 pt-5">
      <SubTitle className="text-2xl font-bold">API Reference</SubTitle>
      {modalContent.map((data) => (
        <div className="flex flex-col gap-3" key={data.title}>
          <SubTitle>{data.title}</SubTitle>
          <Table variant={"bordered"}>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Prop</Table.HeaderCell>
                <Table.HeaderCell className="w-[300px]">Type</Table.HeaderCell>
                <Table.HeaderCell>Description</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.props?.map((data) => (
                <Table.Row key={data.prop}>
                  <Table.Cell>{data.prop}</Table.Cell>
                  <Table.Cell className="max-sm:max-w-[100px] w-[100px] break-words whitespace-normal">
                    {data.type}
                  </Table.Cell>
                  <Table.Cell>{data.description}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </div>
      ))}

      <SubTitle>Conclusion</SubTitle>
      <p className="pt-5">
        The <HightLight>Modal</HightLight> component is a lightweight and
        flexible solution for handling modals in React applications. It supports
        a context-based state management approach, making it easy to integrate
        into any project.
      </p>
    </div>
  );
};

export default ModalPage;
