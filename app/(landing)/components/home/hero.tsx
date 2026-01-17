import Image from "next/image";
import React from "react";
import Button from "../ui/button";
import { FiFastForward } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero-section" className="container mx-auto h-screen flex">
      <div className="relative self-center">
        <Image
          src="/images/basketball-hero.png"
          alt="basketball-hero"
          width={423}
          height={423}
          className="grayscale absolute left-0 -top-20"
        />
        <div className="relative ml-40 w-full ">
          <div className="text-primary text-base italic mb-2.75 ml-2 px-3 py-1.75 bg-primary/11 w-fit rounded-[50px]">
            Friday Sale, 50%
          </div>
          <h1 className="uppercase font-extrabold italic text-[95px] leading-25.25 bg-linear-to-b from-black to-[#979797D1] text-transparent bg-clip-text">
            wear your <br /> top-quality <br /> sportswear
          </h1>
          <p className="w-1/2 mt-10 ">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>
          <div className="flex gap-5 mt-14">
            <Button className="gap-2">
              Explore More <FiFastForward />{" "}
            </Button>
            <Button variant="ghost" className="gap-4.25 ">
              Watch Video{" "}
              <Image
                src="/images/icon-play-video.svg"
                width={29}
                height={29}
                alt="icon play video"
              />
            </Button>
          </div>
        </div>
        <Image
          src="/images/img-hero.png"
          width={700}
          height={850}
          alt="image sporton hero"
          className="absolute -right-40 -bottom-20 "
        />
      </div>
      <Image
        src="/images/img-ornament-hero.svg"
        alt="ornament hero"
        width={500}
        height={500}
        className="absolute top-1/2 -translate-y-1/2 -right-60  "
      />
    </section>
  );
};

export default Hero;
