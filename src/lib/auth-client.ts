import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL, // the base url of your auth server,
  plugins: [
    inferAdditionalFields({
      user: {
        role: {
          type: "string",
          required: true,
          input: false,
        },
        avatar: {
          type: "string",
          required: true,
          input: true,
        },
        avatarId: {
          type: "string",
          required: true,
          input: true,
        },
      },
    }),
  ],
});
