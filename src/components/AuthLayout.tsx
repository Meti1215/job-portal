"use client";

import React from "react";
import Link from "next/link";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="flex min-h-screen w-full transition-colors bg-zinc-50 dark:bg-zinc-950">
      {/* Left Panel: Branding & Value Props (Hidden on mobile/tablet) */}
      <div className="relative hidden w-0 flex-1 lg:flex flex-col justify-between bg-gradient-to-br from-blue-950 via-zinc-900 to-black p-12 text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-0 left-0 -translate-x-[20%] -translate-y-[20%] h-96 w-96 rounded-full bg-blue-600 opacity-20 blur-3xl" />
        <div className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] h-96 w-96 rounded-full bg-emerald-500 opacity-20 blur-3xl" />

        {/* Top Header */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-emerald-400 text-white shadow-md group-hover:scale-105 transition-transform duration-200">
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
            <span className="text-lg font-bold tracking-tight text-white">
              CareerConnect
            </span>
          </Link>
        </div>

        {/* Center Marketing Copy */}
        <div className="relative z-10 my-auto max-w-lg space-y-6">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl leading-tight">
            Supercharge Your <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          <p className="text-zinc-300 text-sm leading-relaxed">
            Create an account to gain access to premium curated listings, direct matching services, and intuitive application dashboard interfaces.
          </p>

          {/* List of features */}
          <ul className="space-y-4 pt-4">
            {[
              {
                title: "Apply in seconds",
                desc: "Save your resume and custom templates for quick actions.",
              },
              {
                title: "Vetted employers only",
                desc: "We screen every employer organization on our network.",
              },
              {
                title: "Status transparency",
                desc: "Receive email and dashboard tracking statuses at every stage.",
              },
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-3.5">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                    className="h-3 w-3"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                  <p className="text-xs text-zinc-400 mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom footer note */}
        <div className="relative z-10 flex justify-between text-xs text-zinc-400">
          <span>&copy; {new Date().getFullYear()} CareerConnect</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Right Panel: Form Display wrapper */}
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:w-[480px] xl:w-[540px] lg:px-20 bg-white dark:bg-zinc-950 transition-colors">
        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          {/* Logo header for mobile screens */}
          <div className="lg:hidden flex items-center justify-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 text-white">
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
                CareerConnect
              </span>
            </Link>
          </div>

          {/* Form Content */}
          {children}
        </div>
      </div>
    </div>
  );
}
