import React from 'react'

const UseProblemsSection = () => {
  return (
    <>
    <div className="bg-white py-20 px-6 text-center">
  {/* Problem Label */}
  <p className="text-red-500 uppercase tracking-widest text-sm font-semibold mb-2">
    Problem
  </p>

  {/* Main Heading */}
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-16">
    Creating high-quality content manually is exhausting.
  </h2>

  {/* Problem Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
    
    {/* Card 1 */}
    <div className="flex flex-col items-start">
      <div className="bg-red-100 p-3 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-red-500" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8V4m0 16v-4m8-4h4M4 12H0m17.657-5.657l2.828-2.828M3.515 20.485l2.828-2.828M20.485 20.485l-2.828-2.828M5.343 5.343L2.515 2.515" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Overload</h3>
      <p className="text-gray-600 leading-relaxed">
        Businesses and creators struggle to produce a constant flow of high-quality blogs, posts, and ideas — wasting hours on brainstorming and editing.
      </p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-start">
      <div className="bg-red-100 p-3 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-red-500" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 8v4l3 3m6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Slow Content Production</h3>
      <p className="text-gray-600 leading-relaxed">
        Traditional writing takes too long — from idea to final draft. This delay costs engagement, traffic, and opportunities in fast-moving digital markets.
      </p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-start">
      <div className="bg-red-100 p-3 rounded-full mb-4">
        <svg xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-red-500" fill="none"
          viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 11c0-1.104-.896-2-2-2s-2 .896-2 2 2 4 2 4 2-2.896 2-4z" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Creative Burnout</h3>
      <p className="text-gray-600 leading-relaxed">
        Constant content demand leads to burnout and inconsistency. Without automation, even talented teams lose focus and creativity over time.
      </p>
    </div>

  </div>
</div>

    </>
  )
}

export default UseProblemsSection