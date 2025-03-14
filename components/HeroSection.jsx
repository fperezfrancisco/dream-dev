import React from "react";
import Button from "./ui/Button";
import Image from "next/image";
import cloud from "@/app/assets/cloud-illustration.png";
import heart from "@/app/assets/heart-illustration.png";
import trending from "@/app/assets/trending-illustration.png";

const HeroSection = () => {
  return (
    <div
      id="heroSection"
      className="relative w-full h-full min-h-[675px] sm:min-h-[600px] lg:min-h-[850px] py-10 sm:py-12 md:py-[64px] lg:py-[120px] px-4 md:px-8 lg:px-12 flex flex-col items-start sm:items-center justify-center"
    >
      {/** <div className="absolute left-0 right-0 mx-auto h-full w-1 bg-black"></div>*/}

      <div className="relative w-full sm:max-w-[600px] items-start text-left md:items-center md:text-center lg:max-w-[1200px] md:mt-6 flex flex-col  text-white">
        <h1 className="text-5xl lg:text-[64px] xlTightLetters font-bold">
          Build a Powerful Online Presence
        </h1>
        <p className="text-md md:text-xl lg:text-2xl mt-4 w-full max-w-[80%] md:max-w-[800px] mb-12">
          Crafting fast, modern, and conversion-driven websites for small
          businesses and entrepreneurs.
        </p>
        <Button widthFull={true} primary={true} title={"GET A QUOTE"} />
        <div className="scale-75 sm:scale-100 absolute -left-20 mx-0 -top-[108px] sm:-left-6 sm:-top-[132px] md:left-0 md:right-0 md:mx-auto md:-top-[160px] lg:-top-[240px] flex items-start w-fill sm:w-fit md:items-center sm:gap-0 md:gap-2">
          <Image
            src={heart}
            className="size-[120px] md:size-[160px] lg:size-[200px] scale-85 translate-y-8 translate-x-8"
            alt="cloud icon"
          />
          <Image
            src={cloud}
            className="size-[120px] md:size-[160px] lg:size-[240px]"
            alt="cloud icon"
          />
          <Image
            src={trending}
            className="size-[120px] md:size-[160px] lg:size-[200px] translate-y-6 -translate-x-6"
            alt="cloud icon"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
