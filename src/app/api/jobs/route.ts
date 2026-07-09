import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
    try {
        const jobs = await prisma.job.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(jobs);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to fetch jobs." },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            title,
            company,
            location,
            description,
            salary,
            jobType,
        } = body;

        if (
            !title ||
            !company ||
            !location ||
            !description ||
            !salary ||
            !jobType
        ) {
            return NextResponse.json(
                { message: "Please fill in all fields." },
                { status: 400 }
            );
        }

        const job = await prisma.job.create({
            data: {
                title,
                company,
                location,
                description,
                salary,
                jobType,
            },
        });

        return NextResponse.json(
            {
                message: "Job created successfully.",
                job,
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
