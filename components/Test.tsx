import { getUser } from "@/actions/getUser"

export default async function Test() {
    const user = await getUser('clp09ar4e0000pdpqlm0ifq83')

    return <p>{`This is a test component. ${user ? user.name : 'friend'}`}</p>
}