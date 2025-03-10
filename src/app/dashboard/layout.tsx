import Mobilebar from "@/component/layout/Mobilebar";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

async function Layout({ children }: { children: ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return redirect("/login");
  }

  return (
    <div>
      <Mobilebar />
      <div className="pt-14">{children}</div>
    </div>
  );
}

export default Layout;
