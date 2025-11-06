"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0B1120] text-gray-400 py-14 px-5 sm:px-10 lg:px-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-semibold tracking-wide">
              AI Workflows
            </h2>
            <p className="text-sm leading-relaxed">
              Empowering creators with intelligent, automated{" "}
              <span className="text-blue-400">AI content solutions</span>.  
              Build faster. Write smarter. Create better.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              {["Home", "Features", "Pricing", "Contact"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-2 text-sm">
              {["Blog", "Help Center", "API Docs", "FAQs"].map((item) => (
                <li
                  key={item}
                  className="hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Newsletter */}
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Get in Touch</h2>
            <p className="text-sm leading-relaxed mb-4">
              Have questions or partnership ideas?  
              Drop an email at{" "}
              <a
                href="mailto:sudaisinbox.com"
                className="text-blue-400 hover:text-blue-500 underline transition-all duration-300"
              >
                sudaisinbox.com
              </a>
            </p>

            <div className="flex items-center bg-[#111a2d] rounded-lg overflow-hidden border border-gray-700">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2.5 bg-transparent text-sm outline-none placeholder-gray-500"
              />
              <button className="bg-blue-600 px-4 py-2 text-white text-sm font-medium hover:bg-blue-700 transition-all duration-300">
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
                  className="p-2 bg-[#111a2d] rounded-full hover:bg-blue-600 transition-all duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs sm:text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-blue-400 font-medium">AI Workflows</span>.  
          All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
