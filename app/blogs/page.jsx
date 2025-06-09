"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../containers/Navbar2";

const BlogList = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleNavigation = (href) => {
    setLoading(true);
    router.push(href);
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-black max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <h2 className="mt-2 text-lg">
          Launch the code editor — write, compile, and test in seconds! –{" "}
          <button
            onClick={() => handleNavigation("/blogs/code-compiler")}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click here
          </button>
        </h2>

        {loading && (
          <div className="my-4 flex justify-center">
            <div className="h-6 w-6 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        <div className="space-y-6">
          <div
            onClick={() => handleNavigation("/blogs/screen-size-indicator")}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">
              Responsive Indicator: Instantly See Active Tailwind Breakpoints
            </h2>
            <p className="text-sm text-gray-500 mt-1">May 20, 2025</p>
          </div>

          <div
            onClick={() => handleNavigation("/blogs/jwt")}
            className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer"
          >
            <h2 className="text-xl font-semibold">
              Stop Using <q>secret</q> as Your JWT Secret Key 🔐
            </h2>
            <p className="text-sm text-gray-500 mt-1">May 21, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
