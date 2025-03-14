import Image from "next/image";
import React from "react";
import cloudDecor from "@/app/assets/cloud-decorations-small.png";
import { BiCodeBlock } from "react-icons/bi";
import { BiCheckCircle } from "react-icons/bi";
import { BiPhoneCall } from "react-icons/bi";
import { BiPaint } from "react-icons/bi";
import WorksCard from "./ui/WorksCard";
import bigCloud from "@/app/assets/cloud-decoration-big.svg";

const HowItWorksSection = () => {
  const worksList = [
    {
      title: "Initial Call",
      bullets: [
        "15-30 minute call/zoom",
        "Determine the objective and overall project",
        "Estimate & baseline quote given here",
        "Set up next steps to proceed with the project",
      ],
      icon: <BiPhoneCall className="size-[40px] sm:size-[48px]" />,
    },
    {
      title: "Design Website",
      bullets: [
        "Gather info/assets for website design",
        "Develop prototype/rough draft of final website",
        "Discuss final details/revision before any coding",
        "Finalize all details to move on to development",
      ],
      icon: <BiPaint className="size-[40px] sm:size-[48px]" />,
    },
    {
      title: "Development",
      bullets: [
        "Take design & code it into a working website",
        "Ensure best practices, basic SEO, & accessibility",
        "Test & Revise before shipping to deployment",
        "Set up to deploy and host for public viewing",
      ],
      icon: <BiCodeBlock className="size-[40px] sm:size-[48px]" />,
    },
    {
      title: "Deploy Project",
      bullets: [
        "Set up hosting on server",
        "Purchase & setup domain",
        "Track & test user experience",
        "Enjoy website!",
      ],
      icon: <BiCheckCircle className="size-[40px] sm:size-[48px] " />,
    },
  ];

  return (
    <div
      id="howItWorks"
      className="relative w-full h-full py-[64px] md:py-[120px] lg:py-[180px] px-4 md:px-8 lg:px-12 flex flex-col min-[900px]:flex items-start md:items-center md:justify-center overflow-x-clip"
    >
      <div className="w-full max-w-[1440px]  text-primary flex flex-col-reverse items-center gap-8">
        <div className="flex flex-col tems-center text-center w-full ">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-12">
            How It Works
          </h2>
          <div className="flex flex-wrap gap-4 md:gap-12 mt-4 w-full items-center justify-center">
            {worksList.map((block, index) => (
              <WorksCard key={index} workObject={block} number={index + 1} />
            ))}
          </div>
        </div>
      </div>
      <Image
        alt="cloud decor big"
        src={bigCloud}
        className="absolute -z-10 top-4 -left-[200px] md:top-16 md:-left-[100px] scale-75 md:scale-100"
      />
    </div>
  );
};

export default HowItWorksSection;
