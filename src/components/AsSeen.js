import React from "react";

export const AsSeen = () => {
  return (
    <section
      className="md:relative py-8 lg:py-36 xl:pt-24 bg-white"
      style={{
        background: "var(--primary-primary-500, #075362)",
        backgroundPosition: "center",
      }}
    >
      <div className="lg:absolute md:py-12 left-0 right-0 top-0 container px-4 mx-auto">
        <div className="mb-8 text-center">
          <span className="inline-block py-px px-2 mb-2 text-xs leading-5 font-medium uppercase rounded-9xl text-white">
            NEMU
          </span>
          <h2 className="mb-5  text-center  text-3xl md:text-4.5xl text-white   leading-tight font-medium font-heading tracking-tight">
            As seen on
          </h2>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
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
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
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
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
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
          <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 md:mb-0">
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
