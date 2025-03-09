"use client";
import LoginForm from "@/component/server/LoginForm";
import { loginUser } from "@/lib/actions/auth.action";
import useAction from "@/lib/utils/useAction";
import React, { useEffect } from "react";

function Page() {
  const { execute, error, loading, setError } = useAction(loginUser);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await execute(formData);
    e.currentTarget?.reset();
  };

  useEffect(() => {
    setTimeout(() => {
      setError(null);
    }, 3000);
  }, [loading]);

  return (
    <div className="h-screen flex w-full justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-sm p-3 border border-gray-300 rounded-md"
      >
        {error?.statusCode !== 500 && (
          <h1 className="text-base text-red-500 text-center">
            {error?.message}
          </h1>
        )}
        <LoginForm />
      </form>
    </div>
  );
}

export default Page;
