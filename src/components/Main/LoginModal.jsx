import React from 'react'

const LoginModal = () => {
  return (
    <>
    <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
  <div className="bg-white w-[90%] max-w-md h-[500px] rounded-2xl overflow-hidden shadow-lg">
    <div className="popup-header w-full h-[20%] flex items-center justify-center">
        <img src="/logo.png" alt="" />
        <h1 className='font-bold text-2xl'>Build Box</h1>
    </div>
    <div className="login-input bg-[#1F1F1F] w-full rounded-t-4xl  h-[80%] text-center p-1">
        <h1 className='text-[#848484] text-3xl font-semibold  '>Login</h1>
            <div className="login">

            </div>
    </div>
  </div>
</div>

    </>
  )
}

export default LoginModal