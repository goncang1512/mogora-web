/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { ResponseType } from "@/lib/utils/types";
import prisma from "../config/prisma";
import slugify from "slugify";
import CustomError from "../utils/throwerror";
import { getServerSession } from "../getSession";

export const createComponent = async (
  prevState: any,
  formData: FormData
): Promise<ResponseType> => {
  const code = formData.get("code") as string;
  const name = formData.get("name") as string;
  const user_id = formData.get("user_id") as string;

  try {
    const existComponent = await prisma.component.findUnique({
      where: {
        name,
      },
    });

    if (existComponent) {
      throw new CustomError("The component already exists", 422);
    }

    const slug = slugify(name, { lower: true, strict: true });

    const component = await prisma.component.create({
      data: {
        code,
        name,
        slug,
        userId: user_id,
        preview: "default.png",
        preview_id: "default_id",
      },
    });

    return {
      status: true,
      statusCode: 201,
      message: "Success create component",
      results: component,
    };
  } catch (error) {
    if (error instanceof CustomError) {
      return {
        status: false,
        statusCode: error.statusCode,
        message: error.message,
        results: null,
      };
    }

    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      results: null,
    };
  }
};

export const getMyComponent = async (): Promise<ResponseType> => {
  try {
    const session = await getServerSession();

    const data = await prisma.component.findMany({
      where: {
        userId: session?.user?.id,
      },
    });

    return {
      status: true,
      statusCode: 200,
      message: "Succces get my component",
      results: data,
    };
  } catch (error) {
    return {
      status: false,
      statusCode: 500,
      message: "Internal Server Error",
      results: null,
    };
  }
};
