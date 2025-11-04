import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';



const LoginModal = ({isOpen, onClose, onLogin}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message , setMessage] = useState("");
    const [ loader, setLoader] = useState(false);

    //Login Handler using Axios
    const handleLogin = async () =>{
      try {
        setLoader(true);
        setMessage('')

        const res = await axios.post("/api/auth?type=login",{
          email,
          password
        });

        //Success
        localStorage.setItem('token', res.data.token);
        setMessage("Login Successful")
        onLogin && onLogin(res.data.user);
        setLoader(false);
        onClose();


      } catch (error) {
        if(error.res){
          setMessage(error.res.data.message || "Login Failed");
          } 
          // else{
          //   setMesssage("Network Error, Please try again later");
          // }
        }
          finally{
            setLoader(false);
          }
      }
    
    

   // ✅ Background click se modal close
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
    if(!isOpen)
    return null;

  return (
   <>
  {/* Overlay background */}
  <div
    className="fixed inset-0 bg-[#242424dd] flex items-center justify-center z-50 px-3 sm:px-0"
    onClick={handleBackgroundClick}
  >
    {/* Modal Container */}
    <div
      className="bg-white w-[90%] sm:w-[75%] md:w-[60%] lg:w-[450px] 
        h-auto rounded-2xl overflow-hidden shadow-2xl border border-white"
      onClick={(e) => e.stopPropagation()} // prevent closing on inside click
    >
      {/* Header */}
      <div className="popup-header w-full h-[80px] sm:h-[100px] flex flex-col sm:flex-row items-center justify-center gap-2 p-4">
        <img src="/logo.png" alt="Logo" className="h-10 sm:h-12" />
        <h1 className="font-bold text-xl sm:text-2xl text-gray-900 text-center sm:text-left">
          Build Box
        </h1>
      </div>

      {/* Login Form Section */}
      <div className="login-input bg-[#1F1F1F] w-full text-center p-5 sm:p-8 rounded-t-2xl">
        <h1 className="text-[#848484] text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
          Login
        </h1>

        {/* Inputs */}
        <div className="login w-full flex flex-col justify-center items-center text-white space-y-3 sm:space-y-4">
          {/* Email */}
          <div className="w-full flex flex-col items-center">
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              placeholder="Enter Email"
              type="text"
              id="email"
              className="bg-white w-[85%] sm:w-[70%] px-3 sm:px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none text-sm sm:text-base"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="w-full flex flex-col items-center">
            <label
              htmlFor="password"
              className="block text-xs sm:text-sm font-medium mb-1"
            >
              Password
            </label>
            <input
              placeholder="Enter Password"
              type="password"
              id="password"
              className="bg-white w-[85%] sm:w-[70%] px-3 sm:px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Login Button */}
          <button
            className="w-[50%] sm:w-[40%] bg-[#0064E1] text-white py-2 rounded-md 
              hover:bg-[#00469b] transition text-sm sm:text-base font-medium flex justify-center items-center gap-2"
            onClick={handleLogin}
            disabled={loader}
          >
            {loader ? (
              <>
                <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>

          {/* Message */}
          {message && (
            <p className="text-xs sm:text-sm text-gray-300 mt-1">{message}</p>
          )}
        </div>

        {/* Footer (Google login) */}
        <div className="popup-footer w-full mt-6 sm:mt-8 flex flex-col items-center justify-center">
          <button
            className="flex items-center gap-3 bg-white border border-gray-300 px-4 py-2 sm:px-5 sm:py-2.5 
              rounded-lg shadow-sm hover:shadow-md transition duration-200"
          >
            <img src="/googlelogo.png" alt="Google" className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default LoginModal;
