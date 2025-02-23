"use client";
import { deleteUser } from "@/lib/actions/users.action";
import { Button } from "mogora-ui";
import React from "react";

function UserCard({
  data,
}: {
  data: { username: string; id: number; email: string };
}) {
  return (
    <div className="w-full flex justify-between items-center p-2 rounded-md gap-10 bg-red-200 h-full pb-1">
      <p className="font-semibold">{data?.username}</p>
      <p>{data?.email}</p>
      <Button
        className="text-sm"
        variant={"clicki"}
        size={"small"}
        onClick={() => deleteUser(data?.id)}
      >
        DELETE
      </Button>
    </div>
  );
}

export default UserCard;
