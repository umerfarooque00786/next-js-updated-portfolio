import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
    try {
        const { name, email, password } = await request.json();

        // Validation
        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "All fields are required" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "Email already registered" },
                { status: 400 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        });

        return NextResponse.json(
            {
                message: "User created successfully",
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Signup error:", error);
        const isPrisma = error && typeof error === "object" && "code" in error;
        const isDbMissing =
            !process.env.DATABASE_URL ||
            (isPrisma && (error as { code?: string }).code === "P1001");
        const message = isDbMissing
            ? "Sign up is not available on this deployment. Database is not configured (set DATABASE_URL for production)."
            : "Something went wrong. Please try again.";
        return NextResponse.json(
            { error: message },
            { status: 500 }
        );
    }
}
