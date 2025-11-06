import React from 'react'

const UseProblemsSection = () => {
  return (
 <>
  <div className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-12 text-center">
    {/* Problem Label */}
    <p className="text-red-500 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-3">
      Problem
    </p>

    {/* Main Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-12 sm:mb-16 leading-snug">
      Creating high-quality content manually is exhausting.
    </h2>

    {/* Problem Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-6xl mx-auto text-left">
      
      {/* Card 1 */}
      <div className="flex flex-col items-start bg-[#fafafa] hover:bg-[#fdfdfd] transition-all duration-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md">
        <div className="bg-red-100 p-3 sm:p-4 rounded-full mb-4 mx-auto sm:mx-0">
          {/* Icon Placeholder */}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center sm:text-left">
          Content Overload
        </h3>
        <p className="text-gray-700 leading-relaxed font-medium text-[14px] sm:text-[15px] text-center sm:text-left">
          Businesses and creators struggle to produce a constant flow of high quality blogs, posts, and ideas wasting hours on brainstorming and editing.
        </p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-start bg-[#fafafa] hover:bg-[#fdfdfd] transition-all duration-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md">
        <div className="bg-red-100 p-3 sm:p-4 rounded-full mb-4 mx-auto sm:mx-0">
          {/* Icon Placeholder */}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center sm:text-left">
          Slow Content Production
        </h3>
        <p className="text-gray-700 leading-relaxed font-medium text-[14px] sm:text-[15px] text-center sm:text-left">
          Traditional writing takes too long from idea to final draft. This delay costs engagement, traffic, and opportunities in fast-moving digital markets.
        </p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-start bg-[#fafafa] hover:bg-[#fdfdfd] transition-all duration-300 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md">
        <div className="bg-red-100 p-3 sm:p-4 rounded-full mb-4 mx-auto sm:mx-0">
          {/* Icon Placeholder */}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 text-center sm:text-left">
          Creative Burnout
        </h3>
        <p className="text-gray-700 leading-relaxed font-medium text-[14px] sm:text-[15px] text-center sm:text-left">
          Constant content demand leads to burnout and inconsistency. Without automation, even talented teams lose focus and creativity over time.
        </p>
      </div>

    </div>
  </div>
</>


  )
}

export default UseProblemsSection