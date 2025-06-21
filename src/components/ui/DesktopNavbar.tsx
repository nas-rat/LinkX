import React from 'react'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ui/ModeToggle'
import { UserButton, useUser } from '@clerk/nextjs'
import { SignInButton } from '@clerk/nextjs'
import Link from 'next/link'
import { HomeIcon, BellIcon, UserIcon } from 'lucide-react'
import { currentUser } from '@clerk/nextjs/server'

const DesktopNavbar = async () => {
    const user = await currentUser();
    return (
        <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />

            <Button variant="ghost" className="flex items-center gap-2" asChild>
                <Link href="/">
                    <HomeIcon className="w-4 h-4" />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>

            {user ? (
                <>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link href="/notifications">
                            <BellIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Notifications</span>
                        </Link>
                    </Button>
                    <Button variant="ghost" className="flex items-center gap-2" asChild>
                        <Link
                            href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split("@")[0]
                                }`}
                        >
                            <UserIcon className="w-4 h-4" />
                            <span className="hidden lg:inline">Profile</span>
                        </Link>
                    </Button>
                    <UserButton />
                </>
            ) : (
                <SignInButton mode="modal">
                    <Button variant="default">Sign In</Button>
                </SignInButton>
            )}
        </div>
    )
}

export default DesktopNavbar

