import React from "react";
import type { Metadata } from "next";
import LoginForm from "@/components/LoginForm";

export const metadata: Metadata = {
  title: "Sign In | CareerConnect",
  description: "Sign in to your CareerConnect developer or recruiter account to search jobs and manage candidates.",
};

export default function LoginPage() {
  return <LoginForm />;
}
