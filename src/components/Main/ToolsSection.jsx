import React from 'react'

const ToolsSection = () => {
 
    //Array of tool objects
    const tools =[
        {
            title:"Tags Generator",
            desc:"ABCD",
            link:""
        },
        {
            title:"Tags Generator",
            desc:"ABCD",
            link:""
        },
        {
            title:"Tags Generator",
            desc:"ABCD",
            link:""
        },
    ]

  return (
    <>
     <div className="title">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mt-12 mb-8">
          Tools Section
        </h1>
      </div>

       <div className="main-tools-section w-[90%] md:w-[80%] max-w-6xl bg-gray-200 h-auto m-auto rounded-2xl p-4 md:p-8 flex flex-wrap justify-center gap-6 md:gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="tool-card w-full sm:w-[300px] h-[280px] sm:h-[300px] bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">{tool.title}</h2>
              <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">{tool.desc}</p>
            </div>

            <a
              href={tool.link}
              className="mt-4 bg-white text-black font-medium py-2 rounded-xl hover:bg-gray-200 transition-colors duration-200 text-center"
            >
              Generate
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

export default ToolsSection