"use client";
import React, { useState, useRef } from "react";

const ToolsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const sliderRef = useRef(null);

  const tools = [
    {
      title: "Article Generator",
      desc: "Generate SEO-optimized articles instantly with engaging tone and structure.",
      link: "ArticleGen",
    },
    {
      title: "Social Media Post Generator",
      desc: "Create catchy and platform-optimized posts for Instagram, LinkedIn, and more.",
      link: "PostGen",
    },
    {
      title: "Ad Copy Generator",
      desc: "Craft compelling, high-converting ad copies for Facebook and Google.",
      link: "AdGen",
    },
    {
      title: "Email Writer",
      desc: "Generate professional and personalized emails in seconds using AI.",
      link: "EmailGen",
    },
    {
      title: "Video Script Generator",
      desc: "Create engaging video scripts for YouTube, TikTok, and short-form content.",
      link: "VideoGen",
    },
    {
      title: "Hashtag Generator",
      desc: "Find perfect, trending hashtags tailored for your niche and audience.",
      link: "HashtagGen",
    },
    {
      title: "Hashtag Generator",
      desc: "Find perfect, trending hashtags tailored for your niche and audience.",
      link: "HashtagGen",
    },
    {
      title: "Hashtag Generator",
      desc: "Find perfect, trending hashtags tailored for your niche and audience.",
      link: "HashtagGen",
    },
    {
      title: "Hashtag Generator",
      desc: "Find perfect, trending hashtags tailored for your niche and audience.",
      link: "HashtagGen",
    },
    {
      title: "Hashtag Generator",
      desc: "Find perfect, trending hashtags tailored for your niche and audience.",
      link: "HashtagGen",
    },
  ];

  const visibleTools = showAll ? tools : tools.slice(0, 4);

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <>
      {/* Title */}
      <div className="text-center mt-14 mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          AI Tools for Smarter Workflow
        </h1>
        <p className="text-gray-500 mt-2 text-base">
          Explore professional-grade AI tools to boost your productivity.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-[95%] sm:w-[90%] md:w-[85%] max-w-7xl mx-auto">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 
          bg-gradient-to-r from-blue-600 to-indigo-500 
          text-white p-3 rounded-full shadow-lg hover:scale-105 
          transition-all z-10 hidden sm:flex"
        >
          ◀
        </button>

        {/* Tools Scroll Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory 
          scrollbar-hide gap-6 pb-6 px-2 sm:px-4"
        >
          {visibleTools.map((tool, index) => (
            <a
              key={index}
              href={tool.link}
              className="min-w-[260px] sm:min-w-[280px] md:min-w-[300px] 
                bg-gradient-to-br from-[#0b0b0b] to-[#181818]
                border border-gray-700 rounded-3xl 
                shadow-[0_0_15px_rgba(59,130,246,0.15)] 
                hover:shadow-[0_0_35px_rgba(99,102,241,0.35)] 
                hover:border-blue-400/40
                flex flex-col justify-between items-center 
                text-center p-6 transition-all duration-500 ease-in-out 
                hover:scale-[1.05] snap-start relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

              <h2 className="text-xl font-semibold text-white mb-2 tracking-wide">
                {tool.title}
              </h2>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                {tool.desc}
              </p>

              <span
                className="px-5 py-2 text-sm font-semibold text-white rounded-full 
                bg-gradient-to-r from-blue-600 to-purple-600 
                hover:from-blue-500 hover:to-purple-500 
                shadow-[0_0_10px_rgba(59,130,246,0.4)] 
                transition-all duration-300"
              >
                Try Now →
              </span>
            </a>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 
          bg-gradient-to-r from-indigo-500 to-blue-600 
          text-white p-3 rounded-full shadow-lg hover:scale-105 
          transition-all z-10 hidden sm:flex"
        >
          ▶
        </button>
      </div>

      {/* Explore More Button */}
      {tools.length > 4 && (
        <div className="flex justify-center mt-10 mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center justify-center px-10 py-3 
              text-lg font-semibold text-white rounded-full 
              bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600
              hover:from-blue-500 hover:via-indigo-400 hover:to-purple-500
              shadow-[0_0_20px_rgba(59,130,246,0.4)]
              hover:shadow-[0_0_35px_rgba(99,102,241,0.5)]
              transition-all duration-300 hover:scale-105"
          >
            {showAll ? "Show Less ↑" : "Explore More ↓"}
          </button>
        </div>
      )}
    </>
  );
};

export default ToolsSection;
