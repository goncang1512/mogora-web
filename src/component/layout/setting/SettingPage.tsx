"use client";
import { authClient } from "@/lib/auth-client";
import { AccountType } from "@/lib/utils/types";
import { LogOut, User } from "lucide-react";
import { Accordion, Button } from "mogora-ui";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { EditProfile } from "./EditProfile";

function SettingComponent({ account }: { account: AccountType }) {
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const [whatEdit, setWhatEdit] = useState({
    username: false,
    email: false,
    foto: false,
  });

  return (
    <>
      <div className="flex flex-col gap-3">
        <Accordion>
          <Accordion.Item value="item1">
            <Accordion.Trigger>
              <div className="flex items-end gap-2">
                <User size={23} className="pb-1" /> <p>Profile</p>
              </div>
            </Accordion.Trigger>
            <Accordion.Content
              onClick={() => {
                setOpenModal(true);
                setWhatEdit({ username: true, email: false, foto: false });
              }}
              className="hover:bg-gray-100 pl-4 rounded-md cursor-pointer duration-100"
            >
              Edit Username
            </Accordion.Content>
            <Accordion.Content
              onClick={() => {
                setOpenModal(true);
                setWhatEdit({ username: false, email: false, foto: true });
              }}
              className="hover:bg-gray-100 pl-4 rounded-md cursor-pointer duration-100"
            >
              Edit Foto Profile
            </Accordion.Content>
            {account?.providerId === "credential" && (
              <Accordion.Content
                onClick={() => {
                  setOpenModal(true);
                  setWhatEdit({ username: false, email: true, foto: false });
                }}
                className="hover:bg-gray-100 pl-4 rounded-md cursor-pointer duration-100"
              >
                Edit Email
              </Accordion.Content>
            )}
          </Accordion.Item>
        </Accordion>
        <Button
          onClick={async () =>
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/login");
                },
              },
            })
          }
          variant={"danger"}
          className="flex justify-between"
        >
          Logout <LogOut />
        </Button>
      </div>
      <EditProfile
        setOpenChange={setOpenModal}
        open={openModal}
        whatEdit={whatEdit}
      />
    </>
  );
}

export default SettingComponent;
