"use client";
import { createUser } from "@/lib/actions/users.action";
import { Button, Input } from "mogora-ui";
import React from "react";

function FormCreateUser() {
  return (
    <div>
      <form action={createUser} className="flex flex-col gap-2 max-w-lg">
        <Input name="name" type="text" placeholder="Username" />
        <Input name="email" type="email" placeholder="Email" />
        <Input name="password" type="password" placeholder="Password" />
        <Button>Submit</Button>
      </form>
    </div>
  );
}

export default FormCreateUser;
