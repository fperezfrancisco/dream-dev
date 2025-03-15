import React from "react";

const PricingCard = ({ serviceObject }) => {
  return (
    <div
      className="w-[300px] h-[500px] rounded-3xl border-0 outline-4 sm:outline-0 sm:border-4 border-primary bg-white text-primary flex flex-col p-4 gap-4 items-center cursor-pointer hover:scale-110 transition-all ease-out duration-300 border-fix"
      style={{ WebkitAppearance: "none" }}
    >
      <h3 className="text-xl font-semibold">{serviceObject.title}</h3>
      <div className="flex flex-col items-center my-8">
        <p className="text-xs md:text-sm">Starting at:</p>
        <p className="text-4xl sm:text-5xl font-bold text-center leading-12">
          {serviceObject.price}
        </p>
        <p className="text-xs md:text-sm mt-2">{serviceObject.subtext}</p>
      </div>
      <ul className="text-left pl-6 list-disc flex flex-col gap-2 w-full text-[0.75rem] md:text-[0.85rem] ">
        {serviceObject &&
          serviceObject.bullets &&
          serviceObject.bullets.map((li, index) => (
            <li key={li} className="">
              {li}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PricingCard;
