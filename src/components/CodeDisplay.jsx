import React, { useState } from "react";

export default function CodeDisplay({ code }) {
  const [tab, setTab] = useState("html");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (code && code[tab]) {
      navigator.clipboard.writeText(code[tab]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); 
    }
  };

  return (
    <div className="code-display">
      <div className="tabs">
        <button onClick={() => setTab("html")}>HTML</button>
        <button onClick={() => setTab("css")}>CSS</button>
        <button onClick={() => setTab("js")}>JavaScript</button>
        <button onClick={handleCopy} style={{ marginLeft: "auto" }}>
          {copied ? "✅ Copied!" : "📋 Copy"}
        </button>
      </div>
      <pre>
        <code>{code?.[tab]}</code>
      </pre>
    </div>
  );
}
