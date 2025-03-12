import Container from "@/component/layout/Container";
import CreateComponent from "@/component/layout/CreateComponent";
// import { getServerSession } from "@/lib/getSession";
import React from "react";

async function CreateCompnent() {
  // const session = await getServerSession();

  return (
    <Container>
      <CreateComponent />
    </Container>
  );
}

export default CreateCompnent;
