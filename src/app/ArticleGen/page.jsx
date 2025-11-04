"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Loader from "@/components/Main/Loader.jsx";
import GenLoader from "@/components/Main/GenLoader";

const Page = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedText, setDisplayedText] = useState(""); // 👈 typing effect ke liye
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🧩 Typing animation useEffect
  useEffect(() => {
    if (!output) return;

    let index = 0;
    setDisplayedText(""); // reset
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + output[index]);
      index++;

      if (index >= output.length) clearInterval(interval);
    }, 1); // 👈 speed (ms) — 10 = fast typing, 50 = slow typing

    return () => clearInterval(interval);
  }, [output]);

  // 🧠 Generate button handler
  const handleGenerate = async () => {
    if (!input.trim()) {
      setError("Please enter a topic first");
      return;
    }

    setError("");
    setLoading(true);
    setOutput("");
    setDisplayedText("");

    try {
      const res = await axios.post("/api/ai?type=article", { text: input });
      setOutput(res.data.article);
    } catch (err) {
      console.error("❌ Error generating article:", err);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center py-6 px-4">
      <div className="main-input-output w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-6xl min-h-[600px] bg-[#212121] border border-gray-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="header flex flex-col items-center justify-center w-full py-4 px-2 border-b border-gray-700">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide">
            Build Box
          </h1>
          <div className="w-[90%] border-b border-gray-600 mt-2"></div>
        </div>

        {/* Output */}
        <div className="output-section flex-grow px-4 sm:px-6 py-4 overflow-y-auto">
          {loading ? (
            <div className="flex justify-center items-center h-60">
              <Loader />
            </div>
          ) : error ? (
            <p className="text-red-500 text-center mt-10 text-sm sm:text-base">
              {error}
            </p>
          ) : displayedText ? (
            <div className="prose prose-invert max-w-none text-white">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-blue-500 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold text-blue-300 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold text-blue-200 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-200 leading-relaxed text-x mb-4">{children}</p>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300 mb-2 ml-4 list-disc">{children}</li>
                  ),
                }}
              >
                {displayedText}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-gray-500 text-center mt-10 text-sm sm:text-base">
              No output yet. Enter a topic below to get started.
            </p>
          )}
        </div>

        {/* Input */}
        <div className="input-section w-full py-4 px-3 sm:px-6 bg-[#1a1a1a] border-t border-gray-700">
          <div className="input-text-btn flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter your topic here..."
              className="flex-grow w-full sm:w-auto bg-[#2e2e2e] text-white placeholder-gray-400 px-4 py-3 rounded-full outline-none border border-gray-700 focus:border-blue-500 transition-all duration-300 text-sm sm:text-base"
            />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`w-full sm:w-auto flex justify-center items-center gap-2 
                font-semibold px-6 py-3 rounded-full shadow-md text-sm sm:text-base
                transition-all duration-300 ease-in-out
                ${
                  loading
                    ? "bg-blue-500 cursor-not-allowed opacity-80"
                    : "bg-blue-600 hover:bg-blue-700 active:scale-95 text-white shadow-blue-900/30"
                }`}
            >
              {loading ? (
                <div className="flex justify-center items-center gap-2">
                  <GenLoader />
                </div>
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
