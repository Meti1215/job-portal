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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);

        try {
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

            if (!response.ok) {
                alert(data.message);
                return;
            }

            alert("Job posted successfully!");

            router.push("/");
        } catch (error) {
            console.error(error);
            alert("Something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6">
            <h1 className="text-3xl font-bold mb-6">Post a Job</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border p-3 rounded"
                    placeholder="Job Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                />

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />

                <input
                    className="w-full border p-3 rounded"
                    placeholder="Salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                />

                <select
                    className="w-full border p-3 rounded"
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value)}
                >
                    <option>Full-Time</option>
                    <option>Part-Time</option>
                    <option>Remote</option>
                    <option>Hybrid</option>
                    <option>Contract</option>
                </select>

                <textarea
                    className="w-full border p-3 rounded"
                    rows={6}
                    placeholder="Job Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
                >
                    {loading ? "Posting..." : "Post Job"}
                </button>
            </form>
        </div>
    );
}