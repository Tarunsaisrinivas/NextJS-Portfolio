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
          {/* 1st blog */}
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <Link href="/blogs/screen-size-indicator">
              <h2 className="text-xl font-semibold">
                Responsive Indicator: Instantly See Active Tailwind Breakpoints
              </h2>
              <p className="text-sm text-gray-500 mt-1">May 20, 2025</p>
            </Link>
          </div>
          {/* 2nd blog */}
          <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer">
            <Link href="/blogs/jwt">
              <h2 className="text-xl font-semibold">
                Stop Using <q>secret</q> as Your JWT Secret Key 🔐
              </h2>
              <p className="text-sm text-gray-500 mt-1">May 21, 2025</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
