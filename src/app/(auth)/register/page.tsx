import React from "react";
import type { Metadata } from "next";
import RegisterForm from "@/components/RegisterForm";

export const metadata: Metadata = {
  title: "Create an Account | CareerConnect",
  description: "Join CareerConnect today to discover premium positions or post jobs to build global developer teams.",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
