import { getProviders } from 'next-auth/react';
import LoginForm from './form';
 
export default async function LoginPage() {
const providers = await getProviders()

  return (
    <main className="flex items-center justify-center md:h-screen">
      <LoginForm providers={providers} />
    </main>
  );
}