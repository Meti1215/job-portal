import JobsList from "@/components/JobsList";

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

                    <p className="mt-2 text-gray-600">
                        Find your next career opportunity.
                    </p>
                </div>

                <JobsList jobs={jobs} />
            </div>
        </main>
    );
}