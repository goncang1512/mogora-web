import { BetterFetchError } from "better-auth/client";
import { authClient } from "./auth-client";
import { Session } from "./auth";

type SessionData = {
  data: Session | null;
  isPending: boolean;
  error: BetterFetchError | null;
  refetch: () => void;
};

export const useSession = (): SessionData => {
  const data = authClient.useSession();

  return data;
};
