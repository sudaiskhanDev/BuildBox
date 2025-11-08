"use client"
import axios from 'axios'
import { div, p } from 'framer-motion/client'
import { InputTokens } from 'openai/resources/responses.js'
import React, { useState } from 'react'

const Page = () => {

  const [selectedTool, setSelectedTool] = useState("Article")
  const [input, setInput] = useState("")
  const[output, setOutput] = useState("")
  const[loader , setLoader] = useState(false);
  const[error, setError] = useState("")


  const navTools =["Article", "Post", "Blog"]

  //Main Generator Function
  const handleGenerator= async ()=>{

    if(!input.trim()){
      setError("Please Enter Something");
      setOutput("")
      return;
    }

    setError("")
    setLoader(true)
    setOutput("")

    try {
      
         // Send the request to backend using selected tool
         const toolkey = selectedTool.toLowerCase().replace(/\s+/g,"_")
         const response = await axios.post(`/api/ai?type=${toolkey}`,
          {text: input})

          if(response.data && response.data[toolkey]){
              setOutput(response.data[toolkey])
              
          }else{
            setError("Issue with Backend")
            
          }
    } catch (error) {
      console.error("Error generating content:", error)
      setError("Something Error in Request")
    } finally{
      setLoader(false)
    }
  }

  return (
    <>
   <div className="main w-full h-screen flex bg-gray-100">

  {/* Sidebar */}
  <div className="side-bar-m w-[15%] h-full bg-white shadow-md p-4 justify-between">
    <h1 className="text-xl font-semibold mb-4">Tools</h1>
    <div className="space-y-2  p-1 text-white rounded-md">
      {navTools.map((tool)=>(
        <div
        key={tool}
        onClick={()=>setSelectedTool(tool)}
        className={`flex items-center px-4 py-2 cursor-pointer rounded-md bg-gray-400 items-center`}
        > 
        {tool}

        </div>
      ) )}
    </div>
  </div>

  {/* Main Content */}
  <div className="main-input-output w-[85%] h-full flex">
    <div className="input-output bg-white w-[60%] h-[70%] m-auto rounded-xl shadow-md overflow-hidden flex flex-col">
      
      {/* Output Section */}
     <div className="output-container bg-amber-400">
       <h1>{selectedTool} Generator</h1>
       </div>
      <div className="output w-full h-[85%] p-4 border-b border-gray-200 overflow-y-auto">
        {loader && <p>Loading....</p>}
        {error && <p className="text-red-500">{error}</p>}
        {output && <p>{output}</p>}
      </div>
     
      
      {/* Input Section */}
      <div className="input w-full h-[15%] p-3 flex items-center gap-2 border-t border-gray-200">
        <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
          type="text"
          placeholder="Enter topic..."
          className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button 
        onClick={handleGenerator}
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Generate
        </button>
      </div>
    </div>
  </div>
</div>

    
    </>
  )
}

export default Page




