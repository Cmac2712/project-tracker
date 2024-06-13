"use server"

import { cuid2 } from '@/lib/utils/cuid2';
import { createClient } from '@/lib/utils/supabase/server';

export async function createTask(formData) {
    const supabase = createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser()
    const taskID = cuid2();

    const {data, error} = await supabase.from('tasks').insert({
        id: taskID,
        project_id: formData.get('project_id'),
        title: formData.get('task'),
        completed: false,
        user_id: userData.user?.id
    });

    if (error) {
        console.log('error', error)
        //redirect('/error');
    }
}