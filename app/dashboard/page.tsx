import Test from '@/app/ui/Test'
import Image from 'next/image'
import SignOut from '@/app/ui/signout-form'
import { getAuth } from '@/auth'


export default async function Dashboard() {
  const { user } = await (await getAuth()).auth()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello {user.name}</p>
      <SignOut />
    </main>
  )
}
