import React from 'react'

const page = () => {
  return ( 
    <>
    <div className='bg-[#000000] h-screen flex justify-center items-center'>
        <div className="main-input-output w-[90%] md:w-[80%] max-w-4xl h-[790px] mx-auto mt-12 mb-8 rounded-2xl shadow-lg overflow-hidden flex flex-col border bg-[#212121] border-gray-900">
        {/* Output Section */}
        <div className="output-section flex-grow p-6 overflow-y-auto">
            <p className="text-white leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt temporibus sed officiis tempora cumque aliquid sit, amet quisquam, dolor provident quas non vero repellat, corrupti voluptatem aut. Molestias, voluptas recusandae?
            </p>
        </div>

        {/* Input Section */}
        <div className="input-section w-full h-[150px]  flex justify-center items-center p-4">
            <div className="input-text-btn w-full sm:w-[80%] md:w-[60%] h-[60px]  rounded-full shadow-md flex items-center px-2 bg-gray-500 ">
                <div className="text-input flex-grow h-[40px] overflow-hidden">
                    <input 
                        type="text"
                        placeholder="Enter your topic here..."
                        className='w-full h-full px-4 outline-none border-none bg-transparent text-white placeholder-white' 
                    />
                </div>
                <div className="generate-btn ml-2">
                    <button className="flex items-center bg-blue-600 text-white text-base px-5 py-2 rounded-full border-none transition-all duration-200 ease-in-out hover:bg-blue-700 active:scale-95 shadow-lg">
                        Generate
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default page