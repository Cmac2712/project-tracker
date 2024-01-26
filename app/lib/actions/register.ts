'use server'
import bcrypt from 'bcrypt'
import { createUser } from "./createUser";

export async function signup(
  prevState: string | undefined,
  formData: FormData,
) {

  try {
    const userInput = Object.fromEntries(formData)
    const hashedPassword = await bcrypt.hash(userInput.password as string, 10)

    const createdUser = await createUser({
      email: userInput.email as string,
      password: hashedPassword 
    })

     return 'Success';
  } catch (error) {
    if ((error as Error).message.includes('CredentialsSignin')) {
      return 'CredentialSignin';
    }
    throw error;
  }
}