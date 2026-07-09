import { notFound } from "next/navigation";
import EditJobForm from "@/components/EditJobForm";

async function getJob(id: string) {
    const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
        cache: "no-store",
    });

    if (!res.ok) {
        return null;
    }

    return res.json();
}

export default async function EditJobPage({
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
        <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4">

            <div className="max-w-3xl mx-auto">

                <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">

                    <div className="mb-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800">
                            Edit Job
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Update job information and keep your listing fresh.
                        </p>
                    </div>


                    <div className="bg-gray-50 rounded-xl p-6">
                        <EditJobForm job={job} />
                    </div>

                </div>

            </div>

        </main>
    );
}