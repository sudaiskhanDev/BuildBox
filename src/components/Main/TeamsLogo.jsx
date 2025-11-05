import React from 'react'

const TeamsLogo = () => {
  return (
 <>
  <div className="main-logos mt-10 px-4  w-[50%] mx-auto">
    <h1 className="text-center font-semibold text-2xl sm:text-xl md:text-2xl lg:text-2xl text-[#7a7a7a] tracking-wide">
      TRUSTED BY TEAMS FROM AROUND THE WORLD
    </h1>

  <div
  className="logos grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
  gap-6 sm:gap-8 md:gap-10 items-center justify-items-center 
  mt-8 ml-18 m-auto w-full max-w-6xl mx-auto px-2"
>
  {[
    { src: "https://cdn.magicui.design/companies/GitHub.svg", alt: "GitHub" },
    { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google" },
    { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft" },
    { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: "Amazon" },
  ].map((logo, i) => (
    <img
      key={i}
      src={logo.src}
      alt={logo.alt}
      className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain 
                 opacity-80 hover:opacity-100 transition-opacity duration-200 
                 filter brightness-0"
    />
  ))}
</div>

  </div>
</>

  )
}

export default TeamsLogo