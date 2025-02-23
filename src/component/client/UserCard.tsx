"use client";
import { deleteUser } from "@/lib/actions/users.action";
import { Button } from "mogora-ui";
import React from "react";

function UserCard({ data }: { data: { name: string; id: number } }) {
  return (
    <div className="w-full flex justify-between gap-10 bg-red-200">
      <p>{data?.name}</p>
      <Button variant={"clicki"} onClick={() => deleteUser(data?.id)}>
        DELETE
      </Button>
    </div>
  );
}

export default UserCard;
