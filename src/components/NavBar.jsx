import React from 'react'

const NavBar = () => {
  return (
    <>
    <div className="main-nav relative flex justify-between w-[80%] px-4 m-auto items-center">

      <div className="logo">
                  <img src="/logo.png" alt="Logo" className=" w-auto" />

      </div>
        <div className="nav-data hidden w-[600px] text-white md:flex bg-black h-12 px-10 rounded-b-full justify-center items-center">
          <ul className="flex space-x-8 text-sm font-medium">
            <li><a href="#" className="hover:text-gray-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Tools</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">About</a></li>
          </ul>
        </div>
      <div className="nav-login">
       <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow">
  Login
</button>

      </div>
    </div>
    </>
  )
}

export default NavBar