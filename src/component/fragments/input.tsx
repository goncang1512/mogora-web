import { Eye, EyeClosed } from "lucide-react";
import { Input, Label } from "mogora-ui";
import React, { useState } from "react";

interface InputProps {
  placeholder: React.ReactNode;
  name: string;
  required?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  ref?: React.Ref<HTMLInputElement>;
}

export function InputFloat({
  name,
  value,
  onChange,
  type,
  placeholder,
  required,
  ref,
}: InputProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <Input
        ref={ref}
        id={name}
        name={name}
        variant={"bordered"}
        value={value}
        onChange={onChange}
        placeholder=" "
        type={type}
        required={required}
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

export function InputFloatPassword({
  name,
  value,
  onChange,
  placeholder,
  required,
  ref,
}: InputProps) {
  const [seePassword, setSeePassword] = useState(false);

  return (
    <div className="relative flex flex-col gap-2">
      <Input
        ref={ref}
        id={name}
        name={name}
        variant={"bordered"}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer dark:text-slate-800 text-base pr-9"
        type={seePassword ? "text" : "password"}
        required={required}
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
