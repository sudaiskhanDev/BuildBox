"use client";
import React, { useRef } from "react";

const ToolsSection = () => {
  const scrollRef = useRef(null);

  const tools = [
    {
      title: "Article Generator",
      desc: "Generate articles instantly on any topic with clear, engaging content.",
      link: "ArticleGen",
    },
    {
      title: "Social Media Post Generator",
      desc: "Generate catchy, platform-specific posts for Twitter, Instagram, LinkedIn, and more — instantly with AI.",
      link: "PostGen",
    },
    {
      title: "Blog Writer",
      desc: "Create SEO-optimized blog posts in seconds using AI-powered content generation.",
      link: "BlogWriter",
    },
    {
      title: "Ad Copy Generator",
      desc: "Generate high-converting ad copy for Google, Meta, and other platforms.",
      link: "AdGen",
    },
    {
      title: "Product Description Generator",
      desc: "Write persuasive product descriptions that boost sales and SEO.",
      link: "ProductGen",
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 640 ? 220 : 280; // smaller scroll distance for compact cards
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Section Title */}
      <div  id="toolsection" className="text-center mt-8 sm:mt-10 mb-4 sm:mb-6 px-4">
        <h1 className="text-xl sm:text-3xl font-extrabold text-gray-500 tracking-tight">
          Featured AI Tools
        </h1>
        <p className="text-gray-500 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Discover and explore powerful AI tools to automate your workflow.
        </p>
      </div>

      {/* Tools Carousel */}
      <div className="relative w-[70%] sm:w-[95%] md:w-[85%] mx-auto px-2 sm:px-0">
        {/* Left Scroll Button (hidden on mobile) */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full w-9 h-9 items-center justify-center shadow-lg hover:bg-gray-800 transition z-10"
        >
          &#8249;
        </button>

        {/* Cards Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth py-3 px-2 sm:px-4"
        >
          {tools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="flex-shrink-0 w-[130px] h-[250px] min-w-[200px] sm:min-w-[230px] md:min-w-[250px] 
              bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a]
              border border-gray-800 rounded-2xl p-4 sm:p-5 flex flex-col justify-between
              hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:border-blue-500/40 
              transition-all duration-300 ease-in-out hover:scale-[1.05]"
            >
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2 truncate">
                  {tool.title}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {tool.desc}
                </p>
              </div>
              <button
                className="px-3 py-1.5 text-xs sm:text-sm font-semibold text-white 
                rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
                hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 
                shadow-[0_0_8px_rgba(59,130,246,0.3)] hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
              >
                Generate
              </button>
            </a>
          ))}
        </div>

        {/* Right Scroll Button (hidden on mobile) */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white rounded-full w-9 h-9 items-center justify-center shadow-lg hover:bg-gray-800 transition z-10"
        >
          &#8250;
        </button>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-8 sm:mt-10 mb-8">
        <button
        href="Input"
          className="px-8 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base rounded-full 
          bg-gradient-to-r from-indigo-600 to-blue-500 
          hover:from-indigo-500 hover:to-blue-400 
          transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
        >
          <a href="Input">Explore More Tools</a>
          
        </button>
      </div>
    </>
  );
};

export default ToolsSection;
