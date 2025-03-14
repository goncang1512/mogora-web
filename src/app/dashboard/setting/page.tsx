"use client";
import { InputFloat } from "@/component/fragments/input";
import { SubTitle } from "@/component/fragments/title";
import Container from "@/component/layout/Container";
import { authClient } from "@/lib/auth-client";
import { useSession } from "@/lib/useSession";
import { LogOut } from "lucide-react";
import { Accordion, Avatar, Button, Modal } from "mogora-ui";
import React, { useEffect, useState } from "react";

function SettingPage() {
  const data = useSession();
  const user = data?.data?.user;
  const [openModal, setOpenModal] = useState(false);
  const [whatEdit, setWhatEdit] = useState({
    username: false,
    email: false,
  });

  return (
    <Container>
      <div className="flex items-center justify-between gap-3 border border-gray-300 rounded-md p-3">
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
      </div>
      <div className="flex flex-col gap-3">
        <Accordion>
          <Accordion.Item
            value={"item-1"}
            className="border-b-1 border-gray-300"
          >
            <Accordion.Trigger>Profile</Accordion.Trigger>
            <Accordion.Content>
              <div>
                <button
                  onClick={() => {
                    setOpenModal(true);
                    setWhatEdit({ username: true, email: false });
                  }}
                  className="hover:bg-gray-100 w-full py-2 rounded-md text-start pl-3"
                >
                  Edit Username
                </button>
                <button
                  onClick={() => {
                    setOpenModal(true);
                    setWhatEdit({ username: false, email: true });
                  }}
                  className="hover:bg-gray-100 w-full py-2 rounded-md text-start pl-3"
                >
                  Edit Email
                </button>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
        <Button variant={"danger"} className="flex justify-between">
          Logout <LogOut />
        </Button>
      </div>
      <ModalEdit
        setOpenChange={setOpenModal}
        open={openModal}
        whatEdit={whatEdit}
      />
    </Container>
  );
}

const ModalEdit = ({
  whatEdit,
  open,
  setOpenChange,
}: {
  whatEdit: { username: boolean; email: boolean };
  open: boolean;
  setOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const session = useSession();
  const [edit, setEdit] = useState({
    username: "",
    email: "",
  });
  const handleUpUsername = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await authClient.updateUser({
      name: formData.get("username") as string,
    });

    setOpenChange(false);
  };

  const handleUpEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    await authClient.changeEmail({
      newEmail: formData.get("email") as string,
      callbackURL: "/dashboard/setting", //to redirect after verification
    });

    setOpenChange(false);
  };

  useEffect(() => {
    if (session?.data?.user) {
      setEdit({
        ...edit,
        username: session?.data?.user?.name,
        email: session?.data?.user?.email,
      });
    }
  }, [session?.data?.user]);

  return (
    <Modal open={open} onOpenChange={setOpenChange}>
      <Modal.Content className="flex flex-col gap-2">
        {whatEdit.username && (
          <>
            <SubTitle>Edit Username</SubTitle>
            <form onSubmit={handleUpUsername} className="flex flex-col gap-2">
              <InputFloat
                name="username"
                type="text"
                value={edit.username}
                onChange={(e) => setEdit({ ...edit, username: e.target.value })}
                placeholder="Username"
                required
              />
              <Button type="submit">Edit</Button>
            </form>
          </>
        )}
        {whatEdit.email && (
          <>
            <SubTitle>Edit Email</SubTitle>
            <form onSubmit={handleUpEmail} className="flex flex-col gap-2">
              <InputFloat
                name="email"
                type="email"
                value={edit.email}
                onChange={(e) => setEdit({ ...edit, email: e.target.value })}
                placeholder="Email"
                required
              />
              <Button type="submit">Edit</Button>
            </form>
          </>
        )}
      </Modal.Content>
    </Modal>
  );
};

export default SettingPage;
