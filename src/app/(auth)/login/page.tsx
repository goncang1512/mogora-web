"use client";
import { InputFloat, InputFloatPassword } from "@/component/fragments/input";
import ButtonSocial from "@/component/layout/ButtonSocial";
import { authClient } from "@/lib/auth-client";
import { Button } from "mogora-ui";
import Link from "next/link";
import React, { useRef, useState } from "react";

function Page() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await authClient.signIn.email(
      {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        callbackURL: "/dashboard/create",
      },
      {
        onRequest: () => {
          setMessage("");
          setLoading(true);
        },
        onSuccess: () => {
          setMessage("");
          setLoading(false);
          formRef.current?.reset();
        },
        onError: (ctx) => {
          setMessage(ctx.error.message);
          setLoading(false);
        },
      }
    );
  };

  return (
    <div className="h-screen flex w-full justify-center items-center md:px-0 px-3">
      <div className="max-w-md w-full p-3 gap-4 flex flex-col border border-gray-300 rounded-md">
        <h1 className="text-xl font-semibold">Login Form</h1>
        {message && (
          <p className="text-red-500 italic text-center">{message}</p>
        )}
        <ButtonSocial />
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <hr className="w-full bg-gray-400" />
          OR
          <hr className="w-full bg-gray-400" />
        </div>
        <form onSubmit={handleSubmit} className="gap-4 flex flex-col">
          <InputFloat name="email" placeholder="Email" />
          <InputFloatPassword name="password" placeholder="Password" />
          <Button disabled={loading}>{loading ? "loading..." : "Login"}</Button>
        </form>
        <p className="pt-2 text-center text-gray-500">
          Don&apos;t have account?{" "}
          <Link className="text-blue-500" href={"/register"}>
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Page;
