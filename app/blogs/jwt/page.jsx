"use client";
import React, { useState } from "react";
import { Image } from "antd";
import Navbar from "@/app/containers/Navbar";
import { FiCopy, FiCheck } from "react-icons/fi";
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
      className="ml-2 px-2 py-1 text-xs rounded text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
      type="button"
      aria-label="Copy to clipboard"
    >
      {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
    </button>
  );
};

const jwt = () => {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-black max-w-3xl mx-auto p-6 text-gray-800 dark:text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Stop Using{" "}
          <code className="text-red-600 dark:text-red-400">
            &apos;secret&apos;
          </code>{" "}
          as Your JWT Secret Key 🔐
        </h1>

        <Image
          src="/blog/jwt-command.png"
          alt="Weak JWT secret warning illustration"
          className="w-full h-auto rounded mb-6"
        />

        <p className="mb-4 text-gray-600 dark:text-gray-300">
          If you&apos;re using <code>&apos;secret&apos;</code> as your JWT
          secret key, <strong>stop now</strong>. It&apos;s like hiding your
          house key under the doormat — everyone knows where to look.
        </p>

        <p className="mb-4">
          This mistake is common even in production environments. Security
          should never be an afterthought, especially when you&apos;re handling
          sensitive user data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          🔑 How to Generate a Secure JWT Secret
        </h2>
        <p className="mb-2">Run this command in your terminal:</p>

        <div className="relative inline-block w-full mb-4">
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto text-sm">
            <code>openssl rand -base64 32</code>
          </pre>
          <div className="absolute top-2 right-2">
            <CopyButton textToCopy="openssl rand -base64 32" />
          </div>
        </div>

        <p className="mb-4">Example:</p>

        <div className="relative inline-block w-full mb-6">
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto text-sm">
            <code>ztR5Mj/+t8clfNP6Xh4HTzF9QReJelHcDmsSgad9WHw=</code>
          </pre>
          <div className="absolute top-2 right-2">
            <CopyButton textToCopy="ztR5Mj/+t8clfNP6Xh4HTzF9QReJelHcDmsSgad9WHw=" />
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">
          ✅ JWT Security Checklist
        </h2>
        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Use strong, randomly generated secrets</li>
          <li>
            Store secrets in environment variables — <strong>never</strong>{" "}
            hardcoded in code
          </li>
          <li>Rotate JWT keys periodically</li>
          <li>Use HTTPS to transmit tokens</li>
          <li>Set appropriate token expiry times</li>
          <li>
            Validate algorithms — don&apos;t accept <code>none</code>
          </li>
          <li>Avoid storing sensitive info in JWT payload</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">💡 Pro Tip</h2>

        <Image
          src="/blog/jwt-env.png"
          alt="Setting JWT secret using environment variable"
          className="w-full h-auto rounded mb-6"
        />

        <p className="mb-2">
          Use a <code>.env</code> file like this:
        </p>

        <div className="relative inline-block w-full mb-4">
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto text-sm">
            <code>JWT_SECRET=ztR5Mj/+t8clfNP6Xh4HTzF9QReJelHcDmsSgad9WHw=</code>
          </pre>
          <div className="absolute top-2 right-2">
            <CopyButton textToCopy="JWT_SECRET=ztR5Mj/+t8clfNP6Xh4HTzF9QReJelHcDmsSgad9WHw=" />
          </div>
        </div>

        <p className="mb-2">Access it securely in your code:</p>

        <div className="relative inline-block w-full mb-8">
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded overflow-auto text-sm">
            <code>const jwtSecret = process.env.JWT_SECRET;</code>
          </pre>
          <div className="absolute top-2 right-2">
            <CopyButton textToCopy="const jwtSecret = process.env.JWT_SECRET;" />
          </div>
        </div>

        <p className="mb-8">
          Security isn&apos;t optional anymore. Small improvements like this go
          a long way in protecting your app and your users.
        </p>

        <p className="text-sm text-gray-500">
          #SecurityBestPractices #WebDevelopment #CyberSecurity #FullStack #JWT
          #NodeJS #DevTips
        </p>
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
         
          .
        </p>
      </section>
    </>
  );
};

export default jwt;
