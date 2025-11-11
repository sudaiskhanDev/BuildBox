"use client";

import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Loader from "@/components/Main/Loader.jsx";
import { HiMenu, HiX, HiSun, HiMoon } from "react-icons/hi";

const Page = () => {
  const [selectedTool, setSelectedTool] = useState("Article");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [displayedText, setDisplayedText] = useState(""); // Typing effect text
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navTools = ["Article", "Post","textsummary"];
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
    <div className="flex flex-col md:flex-row w-full min-h-screen transition-colors duration-300 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-900 text-gray-900 dark:text-white">

      {/* Sidebar (Desktop) */}
      <div className="hidden md:flex md:flex-col w-[20%] bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-r border-gray-200 dark:border-gray-800 p-5 shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            Tools
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:scale-110 transition-transform"
          >
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>

        <div className="flex flex-col gap-3">
          {navTools.map((tool) => (
            <div
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-2 rounded-lg cursor-pointer text-left font-medium transition-all ${
                selectedTool === tool
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-200/70 dark:bg-gray-800/70 hover:bg-gray-300/70 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white"
              }`}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Toggle Buttons */}
      <div className="md:hidden fixed top-4 left-4 z-50 flex gap-3 items-center">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-3xl text-white bg-black/40 p-2 rounded-lg backdrop-blur-md shadow-md"
        >
          {sidebarOpen ? <HiX /> : <HiMenu />}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl text-white bg-black/40 p-2 rounded-lg backdrop-blur-md shadow-md"
        >
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg shadow-2xl p-5 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden border-r border-gray-200 dark:border-gray-800`}
      >
        <h1 className="text-2xl mt-16 font-semibold mb-5 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Tools
        </h1>
        <div className="flex flex-col gap-3">
          {navTools.map((tool) => (
            <div
              key={tool}
              onClick={() => {
                setSelectedTool(tool);
                setSidebarOpen(false);
              }}
              className={`px-4 py-2 rounded-lg cursor-pointer text-left font-medium transition-all ${
                selectedTool === tool
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                  : "bg-gray-200/70 dark:bg-gray-800/70 hover:bg-gray-300/70 dark:hover:bg-gray-700/70 text-gray-900 dark:text-white"
              }`}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex justify-center items-center p-4">
        <div className="flex flex-col w-full sm:w-[95%] md:w-[70%] xl:w-[60%] h-[85vh] rounded-2xl bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-4 shadow-md">
            <h1 className="text-lg sm:text-xl font-semibold tracking-wide">
              {selectedTool} Generator
            </h1>
          </div>

          {/* Output Section */}
          <div
            ref={outputRef}
            className="flex-1 p-4 overflow-y-auto border-y border-gray-300/50 dark:border-gray-700/50 text-sm sm:text-base"
          >
            {loader && (
              <div className="flex justify-center items-center h-full">
                <Loader />
              </div>
            )}
            {error && <p className="text-red-500">{error}</p>}

            {output && (
              <div className="relative">
                <ReactMarkdown
                  className="prose prose-sm sm:prose-base max-w-none dark:prose-invert"
                  components={{
                    h1: ({ children }) => <h1 className="text-4xl font-bold mb-4 text-blue-600">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3 text-blue-500">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-2xl font-semibold mb-2 text-blue-400">{children}</h3>,
                    p: ({ children }) => <p className="leading-relaxed text-base mb-4">{children}</p>,
                    li: ({ children }) => <li className="mb-2 ml-4 list-disc">{children}</li>,
                  }}
                >
                  {displayedText}
                </ReactMarkdown>
                <span className="animate-pulse ml-1 text-blue-500">|</span>
              </div>
            )}
          </div>

          {/* Input Section */}
          <div className="p-4 flex flex-col sm:flex-row gap-3 border-t border-gray-300/50 dark:border-gray-700/50 bg-gray-100/40 dark:bg-gray-800/40 backdrop-blur-sm">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter your topic..."
              className="flex-1 border border-gray-400 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/70 dark:bg-gray-800/70 text-gray-900 dark:text-white"
              onKeyDown={(e) => e.key === "Enter" && handleGenerator()}
            />
            <button
              onClick={handleGenerator}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition w-full sm:w-auto shadow-md"
            >
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
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
