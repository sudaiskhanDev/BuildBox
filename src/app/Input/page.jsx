"use client"
import React, { useState } from 'react'

const Page = () => {
  const [sideBarOpen, setSideBarOpen] = useState(true)

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {sideBarOpen && (
        <div className="bg-[#575757] border-r border-gray-200 h-full w-[15%] flex flex-col items-center py-6 shadow-sm rounded-r-2xl text-white transition-all duration-300">
          <h1 className="text-lg font-semibold mb-6">Build Box</h1>
          <ul className="space-y-4 w-full px-4">
            <li className="text-white hover:text-black cursor-pointer">Dashboard</li>
            <li className="text-white hover:text-black cursor-pointer">Projects</li>
            <li className="text-white hover:text-black cursor-pointer">Settings</li>
          </ul>
        </div>
      )}

      {/* Main Chat Area */}
      <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center relative">
        {/* Toggle Sidebar Button */}
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className="absolute top-4 left-4 z-10 p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
          title={sideBarOpen ? "Close Sidebar" : "Open Sidebar"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 stroke-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            {sideBarOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="bg-white shadow-lg rounded-xl h-[80%] w-[70%] flex flex-col justify-between overflow-hidden">
          {/* Chat Output */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            <div className="bg-gray-200 rounded-lg p-4 text-sm text-gray-800">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dicta temporibus culpa id error consectetur saepe natus soluta quaerat. Facere accusantium, officia iure nemo repellendus blanditiis deserunt ut ea nostrum.
              </p>
            </div>
          </div>

          {/* Input Bar */}
          <div className="border-t border-gray-300 px-4 py-3 flex items-center gap-3 bg-white">
            <button
              title="Add New"
              className="group p-2 rounded-full hover:bg-gray-100 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6 stroke-gray-500 fill-none group-hover:fill-gray-800 group-hover:stroke-white transition duration-200"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  strokeWidth="1.5"
                />
                <path d="M8 12H16" strokeWidth="1.5" />
                <path d="M12 16V8" strokeWidth="1.5" />
              </svg>
            </button>

            <input
              type="text"
              placeholder="Send a message..."
              className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button className="p-2 rounded-full hover:bg-gray-100 transition duration-200">
              <img
                src="submit.png"
                alt="Send"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
