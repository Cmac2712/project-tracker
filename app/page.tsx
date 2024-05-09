import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from "next/navigation"

export default async function Home() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  } else {
    redirect('/private')
  }

}