"use client";

import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";
import { LogIn, LogOut, UserPlus, LayoutDashboard } from "lucide-react";

export const AuthButtons = () => {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return null;
    }

    if (session) {
        return (
            <div className="flex items-center gap-3">
                <Link href="/dashboard" className="hidden md:block">
                    <Button variant="outline" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        <span>Dashboard</span>
                    </Button>
                </Link>
                <Button
                    variant="outline"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="flex items-center gap-2"
                >
                    <LogOut className="h-4 w-4" />
                    <span className="hidden sm:inline">Sign Out</span>
                </Button>
            </div>
        );
    }

    return (
        <div className="flex items-center gap-3">
            <Link href="/login">
                <Button variant="outline" className="flex items-center gap-2">
                    <LogIn className="h-4 w-4" />
                    <span className="hidden sm:inline">Login</span>
                </Button>
            </Link>
            <Link href="/signup">
                <Button variant="primary" className="flex items-center gap-2">
                    <UserPlus className="h-4 w-4" />
                    <span className="hidden sm:inline">Sign Up</span>
                </Button>
            </Link>
        </div>
    );
};
