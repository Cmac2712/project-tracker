"use client"

import { BuiltInProviderType } from 'next-auth/providers/index';
import { ClientSafeProvider, LiteralUnion, signIn } from 'next-auth/react';
import { Button } from '../ui/button';

interface LoginFormProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>
}

export default function LoginForm({providers}: LoginFormProps) {
  return (
    <div className='flex flex-col gap-2'>
      {Object.values(providers).map((provider) => (
          <Button onClick={() => signIn(provider.id)} key={provider.name}>
            Sign in with {provider.name}
          </Button>
      ))}
    </div>
  );
}