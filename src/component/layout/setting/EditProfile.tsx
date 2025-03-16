"use client";
import { InputFloat } from "@/component/fragments/input";
import { SubTitle } from "@/component/fragments/title";
import { changeFotoProfile } from "@/lib/actions/users.action";
import { authClient } from "@/lib/auth-client";
import { useSession } from "@/lib/useSession";
import { Avatar, Button, Input, Label, Modal } from "mogora-ui";
import React, { useEffect, useState } from "react";

interface EditProfileProps {
  whatEdit: { username: boolean; email: boolean; foto: boolean };
  open: boolean;
  setOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditProfile = ({
  whatEdit,
  open,
  setOpenChange,
}: EditProfileProps) => {
  const session = useSession();
  const user = session?.data?.user;
  const [edit, setEdit] = useState<{
    username: string;
    email: string;
    foto: string | null | undefined;
  }>({
    username: "",
    email: "",
    foto: "",
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
      callbackURL: "/dashboard/setting",
    });

    setOpenChange(false);
  };

  useEffect(() => {
    if (session?.data?.user) {
      setEdit({
        ...edit,
        username: session?.data?.user?.name,
        email: session?.data?.user?.email,
        foto: user?.avatar !== "avatar.png" ? user?.avatar : user?.image,
      });
    }
  }, [open, session?.data?.user]);

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
        {whatEdit.foto && (
          <EditFotoProfile src={edit.foto} setOpenChange={setOpenChange} />
        )}
      </Modal.Content>
    </Modal>
  );
};

const EditFotoProfile = ({
  src,
  setOpenChange,
}: {
  src: string | null | undefined;
  setOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(src ?? null);
  const [onLoading, setOnLoading] = useState(false);
  const data = useSession();
  const user = data?.data?.user;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOnLoading(true);

    const formData = new FormData(e.currentTarget);
    const fotoProfile = await changeFotoProfile(
      formData,
      String(user?.avatarId)
    );

    await authClient.updateUser(
      {
        avatar: fotoProfile.results.secure_url,
        avatarId: fotoProfile.results.public_id,
      },
      {
        onRequest: () => {
          setOnLoading(true);
        },
        onSuccess: () => {
          setOpenChange(false);
          setOnLoading(false);
        },
        onError: () => {
          setOnLoading(false);
        },
      }
    );
  };

  return (
    <>
      <SubTitle>Edit Foto Profile</SubTitle>
      <form
        onSubmit={handleEditProfile}
        className="flex flex-col items-center gap-5"
      >
        <Label htmlFor="avatar" className="flex gap-3 cursor-pointer">
          <Avatar>
            <Avatar.Image
              className="size-32 border border-zinc-200 object-cover"
              src={imageSrc ?? undefined}
            />
            <Avatar.Fallback>AV</Avatar.Fallback>
          </Avatar>
          <Input
            id="avatar"
            name="avatar"
            type="file"
            onChange={handleFileChange}
            hidden
          />
        </Label>
        <Button disabled={onLoading} type="submit" className="w-full">
          {onLoading ? "loading..." : "Edit Profile"}
        </Button>
      </form>
    </>
  );
};
