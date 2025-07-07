import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import "./index.css";

function App() {
  const [code, setCode] = useState({ html: "", css: "", js: "" });

  // 🚫 Block mobile users
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    return (
      <div style={{
        padding: "30px",
        color: "white",
        background: "#111",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px"
      }}>
        🚫 This website is not available on mobile devices.<br />
        Please use a tablet, PC, or larger screen.
      </div>
    );
  }

  return (
    <div className="app-container">
      <Sidebar />
      <div className="right">
        <MainContainer code={code} setCode={setCode} />
      </div>
    </div>
  );
}

export default App;
