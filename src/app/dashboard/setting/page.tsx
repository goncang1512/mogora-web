import Container from "@/component/layout/Container";
import SettingComponent from "@/component/layout/setting/SettingPage";
import { getAccountUser } from "@/lib/actions/users.action";
import React from "react";

async function SettingPage() {
  const account = await getAccountUser();

  return (
    <Container>
      <SettingComponent account={account?.results} />
    </Container>
  );
}

export default SettingPage;
