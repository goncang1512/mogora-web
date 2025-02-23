import { QueryResult } from "pg";
import pool from "../config/db";

export default async function query(
  text: string,
  params?: unknown[]
): Promise<QueryResult> {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res;
  } catch (err) {
    console.error("Database query error:", err);
    throw err;
  } finally {
    client.release();
  }
}
