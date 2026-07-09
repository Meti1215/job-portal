"use client";

import { useRouter } from "next/navigation";

export default function DeleteJobButton({ id }: { id: string }) {
    const router = useRouter();

    async function handleDelete() {
        const confirmed = confirm(
            "Are you sure you want to delete this job?"
        );

        if (!confirmed) return;

        const response = await fetch(`/api/jobs/${id}`, {
            method: "DELETE",
        });

        const data = await response.json();

        if (!response.ok) {
            alert(data.message);
            return;
        }

        alert("Job deleted successfully!");

        router.push("/jobs");
        router.refresh();
    }

    return (
        <button
            onClick={handleDelete}
            className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
        >
            Delete Job
        </button>
    );
}