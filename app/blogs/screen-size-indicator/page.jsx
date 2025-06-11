"use client";
import Navbar from "@/app/containers/Navbar2";
import React, { useState, useEffect, useRef } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";
import GistEmbed from "@/components/ui/GistEmbed";
import { Image } from "antd";
import DownloadsChart from "@/components/ui/DownloadsChart";
const ResponsiveIndicatorBlog = () => {

  const [copied, setCopied] = useState(false);
  const command = "npm i screen-indicator";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Package download (not used visually here, but kept if you want)
  const [downloads, setDownloads] = useState(null);

  useEffect(() => {
    fetch("https://api.npmjs.org/downloads/point/last-week/screen-indicator")
      .then((res) => res.json())
      .then((data) => setDownloads(data.downloads))
      .catch(() => setDownloads(0));
  }, []);

  return (
    <>
      <Navbar />

      <div className="bg-white dark:bg-gray-950 max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-2">
          Responsive Indicator: Instantly See Active Tailwind Breakpoints
        </h1>
        <p className="text-sm text-gray-500 mb-6">May 20, 2025</p>

        <article className="prose dark:prose-invert max-w-none space-y-6">
          <p>
            Tired of guessing which breakpoint is active while debugging your
            responsive layouts?
          </p>
          <p>
            I’ve been there too — resizing the window and adding console logs
            just to figure out what Tailwind class is active. So, I built{" "}
            <strong>Responsive Indicator</strong>: a lightweight, plug-and-play
            utility to visualize your current Tailwind CSS breakpoint right on
            the screen.
          </p>
          <p>
            This tool helps developers stay in the flow, save time, and focus
            more on building rather than debugging breakpoints.
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

          <div className="relative w-full max-w-md mb-6">
            <pre className="overflow-x-auto rounded bg-gray-100 dark:bg-[#262626] p-4 pr-12 text-sm font-mono">
              <code>{command}</code>
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-4 right-2 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
              title="Copy to clipboard"
              aria-label="Copy npm install command"
            >
              {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
            </button>
          </div>

          <h2>🧩 Code Sample</h2>
          <GistEmbed gistId="Tarunsaisrinivas/87be4fea3ad1fd0bcf465a14d11ad6fc" />

          <h2>🎥 Demo</h2>
          <div className="aspect-w-16 aspect-h-9 mb-6">
            <iframe
              className="md:w-[560px] md:h-[315px] h-full w-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/V_Au9n6ok9k"
              title="Responsive Indicator Demo"
              allowFullScreen
            />
          </div>

          <h2>📈 Downloads (Last 30 days)</h2>
          <div className="mb-8 ">
            <DownloadsChart
              packageName="screen-indicator"
              borderColor="rgba(252,192,2)"
              backgroundColor="rgba(252,192,2,0.2)"
            />
          </div>

          <h2>🖼️ Screenshots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <Image
              src="/blog/linkedin.png"
              alt="Responsive Indicator screenshot 1"
              width={250}
              height={250}
              className="rounded shadow"
            />
            {/* Uncomment and add second screenshot if available */}
            {/* <Image
              src="https://yourdomain.com/assets/responsive-indicator-2.png"
              alt="Responsive Indicator screenshot 2"
              width={250}
              height={250}
              className="rounded shadow"
            /> */}
          </div>

          <h2>🔗 Links</h2>
          <ul className="list-disc list-inside space-y-1 mb-6">
            <li>
              <a
                href="https://www.npmjs.com/package/screen-indicator"
                className="text-blue-600 hover:underline dark:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                npm Package
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Tarunsaisrinivas/ScreenSizeIndicator"
                className="text-blue-600 hover:underline dark:text-blue-400"
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
        </article>
        <h2 className="text-2xl font-semibold mt-6 mb-2">🙋‍♂️ Author</h2>
        <p>
          Made with ❤️ by <strong>Tarun Sai Srinivas</strong>.{" "}
          <a
            href="https://www.linkedin.com/in/tarun-sai-srinivas"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Connect on LinkedIn
          </a>{" "}
          or explore the package on{" "}
          <a
            href="https://www.npmjs.com/package/screen-indicator"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            npm
          </a>
          .
        </p>
      </div>
    </>
  );
};

export default ResponsiveIndicatorBlog;
