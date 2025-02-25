"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Button, Input, Modal, Tabs } from "mogora-ui";
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
    </Container>
  );
}

export default ModalPage;
