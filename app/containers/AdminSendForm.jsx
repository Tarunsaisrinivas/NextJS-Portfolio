import { useState } from "react";

export default function AdminSendForm() {
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

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      {!verified ? (
        <>
          <h2>Admin Code Required</h2>
          <input
            placeholder="Enter Admin Code"
            value={adminCode}
            onChange={(e) => setAdminCode(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
          <button className="dark:bg-white dark:text-black bg-black text-white p-2 rounded" onClick={verifyCode}>Verify</button>
        </>
      ) : (
        <>
          <h2>Send Professional Newsletter</h2>
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
          <input
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ width: "100%", padding: 8, marginBottom: 10 }}
          />
          <textarea
            placeholder="Content (you can use HTML)"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ width: "100%", height: 200, padding: 8, marginBottom: 10 }}
          />
          <button onClick={sendNewsletter}>Send Newsletter</button>
        </>
      )}
    </div>
  );
}
