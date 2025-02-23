import FormCreateUser from "@/component/client/Home/FormCreateUser";
import UserCard from "@/component/client/UserCard";
import { getUsers } from "@/lib/actions/users.action";
import React from "react";

async function Home() {
  const users = await getUsers();

  return (
    <div className="p-10">
      <FormCreateUser />
      {users?.map((data: { id: number; name: string }) => {
        return <UserCard key={data.id} data={data} />;
      })}
    </div>
  );
}

export default Home;
