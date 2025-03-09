/* eslint-disable @typescript-eslint/no-explicit-any */
export type ResponseType<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  status: boolean;
  statusCode: number;
  message: string;
  results: any;
} & T;

export type statusAuth = "authenticated" | "unauthenticated";

export type UserRole = "Reguler" | "Administrator" | "Seller";

export type UserType<
  T extends Record<string, unknown> = Record<string, unknown>
> = {
  id: number;
  username: string;
  email: string;
  role: UserRole;
  avatar: string;
  avatar_id: string;
  created_at: Date;
  updated_at: Date;
} & T;
