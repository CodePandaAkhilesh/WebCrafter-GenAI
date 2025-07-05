import React, { useEffect, useRef } from "react";

export default function PreviewPane({ code }) {
  const iframeRef = useRef();

  useEffect(() => {
    const doc = iframeRef.current.contentDocument;
    doc.open();
    doc.write(`
      <html>
        <head>
          <style>${code.css}</style>
        </head>
        <body>
          ${code.html}
          <script>${code.js}</script>
        </body>
      </html>
    `);
    doc.close();
  }, [code]);

  return <iframe title="preview" ref={iframeRef} className="preview-pane" />;
}
