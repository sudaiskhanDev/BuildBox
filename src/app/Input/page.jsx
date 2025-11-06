import React from 'react'

const page = () => {
  return (
    <>
    <div className="main-input flex">
        <div className="side-bar bg-amber-400 h-screen w-[15%]">
            <h1>Build Box</h1>
        </div>
        <div className="main-input bg-pink-500 w-full h-screen flex justify-center">
           <div className="main-input-output bg-purple-400 h-[80%] w-[80%] m-auto flex flex-col justify-between p-5">
             <div className="output bg-red-300 h-[90%] w-[100%] p-2">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro dicta temporibus culpa id error consectetur saepe natus soluta quaerat. Facere accusantium, officia iure nemo repellendus blanditiis deserunt ut ea nostrum.</p>
            </div>
            <div className="input bg-green-500 h-[10%] flex justify-between w-full p-2 px-2 ">

                <button
  title="Add New"
  className="group cursor-pointer outline-none hover:rotate-90 duration-300 "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50px"
    height="50px"
    viewBox="0 0 24 24"
    className="stroke-zinc-400 fill-none h-[40px] w-[40px] group-hover:fill-black group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
  >
    <path
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
      stroke-width="1.5"
    ></path>
    <path d="M8 12H16" stroke-width="1.5"></path>
    <path d="M12 16V8" stroke-width="1.5"></path>
  </svg>
                </button>

                <input type="text" className='bg-white w-[80%] rounded-2xl p-2 outline-none'/>
                <button 
                className=''>Submit</button>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default page