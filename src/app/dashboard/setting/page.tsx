export const dynamic = "force-dynamic";

import Container from "@/component/layout/Container";
import SettingComponent from "@/component/layout/setting/SettingPage";
import { getAccountUser } from "@/lib/actions/users.action";
import { getServerSession } from "@/lib/getSession";
import React from "react";

async function SettingPage() {
  const data = await getServerSession();
  const account = await getAccountUser(String(data?.user?.id));

  return (
    <Container>
      <SettingComponent account={account?.results} />
    </Container>
  );
}

export default SettingPage;
