import React from "react";

export const Card = ({ title, img, description }) => {
  return (
    <div
      style={{ borderRadius: "10px" }}
      className="bg-white w-full md:w-[350px] flex flex-col gap-5 items-center p-10  border border-gray-200 shadow-sm"
    >
      <img loading="lazy" alt="" src={`${img}`} />
      <h2 className="text-center text-2xl font-medium font-heading">{title}</h2>
      <p className="text-lg  leading-9 text-coolGray-500 text-center">
        {description}
      </p>
    </div>
  );
};
