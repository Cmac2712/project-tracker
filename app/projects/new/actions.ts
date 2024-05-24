'use server'

import { cuid2 } from '@/lib/utils/cuid2';
import { createClient } from '@/lib/utils/supabase/server';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createProject(project) {
    const supabase = createClient();
    const projectID = cuid2();
    const { data:  userData, error: getUserEror } = await supabase.auth.getUser()
    const { data, error } = await supabase.from('projects').insert({
        id: projectID,
        title: project.get('title'),
        author_id: userData.user.id,
    });

    if (error) {
        redirect('/error');
    }

    revalidatePath(`/projects/${projectID}`, 'layout');
    redirect(`/projects/${projectID}`);
}