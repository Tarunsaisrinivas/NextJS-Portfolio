"use client";

import React from "react";
import { Image } from "antd";
import Navbar from "../../containers/Navbar2";

const TailwindWatchBlog = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white max-w-4xl mx-auto p-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Supercharge Your Tailwind Workflow with This One Command
        </h1>

        <p className="text-lg mb-6">
          Ever wondered how to make Tailwind CSS automatically update as you
          code? This single command changed my development workflow:
        </p>

        <pre className="bg-gray-800 text-green-300 rounded-lg p-4 overflow-x-auto mb-6 text-sm md:text-base">
          <code>
            npx tailwindcss -i ./src/index.css -o ./src/style.css --watch
          </code>
        </pre>

        <p className="mb-6">
          This simple yet powerful command brings your Tailwind development to
          life. Here’s what makes it special:
        </p>

        <h2 className="text-2xl font-semibold mb-2">🔍 Key Benefits</h2>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>Real-time CSS compilation</li>
          <li>Automatic updates as you code</li>
          <li>Zero manual refresh needed</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">⚙️ Quick Setup Steps</h2>
        <ol className="list-decimal list-inside mb-6 space-y-1">
          <li>
            Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code>{" "}
            via npm.
          </li>
          <li>
            Add the <code>@tailwindcss/vite</code> plugin to your Vite config.
          </li>
          <li>
            Import Tailwind CSS in your CSS file using <code>@import</code>.
          </li>
          <li>
            Add a script in your <code>package.json</code>:
            <pre className="bg-gray-900 text-yellow-300 rounded-md p-2 text-sm mt-1">
              "build:css": "tailwindcss -i ./src/index.css -o ./src/style.css
              --watch"
            </pre>
          </li>
          <li>
            Run the command with: <code>npm run build:css</code>
          </li>
        </ol>

        <p className="mb-6">
          The <code>--watch</code> flag is your best friend here. It keeps the
          process running and updates your styles in real-time as you make
          changes.
        </p>

        <p className="mb-6 italic text-gray-600 dark:text-gray-300">
          💡 Pro tip: Add this command to your package.json scripts for even
          faster access.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-2">
          <div>
            <Image
              src="/blog/tailwind-cmd.png"
              alt="Tailwind CSS watch command in terminal"
              width={500}
              height={200}
              className="rounded-lg"
            />
          </div>
          <div>
            <Image
              src="/blog/tailwind-config.png"
              alt="Tailwind CSS Vite setup screenshot"
              width={500}
              height={200}
              className="rounded-lg"
            />
          </div>
        </div>

        <p className="text-lg mt-8">
          Want to level up your Tailwind workflow? Drop a comment with your
          favorite Tailwind development tricks.
        </p>

        <div className="mt-6 text-sm text-blue-600 dark:text-blue-400">
          #TailwindCSS #WebDevelopment #FrontEnd
        </div>
      </section>
    </>
  );
};

export default TailwindWatchBlog;
