"use client";
import { Eye, EyeClosed } from "lucide-react";
import { Button, Input, Label } from "mogora-ui";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

function LoginForm() {
  const { pending } = useFormStatus();
  const [seePassword, setSeePassword] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Login Form</h1>
      <div className="relative flex flex-col gap-2">
        <Input
          theme={"secondary"}
          id="email"
          name="email"
          variant={"default"}
          placeholder=" "
          type="email"
          className="peer dark:text-slate-800 text-base"
        />
        <Label htmlFor="email" className="float-[default]">
          email
        </Label>
      </div>
      <div className="relative flex flex-col gap-2">
        <Input
          theme={"secondary"}
          id="password"
          name="password"
          variant={"default"}
          placeholder=" "
          className="peer dark:text-slate-800 text-base pr-9"
          type={seePassword ? "text" : "password"}
        />
        <Label htmlFor="password" className="float-[default]">
          password
        </Label>
        <button
          onClick={() => setSeePassword(!seePassword)}
          type="button"
          className="absolute right-2 transform translate-y-1/2"
        >
          {seePassword ? <Eye size={22} /> : <EyeClosed size={22} />}
        </button>
      </div>

      <Button disabled={pending}>{pending ? "loading..." : "Login"}</Button>
    </div>
  );
}

export default LoginForm;
