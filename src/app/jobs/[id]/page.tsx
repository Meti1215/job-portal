import DeleteJobButton from "@/components/DeleteJobButton";
import Link from "next/link";
import { notFound } from "next/navigation";

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
        <main className="max-w-4xl mx-auto p-8">
            <div className="rounded-lg border bg-white p-8 shadow">
                <h1 className="text-4xl font-bold">{job.title}</h1>

                <p className="mt-2 text-xl text-gray-600">
                    {job.company}
                </p>

                <div className="mt-6 space-y-2">
                    <p>
                        <strong>📍 Location:</strong> {job.location}
                    </p>

                    <p>
                        <strong>💰 Salary:</strong> {job.salary}
                    </p>

                    <p>
                        <strong>🧳 Job Type:</strong> {job.jobType}
                    </p>
                </div>

                <hr className="my-6" />

                <h2 className="mb-3 text-2xl font-semibold">
                    Job Description
                </h2>

                <p className="leading-7">{job.description}</p>

                <div className="mt-8 flex gap-4">
                    <Link
                        href={`/jobs/${job.id}/edit`}
                        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                    >
                        Edit Job
                    </Link>

                    <DeleteJobButton id={job.id} />
                </div>
            </div>
        </main>
    );
}