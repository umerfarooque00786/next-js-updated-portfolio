"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export default function SignInPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        setLoading(false);

        if (result?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/");
            router.refresh();
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-24">
            <Container className="max-w-md">
                <GlassCard className="p-8">
                    <Heading size="lg" className="mb-6 text-center">
                        Sign In
                    </Heading>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign In"}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Don&apos;t have an account?{" "}
                        <Link href="/auth/signup" className="text-sky-400 hover:text-sky-300 transition-colors">
                            Sign up
                        </Link>
                    </p>

                    <div className="mt-4 p-3 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs">
                        <strong>Demo credentials:</strong><br />
                        Email: admin@example.com<br />
                        Password: admin123
                    </div>
                </GlassCard>
            </Container>
        </div>
    );
}
