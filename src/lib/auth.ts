import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./config/prisma";
import { resend } from "./resend";

export const auth = betterAuth({
  socialProviders: {
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
  user: {
    changeEmail: {
      enabled: true,
      sendChangeEmailVerification: async ({ newEmail, url }) => {
        await resend.emails.send({
          from: "Mogo app",
          to: newEmail,
          subject: "Email verification",
          html: `Click the link to verify your email: ${url}`,
        });
      },
    },
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "Reguler",
        input: false,
      },
      avatar: {
        type: "string",
        required: true,
        defaultValue: "avatar.png",
        input: true,
      },
      avatarId: {
        type: "string",
        required: true,
        defaultValue: "avatar.png",
        input: true,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
