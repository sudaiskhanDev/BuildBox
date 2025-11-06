import React from 'react'

const SolutionSection = () => {
  return (
 <>
  <section className="bg-gradient-to-b from-[#f8fafc] via-[#f9fafb] to-[#ffffff] py-20 px-6 sm:px-10 md:px-14 lg:px-20 font-[Inter]">
    <div className="max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
        Empower Your Business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">AI Workflows</span>
      </h2>
      <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
        Our intelligent AI platform combines automation, creativity, and performance — giving you 
        tailored content solutions for blogs, posts, and social campaigns.
      </p>
    </div>

    {/* Cards Section */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
      
      {/* Card 1 */}
      <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-[#1d4ed8] mb-3">
          Advanced AI Algorithms
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
          Our platform leverages state-of-the-art AI algorithms to deliver accurate, engaging, and SEO-optimized content within seconds.
        </p>
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          alt="AI Algorithms"
          className="rounded-xl border border-gray-100 w-full object-cover h-56 sm:h-60 md:h-64 group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Card 2 */}
      <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-[#1d4ed8] mb-3">
          Secure Data Handling
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
          Your privacy is our top priority. We ensure top-level encryption and security standards 
          to protect all your generated content and data.
        </p>
        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80"
          alt="Data Security"
          className="rounded-xl border border-gray-100 w-full object-cover h-56 sm:h-60 md:h-64 group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>

      {/* Card 3 */}
      <div className="group bg-white/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-[0_12px_40px_rgba(59,130,246,0.15)] transition-all duration-500 flex flex-col h-full hover:-translate-y-2">
        <h3 className="text-xl font-semibold text-[#1d4ed8] mb-3">
          Customizable Solutions
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-6 flex-grow">
          Whether it’s blog writing, social captions, or ad copies — customize every AI tool 
          to match your brand voice and business goals.
        </p>
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80"
          alt="Custom Solutions"
          className="rounded-xl border border-gray-100 w-full object-cover h-56 sm:h-60 md:h-64 group-hover:scale-[1.03] transition-transform duration-500"
        />
      </div>
    </div>
  </section>
</>



   
  )
}

export default SolutionSection