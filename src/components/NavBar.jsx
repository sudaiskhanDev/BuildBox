"use client";
import React,{useState} from 'react'
import LoginModal from './Main/LoginModal';

const NavBar = () => {

    const [isLoginOpen, setIsLoginOpen] = useState(false);


    const openLoginModel = ()=> setIsLoginOpen(true)
    const closeLoginModel = ()=> setIsLoginOpen(false)



  return (
    <>
    <div className="main-nav relative flex justify-between w-[80%] px-4 m-auto items-center">

      <div className="logo">
                  <img src="/logo.png" alt="Logo" className=" w-auto" />

      </div>
        <div className="nav-data w-[600px] text-white md:flex bg-black h-12 px-10 rounded-b-full justify-center items-center">
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Tools</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
          </ul>
        </div>
      <div className="nav-login flex justify-between items-center w-[300px]">
<button
  onClick={openLoginModel}
  className="relative flex justify-center items-center py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-black rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
>
  Login
</button>
<button
  className="relative flex justify-center items-center py-2 px-8 text-white text-base font-bold nded-full overflow-hidden bg-black rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-black hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-white before:to-white before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
>
  Sign up
</button>

      
      </div>
      {/* // 🔹 Step 5: Modal render karna (conditionally) */}

      {
        isLoginOpen &&(
          <LoginModal 
          isOpen={isLoginOpen}
          onClose={closeLoginModel}
          onLogin={()=>{
            setIsLoginOpen(false);  // login hony ky baad model close ho jaye
          }}
          />
        )
      }
    </div>
    </>
  )
}

export default NavBar