export const dynamic = "force-dynamic";

import Container from "@/component/layout/Container";
import ProfileComponent from "@/component/layout/setting/profile";
import SettingComponent from "@/component/layout/setting/SettingPage";
import { getAccountUser } from "@/lib/actions/users.action";
import { getServerSession } from "@/lib/getSession";
import React from "react";

async function SettingPage() {
  const data = await getServerSession();
  const account = await getAccountUser(String(data?.user?.id));

  return (
    <Container>
      <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-md p-3">
        <ProfileComponent user={data?.user ?? null} />
      </div>
      <SettingComponent account={account?.results} />
    </Container>
  );
}

export default SettingPage;
