import React from "react";

const Button = ({ primary, secondary, action, title, widthFull }) => {
  const handleAction = () => {
    if (action) {
      return action;
    }
  };

  return (
    <button
      onClick={handleAction}
      className={`px-4 py-3 h-[48px] rounded-2xl text-sm md:text-[0.85rem] cursor-pointer
      ${widthFull ? "w-full" : "w-fit"} max-w-[250px] lg:max-w-[300px]
      ${
        primary
          ? "bg-primary hover:bg-primary-700 text-white font-semibold"
          : "bg-neutral-400"
      }
      `}
    >
      {title ? title : "Button"}
    </button>
  );
};

export default Button;
