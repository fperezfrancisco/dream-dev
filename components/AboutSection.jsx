import Image from "next/image";
import React from "react";
import aboutImg from "@/app/assets/about-illustration.png";
import cloudDecor from "@/app/assets/cloud-decorations-small.png";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative w-full py-12 md:py-[64px] lg:py-[120px] px-4 md:px-8 lg:px-12 flex flex-col min-[900px]:flex items-start md:items-center md:justify-center bg-primary overflow-x-clip"
    >
      <div className="w-full max-w-[1440px]  text-white flex flex-col-reverse items-center gap-8 min-[900px]:gap-2 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:items-center">
        <div className="flex max-w-[500px] w-full">
          <Image src={aboutImg} alt="Francisco Cartoon" />
        </div>
        <div className="flex flex-col items-start w-full max-w-[600px] min-[1200px]:max-w-[650px]">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-12">
            About Dream Dev Solutions
          </h2>
          <p className="w-full max-w-[600px] mb-10">
            Hi, I am Francisco, the founder of Dream Dev Solutions. Over the
            last 4 years, I have been perfecting my craft in front-end
            development and design, working with real-world clients to bring
            their websites to life. I specialize in creating modern, responsive,
            and conversion-driven websites that help businesses stand out
            online. From clean landing pages to multi-page platforms, I combine
            technical expertise with a keen eye for design to deliver fast,
            modern, and user-friendly experiences.
          </p>
          <ul className="flex flex-col w-fit gap-4 items-start pl-6 list-disc ">
            <li className="font-medium text-lg">Fast & Modern Web Design</li>
            <li className="font-medium text-lg">
              Web Development Production & Testing
            </li>
            <li className="font-medium text-lg">SEO Strategist</li>
            <li className="font-medium text-lg">Logo/Brand Design</li>
          </ul>
        </div>
      </div>

      <Image
        alt="cloud decor"
        src={cloudDecor}
        className="absolute -z-0 -top-8 min-[900px]:top-8 lg:top-12 left-[-100px] sm:left-[-50px] scale-75 sm:scale-85 lg:scale-100"
      />
      <Image
        alt="cloud decor"
        src={cloudDecor}
        className="absolute -z-0 bottom-8 min-[900px]:bottom-8 lg:bottom-12 right-[-100px] sm:right-[-50px] scale-75 sm:scale-85 lg:scale-100"
      />
    </div>
  );
};

export default AboutSection;
