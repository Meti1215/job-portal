"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function ApplyPage() {
    const router = useRouter();
    const params = useParams();

    const jobId = params.id as string;
    console.log("Browser jobId:", jobId);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [coverLetter, setCoverLetter] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        setLoading(true);
        console.log("Sending jobId:", jobId);

        const response = await fetch("/api/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                coverLetter,
                jobId,
            }),
        });

        const data = await response.json();

        setLoading(false);

        if (!response.ok) {
            alert(data.message);
            return;
        }

        alert("Application submitted successfully!");

        router.push("/jobs");
        router.refresh();
    }

    return (
        <main className="min-h-screen bg-gray-50 py-12">
            <div className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-lg">
                <h1 className="text-4xl font-bold">Apply for this Job</h1>

                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <label className="mb-2 block font-medium">Full Name</label>
                        <input
                            className="w-full rounded-lg border p-3"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">Email</label>
                        <input
                            type="email"
                            className="w-full rounded-lg border p-3"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">Phone Number</label>
                        <input
                            className="w-full rounded-lg border p-3"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label className="mb-2 block font-medium">Cover Letter</label>
                        <textarea
                            rows={6}
                            className="w-full rounded-lg border p-3"
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-lg bg-green-600 py-3 font-semibold text-white hover:bg-green-700 disabled:bg-gray-400"
                    >
                        {loading ? "Submitting..." : "Submit Application"}
                    </button>
                </form>
            </div>
        </main>
    );
}