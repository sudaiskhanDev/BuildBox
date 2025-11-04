import React from "react";
// import { Sparkles, FileText } from "lucide-react"; // optional icons (lucide-react package)

const ToolsSection = () => {
  // Array of tool objects
  const tools = [
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "ArticleGen",
      // icon: <FileText className="w-10 h-10 text-blue-400" />, // icon added
    },
    {
      title: "Blog Writer",
      desc: "Create SEO-optimized blog posts in seconds using AI-powered content generation.",
      link: "BlogWriter",
      // icon: <Sparkles className="w-10 h-10 text-cyan-400" />,
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
      <div className="main-tools-section w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl mx-auto rounded-2xl 
        p-4 sm:p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-black/95 rounded-3xl text-white shadow-xl 
              border border-gray-800 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] 
              transition-all duration-300 ease-in-out hover:scale-105 p-6 sm:p-8"
          >
            {/* Icon */}
            <div className="mb-4">{tool.icon}</div>

            {/* Title & Description */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-center mb-2">
              {tool.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed text-center line-clamp-3 mb-6">
              {tool.desc}
            </p>

            {/* Button */}
            <a
              href={tool.link}
              className="mt-auto w-full px-6 py-2.5 text-center text-black bg-white border-2 border-white rounded-full 
                hover:bg-transparent hover:text-white transition-all duration-300 text-sm sm:text-base font-medium"
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
