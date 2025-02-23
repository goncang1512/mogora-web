"use client";
import { createUser } from "@/lib/actions/users.action";
import useAction from "@/lib/utils/useAction";
import { Button, Input } from "mogora-ui";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function Form() {
  const router = useRouter();
  const {
    execute: fnCreateUser,
    loading,
    error,
    setError,
  } = useAction(createUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await fnCreateUser(formData);
    if (result.status) {
      router.push("/");
    }
  };

  useEffect(() => {
    if (!error?.status) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [loading, error?.status]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <p className="text-center text-red-500 italic">
        {error?.statusCode !== 500 && error?.message}
      </p>
      <Input type="text" name="username" placeholder="Username" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Input type="password" name="confirm" placeholder="Confirm password" />
      <Button variant={"clicki"}>{loading ? "Loading" : "Register"}</Button>
    </form>
  );
}

export default Form;
