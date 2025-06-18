import { useState } from "react";

export default function useAdminNewsletter() {
  const [subject, setSubject] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");
  const [adminCode, setAdminCode] = useState("");
  const [verified, setVerified] = useState(false);

  const verifyCode = async () => {
    try {
      const res = await fetch("/api/verify-admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: adminCode }),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Invalid code");
        return;
      }

      setVerified(true);
    } catch (err) {
      alert("Failed to verify code");
    }
  };

  const sendNewsletter = async () => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, content, imageUrl }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        alert("No response from server");
        return;
      }

      if (!res.ok) {
        alert(data.message || "Something went wrong.");
        return;
      }

      alert(data.message || "Newsletter sent!");
    } catch (err) {
      console.error("❌ Network error:", err);
      alert("Failed to send newsletter.");
    }
  };

  return {
    subject,
    setSubject,
    imageUrl,
    setImageUrl,
    content,
    setContent,
    adminCode,
    setAdminCode,
    verified,
    verifyCode,
    sendNewsletter,
  };
}
