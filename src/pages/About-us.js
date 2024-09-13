import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { AsSeen } from "../components/AsSeen";
import { Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { Faq } from "../components/Faq";
import { DownloadApp } from "../components/DownloadApp";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Timeline } from "../components/Timeline";
import { ApplyNow } from "../components/ApplyNow";
import { TestimonialAboutPage } from "../components/TestimonialAboutPage";
import ScrollToTop from "react-scroll-to-top";
import { HashLink } from "react-router-hash-link";
import { TestimonialAboutPageMobile } from "../components/TestimonialAboutPageMobile";
import { Download } from "../components/Download";

const meta = {
  title: "About Nemu - Our story & Commitment to Maximizing Value",
  meta: [
    {
      name: "description",
      content: `Discover Nemu's commitment to making property inheritance less stressful, preserving relationships, and maximizing value.`,
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function AboutUs() {
  const faqs = [
    {
      id: 1,
      question: "How did Nemu get started?",
      answer:
        "A few years ago, Sarah, the founder of Nemu, experienced the loss of her grandmother. Witnessing the emotional and stressful process of dividing inherited property among family members, she realized the need for an easy, efficient, and fair solution. Unable to find one, she decided to build it herself.",
    },
    {
      id: 2,
      question: "What if I need help?",
      answer: (
        <p>
          You aren't alone! Our team is available to answer any and every
          question you have. And, if your family needs assistance, we can also
          provide 1-1 support throughout the entire process. Have a question?
          Reach out through our{" "}
          <Link className="underline" to={"/contact-us"}>
            Contact page
          </Link>
        </p>
      ),
    },
    {
      id: 3,
      question: "I'm not great with technology. Is that going to be a problem?",
      answer:
        "Our app is designed to be simple. We've spent countless hours testing it with real executors, beneficiaries, and people of all ages - which means you don't need to be a techie to get the job done. If you do get stuck, our team is always there to help.",
    },
    {
      id: 4,
      question: "When you say 'equitably' divide, what do you mean? ",
      answer:
        "We built a tool that designed to optimize fairness. With only your emotional value towards each item you like, our tool determines the most optimal way to divide your family assets. ",
    },
    {
      id: 5,
      question: "Is this something that will fit my situation?",
      answer: (
        <p>
          Nemu works for items big and small. We've helped those in small
          apartments and those with 3 vacation homes. We've divided items among
          families of 2 and families much, much larger. Whether you've been
          given the responsiblitiy of settling someone's estate, or you're
          trying to make sure no one has to worry about yours, we're here for
          you. To make sure you only pay for what you need, we have several
          packages that you can customize to fit your situation. Check them out{" "}
          <HashLink className="underline" to={"/estate-management#pricing"}>
            here!
          </HashLink>
        </p>
      ),
    },
    {
      id: 6,
      question: "How much does Nemu cost?",
      answer: (
        <p>
          We have a variety of packages ranging from $100 to $999. To make sure
          you only pay for what you need, you can start small and then add the
          services that fit your situation. You can see our pricing options{" "}
          <HashLink className="underline" to={"/estate-management#pricing"}>
            here
          </HashLink>
          . Still undecided? Start with a Free Trial and see for yourself!
        </p>
      ),
    },
  ];

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
          className="relative bg-white overflow-hidden"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="pt-10 pb-40  sm:pb-24">
            <div className="container mx-auto">
              <div className="flex flex-wrap xl:items-center ">
                <div className="text-center md:text-left w-full md:w-1/2  mb-16 md:mb-0">
                  <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    about us
                  </span>
                  <h1
                    //
                    className="mb-6 mt-3 text-center md:text-left text-4xl md:text-5xl text-coolGray-900   leading-[48px]  font-medium font-heading tracking-tight"
                  >
                    From Our Family<br></br> to Yours
                  </h1>
                  <p
                    style={{ lineHeight: "42px" }}
                    className="mb-8 text-lg   text-coolGray-500 "
                  >
                    After hearing stories from countless families about the
                    issues they encountered when dividing up their family items,
                    one thing was clear - families have a lot to gain from a
                    convenient, fair process. With Nemu, families can quickly
                    manage and equitably divide their heirlooms, saving time and
                    emotional stress. But, it also opens up more room to
                    celebrate the heirlooms left behind and the memories that
                    are so intrinsically attached to them.{" "}
                  </p>
                  {/* <img
                    loading="lazy"
                    alt=""
                    src="images/google-aboutus.svg"
                    className="mx-auto md:ml-0 mt-6 mb-10"
                  /> */}
                  <div className="flex flex-wrap gap-2 sm:gap-0">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        className="inline-block py-5 sm:py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://meetings.hubspot.com/sarah1487/demo-request"
                        target="_blank"
                      >
                        Request a Demo
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0">
                      {/* <Download /> */}
                      <a
                        href="https://app.mynemu.com/sign-up"
                        className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                  <div className="hidden sm:block relative mx-auto md:mr-0 max-w-max">
                    <img
                      loading="lazy"
                      className="relative rounded-7xl"
                      src="images/about-us-family.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AsSeen image={"images/about-us-family.webp"} />
        <section
          className="py-24 pt-32 md:pt-40 md:pb-28 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container lg:h-[750px]  mx-auto">
            <div className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
              TIMELINE
            </div>
            <h3 className="mb-6  text-center text-3xl md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-tight">
              A Trip Down Memory Lane
            </h3>
            <Timeline />
          </div>
        </section>

        <section
          className="py-24 md:pb-28 bg-white"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light1.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="text-center md:text-left mb-16">
              <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                TESTIMONIALS
              </span>
              <h2 className="mb-6 mt-5 text-3xl  md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-tight">
                What our customers<br></br> have to say
              </h2>
            </div>
            <TestimonialAboutPage />
            <TestimonialAboutPageMobile />
          </div>
        </section>
        <section
          className="py-20 xl:pt-24 bg-green-400"
          style={{ background: "#075362", backgroundPosition: "center" }}
        >
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-[#B2CACE]"
                // contentEditable="false"
              >
                Awards
              </span>
              <h3
                className="mb-6  mt-3 text-3xl md:text-4.5xl text-white     font-medium font-heading tracking-tight"
                // contentEditable="false"
              >
                Our Achievements
              </h3>
            </div>
            <div className="grid lg:grid-cols-3 justify-center ">
              <div className="   mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36  md:px-8 rounded-xl bg-white shadow-sm"> */}
                <a
                  href="https://venturelab.upenn.edu/2022-startup-challenge-finalists"
                  target="_blank"
                >
                  <img
                    className="mx-auto"
                    src="images/venture-lab-award.png"
                    alt=""
                  />
                </a>
                <h2 className="text-center text-2xl text-white font-medium font-heading ">
                  Ashton Family <br></br> Award
                </h2>
                <p className="text-base mt-2 leading-9 text-coolGray-300 text-center">
                  2022 Startup Challenge Finalists
                </p>
                {/* </div> */}
              </div>
              <div className=" mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36  md:px-8 rounded-xl bg-white shadow-sm"> */}
                <a href="https://tie.org/" target="_blank">
                  <img className="mx-auto" src="images/tie-award.png" alt="" />
                </a>
                <h2 className="text-center text-2xl text-white font-medium font-heading ">
                  TiE Global Pitch <br></br> Competition
                </h2>
                <p className="text-base mt-2 leading-9 text-coolGray-300 text-center">
                  Female Founder Award + Finalist
                </p>
                {/* </div> */}
              </div>
              <div className="  mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36  md:px-8 rounded-xl bg-white shadow-sm"> */}
                <a>
                  {" "}
                  <img
                    loading="lazy"
                    className="mx-auto"
                    src="images/penn-women-award.png"
                    alt=""
                  />
                </a>
                <h2 className="text-center text-2xl text-white font-medium font-heading ">
                  Penn Women Founders Annual Pitch Competition
                </h2>
                <p className="text-base mt-2 leading-9 text-coolGray-300 text-center">
                  Winner
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
        <section>
          <ApplyNow />
        </section>

        <Faq faqs={faqs} />
        <section className="relative pt-32 pb-96 mb-96 md:mb-0 ">
          <DownloadApp />
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
