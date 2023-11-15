'use server'
import db from '@/lib/db'

export async function getUser(id:string) {
    return  await db.user.findUnique({
        where: {
            id
        }
    })
}