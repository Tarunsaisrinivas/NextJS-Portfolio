"use client";
import { useState } from "react";

export default function useSubscribe() {
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
    setEmail(""); // Clear the field after success/failure
  };

  return {
    email,
    setEmail,
    loading,
    handleSubscribe,
  };
}
