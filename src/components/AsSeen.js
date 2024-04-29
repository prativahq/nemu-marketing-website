import React from "react";

export const AsSeen = ({ image }) => {
  return (
    <section
      className="relative h-[1040px] pt-12   sm:h-auto sm:py-72 lg:py-28 xl:pb-36 xl:pt-24 bg-[#075362]"
      // style={{
      //   background: "var(--primary-primary-500, #075362)",
      //   backgroundPosition: "center",
      // }}
    >
      <div className="absolute z-999 md:py-12 left-0 right-0 -top-44 sm:top-0 container mx-auto">
        <div className="sm:hidden md:w-1/2 mb-12 ">
          <div className=" mx-auto md:mr-0 max-w-max">
            <img
              loading="lazy"
              className=" max-w-[300px] sm:max-w-auto z-99 rounded-7xl"
              src={`${image}`}
              alt=""
            />
          </div>
        </div>
        <div className="mb-8 text-center">
          <span className="tracking-widest inline-block py-px px-2 mb-2 text-sm leading-5 font-medium uppercase rounded-9xl text-[#B2CACE]">
            NEMU
          </span>
          <h2 className="mb-5  text-center  text-3xl md:text-4.5xl text-white     font-medium font-heading tracking-tight">
            As seen on
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <a
              target="_blank"
              href="https://venturelab.upenn.edu/nemu-the-weight-of-memories-and-their-impact-on-inheritance"
              className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md"
            >
              <img
                loading="lazy"
                className="mx-auto"
                src="images/venture-lab.png"
                alt=""
              />
            </a>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <a
              target="_blank"
              href="https://fbsmagazine.com/"
              className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md"
            >
              <img
                loading="lazy"
                className="mx-auto"
                src="images/funeral.png"
                alt=" "
              />
            </a>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <a
              target="_blank"
              href="https://www.forbes.com/sites/mattsymonds/2024/03/12/women-using-business-school-to-unleash-their-entrepreneurial-superpower/?sh=5705e03e6e2d"
              className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md"
            >
              <img
                loading="lazy"
                className="mx-auto w-1/2 sm:w-3/4"
                src="images/forbes-logo.png"
                alt=" "
              />
            </a>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <a
              target="_blank"
              href="https://magazine.wharton.upenn.edu/issues/spring-summer-2023/nemu/"
              className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md"
            >
              <img
                loading="lazy"
                className="mx-auto"
                src="images/wharton.png"
                alt=""
              />
            </a>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
            <a
              target="_blank"
              href="https://open.spotify.com/show/5N5LUvQ5HBXfxfr6iCjXqh"
              className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md"
            >
              <img
                loading="lazy"
                className="mx-auto"
                src="images/nokbox.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
