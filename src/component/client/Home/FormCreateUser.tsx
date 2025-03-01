"use client";
import { createUser } from "@/lib/actions/users.action";
import { Button, Input } from "mogora-ui";
import React from "react";

function FormCreateUser() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const response = await createUser(formData);
    console.log(response); // Handle response (misalnya tampilkan pesan sukses atau error)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-lg">
        <Input name="username" type="text" placeholder="Username" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Input name="confirm" type="password" placeholder="Confirm Password" />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default FormCreateUser;
