import { getUser } from "@/app/lib/actions/getUser"

export default async function Test() {
    const user = await getUser('cmac2712@gmail.com')

    return <p>{`This is a test component. ${user ? user.name : 'friend'}`}</p>
}