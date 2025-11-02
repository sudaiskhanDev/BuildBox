"use client";
import React, { useState, useEffect } from "react";
import LoginModal from "./Main/LoginModal";
import RegisterModel from "./Main/RegisterModel";
// import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);

  // ✅ Step 1: On page load check if user data exists in localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // ✅ Step 2: Functions to open/close modals
  const openLoginModel = () => setIsLoginOpen(true);
  const closeLoginModel = () => setIsLoginOpen(false);
  const openRegisterModel = () => setIsRegisterOpen(true);
  const closeRegisterModel = () => setIsRegisterOpen(false);

  // ✅ Step 3: When login or register successful
  const handleAuthSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // save user
  };

  // ✅ Step 4: Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <>
      <div className="main-nav relative flex justify-between w-[80%] px-4 m-auto items-center">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="w-auto" />
        </div>

        <div className="nav-data w-[600px] text-white md:flex bg-black h-12 px-10 rounded-b-full justify-center items-center">
          <ul className="flex space-x-8 text-sm font-medium">
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                Tools
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400 transition">
                About
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ Step 5: Conditional render */}
        <div className="nav-login flex justify-between items-center w-[300px] text-white">
          {!user ? (
            <>
              <button
                onClick={openLoginModel}
                className="relative flex justify-center items-center py-2 px-8 text-white text-base font-bold bg-black rounded-full transition-all hover:scale-105 hover:text-black hover:bg-white"
              >
                Login
              </button>

              <button
                onClick={openRegisterModel}
                className="relative flex justify-center items-center py-2 px-8 text-white text-base font-bold bg-black rounded-full transition-all hover:scale-105 hover:text-black hover:bg-white"
              >
                Sign up
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2 rounded-full p-1 text-black">
              <div className="rounded-full w-5 text-black">DP</div>
              <span>{user.name}</span>
              <button
                onClick={handleLogout}
                className="py-1 px-4 bg-red-600 rounded-full text-sm hover:bg-red-700 text-white"
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
      </div>
    </>
  );
};

export default NavBar;
