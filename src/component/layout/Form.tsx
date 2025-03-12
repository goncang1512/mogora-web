"use client";
import { InputFloat, InputFloatPassword } from "@/component/fragments/input";
import { authClient } from "@/lib/auth-client";
import { ArrowLeft } from "lucide-react";
import { Button } from "mogora-ui";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";

function Form({
  nextField,
  setNextField,
}: {
  nextField: boolean;
  setNextField: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    const formData = new FormData(e.currentTarget);
    const password = formData.get("password");
    const confirm = formData.get("confirm");

    if (password !== confirm) {
      setMessage("Password and Confirm Password invalid");
      return false;
    }

    await authClient.signUp.email(
      {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        name: formData.get("username") as string,
        avatar: "image.png",
        avatarId: "default_id",
        callbackURL: "/login",
      },
      {
        onRequest: () => {
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
      <div className={nextField ? "flex flex-col gap-3" : "hidden"}>
        <InputFloatPassword name="password" placeholder="Password" />
        <InputFloatPassword name="confirm" placeholder="Confirm password" />
      </div>
      <div className={!nextField ? "flex flex-col gap-3" : "hidden"}>
        <InputFloat name="username" type="text" placeholder="Username" />
        <InputFloat name="email" type="email" placeholder="Email" />
      </div>
      {nextField ? (
        <div className="w-full flex gap-2">
          <Button
            variant={"primary"}
            onClick={() => setNextField(false)}
            type="button"
          >
            <ArrowLeft size={25} />
          </Button>
          <Button type="submit" className="flex-1" disabled={loading}>
            {loading ? "loading..." : "Register"}
          </Button>
        </div>
      ) : (
        <Button
          onClick={() => setNextField(true)}
          type="button"
          disabled={loading}
        >
          Next
        </Button>
      )}
    </form>
  );
}

export default Form;
