import { Eye, EyeClosed } from "lucide-react";
import { Input, Label } from "mogora-ui";
import React, { useState } from "react";

interface InputProps {
  placeholder: React.ReactNode;
  name: string;
  type?: string;
}

export function InputFloat({ name, type, placeholder }: InputProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <Input
        theme={"secondary"}
        id={name}
        name={name}
        variant={"default"}
        placeholder=" "
        type={type}
        className="peer dark:text-slate-800 text-base"
      />
      <Label
        htmlFor={name}
        className="float-[default] peer-focus:text-black text-slate-600 "
      >
        {placeholder}
      </Label>
    </div>
  );
}

export function InputFloatPassword({ name, placeholder }: InputProps) {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <div className="relative flex flex-col gap-2">
      <Input
        theme={"secondary"}
        id={name}
        name={name}
        variant={"default"}
        placeholder=" "
        className="peer dark:text-slate-800 text-base pr-9"
        type={seePassword ? "text" : "password"}
      />
      <Label
        htmlFor={name}
        className="float-[default] peer-focus:text-black text-slate-600"
      >
        {placeholder}
      </Label>
      <button
        onClick={() => setSeePassword(!seePassword)}
        type="button"
        className="absolute right-2 transform translate-y-1/2"
      >
        {seePassword ? <Eye size={22} /> : <EyeClosed size={22} />}
      </button>
    </div>
  );
}
