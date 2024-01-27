import { getServerSession } from "next-auth"


export default async function Dashboard() {
  const session = await getServerSession()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {session && <p>hello, {session.user?.email}</p>}
    </main>
  )
}
