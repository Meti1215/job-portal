"use client";

import React from "react";

const stats = [
  {
    value: "18,400+",
    label: "Active job listings",
    description: "Vetted open roles with competitive packages",
  },
  {
    value: "580+",
    label: "Partner companies",
    description: "From innovative startups to enterprise giants",
  },
  {
    value: "94.2%",
    label: "Interview rate",
    description: "Applicants land interviews within two weeks",
  },
  {
    value: "$14.6M",
    label: "Salary negotiated",
    description: "Aggregate candidate compensation secured",
  },
];

export default function Statistics() {
  return (
    <section className="bg-zinc-50 py-20 dark:bg-zinc-950 transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Banner Card Container */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-black px-6 py-12 shadow-xl sm:px-12 sm:py-16 md:px-16 lg:py-20 transition-all">
          {/* Subtle glow decorative backdrops */}
          <div className="absolute top-0 left-0 -translate-x-[30%] -translate-y-[30%] -z-10 h-72 w-72 rounded-full bg-blue-500 opacity-20 blur-3xl" />
          <div className="absolute bottom-0 right-0 translate-x-[30%] translate-y-[30%] -z-10 h-72 w-72 rounded-full bg-emerald-500 opacity-20 blur-3xl" />

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              Proven Results
            </h2>
            <p className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Empowering Careers with Real Success Metrics
            </p>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed max-w-xl mx-auto">
              Our streamlined matchmaking workflow minimizes friction, placing top talent into key organizational vacancies faster than standard job boards.
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-y-10 gap-x-6 lg:grid-cols-4 lg:gap-x-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center group border-r last:border-r-0 border-zinc-800/60 lg:px-4 flex flex-col items-center justify-between"
              >
                <div className="flex flex-col items-center">
                  {/* Stat Number */}
                  <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl group-hover:scale-105 transition-transform duration-200">
                    {stat.value}
                  </span>
                  {/* Label */}
                  <span className="mt-2 text-sm font-semibold text-white">
                    {stat.label}
                  </span>
                  {/* Description */}
                  <span className="mt-2 text-xs text-zinc-400 leading-relaxed max-w-[160px]">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
