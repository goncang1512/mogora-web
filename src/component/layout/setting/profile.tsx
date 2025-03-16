"use client";
import { UserType } from "@/lib/utils/types";
import { Avatar } from "mogora-ui";
import React from "react";

function ProfileComponent({ user }: { user: UserType | null }) {
  return (
    <div className="flex items-center gap-3">
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
  );
}

export default ProfileComponent;
