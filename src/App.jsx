import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import MainContainer from "./components/MainContainer";
import "./index.css";

function App() {
  const [code, setCode] = useState({ html: "", css: "", js: "" });

  return (
    <div className="app-container">
      <Sidebar/>
      <div className="right">
        <MainContainer code={code} setCode={setCode} />
      </div>
    </div>
  );
}

export default App;
