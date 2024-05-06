import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

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
    <Button>Log out</Button>
    </>
  )
}