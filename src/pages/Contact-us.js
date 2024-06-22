import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Faq } from "../components/Faq";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

import { faqs } from "../lib/utils";

const meta = {
  title: "Connect Nemu: Your Inheritance Guide ",
  meta: [
    {
      name: "description",
      content:
        "Have inheritance questions? Need help using Nemu? Our dedicated team is here to guide and assist you every step of the way. Talk to us today.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section
          className="relative py-0 xl:py-[300px] pt-20 xl:mb-48   "
          style={{
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          <div className="xl:absolute xl:-my-44 right-0 left-0 container mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                CONTACT US
              </span>
              <h1
                className="mb-6 mt-3 text-4xl md:text-5xl text-coolGray-900     font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                A Real Inbox, Monitored
                <div>by Real People</div>
              </h1>
              <div className="flex gap-4 items-center justify-center mx-auto">
                <img
                  loading="lazy"
                  alt=""
                  src="images/contact_us.png"
                  className="w-32 "
                />
                <img
                  loading="lazy"
                  alt=""
                  src="images/contact_us_online.svg"
                  className="w-[4.4rem]"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-5 justify-center pb-16">
              {/* <div className="w-full mb-10 md:mb-0 md:w-[500px] "> */}
              <div className="flex flex-col items-center w-full mb-10 md:mb-0 md:w-[500px] mx-auto text-center px-10 lg:px-32 pt-8 pb-12  bg-white border border-coolGray-200 shadow-sm rounded-lg">
                <div className="inline-flex mb-3 items-center justify-center w-12 h-12 rounded-full">
                  <img alt="" loading="lazy" src="images/email-icon.svg" />
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-medium font-heading">
                  Email us
                </h3>
                <p className="py-6 grow text-coolGray-500 text-lg">
                  Send us an email and someone from our team will get back to
                  you as soon as possible.
                </p>
                <a
                  className="text-lg text-emerald-500 hover:text-emerald-400   "
                  href="mailto:hello@mynemu.com"
                >
                  hello@mynemu.com
                </a>
              </div>
              {/* </div> */}
              {/* <div className="w-full mb-10 md:mb-0 md:w-[500px] "> */}
              <div className="flex flex-col items-center w-full mb-10 md:mb-0 md:w-[500px] mx-auto text-center px-10  pt-8 pb-12 lg:px-32 bg-white border border-coolGray-200 shadow-sm rounded-lg">
                <div className="inline-flex mb-3 items-center justify-center w-12 h-12 rounded-full">
                  <img alt="" loading="lazy" src="images/call-icon.svg" />
                </div>
                <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-heading font-medium">
                  Schedule a Call
                </h3>
                <p className="py-6 grow text-coolGray-500 text-lg">
                  Can’t wait? We can’t either! Schedule time with our team to
                  learn more.
                </p>
                <a
                  href="https://calendly.com/bethnemucalendar"
                  className="text-lg text-emerald-500 hover:text-emerald-400"
                >
                  Schedule time here
                </a>
              </div>
              {/* </div> */}
            </div>
          </div>
          {/* <div className="h-2 bg-green-500" /> */}
        </section>
        <Faq faqs={faqs} />
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
