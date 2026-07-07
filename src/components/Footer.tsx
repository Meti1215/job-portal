"use client";

import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed "${email}" to the CareerConnect newsletter!`);
    setEmail("");
  };

  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 transition-colors">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand Info & Newsletter */}
          <div className="space-y-8 xl:col-span-1">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 text-white shadow-sm shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">
                Career<span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">Connect</span>
              </span>
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
              Connecting outstanding talent with high-growth teams worldwide. We simplify recruitment through a clean, verified, and direct matching portal.
            </p>

            {/* Newsletter Subscribe */}
            <div className="max-w-xs">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Subscribe to our newsletter
              </h4>
              <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
                The latest job listings and industry updates, sent weekly.
              </p>
              <form onSubmit={handleSubscribe} className="mt-3 flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-905 placeholder-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:from-blue-700 hover:to-emerald-600 transition-all duration-200 cursor-pointer"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Site Links columns */}
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                For Seekers
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Search Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Upload Resume
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Application Tracker
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Career Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                For Employers
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Post a Position
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Talent Sourcing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Pricing Plans
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-white">
                Company & Info
              </h3>
              <ul role="list" className="mt-4 space-y-2">
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    Terms & Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm text-zinc-500 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-emerald-400 transition-colors">
                    System Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Socials & Copyright */}
        <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-zinc-400 dark:text-zinc-500">
            &copy; {new Date().getFullYear()} CareerConnect. All rights reserved. Made for professional global sourcing.
          </p>
          <div className="flex space-x-6">
            {/* LinkedIn */}
            <a href="#" className="text-zinc-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" className="text-zinc-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            {/* GitHub */}
            <a href="#" className="text-zinc-400 hover:text-blue-600 dark:hover:text-emerald-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
