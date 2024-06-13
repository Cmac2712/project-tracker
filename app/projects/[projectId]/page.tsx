import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { createClient } from '@/lib/utils/supabase/server'
import Link from 'next/link'
import { createTask } from './actions'

export default async function ProjectPage({params: {projectId}}) {
  const supabase = createClient()
  const { data: userData, error: userError } = await supabase.auth.getUser()
  const { data: project } = await supabase.from('projects').select().eq('id', projectId).single()
  const { data: tasks } = await supabase.from('tasks').select().eq('user_id', userData.user?.id).eq('project_id', projectId)  

  console.log('tasks', tasks)

  // if (error || !data?.user) {
  //   redirect('/login')
  // }

  return (
    <>
      <p>{project.title}</p>
      <form>
        <Input name="task" placeholder="Task" />
        <input type="hidden" name="project_id" value={project.id} readOnly/>
        <h2>tasks</h2>
        <ul>
          {
            tasks && tasks.map(task => (
              <li key={task.id}>{task.title}</li>
            ))

          }
        </ul>
        <Button formAction={createTask}>
          Add task
        </Button>
      </form>
      <Link href="/projects">Back to projects</Link>
    </>
  )
}