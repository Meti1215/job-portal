"use client";

type Props = {
    jobType: string;
    setJobType: (value: string) => void;
};

export default function JobFilter({
    jobType,
    setJobType,
}: Props) {
    return (
        <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="rounded-lg border border-gray-300 p-3"
        >
            <option value="">All Job Types</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Remote">Remote</option>
        </select>
    );
}