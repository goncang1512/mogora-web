"use client";
import Container from "@/component/layout/Container";
import { useSession } from "@/lib/useSession";
import { Avatar } from "mogora-ui";
import React from "react";

function SettingPage() {
  const data = useSession();
  const user = data?.data?.user;

  return (
    <Container>
      <div className="flex items-center gap-3 border border-gray-300 rounded-md p-3">
        <Avatar>
          <Avatar.Image
            className="border border-gray-300"
            src={
              user?.avatar !== "avatar.png"
                ? user?.avatar
                : user?.image || undefined
            }
          />
          <Avatar.Fallback>AV</Avatar.Fallback>
        </Avatar>
        <div className="flex flex-col leading-3">
          <h1 className="font-medium">{user?.name}</h1>
          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>
    </Container>
  );
}

export default SettingPage;
