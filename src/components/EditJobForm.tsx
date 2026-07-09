"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditJobForm({ job }: { job: any }) {
    const router = useRouter();

    const [title, setTitle] = useState(job.title);
    const [company, setCompany] = useState(job.company);
    const [location, setLocation] = useState(job.location);
    const [salary, setSalary] = useState(job.salary);
    const [jobType, setJobType] = useState(job.jobType);
    const [description, setDescription] = useState(job.description);
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);

        const response = await fetch(`/api/jobs/${job.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                company,
                location,
                salary,
                jobType,
                description,
            }),
        });

        const data = await response.json();

        setLoading(false);

        if (!response.ok) {
            alert(data.message);
            return;
        }

        alert("Job updated successfully!");

        router.push(`/jobs/${job.id}`);
        router.refresh();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                className="w-full rounded border p-3"
                placeholder="Job Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                className="w-full rounded border p-3"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
            />

            <input
                className="w-full rounded border p-3"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <input
                className="w-full rounded border p-3"
                placeholder="Salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
            />

            <select
                className="w-full rounded border p-3"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
            >
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Internship</option>
                <option>Remote</option>
            </select>

            <textarea
                className="w-full rounded border p-3"
                rows={6}
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <button
                type="submit"
                disabled={loading}
                className="rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:bg-gray-400"
            >
                {loading ? "Updating..." : "Update Job"}
            </button>
        </form>
    );
}