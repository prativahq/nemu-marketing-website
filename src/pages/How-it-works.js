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
          <div className="py-10">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="text-center md:text-left w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    HOW IT WORKS
                  </span>
                  <h1 className="mb-6 mt-3 text-center md:text-left text-4xl md:text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                    Dividing Heirlooms Should Be a Joy, Not a Job
                  </h1>
                  <p className=" mb-8 text-lg leading-9  text-coolGray-500 ">
                    You focus on the memories, we'll take care of the rest. Our
                    goal is to make cataloging, managing, and dividing heirlooms
                    a positive experience for families to celebrate their
                    heritage and legacy, whether they are near or far.
                  </p>
                  <div className="flex flex-wrap">
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
          <div className="container px-4 mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
              <span
                className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                OVERLINE
              </span>
              <h2
                className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight"
                // contentEditable="false"
              >
                As Easy as 1-2-3
              </h2>
            </div>
            <div className="flex flex-col gap-14 items-center -mx-4 px-8">
              <div className="w-full flex flex-wrap justify-center gap-10">
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

          <div className="snap-y snap-mandatory overflow-y-scroll h-[550px] md:h-[750px] xl:h-[600px] 2xl:h-[750px] w-screen px-5  mx-auto flex flex-col gap-20 lg:gap-32">
            <div className="snap-always snap-center  flex flex-col gap-10 items-center">
              <p className="text-lg lg:w-2/3 text-center leading-9 text-coolGray-300 ">
                Margaret and her father agreed it was time to start documenting
                the history tied to his belongings. At the same time, they
                wanted to keep things in there place. So, she photographed most
                items just where she found them.
              </p>
              <div className=" px-4 mb-8 lg:mb-0">
                <img
                  loading="lazy"
                  className="w-full lg:w-2/3 2xl:w-full mx-auto"
                  src="images/how-it-works-iphone.png"
                  alt=""
                />
              </div>
            </div>
            <div className="snap-always snap-center flex flex-col gap-10 items-center">
              <p className="text-lg lg:w-1/3 text-center leading-9 text-coolGray-300 ">
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
            <div className="snap-always snap-center flex flex-col gap-10 items-center">
              <p className="text-lg text-center leading-9 text-coolGray-300 ">
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
          </div>
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
          <div className="container px-4 mx-auto">
            <div className="md:max-w-5xl mx-auto mb-16 text-center">
              <span
                className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                OVERLINE
              </span>
              <h2
                className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight"
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
              <div className="flex flex-col gap-4 w-full md:w-[480px] border shadow-lg border-coolGray-100 rounded-md mb-8">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    loading="lazy"
                    className="w-full"
                    src="images/i-need-help-now.png"
                    alt=""
                  />
                </a>
                <a
                  className="px-8 inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium font-heading"
                  href="#"
                >
                  Planning Ahead
                </a>
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
              <div className="border border-coolGray-100 shadow-lg rounded-md flex flex-col gap-4 w-full md:w-[480px]  mb-8">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img
                    loading="lazy"
                    className="w-full"
                    src="images/planning-ahead.png"
                    alt=""
                  />
                </a>
                <a
                  className="px-8 inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium font-heading"
                  href="#"
                >
                  I Need Help Now!
                </a>
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
          className="relative   lg:mb-96 pt-64 pb-72 bg-[#F7F5F2]"
        >
          <div className="lg:absolute left-0 right-0 -my-48 container px-4 mx-auto">
            <div className="text-center">
              <span
                className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                PRICING
              </span>
              <h3
                className="mb-6 mt-3 text-center text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight"
                // contentEditable="false"
              >
                Alright, Sounds Great!
                <div>What does all of this cost?</div>
              </h3>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full  md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
                  <div className="px-8 pb-8">
                    <h3
                      className="mb-6 text-xl font-heading md:text-2xl text-coolGray-800 font-medium"
                      // contentEditable="false"
                    >
                      Fair Start
                    </h3>
                    <div className="mb-6">
                      <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
                        $
                      </span>
                      <span
                        className="text-6xl md:text-7xl text-coolGray-900 font-semibold"
                        // contentEditable="false"
                      >
                        99
                      </span>
                      <span
                        className="inline-block ml-1 text-coolGray-500 font-semibold"
                        // contentEditable="false"
                      >
                        / Year
                      </span>
                    </div>
                    <p
                      className="mb-6 text-coolGray-400 font-medium"
                      // contentEditable="false"
                    >
                      Quickly catalog your estate
                    </p>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start  px-8 py-8">
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Capture family legacy</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Share family stories with loved ones</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Start tackling the project now</span>
                    </li>
                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className="px-8 mt-8">
                    <a
                      className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Buy plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
                  <div className="px-8 pb-8">
                    <div className="flex flex-wrap items-center justify-between mb-6">
                      <h3 className="mr-3 text-xl font-heading md:text-2xl text-coolGray-800 font-medium">
                        Harmony
                      </h3>
                      <span className="inline-block py-px px-2 text-xs leading-5 text-white font-medium uppercase rounded-9xl bg-violet-400">
                        Popular
                      </span>
                    </div>
                    <div className="mb-6">
                      <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
                        $
                      </span>
                      <span className="text-6xl md:text-7xl text-coolGray-900 font-semibold">
                        499
                      </span>
                      <span className="inline-block ml-1 text-coolGray-500 font-semibold">
                        / Year
                      </span>
                    </div>
                    <p
                      className="mb-6 text-coolGray-400 font-medium"
                      // contentEditable="false"
                    >
                      Everything in the Fair Start Plan plus
                    </p>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start px-8 py-8">
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Group support sessions</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Equitably divide</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Access to pricing and selling services</span>
                    </li>
                  </ul>
                  <div className="border-b border-coolGray-100" />
                  <div className="px-8 mt-8">
                    <a
                      className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Buy plan
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="flex flex-col pt-8 pb-8 bg-white rounded-md shadow-md hover:scale-105 transition duration-500">
                  <div className="px-8 pb-8">
                    <h3 className="mb-6 text-xl font-heading md:text-2xl text-coolGray-800 font-medium">
                      Legacy
                    </h3>
                    <div className="mb-6">
                      <span className="relative -top-10 right-1 text-3xl text-coolGray-900 font-bold">
                        $
                      </span>
                      <span className="text-6xl md:text-7xl text-coolGray-900 font-semibold">
                        999
                      </span>
                      <span className="inline-block ml-1 text-coolGray-500 font-semibold">
                        / Year
                      </span>
                    </div>
                    <p
                      className="mb-6 text-coolGray-400 font-medium"
                      // contentEditable="false"
                    >
                      Everything in the Harmony Plan plus
                    </p>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start flex-1 px-8 py-8">
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Additional catalog storage</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Unlimited division</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>Discounted pricing and selling services</span>
                    </li>
                    <li className="flex items-center mb-3 text-coolGray-500 font-medium">
                      <Check color="green" className="mr-2" />
                      <span>1-1 family support through process</span>
                    </li>
                  </ul>
                  <div className="border-b border-coolGray-100" />
                  <div className="px-8 mt-8">
                    <a
                      className="inline-block py-3 px-5 mb-4 w-full text-base md:text-lg leading-6 text-white font-medium text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 rounded-md shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Buy plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative pt-32 pb-96 mb-96 md:mb-0">
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
