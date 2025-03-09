"use client";
import { createContext, ReactNode, useContext } from "react";
import { statusAuth, UserType } from "../utils/types";

interface AuthProps {
  children: ReactNode;
  user: UserType | null;
  status: statusAuth;
}

interface AuthType {
  status: statusAuth;
  data: UserType | null;
}

const AuthContext = createContext<AuthType>({} as AuthType);

export const AuthProvider = ({ children, user, status }: AuthProps) => {
  return (
    <AuthContext.Provider
      value={{
        status: status,
        data: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => useContext(AuthContext);
