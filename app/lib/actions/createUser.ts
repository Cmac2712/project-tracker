import db from '@/lib/db'

interface UserInput {
    email: string
    password: string
}

export async function createUser(user: UserInput) {
    let createdUser;

    try {
        createdUser = await db.user.create({
            data: {
                email: user.email,
                password: user.password
            }
        })
    } catch(e) {
        console.log('Error: ', e)
    } 

    return createdUser
}