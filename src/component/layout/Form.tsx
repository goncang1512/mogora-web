"use client";
import { InputFloat, InputFloatPassword } from "@/component/fragments/input";
import { authClient } from "@/lib/auth-client";
import { Button } from "mogora-ui";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

function Form() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await authClient.signUp.email(
      {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: formData.get("username") as string,
        callbackURL: "/login",
      },
      {
        onRequest: () => {
          setMessage("");
          setLoading(true);
        },
        onSuccess: () => {
          router.push("/login");
          setLoading(false);
          formRef.current?.reset();
        },
        onError: (ctx) => {
          setLoading(false);
          setMessage(ctx.error.message);
          if (ctx.error.status === 403) {
            alert("Please verify your email address");
          }
        },
      }
    );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      {message && <p className="text-red-500 italic text-center">{message}</p>}
      <InputFloat name="username" type="text" placeholder="Username" />
      <InputFloat name="email" type="email" placeholder="Email" />
      <InputFloatPassword name="password" placeholder="Password" />
      <InputFloatPassword name="confirm" placeholder="Confirm password" />
      <Button disabled={loading}>{loading ? "loading..." : "Register"}</Button>
    </form>
  );
}

export default Form;
