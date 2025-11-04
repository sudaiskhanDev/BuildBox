import React from "react";

const ToolsSection = () => {
  // Array of tool objects
  const tools = [
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "ArticleGen",
    },
  ];

  return (
    <>
      {/* Title */}
      <div className="title px-4 sm:px-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mt-10 sm:mt-12 mb-6 sm:mb-8">
          Tools Section
        </h1>
      </div>

      {/* Main Tools Container */}
     <div className="main-tools-section w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl h-auto m-auto rounded-2xl p-4 sm:p-6 md:p-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
  {tools.map((tool, index) => (
    <div
      key={index}
      className="flex flex-col bg-black rounded-3xl w-full sm:w-[270px] md:w-[300px] lg:w-[320px] h-auto text-white shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
    >
      {/* Top Section */}
      <div className="px-6 py-8 sm:p-10 sm:pb-6">
        <div className="grid items-center justify-center w-full grid-cols-1 text-left">
          <div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-white">
              {tool.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-3">
              {tool.desc}
            </p>
          </div>

          {/* Optional price or detail (agar chaho to static text likh lo) */}
          <div className="mt-6">
            <p>
              
            </p>
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex px-6 pb-8 sm:px-8">
        <a
          href={tool.link}
          className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-full hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm sm:text-base"
        >
          Generate
        </a>
      </div>
    </div>
  ))}
</div>

    </>
  );
};

export default ToolsSection;
