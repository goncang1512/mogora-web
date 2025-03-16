"use server";
import prisma from "../config/prisma";
import cloudinary from "../utils/cloudinary";
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

export const changeFotoProfile = async (
  formData: FormData,
  avatar_id: string
): Promise<
  ResponseType<{ results: { secure_url: string; public_id: string } | null }>
> => {
  const file = formData.get("avatar") as File;
  const fileBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(fileBuffer);

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "/mogo-app",
        },
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }

          resolve(result);
        }
      )
      .end(buffer);
  });

  if (avatar_id !== "default_id") {
    await cloudinary.uploader.destroy(avatar_id);
  }

  try {
    return {
      status: true,
      statusCode: 200,
      message: "Success update profile user",
      results: {
        secure_url: result?.secure_url,
        public_id: result?.public_id,
      },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      results: null,
    };
  }
};
