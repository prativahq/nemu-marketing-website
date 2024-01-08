import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import { DownloadApp } from "../components/DownloadApp";
import { Check } from "lucide-react";
import { Card } from "../components/Card";
import ScrollToTop from "react-scroll-to-top";
import StickyScrollAnimation from "../components/StickyScrollAnimation";
// import "../components/StickyScrollAnimation.css";
import { useScrollPercentage } from "react-scroll-percentage";

const meta = {
  title: "Nemu's Expert Property Splitting Services",
  meta: [
    {
      name: "description",
      content:
        "From heirloom division to property sales, Nemu offers tailored solutions to meet your family's unique inheritance needs.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function HowItWorks() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cards = [
    {
      id: 1,
      img: "images/card-5.png",
      title: "Take a few pictures",
      description:
        "You can photograph things where they are now, squeeze a bunch of items into one frame, or do anything in between. We’ll take it from there.",
    },
    {
      id: 2,
      img: "images/card-6.png",
      title: "We’ll Appraise & Gather Family Input",
      description:
        "We pull price estimates or can connect you with one of our expert appraisers. Then, we’ll ask your family to privately rate the items they want most.",
    },
    {
      id: 3,
      img: "images/card-7.png",
      title: "You Approve & Divide (Drama Free)",
      description:
        "Our algorithm fairly decides who gets what, you approve the results. When you’re ready to distribute, everyone gets just want they wanted.",
    },
  ];

  const [ref1, percentage1] = useScrollPercentage();
  const [ref2, percentage2] = useScrollPercentage();
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section
          className="relative bg-white overflow-hidden"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="pt-10 pb-24">
            <div className="container mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="text-center md:text-left w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    HOW IT WORKS
                  </span>
                  <h1
                    style={{ lineHeight: "64px" }}
                    className="mb-6 mt-3 text-center md:text-left text-4xl md:text-5xl text-coolGray-900    font-medium font-heading tracking-normal"
                  >
                    Dividing Heirlooms Should Be a Joy,<br></br> Not a Job
                  </h1>
                  <p
                    style={{ lineHeight: "42px" }}
                    className=" mb-8 text-lg   text-coolGray-500 "
                  >
                    You focus on the memories, we'll take care of the rest. Our
                    goal is to make cataloging, managing, and dividing heirlooms
                    a positive experience for families to celebrate their
                    heritage and legacy, whether they are near or far.
                  </p>
                  <div className="flex flex-wrap md:gap-4 lg:gap-0">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        className="inline-block py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                      >
                        Free Sign Up
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0">
                      <a
                        className="inline-block py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="tel:623-432-1678"
                      >
                        Give us a call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    <img
                      loading="lazy"
                      className="relative rounded-7xl"
                      src="images/how-it-works-hero.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 md:pb-32 bg-coolGray-50"
          style={{
            backgroundColor: "#F7F5F2",
          }}
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                OVERLINE
              </span>
              <h2
                style={{ lineHeight: "52px" }}
                className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                As Easy as 1-2-3
              </h2>
            </div>
            <div className="flex flex-col gap-14 items-center -mx-4 px-8">
              <div className="w-full flex flex-wrap justify-center gap-5  xl:grid grid-cols-3 xl:justify-between">
                {cards.map((card) => {
                  return <Card key={card.id} {...card} />;
                })}
              </div>
              <div className="hidden md:block w-full md:w-auto py-1 md:py-0 md:mr-4">
                <a
                  className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                  href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                >
                  Sign up for free
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" py-24  gap-20 bg-emerald-500 "
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <StickyScrollAnimation />

          {/* <div className="snap-y snap-mandatory overflow-y-scroll h-[550px] md:h-[750px] xl:h-[600px] 2xl:h-[750px] w-screen px-5  mx-auto flex flex-col gap-20 lg:gap-32"> */}
          <div className="snap-always snap-center py-5 flex flex-col gap-10 items-center">
            <p className="text-lg lg:w-2/3 px-5 md:px-0 text-center leading-9 text-coolGray-300 ">
              Margaret and her father agreed it was time to start documenting
              the history tied to his belongings. At the same time, they wanted
              to keep things in there place. So, she photographed most items
              just where she found them.
            </p>
            <div className="text-center px-4 mb-8 lg:mb-0 overflow-hidden flex justify-center">
              <img
                loading="lazy"
                className=" w-2/3 lg:w-2/3 2xl:w-full ml-8"
                src="images/how-it-works-iphone.png"
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
            <p className="text-lg lg:w-1/3 px-5 md:px-0 text-center leading-9 text-coolGray-300 ">
              Margaret taps the 3 items her father wanted to catalog, and Nemu
              took care of the rest.
            </p>
            <div className="  px-4 mb-8 lg:mb-0">
              <img
                loading="lazy"
                className="w-full lg:w-2/3 2xl:w-full mx-auto"
                src="images/how-it-works-catalog.png"
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
            <p className="text-lg text-center px-5 md:px-0 leading-9 text-coolGray-300 ">
              Look at the treasures below to see what happened next!
            </p>
            <div className=" px-4 mb-8 lg:mb-0">
              <img
                loading="lazy"
                className="w-full lg:w-2/3 2xl:w-full mx-auto"
                src="images/how-it-works-appraise.png"
                alt=""
              />
            </div>
          </div>
          {/* </div> */}
        </section>
        <section
          className="py-20 bg-white"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "left top",
          // }}
        >
          <div className="container mx-auto">
            <div className="md:max-w-5xl mx-auto mb-16 text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                OVERLINE
              </span>
              <h2
                style={{ lineHeight: "52px" }}
                className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                We're here for you
              </h2>
              <p
                className="text-lg leading-9 text-coolGray-500 "
                // contentEditable="false"
              >
                Whether you’re here for a head-start or to get your head
                <br></br> above water, we’re here to help.
              </p>

              <p />
            </div>
            <div className="flex flex-wrap justify-center gap-10 -mx-4 px-5 ">
              <div className="flex flex-col gap-4 w-full md:w-[480px] border-2  border-coolGray-100 rounded-xl mb-8">
                <div className="rounded-t-xl block mb-6 overflow-hidden">
                  <img
                    loading="lazy"
                    className="w-full"
                    src="images/how-it-works-1.png"
                    alt=""
                  />
                </div>
                <div className="px-8 inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium font-heading">
                  Planning Ahead
                </div>
                <p className="px-8 flex-1 mb-4 text-lg leading-9 text-coolGray-500 ">
                  Beginning this process is a gift to your loved ones and
                  yourself. Whether you’re moving, downsizing, or planning for
                  the future, starting with an organized list of what you have,
                  how much it’s worth, and what it means to your loved ones
                  makes a huge difference. It means you can think more clearly
                  and move more quickly. Let us help you get started!
                </p>
                <div className="px-8 pb-8">
                  <a
                    className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
              <div className="border-2 border-coolGray-100  rounded-xl flex flex-col gap-4 w-full md:w-[480px]  mb-8">
                <div className="block mb-6 overflow-hidden rounded-t-xl">
                  <img
                    loading="lazy"
                    className="w-full"
                    src="images/how-it-works-2.png"
                    alt=""
                  />
                </div>
                <div className="px-8 inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium font-heading">
                  I Need Help Now!
                </div>
                <p className="px-8 flex-1 mb-4 text-lg leading-9 text-coolGray-500 ">
                  Managing an estate is a big responsibility, but you don’t need
                  to do it alone. We’ve been in your shoes and we’re here to
                  help. We’ll make sure everyone’s voice is fairly included,
                  which means you can mange items with confidence. No fighting,
                  no drama.
                </p>
                <div className="px-8 pb-8">
                  <a
                    className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                  >
                    Sign up for free
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="relative   lg:mb-96 pt-64 pb-64 lg:pb-96 bg-[#F7F5F2]"
        >
          <div className="lg:absolute left-0 right-0 -my-48 container mx-auto ">
            <div className="text-center ">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                PRICING
              </span>
              <h2
                style={{ lineHeight: "52px" }}
                className="mb-6 mt-3 text-center text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                Alright, Sounds Great!
                <div>What does all of this cost?</div>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 -mx-4 mt-16 px-4">
              {/* <div className="w-full   p-4"> */}
              <div className="flex flex-col pt-10 px-12 pb-12 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                <div className="">
                  <h3
                    style={{ fontSize: "1.8rem" }}
                    className="mb-6  font-heading  text-coolGray-800 font-medium"
                    // contentEditable="false"
                  >
                    Fair Start
                  </h3>
                  <div
                    style={{ fontSize: "2rem" }}
                    className="mb-6 text-emerald-500 font-medium text-xl"
                  >
                    $99
                    <span
                      className="text-[#A0A2A3]"
                      style={{ fontSize: "18px" }}
                    >
                      {" "}
                      / Lifetime
                    </span>
                  </div>
                </div>
                <div className="border-b border-coolGray-100" />
                <ul className="self-start text-lg  py-8">
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      Capture family legacy
                    </span>
                  </li>
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      Share family stories with loved ones
                    </span>
                  </li>
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      Start tackling the project now
                    </span>
                  </li>
                </ul>
                <div className="border-b flex-1 border-coolGray-100" />
                <div className=" mt-8">
                  <a
                    className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-xl shadow-sm"
                    href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                  >
                    Buy Plan
                  </a>
                </div>
              </div>
              {/* </div> */}
              <div
                className="bg-gradient-to-b from-[#C7A4EA] to-white rounded-2xl shadow-sm  h-fit relative"
                style={{ padding: "2px" }}
              >
                <div
                  style={{ fontSize: "12px" }}
                  className="rounded-full border-2 border-[#C7A4EA] p-2 px-3 absolute -top-5  left-auto right-5 bg-[#E5D5F6] text-[#6526A3] font-bold"
                >
                  MOST POPULAR
                </div>
                <div className="flex flex-col pt-10 px-12 pb-12 bg-white rounded-2xl    ">
                  <div className="">
                    <h3
                      style={{ fontSize: "1.8rem" }}
                      className="mb-6  font-heading  text-coolGray-800 font-medium"
                      // contentEditable="false"
                    >
                      Harmony
                    </h3>
                    <div
                      style={{ fontSize: "2rem" }}
                      className="mb-6 text-emerald-500 font-medium "
                    >
                      $499
                      <span
                        className="text-[#A0A2A3]"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        / Lifetime
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <p className="text-[#747878] mt-8 text-lg">
                    Everything in the Fair Start Plan plus:{" "}
                  </p>
                  <ul className="self-start text-lg  py-8">
                    <li className="flex items-center mb-6  ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Group support sessions{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6  ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">Equitably divide </span>
                    </li>
                    <li className="flex items-center mb-6  ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Access to pricing and selling services{" "}
                      </span>
                    </li>
                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className=" mt-8">
                    <a
                      className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-xl shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Buy Plan
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="w-full   p-4"> */}
              <div className="flex flex-col pt-10 px-12 pb-12 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                <div className="">
                  <h3
                    style={{ fontSize: "1.8rem" }}
                    className="mb-6  font-heading  text-coolGray-800 font-medium"
                    // contentEditable="false"
                  >
                    Legacy
                  </h3>
                  <div
                    style={{ fontSize: "2rem" }}
                    className="mb-6 text-emerald-500 font-medium text-xl"
                  >
                    $999
                    <span
                      className="text-[#A0A2A3]"
                      style={{ fontSize: "18px" }}
                    >
                      {" "}
                      / Lifetime
                    </span>
                  </div>
                </div>
                <div className="border-b border-coolGray-100" />
                <p className="text-[#747878] mt-8 text-lg">
                  Everything in the Harmony Plan plus:
                </p>
                <ul className="self-start  text-lg py-8">
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      Additional catalog storage{" "}
                    </span>
                  </li>
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">Unlimited division </span>
                  </li>
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      Discounted pricing and selling services{" "}
                    </span>
                  </li>
                  <li className="flex items-center mb-6 text-coolGray-500 ">
                    <Check color="green" className="mr-2 flex-shrink-0" />
                    <span className="text-[#747878]">
                      1-1 family support through process{" "}
                    </span>
                  </li>
                </ul>
                <div className="border-b flex-1 border-coolGray-100" />
                <div className=" mt-8">
                  <a
                    className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-xl shadow-sm"
                    href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                  >
                    Buy Plan
                  </a>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </section>
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
          }}
          smooth
        />
      </>
    </React.Fragment>
  );
}
