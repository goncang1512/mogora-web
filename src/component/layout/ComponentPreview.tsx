"use client";
import { ComponentType } from "@/lib/utils/types";
import { Popover, Tabs } from "mogora-ui";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import React from "react";
import { SubTitle } from "../fragments/title";
import { useGlobal } from "@/lib/context/GlobalProvider";
import { Check, Clipboard } from "lucide-react";
import { deleteComponent } from "@/lib/actions/component.action";
import { useSession } from "@/lib/useSession";

interface ComponentPreviewProps {
  data: ComponentType;
}

function ComponentPreview({ data }: ComponentPreviewProps) {
  const { copy, copyToClipboard } = useGlobal();
  const session = useSession();
  const user = session?.data?.user;
  return (
    <div>
      <SubTitle className="pl-2">{data.name}</SubTitle>
      <Tabs defaultValue="preview">
        <Tabs.List className="w-max">
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
          {user?.id === data.userId && (
            <Popover>
              <Popover.Trigger className="px-2 hover:bg-gray-200 text-black rounded-md  text-center pt-1">
                more
              </Popover.Trigger>
              <Popover.Content className="w-44">
                <div className="w-full">
                  <button
                    onClick={async () => await deleteComponent(data.id)}
                    className="hover:bg-gray-200 rounded-md text-black w-full py-1"
                  >
                    delete
                  </button>
                </div>
              </Popover.Content>
            </Popover>
          )}
        </Tabs.List>
        <Tabs.Content value="preview">
          <img src={data.preview} className="border border-gray-200" alt="" />
        </Tabs.Content>
        <Tabs.Content value="code" className="w-full">
          <div className="flex flex-col w-full">
            <div className="bg-[#1E1E1E] flex justify-end p-2">
              <button
                onClick={() => copyToClipboard(data.code)}
                className="text-white hover:bg-gray-500 p-1 rounded-md"
              >
                {copy ? <Check size={17} /> : <Clipboard size={17} />}
              </button>
            </div>
            <CodeMirror
              className="w-full"
              minHeight="72vh"
              value={data.code}
              extensions={[javascript({ jsx: true })]}
              theme={vscodeDark}
              basicSetup={{ lineNumbers: true }}
              readOnly
            />
          </div>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export default ComponentPreview;
