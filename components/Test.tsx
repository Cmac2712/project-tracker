import { helloWorld } from "@/actions/helloWorld"

export default async function Test() {
    return <p>{`This is a test component. ${await helloWorld()}`}</p>
}