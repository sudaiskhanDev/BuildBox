"use client";
import React, { useRef } from "react";

const ToolsSection = () => {
  const scrollRef = useRef(null);

  const tools = [
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "Input",
    },
    {
      title: "Social Media Post Generator",
      desc: "Create catchy, platform-specific posts for Twitter, Instagram, LinkedIn, and more instantly.",
      link: "Input",
    },
    {
      title: "Blog Writer",
      desc: "Create SEO-optimized blog posts in seconds using AI-powered content generation.",
      link: "Input",
    },
    {
      title: "Ad Copy Generator",
      desc: "Generate high-converting ad copy for Google, Meta, and other platforms.",
      link: "Input",
    },
    {
      title: "Product Description Generator",
      desc: "Write persuasive product descriptions that boost sales and SEO.",
      link: "Input",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 640 ? 180 : 220; 
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Section Title */}
      <div id="toolsection" className="text-center mt-10 mb-4 px-4 sm:px-0">
        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-600 tracking-tight">
          Featured AI Tools
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-md sm:max-w-lg mx-auto">
          Discover and explore powerful AI tools to automate your workflow efficiently.
        </p>
      </div>

      {/* Tools Carousel */}
      <div className="relative w-full max-w-[900px] mx-auto px-2 sm:px-0">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-9 h-9 items-center justify-center shadow-lg hover:bg-gray-700 transition z-10"
        >
          &#8249;
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1 sm:px-3"
        >
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] h-[260px] 
                bg-gradient-to-b from-gray-900 to-gray-800 
                border border-gray-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] hover:border-blue-500/50 
                transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2 truncate">
                  {tool.title}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                  {tool.desc}
                </p>
              </div>
              <button
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white 
                  rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                  hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 
                  shadow-[0_0_6px_rgba(59,130,246,0.3)] hover:shadow-[0_0_12px_rgba(59,130,246,0.5)] mt-2"
              >
                Generate
              </button>
            </a>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-9 h-9 items-center justify-center shadow-lg hover:bg-gray-700 transition z-10"
        >
          &#8250;
        </button>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-8 sm:mt-10 mb-8">
        <a
          href="Input"
          className="px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base rounded-full 
            bg-gradient-to-r from-indigo-600 to-blue-500 
            hover:from-indigo-500 hover:to-blue-400 
            transition-all duration-300 shadow-[0_0_12px_rgba(59,130,246,0.3)] hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
        >
          Explore More Tools
        </a>
      </div>
    </>
  );
};

export default ToolsSection;
