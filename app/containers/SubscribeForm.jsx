"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        console.error("Failed to parse JSON response");
      }

      if (res.ok) {
        alert(data.message || "Subscribed successfully!");
      } else {
        alert(data.message || "Subscription failed.");
      }
    } catch (err) {
      console.error(err);
      alert("An error occurred. Please try again.");
    }

    setLoading(false);
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-black  shadow-md rounded-xl">
      <h3 className="text-xl font-semibold mb-4 text-center">
        Subscribe to Our Newsletter
      </h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800"
        />
        <button
          onClick={handleSubscribe}
          disabled={loading}
          className={`px-4 py-2 rounded-md font-medium text-white ${
            loading
              ? "bg-black cursor-not-allowed"
              : "bg-gray-900 hover:bg-black dark:hover:border-white border-2 "
          }`}
        >
          {loading ? (
            <div className="flex items-center gap-2">
              <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Subscribing...
            </div>
          ) : (
            "Subscribe"
          )}
        </button>
      </div>
    </div>
  );
}
