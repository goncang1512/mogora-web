import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "./config/prisma";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
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
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  user: {
    modelName: "user",
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
    changeEmail: {
      enabled: true,
    },
  },
});

export type Session = typeof auth.$Infer.Session;
