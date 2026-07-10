import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            email,
            phone,
            coverLetter,
            jobId,
        } = body;

        if (
            !name ||
            !email ||
            !phone ||
            !coverLetter ||
            !jobId
        ) {
            return NextResponse.json(
                { message: "Please fill in all fields." },
                { status: 400 }
            );
        }
        console.log("Received jobId:", jobId);
        const application = await prisma.application.create({
            data: {
                name,
                email,
                phone,
                coverLetter,
                jobId,
            },
        });

        return NextResponse.json(
            {
                message: "Application submitted successfully.",
                application,
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