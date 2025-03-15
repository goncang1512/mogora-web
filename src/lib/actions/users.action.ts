"use server";

import prisma from "../config/prisma";
import { getServerSession } from "../getSession";
import { ResponseType } from "../utils/types";

export const getAccountUser = async (): Promise<ResponseType> => {
  try {
    const data = await getServerSession();

    const user = await prisma.account.findFirst({
      where: {
        userId: String(data?.user?.id),
      },
      select: {
        id: true,
        accountId: true,
        providerId: true,
        userId: true,
        scope: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return {
      status: true,
      statusCode: 200,
      message: "Success get account user",
      results: user,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      results: error,
    };
  }
};
