'use server'
import db from '@/lib/db'

export async function getUser(email:string) {
    return  await db.user.findUnique({
        where: {
           email 
        }
    })
}