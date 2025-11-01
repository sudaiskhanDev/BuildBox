import React from 'react';

const LoginModal = () => {
  return (
    <>
      {/* Overlay background to dim the screen */}
      <div className="fixed inset-0 bg-[#242424dd] bg-opacity-50 flex items-center justify-center z-50">
        
        {/* Modal container */}
        <div className="bg-white w-[70%] max-w-md h-[500px] rounded-2xl overflow-hidden shadow-lg border border-white">
          
          {/* Header section with logo and title */}
          <div className="popup-header w-full h-[20%] flex items-center justify-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <h1 className="font-bold text-2xl">Build Box</h1>
          </div>

          {/* Login form container */}
          <div className="login-input bg-[#1F1F1F] w-full h-[80%] text-center p-4 rounded-t-2xl">
            <h1 className="text-[#848484] text-3xl font-semibold mb-6">Login</h1>

            {/* Form fields */}
            <div className="login w-[90%] flex flex-col justify-center items-center max-w-sm mx-auto text-white">
              
              {/* Email input */}
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                id="email"
                className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-4"
              />

              {/* Password input */}
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-6"
              />

              {/* Login button */}
              <button className="w-[40%] bg-[#0064E1] text-white py-2 rounded hover:bg-[#00469b] transition">
                Login
              </button>
            </div>

            {/* Footer section with Google login */}
            <div className="popup-footer w-full mt-8 flex flex-col items-center justify-center">
              <button className="flex items-center gap-3 bg-white border border-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                <img src="/googlelogo.png" alt="Google" className="w-6 h-6" />
                <span className="text-sm font-medium text-gray-700">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
