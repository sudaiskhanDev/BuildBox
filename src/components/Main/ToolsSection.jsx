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
      <div className="main-tools-section w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl bg-gray-200 h-auto m-auto rounded-2xl p-4 sm:p-6 md:p-8 flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="tool-card w-full sm:w-[270px] md:w-[300px] lg:w-[320px] h-[250px] sm:h-[280px] md:h-[300px] bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
          >
            {/* Tool Text */}
            <div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3">
                {tool.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed line-clamp-4">
                {tool.desc}
              </p>
            </div>

            {/* Button */}
            <a
              href={tool.link}
              className="mt-4 bg-white text-black font-medium py-2 sm:py-2.5 rounded-xl hover:bg-gray-200 transition-colors duration-200 text-center text-sm sm:text-base"
            >
              Generate
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default ToolsSection;
