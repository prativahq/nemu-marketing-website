import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export const Testimonial = () => {
  return (
    <div className="flex flex-col gap-5">
      <Carousel dynamicHeight={true} showArrows={true} showIndicators={false}>
        <div className="flex items-center justify-center gap-10">
          <div className="relative h-full overflow-hidden max-w-max  rounded-md">
            <img src="images/home-testimonials.png" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="">
              Amet minim mollit non deserunt est sit aliqua dolor do amet sint
              officia consequat duis enim mollit exercitation.
            </div>
            <div className="flex flex-col gap-2">
              <p>Robert Lee</p>
              <p>Father of four kids </p>
            </div>
          </div>
        </div>
        <div>
          <div className="relative h-full overflow-hidden max-w-max mx-auto rounded-md">
            <img src="images/home-testimonials.png" />
          </div>
        </div>
        <div>
          <div className="relative h-full overflow-hidden max-w-max mx-auto rounded-md">
            <img src="images/home-testimonials.png" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
