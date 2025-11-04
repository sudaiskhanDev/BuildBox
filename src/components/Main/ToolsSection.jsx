import React from "react";

const ToolsSection = () => {
  // Array of tool objects
  const tools = [
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "ArticleGen",
    },
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "ArticleGen",
    },
  ];

  return (
  <>
  {/* Title */}
  <div className="title px-3 sm:px-4 md:px-6">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-center text-gray-800 mt-8 sm:mt-10 md:mt-12 mb-5 sm:mb-6 md:mb-8">
      Tools Section
    </h1>
  </div>

  {/* Main Tools Container */}
  <div
    className="main-tools-section 
      bg-gray-500 
      w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] 
      max-w-6xl 
      h-auto m-auto rounded-2xl 
      p-3 sm:p-5 md:p-6 lg:p-8 
      flex flex-wrap justify-center 
      gap-3 sm:gap-4 md:gap-6 lg:gap-8"
  >
    {tools.map((tool, index) => (
      <div
        key={index}
        className="flex flex-col bg-black rounded-3xl 
        w-full xs:w-[90%] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[320px]
        h-auto text-white shadow-xl 
        hover:scale-105 hover:shadow-2xl 
        transition-all duration-300 ease-in-out"
      >
        {/* Top Section */}
        <div className="px-4 sm:px-6 md:px-8 py-6 sm:py-8">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold tracking-tight text-white">
                {tool.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed line-clamp-3">
                {tool.desc}
              </p>
            </div>

            {/* Optional price or detail */}
            <div className="mt-5 sm:mt-6">
              <p></p>
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="flex px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
          <a
            href={tool.link}
            className="items-center justify-center w-full px-5 sm:px-6 py-2 sm:py-2.5 md:py-3 
            text-center text-black duration-200 bg-white border-2 border-white 
            rounded-full hover:bg-transparent hover:border-white hover:text-white 
            focus:outline-none focus-visible:outline-white 
            text-xs sm:text-sm md:text-base"
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
