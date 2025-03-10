import { BetterFetchError } from "better-auth/client";
import { authClient } from "./auth-client";

type SessionData = {
  data: {
    session: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      expiresAt: Date;
      token: string;
      ipAddress?: string | null | undefined | undefined;
      userAgent?: string | null | undefined | undefined;
    };
    user: {
      id: string;
      name: string;
      email: string;
      emailVerified: boolean;
      createdAt: Date;
      updatedAt: Date;
      image?: string | null | undefined | undefined;
    };
  } | null;
  isPending: boolean;
  error: BetterFetchError | null;
  refetch: () => void;
};

export const useSession = (): SessionData => {
  const data = authClient.useSession();

  return data;
};
