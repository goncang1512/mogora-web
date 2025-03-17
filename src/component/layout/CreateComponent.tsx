"use client";
import React, {
  startTransition,
  useActionState,
  useEffect,
  useRef,
  useState,
} from "react";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { javascript } from "@codemirror/lang-javascript";
import { Button, Input } from "mogora-ui";
import { createComponent } from "@/lib/actions/component.action";
import { useSession } from "@/lib/useSession";
import { InputFloat } from "../fragments/input";

function CreateComponent() {
  const session = useSession();
  const [content, setContent] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);
  const [state, createAction, isPending] = useActionState(
    createComponent,
    undefined
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append("code", content);
    formData.append("user_id", String(session?.data?.user?.id));

    startTransition(() => {
      createAction(formData);
    });
  };

  useEffect(() => {
    if (state?.status) {
      formRef?.current?.reset();
      setContent("");
    }
  }, [state?.status]);

  return (
    <div>
      {state?.statusCode === 422 && (
        <p className="text-center text-red-500">{state?.message}</p>
      )}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="flex flex-col gap-3"
      >
        <CodeMirror
          onChange={setContent}
          value={content}
          minHeight="72vh"
          extensions={[javascript({ jsx: true })]}
          theme={vscodeDark}
          basicSetup={{ lineNumbers: true }}
        />
        <InputFloat name="name" placeholder="Name" />
        <Input type="file" name="layout-image" />
        <Button>{isPending ? "loading..." : "Create Component"}</Button>
      </form>
    </div>
  );
}

export default CreateComponent;
