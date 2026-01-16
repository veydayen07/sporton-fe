import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex ">
      <div className="relative self-center">
        <Image
          src="/images/basketball-hero.png"
          alt="basketball-hero"
          width={423}
          height={423}
          className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full ">
          <div className="text-primary italic mb-2.75 pl-2">
            Friday Sale, 50% hhhhhhh
          </div>
          <h1 className="uppercase font-extrabold italic text-[95px] leading-25.25 bg-linear-to-b from-black to-[#979797D1] text-transparent bg-clip-text">
            wear your <br /> top-quality <br /> sportswear
          </h1>
          <p className="w-1/2 mt-10 ">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-14"></div>
        </div>
        <Image
          src="/images/img-hero.png"
          width={700}
          height={950}
          alt="image sporton hero"
          className="absolute -right-40 -bottom-20"
        />
      </div>
    </section>
  );
};

export default Hero;
