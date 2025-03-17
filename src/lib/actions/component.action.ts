/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { ResponseType } from "@/lib/utils/types";
import prisma from "../config/prisma";
import slugify from "slugify";
import CustomError from "../utils/throwerror";
import { getServerSession } from "../getSession";
import cloudinary from "../utils/cloudinary";
import { revalidatePath } from "next/cache";

export const createComponent = async (
  prevState: any,
  formData: FormData
): Promise<ResponseType> => {
  const code = formData.get("code") as string;
  const name = formData.get("name") as string;
  const user_id = formData.get("user_id") as string;
  const formImage = formData.get("layout-image") as File;

  try {
    const existComponent = await prisma.component.findUnique({
      where: {
        name,
      },
    });

    if (existComponent) {
      throw new CustomError("The component already exists", 422);
    }

    const fileBuffer = await formImage.arrayBuffer();
    const image = new Uint8Array(fileBuffer);
    const result: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "/mogo-app/layout",
          },
          (error, result) => {
            if (error) {
              reject(error);
              return;
            }

            resolve(result);
          }
        )
        .end(image);
    });

    const slug = slugify(name, { lower: true, strict: true });

    const component = await prisma.component.create({
      data: {
        code,
        name,
        slug,
        userId: user_id,
        preview: result.secure_url,
        preview_id: result.public_id,
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

export const deleteComponent = async (
  component_id: string
): Promise<ResponseType> => {
  try {
    const data = await prisma.component.delete({
      where: {
        id: component_id,
      },
    });

    if (data.preview_id) {
      await cloudinary.uploader.destroy(data.preview_id);
    }

    revalidatePath("/dashboard/product");
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
