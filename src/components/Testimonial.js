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

export const Testimonial = () => {
  return (
    // <div className="w-[500px] h-[500px]">
    <CarouselProvider
      className=" "
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={8}
    >
      <Slider className=" h-[870px] md:h-[450px]">
        <Slide index={0} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Margaret1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                Nemu made my role as trustee manageable at a time when I was
                overwhelmed with all my responsibilities. The division of assets
                became something my family members looked forward to and
                everyone was pleased with the outcome. Thank you!
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Margaret</p>
                <p className=" text-coolGray-500">Executor </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={1} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Colette1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                When you put it in Nemu, then you know everyone has seen it. You
                know everyone has had the priviledge of having a choice and
                having a voice. And then the whole family is confident about
                what they should do with these things.
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Colette</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={2} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Sandy1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                It was user friendly and I would use this again in a heartbeat.
                It removed the tension and gave a very fair disbursement of
                items even though you didn’t always get what you had hoped for.
                It’s almost like the lottery which made it more fun .
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Sandy</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={3} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Ann1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                Nemu was so helpful to me. After living overseas for thirty
                years and moving back to the US, it kept me focused on what I
                wanted and what I wanted to share. It's a great record of where
                my treasured belongings are with relatives!
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Ann</p>
                <p className=" text-coolGray-500">Executor </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={4} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Colette1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                My sister got a painting I really wanted, and I remember
                thinking, 'Dang-it I really wanted that.' And then I realized
                how great it was that we didn't need to have the conversation
                about who would get it. We both got our say in Nemu, and I have
                complete happiness for her and gratitude that she has it. I
                don't feel bad.
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Colette</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={5} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Hal1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                It felt great to participate in a distribution, it created the
                feeling that every bid was possible. At the same time, any
                emotional attachment was focused on your own relationship with
                the item under consideration, rather than a sibling's supposed
                sense of longing. For me, that is Nemu’s greatest function.
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Hal</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={6} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Marge1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                Nemu takes care of so many things people really don't want to
                do. For those people who are really serious about their family
                relationships - this is exactly what they need.
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Marge</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={7} className="pb-0">
          <div className=" w-full xl:w-3/4 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
            <img
              // loading="lazy"
              alt=""
              className="w-[350px] md:w-[250px] lg:w-[350px]"
              src="images/Teresa1.png"
            />
            <div className="relative flex flex-col gap-10">
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full xl:w-3/4 leading-9 text-coolGray-500">
                I loved using Nemu as the distribution method for our family. By
                the time the announcement came with what items were ours, I had
                forgotten some of the items I had hoped to get and felt so
                pleased with the things we did receive. It felt like a very fair
                method of dividing things that had great emotional meaning to
                many of us. - Teresa
              </div>
              {/* <img
                className="absolute top-56 left-40"
                src="images/quote-2.png"
              /> */}
              <div className="flex flex-col gap-2">
                <p className="font-bold text-lg">Teresa</p>
                <p className=" text-coolGray-500">Beneficiary </p>
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
      <div className="flex gap-5 justify-center md:-ml-10">
        <ButtonBack className="bg-white p-3 rounded-md border-2">
          <ChevronLeft className="text-emerald-500" />
        </ButtonBack>
        <ButtonNext className="bg-white p-3 rounded-md border-2">
          <ChevronRight className="text-emerald-500" />
        </ButtonNext>
      </div>
    </CarouselProvider>
    // </div>
  );
};
