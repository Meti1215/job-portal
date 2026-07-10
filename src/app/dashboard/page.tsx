import Link from "next/link";

async function getJobs() {
    const res = await fetch("http://localhost:3000/api/jobs", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch jobs");
    }

    return res.json();
}

export default async function DashboardPage() {
    const jobs = await getJobs();

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-6xl p-8">
                <h1 className="mb-8 text-4xl font-bold">
                    Employer Dashboard
                </h1>

                <div className="mb-8 rounded-lg bg-blue-600 p-6 text-white">
                    <h2 className="text-2xl font-bold">
                        Total Jobs Posted
                    </h2>

                    <p className="mt-2 text-4xl font-bold">
                        {jobs.length}
                    </p>
                </div>

                <div className="grid gap-6">
                    {jobs.map((job: any) => (
                        <div
                            key={job.id}
                            className="rounded-lg border bg-white p-6 shadow"
                        >
                            <h2 className="text-2xl font-bold">
                                {job.title}
                            </h2>

                            <p className="mt-2 text-gray-600">
                                {job.company}
                            </p>

                            <div className="mt-6 flex gap-3">
                                <Link
                                    href={`/jobs/${job.id}`}
                                    className="rounded bg-green-600 px-4 py-2 text-white"
                                >
                                    View
                                </Link>
                                <Link
                                    href={`/jobs/${job.id}/applicants`}
                                    className="rounded bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
                                >
                                    Applicants
                                </Link>

                                <Link
                                    href={`/jobs/${job.id}/edit`}
                                    className="rounded bg-blue-600 px-4 py-2 text-white"
                                >
                                    Edit
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
