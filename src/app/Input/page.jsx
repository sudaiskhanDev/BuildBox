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
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const navTools = ["Article"];
  const outputRef = useRef(null);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

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
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100 dark:bg-black transition-colors duration-300 text-gray-900 dark:text-white">
      
      {/* Sidebar Desktop */}
      <div className="hidden md:flex md:flex-col w-[20%] bg-white dark:bg-gray-900 shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-semibold">Tools</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="text-xl">
            {darkMode ? <HiSun /> : <HiMoon />}
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {navTools.map((tool) => (
            <div
              key={tool}
              onClick={() => setSelectedTool(tool)}
              className={`px-4 py-2 rounded-md cursor-pointer text-left ${
                selectedTool === tool
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden fixed top-4 left-4 z-50 flex gap-2">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl text-white flex items-center justify-center"
        >
          {sidebarOpen ? <HiX /> : <HiMenu />}
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className="text-2xl text-white">
          {darkMode ? <HiSun /> : <HiMoon />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-md p-4 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <h1 className="text-xl font-semibold mb-4">Tools</h1>
        <div className="flex flex-col gap-2">
          {navTools.map((tool) => (
            <div
              key={tool}
              onClick={() => {
                setSelectedTool(tool);
                setSidebarOpen(false);
              }}
              className={`px-4 py-2 rounded-md cursor-pointer text-left ${
                selectedTool === tool
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              {tool}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex justify-center items-center p-4 w-full">
        <div className="flex flex-col w-full sm:w-[95%] md:w-[70%] xl:w-[60%] h-[85vh] bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden transition-colors duration-300">
          
          {/* Header */}
          <div className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white text-center py-3">
            <h1 className="text-lg sm:text-xl font-semibold">{selectedTool} Generator</h1>
          </div>

          {/* Output Section */}
          <div
            ref={outputRef}
            className="flex-1 p-4 overflow-y-auto border-t border-b border-gray-300 dark:border-gray-700 text-sm sm:text-base"
          >
            {loader && (
              <p className="flex justify-center items-center m-auto">
                <Loader />
              </p>
            )}
            {error && <p className="text-red-500">{error}</p>}
            {output && (
              <ReactMarkdown
                className="prose prose-sm sm:prose-base max-w-none dark:prose-invert"
                components={{
                  h1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-2xl font-semibold mb-2">{children}</h3>,
                  p: ({ children }) => <p className="leading-relaxed text-base mb-4">{children}</p>,
                  li: ({ children }) => <li className="mb-2 ml-4 list-disc">{children}</li>,
                }}
              >
                {output}
              </ReactMarkdown>
            )}
          </div>

          {/* Input Section */}
          <div className="p-3 flex flex-col sm:flex-row gap-3 border-t border-gray-300 dark:border-gray-700">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Enter topic..."
              className="flex-1 border border-gray-400 dark:border-gray-600 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              onKeyDown={(e) => e.key === "Enter" && handleGenerator()}
            />
            <button
              onClick={handleGenerator}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition w-full sm:w-auto"
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
