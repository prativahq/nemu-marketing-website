import React from "react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";

export const ParallaxComponent = () => {
  const { ref } = useParallax({
    speed: 0,
    translateX: ["3000px", "-5000px"],
  });
  return (
    <div ref={ref} className=" w-[5500px] flex ">
      <Parallax
        // speed={100}
        speed={30}
        translateY={[0, -10]}
        className="container px-4 mx-auto"
      >
        <div className="xl:max-w-4xl mb-12 mx-auto text-center">
          <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-coolGray-300">
            HOW IT WORKS
          </span>
          <h2 className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-100   leading-tight font-medium font-heading tracking-tight">
            Real Stuff, Real Stories
          </h2>
          <p className="text-lg leading-9 text-coolGray-300 ">
            Margaret and her father agreed it was time to start documenting the
            history tied to his belongings. At the same time, they wanted to
            keep things in there place. So, she photographed most items just
            where she found them.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <img
              loading="lazy"
              className="mx-auto"
              src="images/how-it-works-iphone.png"
              alt=""
            />
          </div>
        </div>
      </Parallax>
      <Parallax
        // speed={-50}
        translateY={[0, 40]}
        className="container px-4 mx-auto"
      >
        <div className="xl:max-w-4xl mb-12 mx-auto text-center">
          <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-coolGray-300">
            HOW IT WORKS
          </span>
          <h2 className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-100   leading-tight font-medium font-heading tracking-tight">
            Real Stuff, Real Stories
          </h2>
          <p className="text-lg leading-9 text-coolGray-300 ">
            Margaret taps the 3 items her father wanted to catalog, and Nemu
            took care of the rest.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <img
              loading="lazy"
              className="mx-auto"
              src="images/how-it-works-iphone.png"
              alt=""
            />
          </div>
        </div>
      </Parallax>
      <Parallax
        // speed={-50}
        translateY={[20, 60]}
        className="container px-4 mx-auto"
      >
        <div className="xl:max-w-4xl mb-12 mx-auto text-center">
          <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-coolGray-300">
            HOW IT WORKS-3
          </span>
          <h2 className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-100   leading-tight font-medium font-heading tracking-tight">
            Real Stuff, Real Stories
          </h2>
          <p className="text-lg leading-9 text-coolGray-300 ">
            Margaret and her father agreed it was time to start documenting the
            history tied to his belongings. At the same time, they wanted to
            keep things in there place. So, she photographed most items just
            where she found them.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4 justify-center">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <img
              loading="lazy"
              className="mx-auto"
              src="images/how-it-works-iphone.png"
              alt=""
            />
          </div>
        </div>
      </Parallax>
    </div>
  );
};
