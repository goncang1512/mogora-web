"use server";
import { headers } from "next/headers";
import { auth, Session } from "./auth";

export const getServerSession = async (): Promise<Session | null> => {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    return session ?? null;
  } catch (error) {
    console.error("Failed to fetch session:", error);
    return null;
  }
};
