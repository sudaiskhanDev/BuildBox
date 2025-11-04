import React, { useState } from 'react'
import axios from 'axios';
const RegisterModel = ( {isOpen, onClose,onRegister}) => {

  const [name ,setName]= useState("");
  const [email, setEmail] = useState("");
  const[ password ,setPassword ] = useState("");
  const [message , setMessage] = useState("");
  const [ loader, setLoader] = useState(false);

  if(!isOpen)
    return null;

   // ✅ Background click se modal close
    const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  
  //Register Handler using Axios
  const handleRegister = async()=>{
    if(!name || !email|| !password){
      setMessage("Please fill all the fields");
      return;
    }

    try {
      setLoader(true);
      setMessage('')

      const response = await axios.post(
        "/api/auth?type=register",
        {
          name,
          email,
          password
        },
        {
          headers:{
            "Content-Type":"application/json"
          },
        }
       );

       setMessage(response.data.message || "Register Successful")

       if(onRegister) onRegister(response.data.user);
       setTimeout(() => {
        onClose();
       }, 1500);

    } catch (error) {
      console.error(error);
      setMessage(error.response?.data?.message || "Registration failed!");
    } finally {
      setLoader(false);
    }

  }


  return (
     <>
  {/* Overlay Background */}
  <div
    className="fixed inset-0 bg-[#242424dd] flex items-center justify-center z-50 px-3 sm:px-0"
    onClick={handleBackgroundClick}
  >
    {/* Modal Container */}
    <div
      className="bg-white w-[90%] sm:w-[75%] md:w-[60%] lg:w-[450px] 
        h-auto rounded-2xl overflow-hidden shadow-2xl border border-white"
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicked inside
    >
      {/* Header */}
      <div className="popup-header w-full h-[80px] sm:h-[100px] flex flex-col sm:flex-row items-center justify-center gap-2 p-4">
        <img src="/logo.png" alt="Logo" className="h-10 sm:h-12" />
        <h1 className="font-bold text-xl sm:text-2xl text-gray-900 text-center sm:text-left">
          Build Box
        </h1>
      </div>

      {/* Signup Form Section */}
      <div className="login-input bg-[#1F1F1F] w-full text-center p-5 sm:p-8 rounded-t-2xl">
        <h1 className="text-[#848484] text-xl sm:text-2xl font-semibold mb-5 sm:mb-6">
          Sign Up
        </h1>

        {/* Input Fields */}
        <div className="login w-full flex flex-col justify-center items-center text-white space-y-3 sm:space-y-4">
          {/* Username */}
          <div className="w-full flex flex-col items-center">
            <label
              htmlFor="name"
              className="block text-xs sm:text-sm font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white w-[85%] sm:w-[70%] px-3 sm:px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none text-sm sm:text-base"
              placeholder="Enter Name"
            />
          </div>

          {/* Email */}
          <div className="w-full flex flex-col items-center">
            <label
              htmlFor="email"
              className="block text-xs sm:text-sm font-medium mb-1"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white w-[85%] sm:w-[70%] px-3 sm:px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none text-sm sm:text-base"
              placeholder="Enter Email"
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
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-white w-[85%] sm:w-[70%] px-3 sm:px-4 py-2 rounded-md border text-black border-gray-300 focus:outline-none text-sm sm:text-base"
              placeholder="Enter Password"
            />
          </div>

          {/* Register Button */}
          <button
            className="w-[50%] sm:w-[40%] bg-[#0064E1] text-white py-2 rounded-md 
              hover:bg-[#00469b] transition text-sm sm:text-base font-medium flex justify-center items-center gap-2"
            onClick={handleRegister}
            disabled={loader}
          >
            {loader ? (
              <>
                <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                Registering...
              </>
            ) : (
              "Register"
            )}
          </button>

          {message && (
            <p className="text-xs sm:text-sm text-gray-300 mt-1">{message}</p>
          )}
        </div>

        {/* Footer (Google Button) */}
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

  )
}

export default RegisterModel