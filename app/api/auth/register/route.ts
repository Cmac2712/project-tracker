import { createUser } from '@/app/lib/actions/createUser';
import bcrypt from 'bcrypt';
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
    try {
        const { email, password } = await request.json();
        // @todo include validation
        const hashedPassword = await bcrypt.hash(password as string, 10)

        const user = await createUser({
            email: email,
            password: hashedPassword
        })

        return NextResponse.json({user})
    } catch(e) {
        console.log(e)

        switch(e.code) {
            case 'P2002':
                return NextResponse.json({message: 'Email already exists'}, {status: 400})
            case 'P2003':
                return NextResponse.json({message: 'Email is invalid'}, {status: 400})
            default:
                return NextResponse.json({message: 'Something went wrong'}, {status: 500})
        }

    }
}