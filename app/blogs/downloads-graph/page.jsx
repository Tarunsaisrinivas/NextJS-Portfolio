"use client";

import React, { useState } from "react";
import Navbar from "@/app/containers/Navbar2";
import { FiCheck, FiCopy } from "react-icons/fi";

const CopyButton = ({ textToCopy }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Failed to copy to clipboard");
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-3 right-2 p-1 text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
      type="button"
      aria-label="Copy to clipboard"
    >
      {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
    </button>
  );
};


const DownloadsGraphPost = () => {
  const installCmd = "npm install downloads-graph";
  const peerDepsCmd = "npm install react react-dom chart.js react-chartjs-2";
  const usageCode = `import DownloadsGraph from "downloads-graph";

export default function App() {
  return (
    <div style={{ height: 400 }}>
      <DownloadsGraph
        packageName="react"
        borderColor="blue"
        backgroundColor="rgba(0, 0, 255, 0.2)"
      />
    </div>
  );
}`;

  return (
    <>
      <Navbar />
      <section className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold mt-4 mb-2">
          📊 Building <code>downloads-graph</code>: An NPM Package for Download
          Stats
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
          Published on June 11, 2025
        </p>

        <p className="mb-4">
          I recently published a reusable React component called{" "}
          <strong>
            <code>downloads-graph</code>
          </strong>
          , available on NPM. It visualizes daily download counts for any NPM
          package using <strong>Chart.js</strong> and{" "}
          <strong>React ChartJS 2</strong>.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">✨ Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>📦 Fetches real-time data from the NPM downloads API</li>
          <li>📈 Interactive, responsive line chart</li>
          <li>🎨 Fully customizable via props</li>
          <li>⚡ Optimized for React apps (Vite, CRA, Next.js)</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🚀 Installation</h2>
        <div className="relative bg-gray-100 dark:bg-gray-900 p-4 rounded mb-4 text-sm overflow-auto font-mono">
          <code className="whitespace-pre break-all block">{installCmd}</code>
          <CopyButton textToCopy={installCmd} />
        </div>

        <p className="mb-2">Also install the required peer dependencies:</p>

        <div className="relative bg-gray-100 dark:bg-gray-900 p-4 rounded mb-4 text-sm overflow-auto font-mono">
          <code className="whitespace-pre break-all block">{peerDepsCmd}</code>
          <CopyButton textToCopy={peerDepsCmd} />
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">🛠 Usage</h2>
        <div className="relative bg-gray-100 dark:bg-gray-900 p-4 rounded mb-6 text-sm overflow-auto font-mono">
          <pre className="whitespace-pre-wrap">{usageCode}</pre>
          <CopyButton textToCopy={usageCode} />
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">📦 Props</h2>
        <table className="table-auto w-full text-left border-collapse mb-6">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="py-2 pr-4">Prop</th>
              <th className="py-2 pr-4">Type</th>
              <th className="py-2 pr-4">Required</th>
              <th className="py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-gray-700">
              <td className="py-2 pr-4">
                <code>packageName</code>
              </td>
              <td className="py-2 pr-4">string</td>
              <td className="py-2 pr-4">✅</td>
              <td className="py-2">NPM package to visualize downloads for</td>
            </tr>
            <tr className="border-b dark:border-gray-700">
              <td className="py-2 pr-4">
                <code>borderColor</code>
              </td>
              <td className="py-2 pr-4">string</td>
              <td className="py-2 pr-4">❌</td>
              <td className="py-2">Color of the chart line</td>
            </tr>
            <tr>
              <td className="py-2 pr-4">
                <code>backgroundColor</code>
              </td>
              <td className="py-2 pr-4">string</td>
              <td className="py-2 pr-4">❌</td>
              <td className="py-2">Area fill under the chart line</td>
            </tr>
          </tbody>
        </table>

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
            href="https://www.npmjs.com/package/downloads-graph"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            npm
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default DownloadsGraphPost;
