"use server";
import query from "@/lib/utils/query";
import { revalidatePath } from "next/cache";
import CustomError from "../utils/throwerror";
import { ResponseType } from "../utils/types";

export const getUsers = async () => {
  const sql = `SELECT * FROM users`;

  try {
    const result = await query(sql);

    return result.rows;
  } catch (error: unknown) {
    console.log(error);
    return [];
  }
};

export const createUser = async (formData: FormData): Promise<ResponseType> => {
  const name = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirm = formData.get("confirm");

  const sql = `
  INSERT INTO users
      (username, email, password, avatar, avatar_id, role)
      VALUES
      ($1, $2, $3, $4, $5, $6)
      RETURNING *;
`;

  try {
    if (!name || !email || !password || !confirm) {
      throw new CustomError("Invalid data. Try again.", 422);
    }

    if (password !== confirm) {
      throw new CustomError("Invalid password", 422);
    }

    const results = await query(sql, [
      name,
      email,
      password,
      "default",
      "default_id",
      "Reguler",
    ]);
    return {
      status: true,
      statusCode: 201,
      message: "Success create user",
      results: results.rows[0],
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
      message: "Invalid Internal Server",
      results: null,
    };
  }
};

export const deleteUser = async (user_id: number) => {
  const sql = `
        DELETE FROM users
            WHERE id = $1
            RETURNING id;
    `;

  const result = await query(sql, [user_id]);
  revalidatePath("/home");
  return result.rows[0];
};
