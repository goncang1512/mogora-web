"use client";
import { CodeBlock } from "@/component/client/prism";
import { TerminalBlock } from "@/component/client/terminalcode";
import { SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import React, { useState } from "react";

const installMogora = "npm install mogora-ui@latest";
const installTailwind = "npm install tailwindcss @tailwindcss/cli";
const installLucide = "npm install lucide-react";

const exampleCode = `
import { Button } from "mogora-ui";
import { Sun } from "lucide-react";

export default function App() {
  return (
    <div className="p-4">
      <Button className="bg-blue-500 text-white flex items-center gap-2">
        <Sun />
        Click Me
      </Button>
    </div>
  );
}
`;

const ComponentCopy = ({ codeCom }: { codeCom: string }) => {
  const [copy, setCopy] = useState(false);

  const copyToClipboard = async (code: string) => {
    setCopy(true);
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy: ", err);
    } finally {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => copyToClipboard(codeCom)}
          className="text-white hover:bg-gray-500 p-1 rounded-md"
        >
          {copy ? <Check size={17} /> : <Clipboard size={17} />}
        </button>
      </div>
      <TerminalBlock className="h-max">{codeCom}</TerminalBlock>
    </div>
  );
};

function InstallationPage() {
  const { copyToClipboard, copy } = useGlobal();

  return (
    <Container className="pt-10 pb-10">
      <h1 className="text-3xl font-semibold">Mogora UI Documentation</h1>
      <p>
        Mogora UI is a UI library specifically built for React.js with React
        v19. This library uses Tailwind CSS v4 for styling and Lucide React for
        icons.
      </p>

      <div className="flex flex-col gap-5 pt-5">
        <div>
          <SubTitle className="text-xl">Installation</SubTitle>
          <p>
            Mogora UI can only be installed using npm. Make sure you have
            React.js v19 installed before proceeding with the installation.
          </p>

          <ComponentCopy codeCom={installMogora} />
        </div>

        <div>
          <SubTitle className="text-xl">Install Tailwind CSS v4</SubTitle>
          <p>
            If your project does not have{" "}
            <a
              className="text-blue-500"
              href="https://tailwindcss.com/docs/installation"
            >
              Tailwind CSS v4
            </a>{" "}
            installed, install it using the following commands:
          </p>

          <ComponentCopy codeCom={installTailwind} />
        </div>

        <div>
          <SubTitle className="text-xl">Install Lucide React</SubTitle>
          <p>
            Mogora UI uses{" "}
            <a
              className="text-blue-500"
              href="https://lucide.dev/guide/installation"
            >
              Lucide React
            </a>{" "}
            for icons. Ensure you install it using the following command:
          </p>

          <ComponentCopy codeCom={installLucide} />
        </div>

        <div>
          <SubTitle className="text-xl">Usage</SubTitle>
          <p>
            Once installation is complete, you can directly import components
            from Mogora UI into your React.js project.
          </p>

          <SubTitle className="text-xl">Example Usage</SubTitle>
          <div className="relative">
            <div className="absolute top-4 right-4">
              <button
                onClick={() => copyToClipboard(exampleCode)}
                className="text-white hover:bg-gray-500 p-1 rounded-md"
              >
                {copy ? <Check size={17} /> : <Clipboard size={17} />}
              </button>
            </div>
            <CodeBlock className="h-max">{exampleCode}</CodeBlock>
          </div>
        </div>

        <div>
          <SubTitle className="text-xl">Notes</SubTitle>

          <ul className="list-disc pl-4.5">
            <li>
              <p>
                <span className="font-semibold">React.js v19</span>
                <span> is the minimum supported version.</span>
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold">Only supports npm</span>
                <span>, it cannot be installed using yarn or pnpm.</span>
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold">Tailwind CSS v4</span>
                <span> is required to ensure styling compatibility.</span>
              </p>
            </li>
            <li>
              <p>
                <span className="font-semibold">Lucide React</span>
                <span>
                  {" "}
                  is the only compatible icon library with Mogora UI.
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default InstallationPage;
