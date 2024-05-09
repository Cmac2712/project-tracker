import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const { data: projects } = await supabase.from('projects').select()


  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <>
    <p>Hello {data.user.email}</p>
    {
      projects && projects.map((note) => {
        return (
          <li key={note.id}>
            {note.title}
          </li>
        )
      })
    }
    
    </>
  )
}