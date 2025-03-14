import React from "react";
import PricingCard from "./ui/PricingCard";
import bigCloud from "@/app/assets/cloud-decoration-big.svg";
import Image from "next/image";

const ServiceSection = () => {
  const serviceList = [
    {
      title: "1 Page Landing Page",
      price: "$500",
      bullets: [
        "Custom design and development",
        "Mobile-friendly and responsive",
        "Simple functionality (e.g., contact form, CTA buttons)",
      ],
    },
    {
      title: "2-5 Page Website",
      price: "$650+",
      subtext: "$150 per page 3-5",
      bullets: [
        "Custom design and development",
        "Mobile-friendly and responsive",
        "Simple functionality (e.g., contact form, CTA buttons)",
        "Fast load times and SEO-friendly setup",
        "Full deployment and testing",
      ],
    },
    {
      title: "6+ Page Custom Website",
      price: "Custom Quote",
      bullets: [
        "Custom design and development",
        "Mobile-friendly and responsive",
        "Simple functionality (e.g., contact form, CTA buttons)",
        "Fast load times and SEO-friendly setup",
        "Full deployment and testing",
      ],
    },
  ];

  return (
    <div
      id="services"
      className="relative w-full h-full py-[64px] md:py-[120px] lg:py-[180px] px-4 md:px-8 lg:px-12 flex flex-col min-[900px]:flex items-start md:items-center md:justify-center overflow-x-clip"
    >
      <div className="w-full max-w-[1440px]  text-primary flex flex-col items-center gap-8">
        <div className="flex flex-col items-center sm:text-center w-full ">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 lg:mb-12">
            Services & Pricing
          </h2>
        </div>
        <div className="flex flex-wrap gap-4 md:gap-12 mt-4 w-full h-full items-center justify-center">
          {serviceList.map((service, index) => (
            <PricingCard key={index} serviceObject={service} />
          ))}
        </div>
      </div>
      <Image
        alt="big cloud decor"
        src={bigCloud}
        className="absolute -z-10 top-4 -right-[200px] md:top-16 md:-right-[100px] scale-75 md:scale-100"
      />
    </div>
  );
};

export default ServiceSection;
