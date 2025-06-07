"use client";
import React from "react";

const ResponsiveIndicatorBlog = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">
        Responsive Indicator: Instantly See Active Tailwind Breakpoints
      </h1>
      <p className="text-sm text-gray-500 mb-6">May 20, 2025</p>

      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p>
          Tired of guessing which breakpoint is active while debugging your
          responsive layouts?
        </p>

        <p>
          I’ve been there too — resizing the window and adding console logs just
          to figure out what Tailwind class is active. So, I built{" "}
          <strong>Responsive Indicator</strong>: a lightweight, plug-and-play
          utility to visualize your current Tailwind CSS breakpoint right on the
          screen.
        </p>

        <p>
          This tool helps developers stay in the flow, save time, and focus more
          on building rather than debugging breakpoints.
        </p>

        <h2>🔑 Key Features</h2>
        <ul>
          <li>📱 Real-time Tailwind breakpoint display</li>
          <li>🧠 Auto-detects screen width changes</li>
          <li>🎨 Dark/light mode support</li>
          <li>⚡ Zero configuration</li>
          <li>📦 ~67KB unpacked size (lightweight!)</li>
        </ul>

        <h2>🔧 Install in Seconds</h2>
        <pre>
          <code className="dark:bg-[#262626] backdrop-blur bg-opacity-10">
            npm i screen-indicator
          </code>
        </pre>

        <h2>🎥 Demo</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="w-1/2 h-full"
            src="https://www.youtube.com/embed/V_Au9n6ok9k"
            title="Responsive Indicator Demo"
            allowFullScreen
          />
        </div>

        <h2>🖼️ Screenshots</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img
            src="https://yourdomain.com/assets/responsive-indicator-1.png"
            alt="Responsive Indicator screenshot 1"
            className="rounded shadow"
          />
          <img
            src="https://yourdomain.com/assets/responsive-indicator-2.png"
            alt="Responsive Indicator screenshot 2"
            className="rounded shadow"
          />
        </div>

        <h2>🔗 Links</h2>
        <ul>
          <li>
            <a
              href="https://www.npmjs.com/package/screen-indicator"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              npm Package
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Tarunsaisrinivas/ScreenSizeIndicator"
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          </li>
        </ul>

        <p>
          This tool was built to save time and reduce friction in responsive
          development workflows. I hope it helps speed up yours too!
        </p>
      </div>
    </div>
  );
};

export default ResponsiveIndicatorBlog;
