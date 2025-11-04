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
  title: "Social Media Post Generator",
  desc: "Generate catchy, platform-specific posts for Twitter, Instagram, LinkedIn, and more — instantly with AI.",
  link: "PostGen",
  // icon: <MessageCircle className="w-10 h-10 text-pink-400" />,
},

    // {
    //   title: "Blog Writer",
    //   desc: "Create SEO-optimized blog posts in seconds using AI-powered content generation.",
    //   link: "BlogWriter",
    //   // icon: <Sparkles className="w-10 h-10 text-cyan-400" />,
    // },
    // {
    //   title: "Blog Writer",
    //   desc: "Create SEO-optimized blog posts in seconds using AI-powered content generation.",
    //   link: "BlogWriter",
    //   // icon: <Sparkles className="w-10 h-10 text-cyan-400" />,
    // },
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
    <div
  className="main-tools-section 
    w-[95%] sm:w-[90%] md:w-[80%] max-w-6xl mx-auto 
    bg-gray-300 rounded-2xl 
    p-4 sm:p-6 md:p-8 
    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 
    gap-3 sm:gap-6 md:gap-8"
>
  {tools.map((tool, index) => (
    <a
      key={index}
      href={tool.link}
      className="group 
        flex sm:flex-col items-center justify-center 
        text-white text-center
        bg-gradient-to-b from-[#0d0d0d] to-[#1a1a1a] 
        rounded-full sm:rounded-3xl border border-gray-800 
        shadow-[0_0_10px_rgba(0,0,0,0.4)]
        hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] 
        hover:border-blue-500/40 
        transition-all duration-500 ease-in-out 
        hover:scale-[1.04] 
        p-3 sm:p-6 md:p-8 
        backdrop-blur-md relative overflow-hidden 
        gap-3 sm:gap-0"
    >
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full sm:rounded-3xl"></div>

      {/* Icon */}
      <div className="relative text-blue-400 text-2xl sm:text-5xl flex-shrink-0">
        {tool.icon}
      </div>

      {/* Title & Description */}
      <div className="relative flex-1 text-center">
        <h2 className="text-xs sm:text-xl md:text-2xl font-semibold tracking-wide truncate">
          {tool.title}
        </h2>

        {/* Description visible only on sm+ screens */}
        <p className="hidden sm:block text-gray-400 text-sm sm:text-base leading-relaxed mt-2 mb-6 line-clamp-3">
          {tool.desc}
        </p>
      </div>

      {/* Button visible only on sm+ screens */}
      <div className="hidden sm:block relative">
        <span
          className="px-6 py-2.5 text-center font-semibold text-sm 
          text-white rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 
          hover:from-blue-500 hover:to-cyan-400 
          shadow-[0_0_15px_rgba(59,130,246,0.3)] 
          hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] 
          transition-all duration-300"
        >
          Generate
        </span>
      </div>
    </a>
  ))}
</div>

    </>
  );
};

export default ToolsSection;
