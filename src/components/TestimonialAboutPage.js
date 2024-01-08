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
      <div className="flex gap-5 justify-center md:justify-end md:mr-4">
        <ButtonBack className="bg-white p-3 rounded-md border-2">
          <ChevronLeft className="text-emerald-500" />
        </ButtonBack>
        <ButtonNext className="bg-white p-3 rounded-md border-2">
          <ChevronRight className="text-emerald-500" />
        </ButtonNext>
      </div>
      <Slider className=" h-[1010px] md:h-[600px] lg:h-[470px]">
        <Slide index={0} className=" pb-0">
          <div className="md:flex-row flex flex-col w-full gap-10 py-5">
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-[#E3E3E3] shadow-sm rounded-xl">
                <img
                  loading="lazy"
                  alt=""
                  src="images/Margaret.jpg"
                  className=" w-20 h-20 rounded-full"
                />
                <h3
                  style={{ lineHeight: "42px" }}
                  className="pb-10 lg:px-16 text-center mb-auto text-[#959595] text-lg"
                >
                  Every single one of my siblings felt like they got just want
                  they wanted - and that made me very happy.
                </h3>
                <div className="border-t border-#E3E3E3 w-full"></div>
                <div className="text-center">
                  <h4 className=" text-lg font-semibold mb-1">Margaret</h4>
                  <p className="text-lg text-[#959595]">
                    Executor & Beneficiary
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-[#E3E3E3] shadow-sm rounded-xl">
                <img
                  loading="lazy"
                  alt=""
                  src="images/Collete.jpg"
                  className=" w-20 h-20 rounded-full"
                />
                <h3
                  style={{ lineHeight: "42px" }}
                  className="pb-10 lg:px-16 text-center mb-auto text-[#959595] text-lg"
                >
                  We need to tell the world about this - this product will help
                  save families and relationships.
                </h3>
                <div className="border-t border-#E3E3E3 w-full"></div>
                <div className="text-center">
                  <h4 className=" text-lg font-semibold mb-1">Colette</h4>
                  <p className="text-lg text-[#959595]">Beneficiary</p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1} className="pb-0">
          <div className="md:flex-row flex flex-col w-full gap-10 py-5">
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-[#E3E3E3] shadow-sm rounded-xl">
                <img
                  loading="lazy"
                  alt=""
                  src="images/Eric.jpg"
                  className=" w-20 h-20 rounded-full"
                />
                <h3
                  style={{ lineHeight: "42px" }}
                  className="pb-10 lg:px-16 text-center mb-auto text-[#959595] text-lg"
                >
                  We appreciate your help. Your app has helped our family
                  immensely. Thank you!
                </h3>
                <div className="border-t border-#E3E3E3 w-full"></div>
                <div className="text-center">
                  <h4 className=" text-lg font-semibold mb-1">Eric</h4>
                  <p className="text-lg text-[#959595]">Executor</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2  px-4 ">
              <div className="flex flex-col items-center h-full p-8 gap-5 bg-white border border-[#E3E3E3] shadow-sm rounded-xl">
                <img
                  loading="lazy"
                  alt=""
                  src="images/Ann.jpg"
                  className=" w-20 h-20 rounded-full"
                />
                <h3
                  style={{ lineHeight: "42px" }}
                  className="pb-10 lg:px-16 text-center mb-auto text-[#959595] text-lg"
                >
                  I don't know how we would have done it without it. It was so
                  fortuitious that it came along.
                </h3>
                <div className="border-t border-#E3E3E3 w-full"></div>
                <div className="text-center">
                  <h4 className=" text-lg font-semibold mb-1">Ann</h4>
                  <p className="text-lg text-[#959595]">
                    Executor & Beneficiary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
    </CarouselProvider>
    // </div>
  );
};
