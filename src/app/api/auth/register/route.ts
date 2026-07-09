import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const { fullName, email, password, role } = body;

        // Check for missing fields
        if (!fullName || !email || !password || !role) {
            return NextResponse.json(
                { message: "All fields are required." },
                { status: 400 }
            );
        }

        // Check if email already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return NextResponse.json(
                { message: "Email already exists." },
                { status: 409 }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
                role,
            },
        });

        return NextResponse.json(
            {
                message: "User registered successfully.",
                user: {
                    id: user.id,
                    fullName: user.fullName,
                    email: user.email,
                    role: user.role,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Internal Server Error." },
            { status: 500 }
        );
    }
}