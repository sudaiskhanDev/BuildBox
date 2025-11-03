import React from 'react'

const page = () => {
  return (
    <>
    <div className="main-input-output w-[90%] md:w-[80%] max-w-4xl h-[800px] mx-auto mt-12 mb-8 rounded-2xl shadow-lg overflow-hidden flex flex-col">
        <div className="output-section bg-green-800 flex-grow p-6 overflow-y-auto">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt temporibus sed officiis tempora cumque aliquid sit, amet quisquam, dolor provident quas non vero repellat, corrupti voluptatem aut. Molestias, voluptas recusandae?</p>
        </div>
        <div className="input-section bg-red-500 w-full h-[150px] border-gray-300 flex justify-center items-center">
            <div className="input-text-btn bg-amber-800 w-[60%] h-[100px] m-auto">
                <div className="text-input bg-purple-400 w-[80%] h-[40px] rounded-full overflow-hidden ">
                    <input type="text"
                    className='bg-white w-full h-full outline-none' />
                </div>
                <div className="generate-btn">

                </div>
            </div>


        </div>
    </div>
    </>
  )
}

export default page