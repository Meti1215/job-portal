import Link from "next/link";

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    jobType: string;
    description: string;
};

export default function JobCard({ job }: { job: Job }) {
    return (
        <Link href={`/jobs/${job.id}`}>
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl cursor-pointer">
                <div className="flex items-start justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                        </h2>

                        <p className="mt-1 text-lg font-medium text-blue-600">
                            {job.company}
                        </p>
                    </div>

                    <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
                        {job.jobType}
                    </span>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700">
                        📍 {job.location}
                    </span>

                    <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        💰 {job.salary}
                    </span>
                </div>

                <p className="mt-5 line-clamp-3 text-gray-600">
                    {job.description}
                </p>

                <div className="mt-6 border-t pt-4">
                    <span className="font-medium text-blue-600 group-hover:underline">
                        View Details →
                    </span>
                </div>
            </div>
        </Link>
    );
}