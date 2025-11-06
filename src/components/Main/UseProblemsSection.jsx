import React from 'react'

const UseProblemsSection = () => {
  return (
 <>
  {/* Import these fonts in your globals.css or layout.js */}
  {/* 
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700&display=swap');
  
  html, body {
    font-family: 'Inter', sans-serif;
  }
  h1, h2, h3 {
    font-family: 'Sora', sans-serif;
  }
  */}

  <section className="relative bg-gradient-to-b from-white via-[#fafafa] to-[#f7f7f7] py-16 sm:py-20 px-4 sm:px-6 lg:px-12 text-center font-inter">
    {/* Section Label */}
    <p className="text-indigo-600 uppercase tracking-widest text-[11px] sm:text-sm font-semibold mb-3">
      Problem
    </p>

    {/* Main Heading */}
    <h2 className="font-sora text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12 sm:mb-16 leading-tight max-w-3xl mx-auto">
      Creating high quality content manually is exhausting.
    </h2>

    {/* Problem Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
      {[
        {
          title: "Content Overload",
          desc: "Businesses and creators struggle to produce a constant flow of high quality blogs, posts, and ideas wasting hours on brainstorming and editing.",
          icon: "🧠",
        },
        {
          title: "Slow Content Production",
          desc: "Traditional writing takes too long from idea to final draft. This delay costs engagement, traffic, and opportunities in fast moving digital markets.",
          icon: "⏳",
        },
        {
          title: "Creative Burnout",
          desc: "Constant content demand leads to burnout and inconsistency. Without automation, even talented teams lose focus and creativity over time.",
          icon: "⚡",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-center sm:items-start bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 
                     shadow-[0_8px_30px_rgba(0,0,0,0.05)] border border-gray-100 
                     hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2"
        >
          {/* Icon */}
          <div className="bg-indigo-100 p-4 rounded-2xl mb-4 flex items-center justify-center text-3xl">
            {item.icon}
          </div>

          {/* Title */}
          <h3 className="font-sora text-lg sm:text-xl font-semibold text-gray-900 mb-3 text-center sm:text-left">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-center sm:text-left font-medium">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </section>
</>



  )
}

export default UseProblemsSection