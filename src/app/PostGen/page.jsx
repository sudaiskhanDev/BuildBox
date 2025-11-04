"use client";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import Loader from "@/components/Main/Loader.jsx";
import GenLoader from "@/components/Main/GenLoader";

const Page = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedText, setDisplayedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const outputRef = useRef(null);

  // 🔹 Typing effect
  useEffect(() => {
    if (!output) return;
    let index = 0;
    setDisplayedText("");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + output[index]);
      index++;
      if (index >= output.length) clearInterval(interval);
    }, 1);
    return () => clearInterval(interval);
  }, [output]);

  // 🔹 Auto-scroll when displayedText updates
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [displayedText]);

  // 🔹 Generate button
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
      const res = await axios.post("/api/ai?type=post", { topic: input });
      setOutput(res.data.post);
    } catch (err) {
      console.error("❌ Error generating article:", err);
      setError("Something went wrong! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a] min-h-screen flex justify-center items-center py-10 px-4">
      <div
        className="main-input-output relative w-full sm:w-[90%] md:w-[85%] lg:w-[75%] max-w-6xl 
        bg-[#111111]/90 border border-[#2b2b2b] rounded-3xl shadow-[0_0_25px_rgba(0,0,0,0.8)] 
        backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300 
        hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
      >
        {/* Header */}
        <div className="header flex flex-col items-center justify-center w-full py-6 px-3 border-b border-[#2f2f2f] bg-[#141414]/80">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
            Build Box
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            AI-powered content builder
          </p>
        </div>

        {/* Output Section */}
        <div
          ref={outputRef}
          className="output-section flex-grow px-6 sm:px-10 py-6 overflow-y-auto scroll-smooth"
          style={{ maxHeight: "70vh", paddingBottom: "100px" }}
        >
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
                    <h1 className="text-4xl font-bold text-blue-500 mb-4">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold text-cyan-400 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold text-blue-300 mb-2">
                      {children}
                    </h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-300 leading-relaxed text-base mb-4">
                      {children}
                    </p>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-400 mb-2 ml-4 list-disc">
                      {children}
                    </li>
                  ),
                }}
              >
                {displayedText}
              </ReactMarkdown>
            </div>
          ) : (
            <p className="text-gray-600 text-center mt-10 text-sm sm:text-base italic">
              No output yet. Enter a topic below to get started.
            </p>
          )}
        </div>

        {/* Fixed Input Section */}
        <div
          className="input-section fixed bottom-6 left-1/2 -translate-x-1/2 
          w-[90%] sm:w-[85%] md:w-[75%] lg:w-[70%] bg-[#0f0f0f]/95 border border-[#2b2b2b] 
          rounded-full px-4 sm:px-6 py-3 shadow-[0_0_20px_rgba(0,0,0,0.6)] backdrop-blur-md"
        >
          <div className="flex items-center gap-3 sm:gap-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter your topic here..."
              className="flex-grow bg-[#1b1b1b] text-gray-100 placeholder-gray-500 px-5 py-3 rounded-full outline-none border border-[#333] focus:border-blue-500 focus:ring-2 focus:ring-blue-600/30 transition-all duration-300 text-sm sm:text-base shadow-inner"
            />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className={`flex justify-center items-center gap-2 font-semibold 
                px-7 py-3 rounded-full text-sm sm:text-base transition-all duration-300 ease-in-out
                ${
                  loading
                    ? "bg-blue-500/60 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 text-white shadow-[0_0_15px_rgba(59,130,246,0.5)]"
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
