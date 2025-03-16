import { auth } from "../auth";

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
export type StatusAccount = "Aktif" | "Banned" | "Premium";

export type UserType<T = unknown> = T extends Record<string, never>
  ? typeof auth.$Infer.Session.user
  : typeof auth.$Infer.Session.user & T;

export type ComponentType = {
  id: string;
  name: string;
  slug: string;
  userId: string;
  code: string;
  preview: string;
  preview_id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AccountType = {
  id: string;
  accountId: string;
  providerId: string;
  userId: string;
  scope: string | null;
  createdAt: Date;
  updatedAt: Date;
};
