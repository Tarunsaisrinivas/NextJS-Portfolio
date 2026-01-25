"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../containers/Navbar";
import SubscribeForm from "../containers/SubscribeForm";

const blogData = [
  {
    title: "Responsive Indicator: Instantly See Active Tailwind Breakpoints",
    date: "May 20, 2025",
    href: "/blogs/screen-size-indicator",
  },
  {
    title: 'Stop Using "secret" as Your JWT Secret Key 🔐',
    date: "May 21, 2025",
    href: "/blogs/jwt",
  },
  {
    title: " Supercharge Your Tailwind Workflow with This One Command",
    date: "May 23, 2025",
    href: "/blogs/tailwind",
  },
  {
    title: "📊 Building downloads-graph: An NPM Package for Download Stats",
    date: "June 11, 2025",
    href: "/blogs/downloads-graph",
  },
  {
    title: "🧬 Binary Cursor – React & Next.js Cursor Effect",
    date: "June 16, 2025",
    href: "/blogs/binary-cursor",
  },
];

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
          Launch the code editor — write, compile, and test in seconds!{" "}
          <button
            onClick={() => handleNavigation("/blogs/code-compiler")}
            className="text-blue-600 underline hover:text-blue-800"
          >
            Click Here 👈
          </button>
        </h2>

        {loading && (
          <div className="my-4 flex justify-center">
            <div className="h-6 w-6 border-4 border-yellow-400 rounded-full animate-spin" />
          </div>
        )}

        <div className="space-y-6 mt-6">
          {blogData.map((blog, idx) => (
            <div
              key={idx}
              onClick={() => handleNavigation(blog.href)}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-white/10 transition cursor-pointer"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500 mt-1">{blog.date}</p>
            </div>
          ))}
        </div>
      </section>
      <SubscribeForm />
    </>
  );
};

export default BlogList;
