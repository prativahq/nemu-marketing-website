import React from "react";

export const LandingCard = ({ title, description, icon, color }) => {
  return (
    <div
      className={`flex flex-col gap-4 rounded-lg border-t-8 ${color}  bg-white pt-8 p-10 shadow-lg w-full md:w-[560px]`}
    >
      <div className="flex justify-between items-center">
        <span className="text-2xl font-medium font-heading">{title}</span>
        <img src={`${icon}`} />
      </div>
      <p className="text-lg  leading-9 text-coolGray-500">{description}</p>
    </div>
  );
};
