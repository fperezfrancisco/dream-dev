import React from "react";

const WorksCard = ({ workObject, number }) => {
  return (
    <div className="flex flex-col items-start gap-4 w-[250px] h-[350px] p-4 rounded-3xl bg-primary text-white cursor-pointer hover:scale-105 transition-all ease-out duration-300">
      {workObject.icon}
      <h3 className="text-xl sm:text-2xl font-medium my-2">
        {number}. {workObject.title}
      </h3>
      <ul className="text-left pl-6 list-disc flex flex-col gap-2 w-full text-[0.65rem] md:text-[0.75rem] ">
        {workObject.bullets &&
          workObject.bullets.map((li, index) => (
            <li key={li} className="">
              {li}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default WorksCard;
