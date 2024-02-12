'use server'
import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

const config = {
  ...authConfig
} 

export const { auth, signIn, signOut } = NextAuth(config);