"use client";
import { CodeBlock } from "@/component/client/prism";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { Badge, Button, Tabs } from "mogora-ui";
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
    </Container>
  );
}

export default BadgePage;
