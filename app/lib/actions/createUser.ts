import db from "@/lib/db";

interface UserInput {
  email: string;
  password: string;
}

export async function createUser(user: UserInput) {
  return await db.user.create({
    data: {
      email: user.email,
      password: user.password,
    },
  });
}