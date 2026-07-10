"use client";

import { useMemo, useState } from "react";
import JobCard from "./JobCard";
import JobSearch from "./JobSearch";
import JobFilter from "./JobFilter";

type Job = {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    jobType: string;
    description: string;
};

export default function JobsList({ jobs }: { jobs: Job[] }) {
    const [search, setSearch] = useState("");
    const [jobType, setJobType] = useState("");

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.company.toLowerCase().includes(search.toLowerCase());

            const matchesType =
                jobType === "" || job.jobType === jobType;

            return matchesSearch && matchesType;
        });
    }, [jobs, search, jobType]);

    return (
        <>
            <div className="mb-8 grid gap-4 md:grid-cols-2">
                <JobSearch
                    search={search}
                    setSearch={setSearch}
                />

                <JobFilter
                    jobType={jobType}
                    setJobType={setJobType}
                />
            </div>

            {filteredJobs.length === 0 ? (
                <div className="rounded-lg border bg-white p-10 text-center">
                    <h2 className="text-2xl font-semibold">
                        No jobs found
                    </h2>

                    <p className="mt-2 text-gray-500">
                        Try another search.
                    </p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredJobs.map((job) => (
                        <JobCard
                            key={job.id}
                            job={job}
                        />
                    ))}
                </div>
            )}
        </>
    );
}