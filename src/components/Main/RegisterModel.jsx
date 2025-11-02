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
      {/* Overlay background to dim the screen */}
      <div className="fixed inset-0 bg-[#242424dd] bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}>
        
        {/* Modal container */}
        <div className="bg-white w-[70%] max-w-md h-[550px] rounded-2xl overflow-hidden shadow-lg border border-white">
          
          {/* Header section with logo and title */}
          <div className="popup-header w-full h-[16%] flex items-center justify-center gap-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <h1 className="font-bold text-2xl">Build Box</h1>
          </div>

          {/* Login form container */}
          <div className="login-input bg-[#1F1F1F] w-full h-[84%] text-center p-4 rounded-t-2xl">
            <h1 className="text-[#848484] text-2xl font-semibold mb-6">Sign up</h1>

            {/* Form fields */}
            <div className="login w-[90%] flex flex-col justify-center items-center max-w-sm mx-auto text-white">
              
               {/* UserName input */}
              <label htmlFor="email" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="email"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-4"
              />

              {/* Email input */}
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-4"
              />

              {/* Password input */}
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-6"
              />

              {/* Login button */}
              <button className="w-[40%] bg-[#0064E1] text-white py-2 rounded hover:bg-[#00469b] transition"
              onClick={handleRegister}
              disabled={loader}
              >
                {loader? (
                  <>
                  <span className="loader border-2 border-white border-t-transparent rounded-full w-4 h-4 animate-spin"></span>
                  Registering...
                  </>
                ):(
                  "Register"
                
                )}
              </button>
              <p>{message}</p>
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
  )
}

export default RegisterModel