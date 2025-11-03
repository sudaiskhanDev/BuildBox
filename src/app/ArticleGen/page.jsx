"use client"
import React, { useState } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'


const Page = () => {

    const [input , setInput] = useState("")
    const [output , setOutput] = useState("")
    const[loading, setLoading] = useState("")
    const[error, setError] =useState('')

    const handleGenerate = async () =>{
        if(!input.trim()) {
            setError("Please enter a topic first")
            return
        }

        setError('')
        setLoading(true)
        setOutput('')

        try {
            
            const res = await axios.post("/api/ai?type=article", { text: input });
            setOutput(res.data.article);
            setLoading(false)

        } catch (error) {
            console.error("❌ Error generating article:", err);
      setError("Something went wrong! Please try again.");
        } finally{
            setLoading(false)
        }

    }

  return ( 
    <>
    <div className='bg-[#000000] h-screen flex justify-center items-center'>
        <div className="main-input-output w-[90%] md:w-[80%] max-w-4xl h-[790px] mx-auto mt-12 mb-8 rounded-2xl shadow-lg overflow-hidden flex flex-col border bg-[#212121] border-gray-900">
        {/* Output Section */}
        <div className="output-section flex-grow p-6 overflow-y-auto">
            {loading ? (
                <p className="text-blue-400 animate-pulse text-center mt-10">Generating your article...</p>
            ) : error ? (
                <p className="text-red-500 text-center mt-10">{error}</p>
            ) : output ? ( 
                 <div className="prose prose-invert max-w-none text-white">
  <ReactMarkdown
  components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold text-blue-700 mb-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold text-blue-300 mb-3">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold text-blue-200 mb-2">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="text-gray-200 leading-relaxed text-xl mb-4">{children}</p>
                  ),
                  li: ({ children }) => (
                    <li className="text-gray-300 mb-2 ml-4 list-disc">{children}</li>
                  ),
                }}>{output}</ReactMarkdown>
</div>
            ):(
  <p className="text-gray-400 text-center mt-10">No output yet.</p>
)
        }
        </div>

        {/* Input Section */}
        <div className="input-section w-full h-[150px]  flex justify-center items-center p-4">
            <div className="input-text-btn w-full sm:w-[80%] md:w-[60%] h-[60px]  rounded-full shadow-md flex items-center px-2 bg-[#3d3d3d] ">
                <div className="text-input flex-grow h-[40px] overflow-hidden">
                    <input 
                      value={input}
                      onChange={(e)=>setInput(e.target.value)}
                        type="text"
                        placeholder="Enter your topic here..."
                        className='w-full h-full px-4 outline-none border-none bg-transparent text-white placeholder-white' 
                    />
                </div>
                <div className="generate-btn ml-2">
                    <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="flex items-center bg-blue-600 text-white text-base px-5 py-2 rounded-full border-none transition-all duration-200 ease-in-out hover:bg-blue-700 active:scale-95 shadow-lg">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
export default Page