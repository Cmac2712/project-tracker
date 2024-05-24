import { createClient } from '@/lib/utils/supabase/server'

export default async function ProjectPage({params: {projectId}}) {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getUser()
  const { data: project } = await supabase.from('projects').select().eq('id', projectId).single()

  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  console.log(project)

  return (
    <>
    <p>{project.title}</p>
    </>
  )
}