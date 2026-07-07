"use client";

import React, { useState } from "react";

export default function Hero() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Searching for "${keyword}" in "${location}"`);
  };

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-20 lg:py-32 dark:bg-zinc-950 transition-colors">
      {/* Dynamic Aesthetic Background Blobs */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="absolute -top-40 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-blue-400 to-emerald-400 opacity-20 blur-3xl dark:opacity-10 dark:from-blue-500 dark:to-emerald-500" />
        <div className="absolute top-[20%] right-[20%] -z-10 h-[400px] w-[400px] rounded-full bg-emerald-300 opacity-20 blur-3xl dark:opacity-10 dark:bg-emerald-600" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-3xl">
          {/* Tagline Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-950/30 dark:text-blue-400 dark:ring-blue-400/20 transition-all hover:scale-[1.02]">
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            1,248 new jobs listed in the last 24 hours
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl md:text-6xl dark:text-white leading-[1.15]">
            Discover Your Next <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              Career Breakthrough
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Connecting talented professionals with outstanding opportunities at global brands and high-growth startups. Find top remote, hybrid, and on-site roles today.
          </p>

          {/* Search Form */}
          <form
            onSubmit={handleSearch}
            className="mt-10 w-full max-w-2xl rounded-2xl border border-zinc-200/80 bg-white p-2 shadow-lg shadow-zinc-200/40 dark:border-zinc-800/80 dark:bg-zinc-900 dark:shadow-none transition-all focus-within:ring-2 focus-within:ring-blue-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center">
              {/* Keyword Search */}
              <div className="flex flex-1 items-center px-4 py-3 md:py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-zinc-400 mr-3 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Job title, keywords, or company..."
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  className="w-full bg-transparent text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                />
              </div>

              {/* Separator */}
              <div className="hidden md:block h-6 w-px bg-zinc-200 dark:bg-zinc-800" />

              {/* Location Search */}
              <div className="flex flex-1 items-center px-4 py-3 md:py-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-5 w-5 text-zinc-400 mr-3 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="City, state, or 'Remote'..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-transparent text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none dark:text-white"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-emerald-600 transition-all duration-200 cursor-pointer"
              >
                Search Jobs
              </button>
            </div>
          </form>

          {/* Quick links/Popular keywords */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="font-medium">Popular searches:</span>
            {["React Developer", "UI/UX Designer", "Product Manager", "DevOps Engineer"].map(
              (tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setKeyword(tag)}
                  className="rounded-lg bg-zinc-200/50 px-2.5 py-1 font-medium text-zinc-600 transition-all hover:bg-zinc-200 hover:text-blue-600 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-emerald-400 cursor-pointer"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
