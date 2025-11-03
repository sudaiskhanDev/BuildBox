import React from 'react'

const page = () => {
  return ( 
    <div className="main-input-output w-[90%] md:w-[80%] max-w-4xl h-[800px] mx-auto mt-12 mb-8 rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-300">
        {/* Output Section */}
        <div className="output-section flex-grow p-6 overflow-y-auto bg-gray-50">
            <p className="text-gray-800 leading-relaxed">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt temporibus sed officiis tempora cumque aliquid sit, amet quisquam, dolor provident quas non vero repellat, corrupti voluptatem aut. Molestias, voluptas recusandae?
            </p>
        </div>

        {/* Input Section */}
        <div className="input-section w-full h-[150px] bg-gray-100 border-t border-gray-300 flex justify-center items-center p-4">
            <div className="input-text-btn w-full sm:w-[80%] md:w-[60%] h-[60px] bg-white rounded-full shadow-md flex items-center px-2">
                <div className="text-input flex-grow h-[40px] overflow-hidden">
                    <input 
                        type="text"
                        placeholder="Enter your topic here..."
                        className='w-full h-full px-4 outline-none border-none bg-transparent text-gray-700 placeholder-gray-400' 
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
  )
}

export default page