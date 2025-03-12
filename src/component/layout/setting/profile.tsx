"use client";
import { Avatar } from "mogora-ui";
import React from "react";

function ProfileComponent() {
  return (
    <div>
      <Avatar>
        <Avatar.Image />
        <Avatar.Fallback>MD</Avatar.Fallback>
      </Avatar>
    </div>
  );
}

export default ProfileComponent;
