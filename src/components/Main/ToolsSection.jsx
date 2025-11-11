"use client";
import React, { useRef, useState, useEffect } from "react";
import LoginModal from "./LoginModal";

const ToolsSection = () => {
  const scrollRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const tools = [
    { title: "Article Generator", desc: "Generate articles instantly.", link: "Input" },
    { title: "Social Media Post Generator", desc: "Create catchy posts.", link: "Input" },
    { title: "Blog Writer", desc: "Create SEO-optimized blog posts.", link: "Input" },
    { title: "Ad Copy Generator", desc: "Generate high-converting ad copy.", link: "Input" },
    { title: "Product Description Generator", desc: "Write persuasive product descriptions.", link: "Input" },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = window.innerWidth < 640 ? 180 : 220; 
      current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const handleClick = (link) => {
    if (isLoggedIn) {
      window.location.href = link;
    } else {
      setLoginModalOpen(true);
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
        <button onClick={() => scroll("left")} className="hidden sm:flex absolute left-0 top-1/2 ...">&#8249;</button>
        <div ref={scrollRef} className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth py-3 px-1 sm:px-3">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[160px] sm:w-[200px] md:w-[220px] h-[260px] bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-4 flex flex-col justify-between hover:scale-105 transition-all"
            >
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-white mb-2 truncate">{tool.title}</h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4">{tool.desc}</p>
              </div>
              <button
                onClick={() => handleClick(tool.link)}
                className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition-all"
              >
                Generate
              </button>
            </div>
          ))}
        </div>
        <button onClick={() => scroll("right")} className="hidden sm:flex absolute right-0 top-1/2 ...">&#8250;</button>
      </div>

      {/* Explore More Button */}
      <div className="flex justify-center mt-8 sm:mt-10 mb-8">
        <button
          onClick={() => handleClick("Input")}
          className="px-6 sm:px-8 py-2.5 sm:py-3 text-white font-semibold text-sm sm:text-base rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-500 hover:to-blue-400 transition-all"
        >
          Explore More Tools
        </button>
      </div>

      {/* Login Modal */}
      {loginModalOpen && (
        <LoginModal
          isOpen={loginModalOpen}
          onClose={() => setLoginModalOpen(false)}
          onLogin={() => {
            setIsLoggedIn(true);
            setLoginModalOpen(false);
          }}
        />
      )}
    </>
  );
};

export default ToolsSection;
