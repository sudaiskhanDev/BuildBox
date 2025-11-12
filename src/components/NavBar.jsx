"use client";
import React, { useState, useEffect, useRef } from "react";
import LoginModal from "./Main/LoginModal";
import RegisterModel from "./Main/RegisterModel";

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // ✅ Check user on load
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // ✅ Modals open/close
  const openLoginModel = () => setIsLoginOpen(true);
  const closeLoginModel = () => setIsLoginOpen(false);
  const openRegisterModel = () => setIsRegisterOpen(true);
  const closeRegisterModel = () => setIsRegisterOpen(false);

  // ✅ Auth success
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // ✅ Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  // ✅ Toggle Menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // ✅ Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleOutsideClick);
    else document.removeEventListener("mousedown", handleOutsideClick);

    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileMenuOpen]);

  return (
    <>
      <div className="main-nav relative flex justify-between items-center w-[90%] md:w-[80%]   m-auto">
        {/* Logo */}
        <div className="logo ">
          <img src="/logo.png" alt="Logo" className="w-auto h-10 md:h-12" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex bg-black w-[600px] h-12 ml-25 px-10 rounded-b-full justify-center items-center">
          <ul className="flex space-x-8 text-sm font-medium text-white">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Tools</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
          </ul>
        </div>

        {/* Desktop Login Section */}
        <div className="hidden md:flex justify-between items-center w-[250px] text-white">
          {!user ? (
            <>
              <button
                onClick={openLoginModel}
                className="py-2 px-8 bg-black rounded-full font-bold hover:scale-105 hover:bg-white hover:text-black transition-all"
              >
                Login
              </button>
              <button
                onClick={openRegisterModel}
                className="py-2 px-8 bg-black rounded-full font-bold hover:scale-105 hover:bg-white hover:text-black transition-all ml-3"
              >
                Sign up
              </button>
               <div className="profile bg-amber-400 text-black">
      <a href="UserProfile">Profile</a>
      </div>
            </>
          ) : (
            <div className="flex items-center gap-2 bg-gray-100 p-2 rounded-full text-black">
              <div className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">DP</div>
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="py-1 px-4 bg-red-600 text-white rounded-full text-sm hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          
          <button onClick={toggleMobileMenu} className="text-black text-3xl">
            {isMobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar with Animation */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-64 h-full bg-black rounded-l-4xl text-white shadow-2xl z-50 p-6 flex flex-col gap-6 transform transition-transform duration-500 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="flex flex-col gap-4 text-lg font-medium">
          <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">Tools</a></li>
          <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
        </ul>

        {!user ? (
          <div className="flex flex-col gap-4 mt-6">
            <button
              onClick={() => { openLoginModel(); toggleMobileMenu(); }}
              className="py-2 px-6 text-black text-base font-bold bg-white rounded-full hover:scale-105 hover:text-black hover:bg-white transition-all"
            >
              Login
            </button>
            <button
              onClick={() => { openRegisterModel(); toggleMobileMenu(); }}
              className="py-2 px-6 text-black text-base font-bold bg-white rounded-full hover:scale-105 hover:text-black hover:bg-white transition-all"
            >
              Sign up
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4 mt-6 items-start bg-gray-100 p-4 rounded-lg text-black">
            <div className="flex items-center gap-2">
              <div className="rounded-full w-8 h-8 bg-gray-400 flex justify-center items-center">DP</div>
              <span>{user.name}</span>
            </div>
            <button
              onClick={() => { handleLogout(); toggleMobileMenu(); }}
              className="py-2 px-6 bg-red-600 rounded-full text-sm hover:bg-red-700 text-white"
            >
              Logout
            </button>
          </div>
        )}
        
      </div>

      {/* 🔹 Modals */}
      {isLoginOpen && (
        <LoginModal
          isOpen={isLoginOpen}
          onClose={closeLoginModel}
          onLogin={handleAuthSuccess}
        />
      )}
      {isRegisterOpen && (
        <RegisterModel
          isOpen={isRegisterOpen}
          onClose={closeRegisterModel}
          onRegister={handleAuthSuccess}
        />
      )}
     
    </>
  );
};

export default NavBar;
