import { Button } from '@/components/ui/button'
import { createClient } from '@/lib/utils/supabase/server'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export default async function PrivatePage() {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const { data: projects } = await supabase.from('projects').select().eq('author_id', data.user.id)

  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <>
    <p>Hello {data.user.email}</p>
    {
      projects && projects.map((project) => {
        return (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              {project.title}
            </Link>
          </li>
        )
      })
    }
      <Link href="/projects/new">
        <Button>
            Create new project
        </Button>
      </Link>
    </>
  )
}