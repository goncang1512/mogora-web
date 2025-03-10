import query from "../utils/query";
import { UserType } from "../utils/types";

const userModel = {
  getUserByEmail: async (
    email: string
  ): Promise<UserType<{ password: string }>> => {
    const sql = `
        SELECT 
          id, 
          email,
          password
          FROM users
          WHERE email = $1;      
      `;

    const result = await query(sql, [email]);

    return result.rows[0];
  },
  getUserById: async (user_id: number): Promise<UserType> => {
    const sql = `
      SELECT 
        id, 
        username, 
        role,
        email, 
        avatar, 
        status,
        avatar_id,
        created_at,
        updated_at
        FROM users
        WHERE id = $1;
    `;

    const result = await query(sql, [user_id]);

    return result.rows[0];
  },
};

export default userModel;
