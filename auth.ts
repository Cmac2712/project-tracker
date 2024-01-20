'use server'
import NextAuth, { NextAuthConfig } from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { getUser } from './app/lib/actions/getUser';
import bcrypt from 'bcrypt';
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import  getServerSession  from "next-auth"

const config = {
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

          if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);

            if (!user) return null;

            let passwordsMatch; 
            
            try {
              passwordsMatch = await bcrypt.compare(password, user.password);
            } catch(error) {
              console.log('passwords: ', error)
            }

            if (passwordsMatch) return user;
          }

          console.log('Invalid credentials')

          return null
      },
    }),
  ],
} satisfies NextAuthConfig

export async function getAuth(...args: [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]] | [NextApiRequest, NextApiResponse] | []) {
  return getServerSession(...args, config)
}
 
export const { auth, signIn, signOut } = NextAuth(config);