"use client";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { authClient } from "../auth-client";
import { useRouter } from "next/navigation";

interface GlobalType {
  copy: boolean;
  setCopy: Dispatch<SetStateAction<boolean>>;
  copyToClipboard: (code: string) => Promise<void>;
  loginFunc: (email: string, password: string) => Promise<void>;
}

const GlobalContext = createContext<GlobalType>({} as GlobalType);

function GlobalProvider({ children }: { children: React.ReactNode }) {
  const [copy, setCopy] = useState(false);
  const router = useRouter();

  const copyToClipboard = async (code: string) => {
    setCopy(true);
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy: ", err);
    } finally {
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
  };

  const loginFunc = async (email: string, password: string) => {
    await authClient.signIn.email(
      {
        email: email,
        password: password,
        callbackURL: "/dashboard/setting",
      },
      {
        onSuccess: () => {
          router.push("/dashboard/setting");
        },
      }
    );
  };

  return (
    <GlobalContext.Provider
      value={{ copy, setCopy, loginFunc, copyToClipboard }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobal = () => useContext(GlobalContext);

export default GlobalProvider;
