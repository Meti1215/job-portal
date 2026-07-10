"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewJobPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [salary, setSalary] = useState("");
    const [jobType, setJobType] = useState("Full-Time");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);

        const response = await fetch("/api/jobs", {
            method: "POST",
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

        alert("Job posted successfully!");

        router.push("/jobs");
        router.refresh();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-3xl px-6">
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Post a New Job
                    </h1>

                    <p className="mt-2 text-gray-600">
                        Fill in the details below to publish your job opening.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="mt-8 space-y-6"
                    >
                        <div>
                            <label className="mb-2 block font-medium">
                                Job Title
                            </label>

                            <input
                                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Frontend Developer"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Company
                            </label>

                            <input
                                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)}
                                placeholder="Google"
                            />
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block font-medium">
                                    Location
                                </label>

                                <input
                                    className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Addis Ababa"
                                />
                            </div>

                            <div>
                                <label className="mb-2 block font-medium">
                                    Salary
                                </label>

                                <input
                                    className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                    value={salary}
                                    onChange={(e) => setSalary(e.target.value)}
                                    placeholder="$2,000/month"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Job Type
                            </label>

                            <select
                                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                value={jobType}
                                onChange={(e) => setJobType(e.target.value)}
                            >
                                <option>Full-Time</option>
                                <option>Part-Time</option>
                                <option>Internship</option>
                                <option>Remote</option>
                            </select>
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">
                                Description
                            </label>

                            <textarea
                                rows={6}
                                className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="Describe the job responsibilities..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:bg-gray-400"
                        >
                            {loading ? "Posting..." : "Post Job"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    );
}