import JobCard from "@/components/JobCard";

async function getJobs() {
    const res = await fetch("http://localhost:3000/api/jobs", {
        cache: "no-store",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch jobs");
    }

    return res.json();
}

export default async function JobsPage() {
    const jobs = await getJobs();

    return (
        <main className="min-h-screen bg-gray-50">
            <div className="mx-auto max-w-7xl px-6 py-12">
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Available Jobs
                    </h1>

                    <p className="mt-2 text-lg text-gray-600">
                        Find your next career opportunity.
                    </p>
                </div>

                {jobs.length === 0 ? (
                    <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
                        <h2 className="text-2xl font-semibold text-gray-700">
                            No jobs available
                        </h2>

                        <p className="mt-2 text-gray-500">
                            Be the first to post a job.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {jobs.map((job: any) => (
                            <JobCard key={job.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}