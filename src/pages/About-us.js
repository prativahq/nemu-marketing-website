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
          <HashLink className="underline" to={"/how-it-works#pricing"}>
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
          <HashLink className="underline" to={"/how-it-works#pricing"}>
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
          <div className="py-10">
            <div className="container mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="text-center md:text-left w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <span className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    about us
                  </span>
                  <h1 className="mb-6 mt-3 text-center md:text-left text-4xl md:text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                    From Our Family to Yours
                  </h1>
                  <p className="mb-8 text-lg leading-9  text-coolGray-500 ">
                    After hearing stories from countless families about the
                    issues they encountered when dividing up their family items,
                    one thing was clear - families have a lot to gain from a
                    convenient, fair process. With Nemu, families can quickly
                    manage and equitably divide their heirlooms, saving time and
                    emotional stress. But, it also opens up more room to
                    celebrate the heirlooms left behind and the memories that
                    are so intrinsically attached to them.{" "}
                  </p>
                  <img
                    loading="lazy"
                    alt=""
                    src="images/google-aboutus.svg"
                    className="mx-auto md:ml-0 mt-6 mb-10"
                  />
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        className="inline-block py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://meetings.hubspot.com/sarah1487/demo-request"
                        target="_blank"
                      >
                        Request a Demo
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0">
                      <a
                        className="inline-block py-3 px-6 w-full md:w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                      >
                        Sign up
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    <img
                      loading="lazy"
                      className="relative rounded-7xl"
                      src="images/about-us-family.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AsSeen />
        <section
          className="py-24 md:pt-52 md:pb-28 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container lg:h-[750px] px-4 mx-auto">
            <div className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
              TIMELINE
            </div>
            <h3 className="mb-6  text-center text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
              Down the memory lane
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
              <h2 className="mb-6  text-3xl  md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                What our customers<br></br> have to say
              </h2>
            </div>
            <TestimonialAboutPage />
          </div>
        </section>
        <section
          className="py-20 xl:pt-24 bg-green-400"
          style={{ background: "#075362", backgroundPosition: "center" }}
        >
          <div className="container mx-auto">
            <div className="mb-8 text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-white"
                // contentEditable="false"
              >
                Awards
              </span>
              <h3
                className="mb-6    text-4.5xl text-white   leading-tight font-medium font-heading tracking-tight"
                // contentEditable="false"
              >
                Our Achievements
              </h3>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className=" w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-white shadow-md"> */}
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
                <h2 className="text-center text-2xl text-white font-medium font-heading">
                  Ashton Family Award
                </h2>
                <p className="text-sm  leading-9 text-coolGray-300 text-center">
                  2022 Startup Challenge Finalists
                </p>
                {/* </div> */}
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-white shadow-md"> */}
                <a href="https://tie.org/" target="_blank">
                  <img className="mx-auto" src="images/tie-award.png" alt="" />
                </a>
                <h2 className="text-center text-2xl text-white font-medium font-heading">
                  TiE Global Pitch Competition
                </h2>
                <p className="text-sm  leading-9 text-coolGray-300 text-center">
                  Female Founder Award + Finalist
                </p>
                {/* </div> */}
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
                {/* <div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-white shadow-md"> */}
                <a>
                  {" "}
                  <img
                    loading="lazy"
                    className="mx-auto"
                    src="images/penn-women-award.png"
                    alt=""
                  />
                </a>
                <h2 className="text-center text-2xl text-white font-medium font-heading">
                  Penn Women Founders Annual Pitch Competition
                </h2>
                <p className="text-sm  leading-9 text-coolGray-300 text-center">
                  Winner
                </p>
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>
        <section
          className="py-24 lg:pb-72 bg-[#F7F5F2]"
          style={{ backgroundPosition: "center" }}
        >
          <div className="container mx-auto">
            <div className="mb-16 text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                our team
              </span>
              <h2
                className="text-center text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight"
                // contentEditable="false"
              >
                Meet the team
              </h2>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4" />
                <div className="w-full md:w-auto py-1 md:py-0" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 items-center h-full py-8 px-10 bg-white rounded-md shadow-md border border-gray-200 text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sarah.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Sarah Powers
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    // contentEditable="false"
                  >
                    Founder + CEO
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/sarah-powers713/"}
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/fahv.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Fahvyon Jimenez
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    // contentEditable="false"
                  >
                    Head of Product + Family Experience
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={
                      "https://www.linkedin.com/in/fahvyon-jimenez-807b6788/"
                    }
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/vandita.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Vandita Kamath
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    // contentEditable="false"
                  >
                    Marketing Lead
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/vanditakamath157/"}
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sourav.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Sourav Das
                  </h3>
                  <span
                    className="inline-block mb-6 text-lg text-coolGray-500"
                    // contentEditable="false"
                  >
                    Head of Engineering
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/souravudo/"}
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/ronish.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Ronish Sawal
                  </h3>
                  <span
                    className="inline-block mb-6 text-lg text-coolGray-500"
                    // contentEditable="false"
                  >
                    Design Lead
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/ronish-sawal-537a23131/"}
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    loading="lazy"
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sakin.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    // contentEditable="false"
                  >
                    Tahjib Al Sakin
                  </h3>
                  <span className="inline-block mb-6 text-lg text-coolGray-500">
                    IOS Developer
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/ta-sakin/"}
                  >
                    <img loading="lazy" alt="" src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative lg:mb-48  bg-[#F7F5F2] ">
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
