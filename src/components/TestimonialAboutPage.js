import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  ArrowBigLeft,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const TestimonialAboutPage = () => {
  return (
    // <div className="w-[500px] h-[500px]">
    <CarouselProvider
      className=" "
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={2}
    >
      <div className="flex gap-5 justify-center md:justify-end">
        <ButtonBack className="bg-white p-3 rounded-md shadow-md">
          <ChevronLeft className="text-emerald-500" />
        </ButtonBack>
        <ButtonNext className="bg-white p-3 rounded-md shadow-md">
          <ChevronRight className="text-emerald-500" />
        </ButtonNext>
      </div>
      <Slider className=" h-[890px] md:h-[600px] lg:h-[450px]">
        <Slide index={0} className=" pb-0">
          <div className="md:flex-row flex flex-col w-full gap-10 py-5">
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-coolGray-100 shadow-md rounded-md">
                <img
                  src="images/Margaret.jpg"
                  className="object-contain w-20 h-20 rounded-full"
                />
                <h3 className="pb-10 lg:px-16 text-center mb-auto text-coolGray-600 text-lg">
                  Every single one of my siblings felt like they got just want
                  they wanted - and that made me very happy.
                </h3>
                <h4 className=" text-lg font-semibold">Margaret</h4>
                <p className="text-lg text-coolGray-400">
                  Executor & Beneficiary
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-coolGray-100 shadow-md rounded-md">
                <img
                  src="images/Collete.jpg"
                  className="object-contain w-20 h-20 rounded-full"
                />
                <h3 className="pb-10 lg:px-16 text-center mb-auto text-coolGray-600 text-lg">
                  We need to tell the world about this - this product will help
                  save families and relationships.
                </h3>
                <h4 className=" text-lg font-semibold">Colette</h4>
                <p className="text-lg text-coolGray-400">Beneficiary</p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1} className="pb-0">
          <div className="md:flex-row flex flex-col w-full gap-10 py-5">
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-coolGray-100 shadow-md rounded-md">
                <img
                  src="images/Eric.jpg"
                  className="object-contain w-20 h-20 rounded-full"
                />
                <h3 className="pb-10 lg:px-16 text-center mb-auto text-coolGray-600 text-lg">
                  We appreciate your help. Your app has helped our family
                  immensely. Thank you!
                </h3>
                <h4 className=" text-lg font-semibold">Eric</h4>
                <p className="text-lg text-coolGray-400">Executor</p>
              </div>
            </div>
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-coolGray-100 shadow-md rounded-md">
                <img
                  src="images/Ann.jpg"
                  className="object-contain w-20 h-20 rounded-full"
                />
                <h3 className="pb-10 lg:px-16 text-center mb-auto text-coolGray-600 text-lg">
                  I don't know how we would have done it without it. It was so
                  fortuitious that it came along.
                </h3>
                <h4 className=" text-lg font-semibold">Ann</h4>
                <p className="text-lg text-coolGray-400">
                  Executor & Beneficiary
                </p>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
    // </div>
  );
};
