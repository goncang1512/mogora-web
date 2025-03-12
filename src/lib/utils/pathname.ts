import { headers } from "next/headers";

export const getPathname = async () => {
  "use server";
  const headersList = await headers();
  const fullUrl = headersList.get("referer") || ""; // Get the full URL
  const url = new URL(fullUrl);
  const pathname = url.pathname;
  return pathname;
};
