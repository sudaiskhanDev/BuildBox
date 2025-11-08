"use client"
import React, { useState } from "react";

const Page = () => {
  const [activeTool, setActiveTool] = useState("Article");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Type something and click Send...");

  const navTools = [
    { title: "Article" },
    { title: "Social Media" },
    { title: "Blog" },
  ];

  // Simple AI Simulation for each tool
  const handleSend = () => {
    if (!input.trim()) return;
    switch (activeTool) {
      case "Article":
        setOutput(`📰 Generated Article about: "${input}"`);
        break;
      case "Social Media":
        setOutput(`📱 Catchy Social Media Post on: "${input}"`);
        break;
      case "Blog":
        setOutput(`✍️ Blog draft on topic: "${input}"`);
        break;
      default:
        setOutput("Unknown tool selected.");
    }
    setInput("");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="bg-[#575757] border-r border-gray-200 h-full w-[10%] flex flex-col items-center py-6 shadow-sm rounded-r-2xl text-white">
        <h1 className="text-lg font-semibold mb-6">Build Box</h1>

        <div className="tool-list flex flex-col items-center justify-center gap-3 sm:gap-5 w-full">
          {navTools.map((tool, index) => (
            <h1
              key={index}
              onClick={() => setActiveTool(tool.title)}
              className={`p-2 rounded-2xl w-[100%] text-center cursor-pointer transition-colors duration-200 ${
                activeTool === tool.title
                  ? "bg-blue-600"
                  : "bg-black hover:bg-gray-700"
              }`}
            >
              {tool.title}
            </h1>
          ))}
        </div>
      </div>

      {/* Main Input/Output Area */}
      <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center relative">
        <div className="bg-white shadow-lg rounded-xl h-[80%] w-[70%] flex flex-col justify-between overflow-hidden">
          {/* Output Section */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">
              {activeTool} Tool
            </h2>
            <div className="bg-gray-200 rounded-lg p-4 text-sm text-gray-800">
              <p>{output}</p>
            </div>
          </div>

          {/* Input Section */}
          <div className="border-t border-gray-300 px-4 py-3 flex items-center gap-3 bg-white">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Enter your ${activeTool.toLowerCase()} topic...`}
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              onClick={handleSend}
              className="p-2 rounded-full hover:bg-gray-100 transition duration-200"
            >
              <img src="submit.png" alt="Send" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
