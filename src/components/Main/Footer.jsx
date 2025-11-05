"use client"
import React from 'react'

const Footer = () => {
  return (
 <>
  <footer className="bg-[#0B1120] text-gray-300 py-16 px-6 sm:px-10 lg:px-20 transition-all duration-500">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      
      {/* About Section */}
      <div className="animate-fadeIn">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          We’re crafting the future of <span className="text-blue-400 font-medium">AI-powered content creation</span>.  
          Our intelligent tools automate your writing process — helping you create blogs, posts,  
          and campaigns that perform effortlessly.
        </p>
      </div>

      {/* Quick Links */}
      <div className="animate-fadeIn delay-100">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Quick Links</h2>
        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
          {["Home", "Features", "Pricing", "Contact"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-400 transition-all duration-300 cursor-pointer hover:translate-x-1"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Resources */}
      <div className="animate-fadeIn delay-200">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Resources</h2>
        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
          {["Blog", "Help Center", "API Docs", "FAQs"].map((item) => (
            <li
              key={item}
              className="hover:text-blue-400 transition-all duration-300 cursor-pointer hover:translate-x-1"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Newsletter / Social */}
      <div className="animate-fadeIn delay-300">
        <h2 className="text-white text-xl sm:text-2xl font-semibold mb-4">Stay Updated</h2>
        <p className="text-gray-400 text-sm sm:text-base mb-4">
          Subscribe to get updates on new AI tools and content features.
        </p>
        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2.5 bg-transparent text-sm sm:text-base outline-none placeholder-gray-500"
          />
          <button className="bg-blue-600 px-4 py-2 text-white text-sm sm:text-base font-medium hover:bg-blue-700 transition-all duration-300">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6">
          {[
            { icon: "facebook-f", link: "#" },
            { icon: "twitter", link: "#" },
            { icon: "linkedin-in", link: "#" },
            { icon: "instagram", link: "#" },
          ].map((social) => (
            <a
              key={social.icon}
              href={social.link}
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
            >
              <i className={`fab fa-${social.icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom line */}
    <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
      © {new Date().getFullYear()} <span className="text-blue-400 font-medium">AI Workflows</span>. All rights reserved.
    </div>
  </footer>

  {/* Tailwind Animations */}
  <style jsx>{`
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease forwards;
    }
    .delay-100 {
      animation-delay: 0.2s;
    }
    .delay-200 {
      animation-delay: 0.4s;
    }
    .delay-300 {
      animation-delay: 0.6s;
    }
  `}</style>
</>

  )
}

export default Footer