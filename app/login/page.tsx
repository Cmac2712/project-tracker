import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { login, signup } from './actions'

export default function LoginPage({searchParams} : {searchParams: {message: string}}) {

  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
        <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label htmlFor="email">Email:</label>
        <Input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <Input id="password" name="password" type="password" required />
        <Button formAction={login}>Log in</Button>
        <Button formAction={signup}>Sign up</Button>
        { searchParams.message && <p>{searchParams.message}</p>}
      </form>
    </div>
  )
}