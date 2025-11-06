"use client";
import React from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"; // adjust path

const TeamsLogo = () => {
  const logos = [
    { src: "https://cdn.magicui.design/companies/GitHub.svg", alt: "GitHub" },
    { src: "https://cdn.magicui.design/companies/Google.svg", alt: "Google" },
    { src: "https://cdn.magicui.design/companies/Microsoft.svg", alt: "Microsoft" },
    { src: "https://cdn.magicui.design/companies/Amazon.svg", alt: "Amazon" },
    { src: "https://cdn.magicui.design/companies/Uber.svg", alt: "Uber" },
    { src: "https://cdn.magicui.design/companies/Netflix.svg", alt: "Netflix" },
  ];

  return (
    <>
      <section className="py-14 sm:py-20 px-3 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-[#ffffff] via-[#fafafa] to-[#f7f7f7]">
        {/* Heading */}
        <h1
          className="text-center font-semibold 
          text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 
          text-[#555] tracking-wide leading-snug 
          px-2 sm:px-4 md:px-6 
          max-w-[95%] mx-auto"
        >
          TRUSTED BY TEAMS FROM AROUND THE WORLD
        </h1>

        {/* Scrolling Logos */}
        <div className="mt-10 sm:mt-14">
          <ScrollVelocityContainer
            className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] m-auto"
          >
            {/* Forward Scroll */}
            {/* <ScrollVelocityRow baseVelocity={15} direction={1}>
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 
                    w-auto mx-6 sm:mx-8 md:mx-10 
                    opacity-80 hover:opacity-100 
                    brightness-0 hover:brightness-50 
                    transition-all duration-300"
                />
              ))}
            </ScrollVelocityRow> */}

            {/* Reverse Scroll */}
            <ScrollVelocityRow baseVelocity={10} direction={-1}>
              {logos.map((logo, i) => (
                <img
                  key={`rev-${i}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 
                    w-auto mx-6 sm:mx-8 md:mx-10 
                    opacity-80 hover:opacity-100 
                    brightness-0 hover:brightness-50 
                    transition-all duration-300"
                />
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>
      </section>
    </>
  );
};

export default TeamsLogo;
