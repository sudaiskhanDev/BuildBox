"use client"
import axios from 'axios';
import { p } from 'framer-motion/client';
import React, { useState } from 'react'

const Page = () => {

  const [selectedTool , setSelectedTool] = useState("Article");
  const [input , setInput] = useState("");
  const [output , setOutput] = useState("");
  const [loader, setLoader] = useState(false);
  const [error , setError] = useState("");


  //Tools
  const navTools = ["Article", "post", "Blog"];

  //Main Generator Function
  const handleGenerate = async ()=>{

    if(!input.trim()){
      setError("Please Enter Something");
      setOutput("")
      return;
    }

    setError("")
    setLoader(true);
    setOutput("")
    
    try {
       // Send the request to backend using selected tool
       const toolkey = selectedTool.toLowerCase().replace(/\s+/g,"_")
       const response = await axios.post(`/api/ai?type=${toolkey}`,
        {text:input});

        if(response.data && response.data[toolkey]){
          setOutput(response.data[toolkey])
        } else{
          setError("No output found")
        }
    } catch (error) {
      console.error("Error generating content:", error);
      setError("Something went wrong")
    }
    finally{
      setLoader(false);
    }

    }

  

  return (
  <>
  <div className="flex min-h-screen bg-gray-100 p-6 gap-6">

    {/* Sidebar */}
    <div className="w-1/4 bg-white shadow-md rounded-md p-4">
      <h3 className="text-lg font-semibold mb-4">Tools</h3>
      {navTools.map((tool) => (
        <div
          key={tool}
          className="cursor-pointer p-2 mb-2 rounded hover:bg-blue-100 transition"
          onClick={() => setSelectedTool(tool)}
        >
          {tool}
        </div>
      ))}
    </div>

    {/* Main Content */}
    <div className="flex-1 bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-bold mb-4">{selectedTool} Generator</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter your input..."
      />

      <button
        onClick={handleGenerate}
        disabled={loader}
        className={`px-4 py-2 rounded text-white ${
          loader ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {loader ? "Generating..." : "Generate"}
      </button>

      <div className="mt-6">
        {error && <p className="text-red-500 mb-2">{error}</p>}
        {output && <p className="text-green-600 font-medium">{output}</p>}
      </div>
    </div>
  </div>
</>

  )
}

export default Page