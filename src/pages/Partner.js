import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { AsSeen } from "../components/AsSeen";
import { Card } from "../components/Card";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "Nemu's Trusted Partnerships",
  meta: [
    {
      name: "description",
      content:
        "Collaborating with industry leaders, Nemu ensures a holistic approach to property splitting and inheritance",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Partner() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cards = [
    {
      id: 1,
      img: "images/partner-1.png",
      title: "Lay the Groundwork",
      description:
        "This partnership is a two-way-street: we start by learning more about your business, then we work together to find the perfect places to integrate.",
    },
    {
      id: 2,
      img: "images/partner-2.png",
      title: "Train the Team",
      description:
        "After laying the groundwork, we’ll bring you and your team up to speed on everything you’ll need to know for a successful collaboration. ",
    },
    {
      id: 3,
      img: "images/partner-3.png",
      title: "Launch and Support",
      description:
        "After a successful kick-off, we’ll hold regular check-ins so we can continue to tailor the partnership around what works for you and your customers",
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
          <div className="pt-10 pb-40 lg:pb-24">
            <div className="container mx-auto">
              <div className="flex flex-wrap xl:items-center ">
                <div className="text-center md:text-left w-full md:w-1/2  mb-16 md:mb-0">
                  <span
                    className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                    // contentEditable="false"
                  >
                    PARTNER WITH US
                  </span>
                  <h1
                    className="mb-6 mt-3 text-4xl md:text-5xl text-coolGray-900     font-medium font-heading tracking-normal"
                    // contentEditable="false"
                  >
                    {/* <span style={{ whiteSpace: "pre-wrap" }}> */}
                    Be the hero that preserves your clients' legacy
                    {/* </span> */}
                  </h1>
                  <p
                    style={{ lineHeight: "42px" }}
                    className="mb-8 text-lg  text-coolGray-500 "
                    // contentEditable="false"
                  >
                    <span style={{ whiteSpace: "pre-wrap" }}>
                      Work with clients downsizing or dividing personal
                      property? We partner with you to help clients avoid
                      fighting, differentiate your services, and expand your
                      business.
                    </span>
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-0">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        target="_blank"
                        className="inline-block py-5 sm:py-3 px-6 md:w-fit w-full text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://meetings.hubspot.com/sarah1487/intro-affiliate"
                      >
                        Become an affiliate
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0">
                      <a
                        target="_blank"
                        className="inline-block py-5 sm:py-3 px-6 md:w-fit w-full  text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://meetings.hubspot.com/sarah1487/intro-affiliate"
                      >
                        Schedule a call
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                  <div className="hidden sm:block relative mx-auto md:mr-0 max-w-max">
                    <img
                      loading="lazy"
                      className="relative rounded-7xl"
                      src="images/Frame-422.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AsSeen image={"images/Frame-422.webp"} />
        <section
          className="py-24 pt-32 lg:pt-40 bg-[#F7F5F2] overflow-hidden"
          style={{
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          <div className="flex items-start justify-between flex-wrap container mx-auto">
            <div className="text-center xl:text-left mx-auto ">
              <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                OVERVIEW
              </span>
              <h2
                className="mb-6 mt-3 text-3xl md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                The nemu promise
              </h2>
              <p
                className="mb-10 text-lg leading-9 text-coolGray-500 "
                // contentEditable="false"
              >
                We partner with you to best support your clients and<br></br>
                your team throughout the process.
              </p>

              {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> */}
              <a
                className="inline-block py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                href="https://meetings.hubspot.com/sarah1487/intro-affiliate"
                target="_blank"
              >
                Join Forces Now
              </a>
              {/* </div> */}
            </div>

            <div className="flex flex-col gap-4 w-full xl:w-1/2  py-6">
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white  hover:shadow-xl transition duration-200 rounded-lg bg-white ">
                {/* <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <img src="images/promiseCheck.png" />
                </div> */}
                <div className="w-full md:flex-1 ">
                  <h3 className="flex flex-col sm:flex-row gap-3 items-center text-left sm:text-center mb-4 text-xl md:text-2xl   text-coolGray-900 font-medium font-heading">
                    <img loading="lazy" alt="" src="images/promiseCheck.png" />
                    Customers Treated with Empathy &amp; Respect
                  </h3>
                  <p className="text-coolGray-500 leading-9 text-lg text-left sm:text-center">
                    We give your clients the empathy and respect they deserve.
                    We treat them like family, because we’ve been there
                    ourselves.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white  hover:shadow-xl transition duration-200 rounded-lg bg-white ">
                {/* <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  <img src="images/promiseCheck.png" />
                </div> */}
                <div className="w-full md:flex-1 ">
                  <h3 className="flex flex-wrap gap-3 items-center text-left sm:text-center mb-4 text-xl md:text-2xl   text-coolGray-900 font-medium font-heading">
                    <img loading="lazy" alt="" src="images/promiseCheck.png" />
                    The Right Resource, at the Right Time
                  </h3>
                  <p className="text-coolGray-500 leading-9 text-lg text-left sm:text-center">
                    Nemu is the result of countless hours of user-testing,
                    family-observations, and research. Any family will feel
                    right at home.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap p-8 text-center md:text-left hover:bg-white rounded-lg hover:shadow-xl transition duration-200  bg-white">
                {/* <div className="w-full md:w-auto mb-6 md:mb-0 md:pr-6">
                  
                  <img src="images/promiseCheck.png" />
                </div> */}
                <div className="w-full md:flex-1 ">
                  <h3 className="flex flex-wrap gap-3 items-center text-left sm:text-center mb-4 text-xl md:text-2xl   text-coolGray-900 font-medium font-heading">
                    <img loading="lazy" alt="" src="images/promiseCheck.png" />A
                    Trusted Extension of your Business
                  </h3>
                  <p className="text-coolGray-500 leading-9 text-lg text-left sm:text-center">
                    We’re in this together! With Nemu you can expand your
                    services at scale while still focusing on your core
                    business.
                  </p>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </section>
        <section className="py-24 md:pb-32 bg-white">
          <div className="container mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                WHY US
              </span>
              <h2
                className="mb-6 mt-3 text-3xl md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                Partner With us in 3 Easy Steps
              </h2>
            </div>
            <div className="flex flex-col gap-14 items-center  ">
              <div className="w-full flex flex-wrap justify-center gap-5  xl:grid grid-cols-3 xl:justify-between ">
                {cards.map((card) => {
                  return <Card key={card.id} {...card} />;
                })}
              </div>
              {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> */}
              <a
                className="inline-block py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                href="https://meetings.hubspot.com/sarah1487/intro-affiliate"
                target="_blank"
              >
                Join Forces Now
              </a>
              {/* </div> */}
              {/* <div className="w-full">
                <a
                  href="#"
                  className="inline-block py-3 px-6 justify-center leading-none text-white rounded shadow bg-green-500 hover:bg-green-600"
                >
                  Join forces Now
                </a>
              </div> */}
            </div>
          </div>
        </section>
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
