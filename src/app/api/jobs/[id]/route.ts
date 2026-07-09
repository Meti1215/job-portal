import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const job = await prisma.job.findUnique({
            where: {
                id,
            },
        });

        if (!job) {
            return NextResponse.json(
                { message: "Job not found." },
                { status: 404 }
            );
        }

        return NextResponse.json(job);
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Internal Server Error." },
            { status: 500 }
        );
    }
}
export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        await prisma.job.delete({
            where: {
                id,
            },
        });

        return NextResponse.json({
            message: "Job deleted successfully.",
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to delete job." },
            { status: 500 }
        );
    }
}
export async function PUT(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
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

        const job = await prisma.job.update({
            where: {
                id,
            },
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
                message: "Job updated successfully.",
                job,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { message: "Failed to update job." },
            { status: 500 }
        );
    }
}