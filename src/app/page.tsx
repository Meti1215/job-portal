import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Statistics from "@/components/Statistics";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}
