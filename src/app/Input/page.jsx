"use client";

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Loader from "@/components/Main/Loader.jsx"; // Assuming HiArrowUp is from react-icons/hi
import { HiMenu, HiX, HiSun, HiMoon, HiArrowUp } from "react-icons/hi"; // Assuming HiArrowUp is from react-icons/hi

const Page = () => {
  const [selectedTool, setSelectedTool] = useState("Article");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedText, setDisplayedText] = useState(""); // Typing effect text
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navTools = ["Article", "Post"];
  const outputRef = useRef(null);
  const sidebarRef = useRef(null);

  // 🌙 Dark mode toggle
  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  // 🌀 Smooth auto scroll when output changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTo({
        top: outputRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [displayedText]);

  // 🧱 Click outside sidebar to close it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setSidebarOpen(false);
      }
    };
    if (sidebarOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarOpen]);

  // ✨ Typing effect for generated text
  useEffect(() => {
    if (!output) return;
    setDisplayedText("");
    let index = 0;
    const words = output.split(" ");
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + words[index] + " ");
      index++;
      if (index >= words.length) clearInterval(interval);
    }, 1); // Typing speed (ms per word)
    return () => clearInterval(interval);
  }, [output]);

  // ⚡ Handle text generation
  const handleGenerator = async () => {
    if (!input.trim()) {
      setError("Please enter something");
      setOutput("");
      return;
    }
    setError("");
    setLoader(true);
    setOutput("");
    try {
      const toolKey = selectedTool.toLowerCase().replace(/\s+/g, "_");
      const response = await axios.post(`/api/ai?type=${toolKey}`, { text: input });
      if (response.data && response.data[toolKey]) setOutput(response.data[toolKey]);
      else setError("Issue with backend");
    } catch (err) {
      console.error(err);
      setError("Something went wrong");
    } finally {
      setLoader(false);
    }
  };

  return (
 <>
  <div className="flex flex-col md:flex-row h-screen bg-gray-50 dark:bg-[#0e0e0f] text-gray-900 dark:text-gray-100 transition-colors duration-300">

    {/* Sidebar (Desktop) */}
    <div className="hidden md:flex md:flex-col w-[18%] bg-gray-100 dark:bg-[#1b1c1e] border-r border-gray-200 dark:border-gray-800 p-5">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tools</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-xl hover:scale-105 transition-transform"
        >
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>
      <div className="flex flex-col gap-3 overflow-y-auto">
        {navTools.map((tool) => (
          <div
            key={tool}
            onClick={() => setSelectedTool(tool)}
            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
              selectedTool === tool
                ? "bg-gray-300 dark:bg-[#2a2b2e] text-black dark:text-white"
                : "hover:bg-gray-200 dark:hover:bg-[#2b2c2e] text-gray-700 dark:text-gray-300"
            }`}
          >
            {tool}
          </div>
        ))}
      </div>
    </div>

    {/* Mobile Header */}
    <div className="md:hidden fixed top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-gray-100 dark:bg-[#1c1d1f] z-50 shadow-sm">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl text-gray-800 dark:text-white"
        >
          {sidebarOpen ? <HiX /> : <HiMenu />}
        </button>
        <h1 className="text-base font-semibold">{selectedTool}</h1>
      </div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="text-xl text-gray-800 dark:text-white"
      >
        {darkMode ? <HiSun /> : <HiMoon />}
      </button>
    </div>

    {/* Mobile Sidebar */}
    <div
      ref={sidebarRef}
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 dark:bg-[#1b1c1e] shadow-lg p-5 z-40 transform transition-transform duration-300 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } border-r border-gray-200 dark:border-gray-800`}
    >
      <h1 className="text-lg mt-16 font-semibold mb-5 text-gray-800 dark:text-gray-200">Tools</h1>
      <div className="flex flex-col gap-3">
        {navTools.map((tool) => (
          <div
            key={tool}
            onClick={() => {
              setSelectedTool(tool);
              setSidebarOpen(false);
            }}
            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
              selectedTool === tool
                ? "bg-gray-300 dark:bg-[#2a2b2e] text-black dark:text-white"
                : "hover:bg-gray-200 dark:hover:bg-[#2b2c2e] text-gray-700 dark:text-gray-300"
            }`}
          >
            {tool}
          </div>
        ))}
      </div>
    </div>

    {/* Main Chat Area */}
    <div className="flex-1 flex flex-col pt-[60px] md:pt-0 h-[90%] m-auto bg-gray-50 dark:bg-[#0e0e0f]">

      {/* Chat Messages */}
      <div
        ref={outputRef}
        className="flex-1  overflow-y-auto px-4 sm:px-6 py-6 space-y-6 scrollbar-none"
      >
        {loader && (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        )}
        {error && <p className="text-red-500">{error}</p>}

        {output && (
          <div className="space-y-6 pb-24"> {/* bottom padding for input */}
            {/* User Message */}
            <div className="flex justify-end">
              <div className="max-w-[80%] bg-[#10a37f] text-white px-5 py-3 rounded-2xl rounded-tr-none text-sm sm:text-base shadow-md">
                {input}
              </div>
            </div>

            {/* AI Message */}
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-white dark:bg-[#1f1f1f] px-5 py-3 rounded-2xl rounded-tl-none shadow-md text-sm sm:text-base leading-relaxed">
                <ReactMarkdown
                  className="prose prose-sm sm:prose-base max-w-none dark:prose-invert"
                  components={{
                    h1: ({ children }) => <h1 className="text-2xl font-bold mb-3">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-xl font-semibold mb-2">{children}</h2>,
                    p: ({ children }) => <p className="mb-3">{children}</p>,
                    li: ({ children }) => <li className="ml-5 list-disc">{children}</li>,
                  }}
                >
                  {displayedText}
                </ReactMarkdown>
                <span className="animate-pulse ml-1 text-gray-400">|</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Input Bar */}
      <div className="fixed bottom-0 left-0 w-full md:static border-t border-gray-200 dark:border-gray-800 bg-gray-100 rounded-full dark:bg-[#202123] px-4 py-3 md:p-4 flex items-center gap-3 z-50 shadow-inner mb-10">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Send a message..."
          className="flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600 bg-white dark:bg-[#1c1d1f] text-gray-900 dark:text-white text-sm"
          onKeyDown={(e) => e.key === 'Enter' && handleGenerator()}
        />
        <button
          onClick={handleGenerator}
          className="px-4 py-2 bg-[#10a37f] hover:bg-[#0f8c6d] text-white rounded-lg shadow-md transition-all"
        >
          <HiArrowUp className="text-lg" />
        </button>
      </div>
    </div>
  </div>
</>

  );
};

export default Page;







// "use client";
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import ReactMarkdown from "react-markdown";
// import Loader from "@/components/Main/Loader.jsx";
// import { HiMenu, HiX } from "react-icons/hi"; // Hamburger icons

// const Page = () => {
//   const [selectedTool, setSelectedTool] = useState("Article");
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [displayedText, setDisplayedText] = useState(""); // Typing effect
//   const [loader, setLoader] = useState(false);
//   const [error, setError] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle

//   const navTools = ["Article", "Post", "Blog"];

//   // Typing effect
//   useEffect(() => {
//     if (!output) return;
//     setDisplayedText("");
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + output[index]);
//       index++;
//       if (index >= output.length) clearInterval(interval);
//     }, 20);
//     return () => clearInterval(interval);
//   }, [output]);

//   const handleGenerator = async () => {
//     if (!input.trim()) {
//       setError("Please Enter Something");
//       setOutput("");
//       setDisplayedText("");
//       return;
//     }

//     setError("");
//     setLoader(true);
//     setOutput("");
//     setDisplayedText("");

//     try {
//       const toolkey = selectedTool.toLowerCase().replace(/\s+/g, "_");
//       const response = await axios.post(`/api/ai?type=${toolkey}`, { text: input });

//       if (response.data && response.data[toolkey]) {
//         setOutput(response.data[toolkey]);
//       } else {
//         setError("Issue with Backend");
//       }
//     } catch (error) {
//       console.error("Error generating content:", error);
//       setError("Something Error in Request");
//     } finally {
//       setLoader(false);
//     }
//   };

//   return (
//     <div className="flex w-full min-h-screen bg-gray-100">
//       {/* Sidebar for desktop */}
//       <div className="hidden md:flex md:flex-col w-[20%] bg-white shadow-md p-4">
//         <h1 className="text-xl font-semibold mb-4 text-gray-800 flex justify-center items-center">Tools</h1>
//         <div className="flex flex-col gap-2">
//           {navTools.map((tool) => (
//             <div
//               key={tool}
//               onClick={() => setSelectedTool(tool)}
//               className={`px-4 py-2 rounded-md cursor-pointer text-left ${
//                 selectedTool === tool
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {tool}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile Sidebar toggle */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setSidebarOpen(!sidebarOpen)}
//           className="text-2xl text-blue-600 "
//         >
//           {sidebarOpen ? <HiX /> : <HiMenu />}
//         </button>
//       </div>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md p-4 z-40 transform transition-transform duration-300 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:hidden`}
//       >
//         <h1 className="text-xl font-semibold mb-4 text-gray-800 ">Tools</h1>
//         <div className="flex flex-col gap-2">
//           {navTools.map((tool) => (
//             <div
//               key={tool}
//               onClick={() => {
//                 setSelectedTool(tool);
//                 setSidebarOpen(false);
//               }}
//               className={`px-4 py-2 rounded-md cursor-pointer text-left ${
//                 selectedTool === tool
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//               }`}
//             >
//               {tool}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 flex justify-center items-center p-4 md:ml-0 w-full">
//         <div className="input-output bg-white w-full sm:w-[90%] md:w-[70%] xl:w-[60%] rounded-xl shadow-md overflow-hidden flex flex-col h-[85vh]">
//           {/* Header */}
//           <div className="output-container bg-blue-600 text-white text-center py-3">
//             <h1 className="text-lg sm:text-xl font-semibold">{selectedTool} Generator</h1>
//           </div>

//           {/* Output Section */}
//           <div className="output flex-1 p-4 overflow-y-auto border-b border-gray-200 text-sm sm:text-base">
//             {loader && (
//               <p className="text-gray-500 flex justify-center items-center m-auto">
//                 <Loader />
//               </p>
//             )}
//             {error && <p className="text-red-500">{error}</p>}
//             {displayedText && (
//               <ReactMarkdown
//                 className="prose prose-sm sm:prose-base max-w-none"
//                 components={{
//                   h1: ({ children }) => <h1 className="text-4xl font-bold text-blue-700 mb-4">{children}</h1>,
//                   h2: ({ children }) => <h2 className="text-3xl font-semibold text-cyan-600 mb-3">{children}</h2>,
//                   h3: ({ children }) => <h3 className="text-2xl font-semibold text-blue-400 mb-2">{children}</h3>,
//                   p: ({ children }) => <p className="text-gray-800 leading-relaxed text-base mb-4">{children}</p>,
//                   li: ({ children }) => <li className="text-gray-800 mb-2 ml-4 list-disc">{children}</li>,
//                 }}
//               >
//                 {displayedText}
//               </ReactMarkdown>
//             )}
//           </div>

//           {/* Input Section */}
//           <div className="input p-3 flex flex-col sm:flex-row gap-3 border-t border-gray-200">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               type="text"
//               placeholder="Enter topic..."
//               className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//             <button
//               onClick={handleGenerator}
//               className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
//             >
//               Generate
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;
