import React from "react";

export const Card = ({ title, img, description }) => {
  return (
    <div className="bg-white w-full md:w-[350px] flex flex-col gap-5 items-center p-8 rounded-lg border border-gray-300 shadow-md">
      <img src={`${img}`} />
      <h2 className="text-center text-2xl font-medium font-heading">{title}</h2>
      <p className="text-lg  leading-9 text-coolGray-500 text-center">
        {description}
      </p>
    </div>
  );
};
