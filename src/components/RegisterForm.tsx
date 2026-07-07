"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type UserRole = "seeker" | "employer";

export default function RegisterForm() {
  const router = useRouter();

  // Field States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<UserRole>("seeker");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Error States
  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset Errors
    setFullNameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");

    let isValid = true;

    // Validate Name
    if (!fullName.trim()) {
      setFullNameError("Full name is required");
      isValid = false;
    }

    // Validate Email
    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate Password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }

    // Validate Confirm Password
    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    if (!isValid) return;

    // Simulate Register call
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Success redirection back to main landing page
      router.push("/");
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Title Header */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Create your account
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Sign in here
          </Link>
        </p>
      </div>

      {/* Main Register Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {/* Role Selector Card Grid */}
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
            Select User Role
          </label>
          <div className="grid grid-cols-2 gap-3">
            {/* Seeker Card */}
            <button
              type="button"
              onClick={() => setRole("seeker")}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                role === "seeker"
                  ? "border-blue-600 bg-blue-50/50 dark:border-emerald-500 dark:bg-emerald-950/20 shadow-sm"
                  : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-5 w-5 ${
                  role === "seeker" ? "text-blue-600 dark:text-emerald-400" : "text-zinc-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M12 2.25V4.5m0 12.893V20.25"
                />
              </svg>
              <span className="mt-1.5 text-xs font-bold text-zinc-900 dark:text-white">Job Seeker</span>
              <span className="text-[10px] text-zinc-400 mt-0.5">Looking for jobs</span>
            </button>

            {/* Employer Card */}
            <button
              type="button"
              onClick={() => setRole("employer")}
              className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                role === "employer"
                  ? "border-blue-600 bg-blue-50/50 dark:border-emerald-500 dark:bg-emerald-950/20 shadow-sm"
                  : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900/50"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`h-5 w-5 ${
                  role === "employer" ? "text-blue-600 dark:text-emerald-400" : "text-zinc-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18"
                />
              </svg>
              <span className="mt-1.5 text-xs font-bold text-zinc-900 dark:text-white">Employer</span>
              <span className="text-[10px] text-zinc-400 mt-0.5">Hiring candidates</span>
            </button>
          </div>
        </div>

        {/* Full Name Input Group */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
          >
            Full Name
          </label>
          <div className="mt-1.5 relative">
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Alex Johnson"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                if (fullNameError) setFullNameError("");
              }}
              className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 bg-white dark:bg-zinc-900 dark:text-white ${
                fullNameError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-zinc-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-800 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              }`}
            />
          </div>
          {fullNameError && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
              {fullNameError}
            </p>
          )}
        </div>

        {/* Email Input Group */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
          >
            Email Address
          </label>
          <div className="mt-1.5 relative">
            <input
              id="email"
              name="email"
              type="text"
              autoComplete="email"
              placeholder="alex@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              className={`block w-full rounded-xl border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 bg-white dark:bg-zinc-900 dark:text-white ${
                emailError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-zinc-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-800 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              }`}
            />
          </div>
          {emailError && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
              {emailError}
            </p>
          )}
        </div>

        {/* Password Input Group */}
        <div>
          <label
            htmlFor="password"
            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <div className="mt-1.5 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError("");
              }}
              className={`block w-full rounded-xl border pl-3.5 pr-11 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 bg-white dark:bg-zinc-900 dark:text-white ${
                passwordError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-zinc-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-800 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              }`}
            />
            {/* Eye toggle button */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              )}
            </button>
          </div>
          {passwordError && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
              {passwordError}
            </p>
          )}
        </div>

        {/* Confirm Password Input Group */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
          >
            Confirm Password
          </label>
          <div className="mt-1.5 relative">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (confirmPasswordError) setConfirmPasswordError("");
              }}
              className={`block w-full rounded-xl border pl-3.5 pr-11 py-2.5 text-sm transition-all focus:outline-none focus:ring-1 bg-white dark:bg-zinc-900 dark:text-white ${
                confirmPasswordError
                  ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                  : "border-zinc-200 focus:border-blue-500 focus:ring-blue-500/20 dark:border-zinc-800 dark:focus:border-emerald-500 dark:focus:ring-emerald-500/20"
              }`}
            />
          </div>
          {confirmPasswordError && (
            <p className="mt-1 text-xs text-red-600 dark:text-red-400 font-medium">
              {confirmPasswordError}
            </p>
          )}
        </div>

        {/* Submit Account creation Action */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full flex h-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-emerald-500 px-5 text-sm font-semibold text-white shadow-sm hover:from-blue-700 hover:to-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/10 disabled:opacity-50 cursor-pointer"
          >
            {isLoading ? (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              "Create Account"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
