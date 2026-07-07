"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  
  // Field States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Error States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  // Loading state
  const [isLoading, setIsLoading] = useState(false);

  // Email validation regex
  const validateEmail = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(val);
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Password reset instructions have been simulated! Please check your (mocked) inbox.");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setEmailError("");
    setPasswordError("");
    setFormError("");

    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    }

    if (!isValid) return;

    // Mock login execution
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Simulate dashboard/homepage redirect
      router.push("/");
    }, 1500);
  };

  return (
    <div className="w-full">
      {/* Title Header */}
      <div className="text-center lg:text-left">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Sign in to your account
        </h1>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          Or{" "}
          <Link
            href="/register"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            create a new developer/recruiter account
          </Link>
        </p>
      </div>

      {formError && (
        <div className="mt-4 rounded-xl bg-red-50 p-3.5 text-xs font-medium text-red-700 ring-1 ring-red-700/10 dark:bg-red-950/20 dark:text-red-400 dark:ring-red-400/20">
          {formError}
        </div>
      )}

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
              placeholder="you@example.com"
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
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-medium">
              {emailError}
            </p>
          )}
        </div>

        {/* Password Input Group */}
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300"
            >
              Password
            </label>
            <a
              href="#"
              onClick={handleForgotPassword}
              className="text-xs font-medium text-blue-600 hover:text-blue-500 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Forgot password?
            </a>
          </div>
          <div className="mt-1.5 relative">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
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
            <p className="mt-1.5 text-xs text-red-600 dark:text-red-400 font-medium">
              {passwordError}
            </p>
          )}
        </div>

        {/* Remember Me checkbox */}
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="h-4 w-4 rounded border-zinc-300 text-blue-600 focus:ring-blue-500/20 dark:border-zinc-800 dark:bg-zinc-900 cursor-pointer"
          />
          <label
            htmlFor="remember-me"
            className="ml-2.5 block text-sm font-medium text-zinc-600 dark:text-zinc-400 cursor-pointer select-none"
          >
            Remember my session
          </label>
        </div>

        {/* Submit action */}
        <div>
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
              "Sign In"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
