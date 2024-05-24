interface NewProjectFormProps {className: string}
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from '@/lib/utils/supabase/server'
import { redirect } from "next/navigation"
import { createProject } from "./actions"

export async function NewProjectForm({className}:NewProjectFormProps) {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    redirect('/login')
  }

    return <div className={className}>
        <form >
        <Input name="title" placeholder="Project title" />
        <Button formAction={createProject}>
            Create new project
        </Button>
        </form>
        </div>
}