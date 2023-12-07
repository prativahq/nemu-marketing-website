import React from "react";

export const AsSeen = () => {
  return (
    <section
      className="md:relative py-20 md:py-28 xl:pt-24 bg-white"
      style={{
        background: "var(--primary-primary-500, #075362)",
        backgroundPosition: "center",
      }}
    >
      <div className="md:absolute md:py-10 left-0 right-0 top-0 container px-4 mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block py-px px-2 mb-4 text-xs leading-5 font-medium uppercase rounded-9xl text-white">
            NEMU
          </span>
          <h3 className="mb-4 text-4xl md:text-5xl font-medium tracking-tighter text-white font-heading">
            As seen on
          </h3>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
              <img className="mx-auto" src="images/venture-lab.png" alt="" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
              <img className="mx-auto" src="images/funeral.png" alt=" " />
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
            <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
              <img className="mx-auto" src="images/wharton.png" alt="" />
            </div>
          </div>
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
            <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
              <img className="mx-auto" src="images/nokbox.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
