import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

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
      <div className="highlighted-code">
        <SyntaxHighlighter
          language={tab === "js" ? "javascript" : tab}
          style={oneDark}
          wrapLongLines
          customStyle={{
            borderRadius: "8px",
            fontSize: "14px",
            padding: "16px",
            margin: 0,
            height: "100%",
            background: "#1e1e1e",
          }}
        >
          {code?.[tab] || ""}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
