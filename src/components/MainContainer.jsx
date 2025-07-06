import React, { useState } from 'react';
import Header from "./Header";
import InputForm from "./InputForm";
import CodeDisplay from "./CodeDisplay";
import PreviewPane from "./PreviewPane";

const MainContainer = ({ setCode }) => {
  const [code, setGeneratedCode] = useState(null);

  const handleCodeGenerated = (generatedCode) => {
    setGeneratedCode(generatedCode);
    setCode(generatedCode); 
  };

  return (
    <div className='main-container'>
      <Header />

      {!code ? (
        <div className="centered-input">
          <InputForm onGenerate={handleCodeGenerated} />
        </div>
      ) : (
        <>
          <div className="output-section">
            <CodeDisplay code={code} />
            <PreviewPane code={code} />
          </div>
          <div className="bottom-input">
            <InputForm onGenerate={handleCodeGenerated} />
          </div>
        </>
      )}

      {/* footer */}
      <footer className="chat-footer">
        © 2025 <strong>WebCrafter</strong> | Made by Akhilesh Verma
      </footer>
    </div>
  );
};

export default MainContainer;
