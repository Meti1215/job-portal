"use client";

import React from "react";

const features = [
  {
    title: "Smart Job Filtering",
    description: "Narrow down matches instantly by job type, hybrid status, salary range, tech stack, and seniority levels.",
    icon: (
      <svg
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    badge: "For Seekers",
  },
  {
    title: "Verified Companies Only",
    description: "Connect with certified hiring departments and startups. No spam listings, expired roles, or phantom posts.",
    icon: (
      <svg
        className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751A11.956 11.956 0 0 1 12 2.714Z"
        />
      </svg>
    ),
    badge: "High Trust",
  },
  {
    title: "One-Click Instant Apply",
    description: "Submit saved resumes and personalized cover profiles immediately with one tap. Track your response status live.",
    icon: (
      <svg
        className="h-6 w-6 text-blue-600 dark:text-blue-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
        />
      </svg>
    ),
    badge: "Fast Apply",
  },
  {
    title: "Employer Dashboard",
    description: "Post premium listings, review rich applicant portfolios, schedule interviews, and organize hiring funnels in one place.",
    icon: (
      <svg
        className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
        />
      </svg>
    ),
    badge: "For Recruiters",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-zinc-900 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-base font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Why CareerConnect?
          </h2>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 sm:text-4xl dark:text-white">
            Designed for Modern Job Seekers and Global Employers
          </p>
          <p className="mt-4 text-lg text-zinc-500 dark:text-zinc-400">
            Skip the noise of outdated boards. Our optimized pipeline brings absolute clarity to your search and staffing efforts.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-2xl border border-zinc-200/60 bg-white p-6 shadow-sm hover:shadow-md hover:border-blue-500/30 hover:-translate-y-1.5 transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div>
                {/* Icon Circle Container */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 dark:bg-zinc-900 transition-colors">
                  {feature.icon}
                </div>

                {/* Badge */}
                <span className="mt-4 inline-block rounded-full bg-zinc-100 px-2.5 py-0.5 text-2xs font-semibold text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                  {feature.badge}
                </span>

                {/* Title */}
                <h3 className="mt-3 text-lg font-bold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
