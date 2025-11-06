import React from "react";

const Header = () => {
  return (
    <>
      <div className="main-header sm:mt-8 md:mt-10 lg:mt-12 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6 md:px-8">
        {/* Heading */}
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-3 sm:mb-4 md:mb-6 transition-all duration-700 ease-out hover:scale-105 hover:text-[#757575]">
          Automate your work flow with AI
        </h1>

        {/* Paragraph */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed">
          Your one-stop marketplace for all types of SaaS products — save time,
          find the right tool, and grow faster.
        </p>

        {/* Button Section */}
        <div className="relative mt-10 sm:mt-12 md:mt-16 lg:mt-20 inline-flex items-center justify-center gap-3 sm:gap-4 group">
          {/* Gradient Glow */}
          <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

          {/* Button */}
          <a
            role="button"
            className="group relative inline-flex items-center justify-center text-sm sm:text-base md:text-lg rounded-xl bg-gray-900 px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30"
            title="payment"
            href="Input"
          >
            Get Started For Free
            <svg
              aria-hidden="true"
              viewBox="0 0 10 10"
              height="10"
              width="10"
              fill="none"
              className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2"
            >
              <path
                d="M0 5h7"
                className="transition opacity-0 group-hover:opacity-100"
              />
              <path
                d="M1 1l4 4-4 4"
                className="transition group-hover:translate-x-[3px]"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
