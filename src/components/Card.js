import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ title, img, description }) => {
  return (
    <div
      style={{ borderRadius: "10px" }}
      className="bg-white w-full md:w-[350px] flex flex-col gap-5 items-center p-10  border border-gray-200 shadow-sm"
    >
      <img loading="lazy" alt="" src={`${img}`} />
      <h2 className="text-center text-2xl font-medium font-heading">{title}</h2>
      <p className="text-lg grow leading-9 text-coolGray-500 text-center">
        {description}
      </p>
      {/* <Link
        className=" py-5 sm:py-3 px-6 w-full  text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-[10px] shadow-sm"
        to={"/how-it-works"}
      >
        Learn More
      </Link> */}
    </div>
  );
};
