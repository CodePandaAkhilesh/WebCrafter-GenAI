import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export default function InputForm({ onGenerate }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateWebsite = async () => {
    if (!input.trim()) {
      alert("Please enter a valid command, like 'Create calculator'");
      return;
    }

    setLoading(true);

    const prompt = `You are a code generator.

Given a short command like:
"Create calculator", "Create blog", or "Create coding platform, Create tic tac toe game
,Create portfolio, create contact page/form , Create e-commerce site with cart,
Create a login/signup page, Create a resume website  , Create countdown timer,
Create to-do list",

Always generate a complete working website using:
- HTML for layout
- CSS for styling
- JavaScript for behavior

Always return a full, functional website using this exact JSON format:
{
  "html": "<!DOCTYPE html><html>...</html>",
  "css": "body { ... }",
  "js": "function logic() { ... }"
}

⚠️ Do not skip JS even if it's minimal.
⚠️ Do not return any markdown or explanation.
⚠️ Only return raw JSON.

Command: "${input}"`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    try {
      const result = await model.generateContent(prompt);
      const text = result.response.text().trim();

      const match =
        text.match(/```json\s*([\s\S]*?)```/) || text.match(/```([\s\S]*?)```/);

      const jsonString = match ? match[1] : text;

      const json = JSON.parse(jsonString);

      onGenerate(json); // Call the callback with the generated code object
    } catch (err) {
      console.error("Error parsing Gemini output:", err);
      alert(
        "⚠️ Failed to generate website. Try a clearer request."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="type-message">
      <input
        type="text"
        className="ask"
        placeholder="What kind of website are you dreaming of today?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && !loading && generateWebsite()}
      />
      <div className="ask2">
        <button className="button" onClick={generateWebsite} disabled={loading} onKeyDown={(e) => {
            if (e.key === "Enter" && !loading) {
              generateWebsite();
            }
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
            className={`arrow ${loading ? "loading" : ""}`}
            stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5 12 12 5 19 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
