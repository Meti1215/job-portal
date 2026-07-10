import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteJobButton from "@/components/DeleteJobButton";

async function getJob(id: string) {
    const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function JobDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const job = await getJob(id);

    if (!job) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-10">
            <div className="mx-auto max-w-5xl px-6">
                <div className="rounded-2xl bg-white p-8 shadow-lg">

                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                        <div>
                            <h1 className="text-4xl font-bold text-gray-900">
                                {job.title}
                            </h1>

                            <p className="mt-2 text-xl font-semibold text-blue-600">
                                {job.company}
                            </p>
                        </div>

                        <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                            {job.jobType}
                        </span>

                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">

                        <div className="rounded-xl bg-gray-100 p-4">
                            <p className="text-sm text-gray-500">Location</p>
                            <p className="mt-1 text-lg font-semibold">
                                📍 {job.location}
                            </p>
                        </div>

                        <div className="rounded-xl bg-green-100 p-4">
                            <p className="text-sm text-green-700">Salary</p>
                            <p className="mt-1 text-lg font-bold text-green-700">
                                💰 {job.salary}
                            </p>
                        </div>

                    </div>

                    <div className="mt-10">
                        <h2 className="mb-4 text-2xl font-bold">
                            Job Description
                        </h2>

                        <p className="leading-8 text-gray-700">
                            {job.description}
                        </p>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link
                            href={`/jobs/${job.id}/apply`}
                            className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
                        >
                            Apply Now
                        </Link>

                        <Link
                            href={`/jobs/${job.id}/edit`}
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                        >
                            Edit Job
                        </Link>

                        <DeleteJobButton id={job.id} />

                        <Link
                            href="/jobs"
                            className="rounded-lg border border-gray-300 px-6 py-3 font-semibold transition hover:bg-gray-100"
                        >
                            Back to Jobs
                        </Link>

                    </div>

                </div>
            </div>
        </main>
    );
}