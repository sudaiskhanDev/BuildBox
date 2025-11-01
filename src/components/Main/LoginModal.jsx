import React from 'react'

const LoginModal = () => {
  return (
    <>
    <div className="fixed inset-0 bg-[#242424dd] bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white border-1 border-white w-[70%] max-w-md h-[500px] rounded-2xl overflow-hidden shadow-lg">
    <div className="popup-header w-full h-[20%] flex items-center justify-center">
        <img src="/logo.png" alt="" />
        <h1 className='font-bold text-2xl'>Build Box</h1>
    </div>
    <div className="login-input bg-[#1F1F1F] w-full rounded-t-4xl  h-[80%] text-center p-1">
        <h1 className='text-[#848484] text-3xl font-semibold  '>Login</h1>


           <div className="login w-[90%] flex flex-col justify-center items-center max-w-sm shadow-lg mx-auto mt-10 text-white">

  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
  <input
    type="text"
    id="email"
    className="bg-white w-[70%]  px-4 py-2 rounded border text-black border-gray-300 focus:outline-none mb-4"
  />

  <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
  <input
    type="password"
    id="password"
    className="bg-white w-[70%] px-4 py-2 rounded border text-black border-gray-300 focus:outline-none  mb-6"
  />

  <button className="w-[40%] bg-[#0064E1] text-white py-2 rounded hover:bg-[#00469b] transition">
    Login
  </button>
</div>

    </div>
  </div>
</div>

    </>
  )
}

export default LoginModal