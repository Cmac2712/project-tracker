import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'
import { logout } from './actions'

export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

  console.log({data})

  return (
    <>
    <p>Hello {data.user.email}</p>
    <form>
      <button formAction={logout}>Log out</button>
    </form>
    </>
  )
}