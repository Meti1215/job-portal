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

export default async function ApplicantsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const job = await getJob(id);

    if (!job) {
        notFound();
    }
    console.log(job);

    return (
        <main className="max-w-5xl mx-auto p-8">
            <h1 className="text-4xl font-bold">
                Applicants
            </h1>

            <p className="mt-2 text-gray-600">
                {job.title} • {job.company}
            </p>

            <div className="mt-8 space-y-6">
                {!job.applications || job.applications.length === 0 ? (
                    <div className="rounded-lg border bg-white p-8">
                        No applications yet.
                    </div>
                ) : (
                    job.applications.map((application: any) => (
                        <div
                            key={application.id}
                            className="rounded-lg border bg-white p-6 shadow"
                        >
                            <h2 className="text-2xl font-bold">
                                {application.name}
                            </h2>

                            <p className="mt-2">
                                📧 {application.email}
                            </p>

                            <p>
                                📱 {application.phone}
                            </p>

                            <hr className="my-4" />

                            <h3 className="font-semibold">
                                Cover Letter
                            </h3>

                            <p className="mt-2 whitespace-pre-line">
                                {application.coverLetter}
                            </p>

                            <p className="mt-4 text-sm text-gray-500">
                                Applied on{" "}
                                {new Date(application.createdAt).toLocaleDateString()}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}