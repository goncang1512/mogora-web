"use server";
import prisma from "../config/prisma";
import { ResponseType } from "../utils/types";

export const getAccountUser = async (
  user_id: string
): Promise<ResponseType> => {
  try {
    const user = await prisma.account.findFirst({
      where: {
        userId: user_id,
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
