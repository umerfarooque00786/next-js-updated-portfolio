"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Text } from "@/components/atoms/Text";
import { Button } from "@/components/atoms/Button";
import { LogOut, User, Mail, Calendar } from "lucide-react";

export default function DashboardPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/login");
        }
    }, [status, router]);

    if (status === "loading") {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-sky-400">Loading...</div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="min-h-screen py-24">
            <Container className="max-w-4xl">
                <div className="mb-8">
                    <Heading size="xl" className="mb-2">
                        Dashboard
                    </Heading>
                    <Text className="text-gray-400">
                        Welcome back, {session.user.name}!
                    </Text>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    {/* User Info Card */}
                    <GlassCard className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-full bg-sky-500/10 border border-sky-500/20">
                                <User className="h-6 w-6 text-sky-400" />
                            </div>
                            <Heading size="md">Profile Information</Heading>
                        </div>

                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <User className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">Name:</span>
                                <span className="font-medium">{session.user.name}</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">Email:</span>
                                <span className="font-medium">{session.user.email}</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-300">
                                <Calendar className="h-4 w-4 text-gray-500" />
                                <span className="text-sm">User ID:</span>
                                <span className="font-mono text-xs">{session.user.id}</span>
                            </div>
                        </div>
                    </GlassCard>

                    {/* Quick Actions Card */}
                    <GlassCard className="p-6">
                        <Heading size="md" className="mb-4">
                            Quick Actions
                        </Heading>

                        <div className="space-y-3">
                            <Button
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => router.push("/")}
                            >
                                View Portfolio
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full justify-start"
                                onClick={() => router.push("/projects")}
                            >
                                Browse Projects
                            </Button>

                            <Button
                                variant="outline"
                                className="w-full justify-start text-red-400 border-red-500/20 hover:border-red-500/40"
                                onClick={() => signOut({ callbackUrl: "/" })}
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                Sign Out
                            </Button>
                        </div>
                    </GlassCard>

                    {/* Stats Card */}
                    <GlassCard className="p-6 md:col-span-2">
                        <Heading size="md" className="mb-4">
                            Account Status
                        </Heading>

                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-sky-400 mb-1">Active</div>
                                <div className="text-sm text-gray-400">Status</div>
                            </div>

                            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-purple-400 mb-1">Member</div>
                                <div className="text-sm text-gray-400">Role</div>
                            </div>

                            <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                                <div className="text-2xl font-bold text-green-400 mb-1">✓</div>
                                <div className="text-sm text-gray-400">Verified</div>
                            </div>
                        </div>
                    </GlassCard>
                </div>
            </Container>
        </div>
    );
}
