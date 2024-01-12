'use server'
import db from '@/lib/db'

export async function createUser(user) {
    const createdUser = db.user.create(user)
}