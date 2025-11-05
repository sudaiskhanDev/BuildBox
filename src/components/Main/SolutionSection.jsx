import React from 'react'

const SolutionSection = () => {
  return (
 <>
  <section className="bg-[#f9fafb] py-16 sm:py-20 px-5 sm:px-8 md:px-12 lg:px-16">
    <div className="max-w-7xl mx-auto text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Empower Your Business with AI Workflows
      </h2>
      <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
        Our intelligent AI platform combines automation, creativity, and performance — 
        giving you tailored content solutions for blogs, posts, and social campaigns.
      </p>
    </div>

    {/* Cards Section */}
    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-7xl mx-auto">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-semibold text-[#1d4ed8] mb-3">
          Advanced AI Algorithms
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-5 flex-grow">
          Our platform leverages state-of-the-art AI algorithms to deliver accurate,
          engaging, and SEO-optimized content within seconds.
        </p>
        <img
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80"
          alt="AI Algorithms"
          className="rounded-xl border border-gray-100 w-full object-cover h-52 sm:h-56 md:h-60"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl font-semibold text-[#1d4ed8] mb-3">
          Secure Data Handling
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-5 flex-grow">
          Your privacy is our top priority. We ensure top-level encryption 
          and security standards to protect all your generated content and data.
        </p>
        <img
          src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80"
          alt="Data Security"
          className="rounded-xl border border-gray-100 w-full object-cover h-52 sm:h-56 md:h-60"
        />
      </div>

      

      {/* Card 4 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full sm:col-span-2 lg:col-span-1">
        <h3 className="text-lg sm:text-xl font-semibold text-[#1d4ed8] mb-3">
          Customizable Solutions
        </h3>
        <p className="text-gray-700 text-[15px] leading-relaxed mb-5 flex-grow">
          Whether it's blog writing, social captions, or ad copies — 
          customize every AI tool to match your business voice and goals.
        </p>
        <img
src="https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?auto=format&fit=crop&w=800&q=80"          alt="Custom Solutions"
          className="rounded-xl border border-gray-100 w-full object-cover h-52 sm:h-56 md:h-60"
        />
      </div>
    </div>
  </section>
</>


   
  )
}

export default SolutionSection