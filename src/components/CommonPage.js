import { Disclosure } from "@headlessui/react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { AsSeen } from "../components/AsSeen";
import { Link } from "react-router-dom";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { LandingCard } from "../components/LandingCard";
import { DownloadApp } from "../components/DownloadApp";
import { Newsletter } from "../components/Newsletter";

import ScrollToTop from "react-scroll-to-top";
import { HashLink } from "react-router-hash-link";
import { Welcome } from "../components/Welcome";
import { Download } from "../components/Download";
import { Toaster } from "react-hot-toast";
import StickyScrollAnimation from "../components/StickyScrollAnimation";
import { useScrollPercentage } from "react-scroll-percentage";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Check } from "lucide-react";
import PricingSection from "./PricingSection";

export default function CommonPageComponent({
  meta,
  section1,
  section2,
  section4,
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref1, percentage1] = useScrollPercentage();
  const [ref2, percentage2] = useScrollPercentage();

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Toaster />
        {/* {showDialog && <Welcome />} */}

        <Navbar />
        {/* section1 */}
        <section
          className="relative bg-white overflow-hidden"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="pt-10 pb-44 sm:pb-24">
            <div className="container mx-auto">
              <div className="flex flex-wrap xl:items-center ">
                <div className="w-full md:w-1/2 pr-1 mb-16 md:mb-0">
                  <div className="tracking-widest text-center md:text-left mb-4 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    {section1.subtitle}
                  </div>
                  <h1 className="mb-6 text-center md:text-left text-4xl md:text-5xl text-coolGray-900    font-medium font-heading tracking-normal">
                    {section1.title}
                  </h1>
                  <p
                    style={{ lineHeight: "42px" }}
                    className="text-center md:text-left mb-8 text-lg   text-coolGray-500 "
                  >
                    {section1.description}
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-5">
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className=" py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Free Sign Up
                    </a>

                    {window.location.pathname !== "/estate-management" && (
                      <div className="w-full md:w-auto py-1 md:py-0">
                        <a
                          className="flex justify-center items-center gap-2 py-5 sm:py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                          href="tel:623-432-1678"
                        >
                          <img alt="Phone" src="images/phone-icon.svg" />
                          Give us a call
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden sm:block md:w-1/2 ">
                  <div className=" mx-auto md:mr-0 max-w-max">
                    <img
                      // loading="lazy"
                      className=" right-0 z-99 rounded-7xl"
                      src={section1.image}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <AsSeen image={section1.image} /> */}
        {/* section 2 */}
        <section
          className={`relative ${
            window.location.pathname === "/estate-management" && "h-[1260px]"
          }  ${window.location.pathname === "/downsizing" && "h-[1300px]"} ${
            window.location.pathname === "/divorce" && "h-[1440px]"
          }  sm:mb-0 sm:h-auto pt-32 pb-16 lg:pt-32 lg:pb-32  `}
          style={{
            // height: `${section2.height}px`,
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          {/* <div className="relative"> */}
          <div className="absolute z-999 left-0 right-0 -top-44 sm:top-0 sm:relative container mx-auto">
            <div className="sm:hidden md:w-1/2 mb-12 ">
              <div className=" mx-auto md:mr-0 max-w-max">
                <img
                  loading="lazy"
                  className=" max-w-[300px] sm:max-w-auto z-99 rounded-7xl"
                  src={`${section1.image}`}
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-wrap-reverse lg:items-center ">
              <div className="w-full md:w-1/2  mt-16 md:mb-0 ">
                <div className="relative mx-auto md:ml-0 max-w-max hidden sm:block ">
                  <img
                    className="max-w-[300px] sm:max-w-full"
                    loading="lazy"
                    src={section2.image}
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 ">
                <div className="tracking-widest text-center md:text-left mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                  {section2.subtitle}
                </div>
                <h2 className="mb-6 text-center md:text-left text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
                  {section2.title}{" "}
                </h2>
                <p className="mb-6 text-lg leading-9 text-center md:text-left text-coolGray-500 ">
                  {section2.description}
                </p>
                <div className="w-full text-center md:text-left md:w-auto py-1 md:py-0">
                  <a
                    className="inline-block py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-transparent hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    href={section2.button.link}
                  >
                    {section2.button.text}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* section 3 */}
        <section className="relative pt-48 pb-24 sm:py-24  gap-20 bg-emerald-500 ">
          <div className="absolute z-999 md:py-12 left-0 right-0 -top-44 sm:top-0 container mx-auto">
            <div className="sm:hidden md:w-1/2 mb-12 ">
              <div className=" mx-auto md:mr-0 max-w-max">
                <img
                  loading="lazy"
                  className=" max-w-[300px] sm:max-w-auto z-99 rounded-7xl"
                  src={`${section2.image}`}
                  alt=""
                />
              </div>
            </div>
          </div>

          <StickyScrollAnimation />
          <div className="snap-always snap-center py-5 flex flex-col gap-10 items-center">
            <p className="text-lg lg:w-2/3 px-8 md:px-0 text-center leading-9 text-coolGray-300 ">
              {window.location.pathname === "/divorce"
                ? `As part of the divorce Alisha and her partner needed to document all of the belongings in their house to determine who was keeping what, and document the outcome for their lawyers. `
                : ` Margaret and her father agreed it was time to start documenting
              the history tied to his belongings. At the same time, they wanted
              to keep things in their place. So, she photographed most items
              just where she found them.`}
            </p>
            <div className="text-center px-8 mb-8 lg:mb-0 overflow-hidden flex justify-center">
              <img
                loading="lazy"
                className=" w-2/3 lg:w-2/3 2xl:w-full ml-8"
                src={`images/${
                  window.location.pathname === "/divorce"
                    ? "how-it-works-iphone"
                    : "iPhone-estate-downsizing"
                }.png`}
                alt=""
              />
            </div>
          </div>
          <div ref={ref1} className="relative md:h-64 h-44 text-center">
            <div className="md:h-52 h-32 bg-[#397581] w-[3px] mx-auto"></div>
            <div
              style={{ height: `${percentage1.toPrecision(2) * 100}%` }}
              className={`absolute left-0 right-0 top-0 w-[3px] bg-[#8DB0B7]  mx-auto`}
            ></div>
          </div>
          <div className="snap-always snap-center pb-10 flex flex-col gap-10 items-center">
            <p className="text-lg lg:w-1/3 px-8 md:px-0 text-center leading-9 text-coolGray-300 ">
              {window.location.pathname === "/divorce"
                ? `Alisha then uploaded the pictures to Nemu which helped her organize next steps for each item.`
                : `Margaret uploads photos to her father’s Nemu catalog, and Nemu
              took care of the rest`}
            </p>
            <div className=" px-8  mb-8 lg:mb-0">
              <img
                loading="lazy"
                className="w-full lg:w-2/3 2xl:w-full mx-auto"
                src={`images/${
                  window.location.pathname === "/divorce"
                    ? "how-it-works-catalog.png"
                    : "parallax-2.webp"
                }`}
                alt=""
              />
            </div>
          </div>
          <div ref={ref2} className="relative md:h-64 h-44 text-center">
            <div className="md:h-52 h-32 bg-[#397581] w-[3px] mx-auto"></div>
            <div
              style={{ height: `${percentage2.toPrecision(2) * 100}%` }}
              className={`absolute left-0 right-0 top-0  w-[3px] bg-[#8DB0B7]  mx-auto`}
            ></div>
          </div>
          <div className="snap-always snap-center  flex flex-col gap-10 items-center">
            <p className="text-lg text-center px-8 md:px-0 leading-9 text-coolGray-300 ">
              Look at the treasures below to see what happened next!
            </p>
            <div className="px-8  mb-8 lg:mb-0">
              <img
                loading="lazy"
                className="w-full lg:w-2/3 2xl:w-full mx-auto"
                src={`images/${
                  window.location.pathname === "/divorce"
                    ? "how-it-works-appraise"
                    : "parallax-3"
                }.png`}
                alt=""
              />
            </div>
          </div>
        </section>
        {/* section 4*/}
        <section
          className="pt-12 pb-16 xl:pt-24 xl:pb-28 bg-white"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap ">
              <div className="w-full  mb-10">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <span className="tracking-widest text-center md:text-left mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                      {section4.subtitle}
                    </span>
                    <h2 className="mb-6 mt-3 text-center md:text-left text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
                      {section4.title}
                    </h2>
                    <p className="text-lg  leading-9 text-coolGray-500 ">
                      {section4.description}
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="flex gap-4 flex-wrap justify-center items-center -mb-2">
                      <a
                        href="https://app.mynemu.com/sign-up"
                        className=" py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      >
                        Free Sign Up
                      </a>

                      {/* <Link
                        className="inline-block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        to={"/how-it-works"}
                      >
                        Learn More
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 w-full gap-10  mt-5 mb-5 lg:mb-0">
                {section4.cards.map((card) => {
                  return <LandingCard key={card.id} {...card} />;
                })}
              </div>
            </div>
          </div>
        </section>
        <PricingSection />
        <section className="relative pt-48 pb-96 mb-96 md:mb-0">
          <DownloadApp />
        </section>
        {/* <DownloadApp /> */}
        <Newsletter />
        <Footer />
        <ScrollToTop
          color="white"
          style={{
            backgroundColor: "#075362",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            fontWeight: "bold",
            zIndex: "1000",
          }}
          smooth
        />
      </>
    </React.Fragment>
  );
}
