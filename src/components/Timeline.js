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

export const Timeline = () => {
  const timelineData = [
    {
      img: "images/timeline-1.png",
      title: "1941",
      content:
        "Mary Ann and Harold married in 1941 and moved west to build their family in Nevada City, CA. Harold served as a district attorney while Mary Ann managed their growing household. With 8 kids in tow, they eventually found a house that they would call home for over 60 years.",
    },
    {
      img: "images/timeline-1.png",
      title: "1941",
      content:
        "Mary Ann and Harold married in 1941 and moved west to build their family in Nevada City, CA. Harold served as a district attorney while Mary Ann managed their growing household. With 8 kids in tow, they eventually found a house that they would call home for over 60 years.",
    },
    {
      img: "images/timeline-1.png",
      title: "1941",
      content:
        "Mary Ann and Harold married in 1941 and moved west to build their family in Nevada City, CA. Harold served as a district attorney while Mary Ann managed their growing household. With 8 kids in tow, they eventually found a house that they would call home for over 60 years.",
    },
    {
      img: "images/timeline-1.png",
      title: "1941",
      content:
        "Mary Ann and Harold married in 1941 and moved west to build their family in Nevada City, CA. Harold served as a district attorney while Mary Ann managed their growing household. With 8 kids in tow, they eventually found a house that they would call home for over 60 years.",
    },
  ];

  return (
    <CarouselProvider
      className=" "
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={4}
    >
      <Slider className=" h-[780px] md:h-[920px] lg:h-[600px]">
        <Slide index={0} className="pb-0">
          <div className="w-full  mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            <img src="images/about-us-1941.png" alt="" />
            <div className="relative flex flex-col gap-10">
              <h1 className=" text-5xl md:text-6xl text-coolGray-900 font-medium tracking-tighter font-heading">
                1941
              </h1>
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full  h-52 overflow-y-auto leading-9 text-coolGray-500">
                Mary Ann and Harold married in 1941 and moved west to build
                their family in Nevada City, CA. Harold served as a district
                attorney while Mary Ann managed their growing household. With 8
                kids in tow, they eventually found a house that they would call
                home for over 60 years.
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={0} className="pb-0">
          <div className="w-full  mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            <img src="images/about-us-2001.png" alt="" />
            <div className="relative flex flex-col gap-10">
              <h1 className=" text-5xl md:text-6xl text-coolGray-900 font-medium tracking-tighter font-heading">
                2001
              </h1>
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full  h-52 overflow-y-scroll leading-9 text-coolGray-500">
                As their children grew older, so did their family (19
                grandchildren to be exact!). But, their house remained the
                centerpiece for every family gathering. From graduations, to
                weddings, to birthdays, and everything in between, their house
                was a vehicle for their family bond. And, as the years passed
                on, it became filled with items that became intrinsically tied
                to their identity. While they weren't materialistic in nature,
                the special, sentimental items throughout the house became
                heirlooms that evoked memories from eras gone by. These
                irreplaceable items suddently held so much emotional value to
                each family member, but in different ways.
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={0} className="pb-0">
          <div className="w-full  mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            <img src="images/about-us-2021.png" alt="" />
            <div className="relative flex flex-col gap-10">
              <h1 className=" text-5xl md:text-6xl text-coolGray-900 font-medium tracking-tighter font-heading">
                2021
              </h1>
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full  h-52 overflow-y-auto leading-9 text-coolGray-500">
                As time went on, Harold and Mary Ann both passed from old age.
                But, their family and the memories they built together lived on.
                Sarah, a grandchild of Mary Ann and Harold's and founder of
                Nemu, could see that dividing heirlooms from the house was sure
                to be complicated. Her mother, Margaret, was responsible for
                distributing the estate and Sarah could see that her Mom was
                overwhelmed. There was no guidebook or direction for how to
                divide things equitably amongst her siblings and make sure if
                items needed to be sold, that they be sold for the best price
                possible. What was obvious was that it was going to be a highly
                time intensive, emotionally charged process. If done wrong, her
                siblings could erupt in a fight or their cherished items end up
                in landfills. If done correctly, the legacy her parents built
                could live on and any items they wanted to share could bring joy
                to more families for years to come. As a new Mom, Sarah had a
                heightened appreciation of preserving family legacy and
                protecting the planet. So, Sarah set off to build something that
                would help families manage and divide heirlooms correctly.
              </div>
            </div>
          </div>
        </Slide>
        <Slide index={0} className="pb-0">
          <div className="w-full  mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
            <img src="images/about-us-2023.png" alt="" />
            <div className="relative flex flex-col gap-10">
              <h1 className=" text-5xl md:text-6xl text-coolGray-900 font-medium tracking-tighter font-heading">
                2023
              </h1>
              {/* <img className="absolute -top-10" src="images/quote-1.png" /> */}
              <div className="text-lg w-full  h-52 overflow-y-auto leading-9 text-coolGray-500">
                Today, Nemu is a tool that helps any family - big or small,
                complicated or not, near or far - capture family legacy. When
                families are ready to split items, we have built a tool that
                takes emotional value scores from each beneficiary and equitably
                divides assets. No fighting, no travel, just a purely fair
                division of assets. And, for whatever is left, our team will
                help families find the right buyers for their pieces, maximizing
                their inheritance and also doing a little bit more for our
                planet by keeping items out of landfills.
              </div>
            </div>
          </div>
        </Slide>
      </Slider>
      <div className="flex gap-5 justify-center md:-ml-10">
        <ButtonBack className="bg-white p-3 rounded-md shadow-md">
          <ChevronLeft className="text-emerald-500" />
        </ButtonBack>
        <ButtonNext className="bg-white p-3 rounded-md shadow-md">
          <ChevronRight className="text-emerald-500" />
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};
