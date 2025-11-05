import React from 'react'

const TeamsLogo = () => {
  return (
 <>
  <div className="main-logos mt-10 px-4 w-full">
    {/* Heading */}
   <h1
  className="text-center font-semibold 
             text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
             text-[#7a7a7a] tracking-wide leading-snug 
             px-2 sm:px-4 md:px-6 
             max-w-[95%] mx-auto"
>
  TRUSTED BY TEAMS FROM AROUND THE WORLD
</h1>


    {/* Logos Grid */}
    <div
      className="logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
      gap-4 sm:gap-6 md:gap-8 items-center justify-items-center
      mt-8 w-full max-w-6xl mx-auto px-2 sm:px-6"
    >
      {[
        { src: "https://cdn.magicui.design/companies/GitHub.svg", alt: "GitHub" },
        { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google" },
        { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft" },
        { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: "Amazon" },
        { src: "https://cdn.magicui.design/companies/Uber.svg", alt: "Uber" },
      ].map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain
                     opacity-80 hover:opacity-100 transition-opacity duration-200 
                     brightness-0 "
        />
      ))}
    </div>
  </div>
</>


  )
}

export default TeamsLogo