import { getServerSession } from "@/lib/getSession";
import React from "react";

async function CreateCompnent() {
  const session = await getServerSession();

  return (
    <div>
      <p>Username: {session?.user?.name}</p>
      <p>Email: {session?.user?.email}</p>
    </div>
  );
}

export default CreateCompnent;
