'use server'
import NextAuth from 'next-auth';
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
    Credentials()
  ],
} 

export const { auth, signIn, signOut } = NextAuth(config);