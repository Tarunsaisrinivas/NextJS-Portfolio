"use client";
import React from "react";
import Link from "next/link";
import Navbar from "../containers/Navbar2";

const BlogList = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-black max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          <Link href="/blogs/screen-size-indicator">
            <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
              <h2 className="text-xl font-semibold">
                Responsive Indicator: Instantly See Active Tailwind Breakpoints
              </h2>
              <p className="text-sm text-gray-500 mt-1">May 20, 2025</p>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogList;
