"use client"

import { Button } from "@/app/ui/button"
import { signOut } from "next-auth/react"

export default function LogoutButton() {
    return (
        <Button
        onClick={() => signOut()}
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
        Logout
        </Button>
    )
    }