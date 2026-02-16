"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/atoms/Container";
import { GlassCard } from "@/components/atoms/GlassCard";
import { Heading } from "@/components/atoms/Heading";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export default function SignUpPage() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        setLoading(true);

        // In production, this would call an API to create the user
        // For demo purposes, we'll just redirect to signin
        setTimeout(() => {
            setLoading(false);
            router.push("/auth/signin");
        }, 1000);
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-24">
            <Container className="max-w-md">
                <GlassCard className="p-8">
                    <Heading size="lg" className="mb-6 text-center">
                        Create Account
                    </Heading>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {error && (
                            <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-white focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 transition-all"
                                placeholder="John Doe"
                                required
                            />
                        </div>

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

                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-400 mb-1">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
                            {loading ? "Creating account..." : "Sign Up"}
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-400">
                        Already have an account?{" "}
                        <Link href="/auth/signin" className="text-sky-400 hover:text-sky-300 transition-colors">
                            Sign in
                        </Link>
                    </p>
                </GlassCard>
            </Container>
        </div>
    );
}
