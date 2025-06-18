import useAdminNewsletter from "@/hooks/useAdminNewsletter";

export default function AdminSendForm() {
  const {
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
  } = useAdminNewsletter();

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
          <button
            className="dark:bg-white dark:text-black bg-black text-white p-2 rounded"
            onClick={verifyCode}
          >
            Verify
          </button>
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
