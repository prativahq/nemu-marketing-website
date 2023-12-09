import React from "react";
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

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function AboutUs() {
  const faqs = [
    {
      question: "How did Nemu get started?",
      answer:
        "A few years ago, Sarah, the founder of Nemu, experienced the loss of her grandmother. Witnessing the emotional and stressful process of dividing inherited property among family members, she realized the need for an easy, efficient, and fair solution. Unable to find one, she decided to build it herself.",
    },
    {
      question: "What if I need help?",
      answer:
        "You aren't alone! Our team is available to answer any and every question you have. And, if your family needs assistance, we can also provide 1-1 support throughout the entire process. Have a question? Reach out through our contact page [hyperlink to contact page]",
    },
    {
      question: "I'm not great with technology. Is that going to be a problem?",
      answer:
        "Our app is designed to be simple. We've spent countless hours testing it with real executors, beneficiaries, and people of all ages - which means you don't need to be a techie to get the job done. If you do get stuck, our team is always there to help.",
    },
    {
      question: "When you say 'equitably' divide, what do you mean? ",
      answer:
        "We built a tool that designed to optimize fairness. With only your emotional value towards each item you like, our tool determines the most optimal way to divide your family assets. ",
    },
    {
      question: "Is this something that will fit my situation?",
      answer: `Nemu works for items big and small. We've helped those in small apartments and those with 3 vacation homes. We've divided items among families of 2 and families much, much larger. Whether you've been given the responsiblitiy of settling someone's estate, or you're trying to make sure no one has to worry about yours, we're here for you.

      To make sure you only pay for what you need, we have several packages that you can customize to fit your situation. Check them out here! [Hyperlink to pricing section of How-it-works page]`,
    },
    {
      question: "How much does Nemu cost?",
      answer: `We have a variety of packages ranging from $100 to $999. To make sure you only pay for what you need, you can start small and then add the services that fit your situation. You can see our pricing options here [Hyperlink to pricing section of How-it-works page]. Still undecided? Start with a Free Trial and see for yourself!`,
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
          {/* <div className="bg-tarnsparent">
            <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
              <div className="fixed top-0 left-0 bottom-0  w-4/6 max-w-xs bg-white">
                <nav className="relative p-6 h-full overflow-y-auto">
                  <div className="flex flex-col justify-between h-full">
                    <a className="inline-block" href="#">
                      <img
                        className="h-8"
                        src="flex-ui-assets/logos/flex-ui-green-light.svg"
                        alt=""
                      />
                    </a>
                    <ul className="py-6">
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900 font-medium hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-wrap">
                      <div className="w-full mb-2">
                        <a
                          className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium text-center rounded-md"
                          href="#"
                        >
                          Log In
                        </a>
                      </div>
                      <div className="w-full">
                        <a
                          className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
                          href="#"
                        >
                          Sign Up
                        </a>
                      </div>
                    </div>
                  </div>
                </nav>
                <a className="navbar-close absolute top-5 p-4 right-3" href="#">
                  <svg
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                      fill="#556987"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
          <div className="py-10">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="text-center md:text-left w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <span className="inline-block  mb-4 text-emerald-500 leading-5 uppercase rounded-9xl">
                    about us
                  </span>
                  <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl leading-tight font-medium font-heading tracking-tight">
                    From Our Family to Yours
                  </h1>
                  <p className="mb-8 text-lg  text-coolGray-500 ">
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
                    src="images/google-aboutus.svg"
                    className="mx-auto md:ml-0 mt-6 mb-10"
                  ></img>
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                      <a
                        className="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                        href="#"
                      >
                        Request a Demo
                      </a>
                    </div>
                    <div className="w-full md:w-auto py-1 md:py-0">
                      <a
                        className="inline-block py-3 px-5 w-full text-base md:text-lg leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
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
          <div className="container md:h-[750px] px-4 mx-auto">
            <div className="text-center   mb-4  leading-5 text-emerald-500  uppercase rounded-9xl">
              TIMELINE
            </div>
            <h3 className="mb-10 text-center text-3xl md:text-4xl text-coolGray-900 font-medium tracking-tighter font-heading">
              Down the memory lane
            </h3>
            <Timeline />
          </div>
        </section>
        {/* <section
          className="py-24 md:pt-52 md:pb-32 bg-coolGray-50 overflow-hidden"
          style={{
            backgroundColor: "#F7F5F2",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <div className="relative mx-auto md:ml-0 max-w-max">
                  <img src="images/about-us-1941.png" alt="" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 font-medium uppercase rounded-full shadow-sm">
                  TIMELINE
                </span>
                <h1 className="mb-8 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
                  1941
                </h1>
                <p className="mb-6 text-lg md:text-xl text-coolGray-500 font-medium">
                  Mary Ann and Harold married in 1941 and moved west to build
                  their family in Nevada City, CA. Harold served as a district
                  attorney while Mary Ann managed their growing household. With
                  8 kids in tow, they eventually found a house that they would
                  call home for over 60 years.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="py-24 md:pb-28 bg-white"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light1.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container px-4 mx-auto">
            <div className="text-center md:text-left mb-16">
              <span className="inline-block  mb-4  leading-5 text-emerald-500 font-medium uppercase rounded-9xl">
                TESTIMONIALS
              </span>
              <h2 className="mb-4 text-4xl md:text-5xl leading-tight font-medium font-heading tracking-tighter">
                What our customers<br></br> have to say
              </h2>
            </div>
            <TestimonialAboutPage />
            {/* <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full p-8 bg-white shadow-md rounded-md">
                  <h3 className="pb-14 mb-auto text-coolGray-600 text-lg">
                    Every single one of my siblings felt like they got just want
                    they wanted - and that made me very happy.
                  </h3>
                  <h4 className="mb-1 text-lg font-semibold">Margaret</h4>
                  <p className="text-lg text-coolGray-400">
                    Executor & Beneficiary
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full p-8 bg-white shadow-md rounded-md">
                  <h3 className="pb-14 mb-auto text-coolGray-600 text-lg">
                    We need to tell the world about this - this product will
                    help save families and relationships.
                  </h3>
                  <h4 className="mb-1 text-lg font-semibold">Colette</h4>
                  <p className="text-lg text-coolGray-400">Beneficiary</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full p-8 bg-white shadow-md rounded-md">
                  <h3 className="pb-14 mb-auto text-coolGray-600 text-lg">
                    We appreciate your help. Your app has helped our family
                    immensely. Thank you!
                  </h3>
                  <h4 className="mb-1 text-lg font-semibold">Eric</h4>
                  <p className="text-lg text-coolGray-400">Executor</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="flex flex-col h-full p-8 bg-white shadow-md rounded-md">
                  <h3 className="pb-14 mb-auto text-coolGray-600 text-lg">
                    I don't know how we would have done it without it. It was so
                    fortuitious that it came along.
                  </h3>
                  <h4 className="mb-1 text-lg font-semibold">Ann</h4>
                  <p className="text-lg text-coolGray-400">
                    Executor & Beneficiary
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </section>
        <section
          className="py-20 xl:pt-24 bg-green-400"
          style={{ background: "#075362", backgroundPosition: "center" }}
        >
          <div className="container px-4 mx-auto">
            <div className="mb-8 text-center">
              <span
                className="inline-block py-px px-2 mb-4  leading-5  uppercase rounded-9xl text-white"
                contentEditable="false"
              >
                Awards
              </span>
              <h3
                className="mb-4 text-3xl md:text-5xl font-medium font-heading tracking-tighter text-white"
                contentEditable="false"
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
          className="py-24 bg-[#F7F5F2]"
          style={{ backgroundPosition: "center" }}
        >
          <div className="container px-4 mx-auto">
            <div className="mb-16 text-center">
              <span
                className="inline-block py-px px-2 mb-4  leading-5 text-emerald-500 font-medium uppercase rounded-9xl"
                contentEditable="false"
              >
                our team
              </span>
              <h3
                className="mb-4 text-3xl md:text-5xl leading-tight text-coolGray-900 font-medium font-heading tracking-tighter"
                contentEditable="false"
              >
                Meet the team
              </h3>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4" />
                <div className="w-full md:w-auto py-1 md:py-0" />
              </div>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 items-center h-full py-8 px-10 bg-white rounded-md shadow-md border border-gray-200 text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sarah.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
                  >
                    Sarah Powers
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    contentEditable="false"
                  >
                    Founder + CEO
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/sarah-powers713/"}
                  >
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/fahv.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
                  >
                    Fahvyon Jimenez
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    contentEditable="false"
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
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/vandita.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
                  >
                    Vandita Kamath
                  </h3>
                  <span
                    className="flex-1 inline-block mb-6 text-lg text-coolGray-500"
                    contentEditable="false"
                  >
                    Marketing Lead
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/vanditakamath157/"}
                  >
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10 lg:mb-0">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sourav.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
                  >
                    Sourav Das
                  </h3>
                  <span
                    className="inline-block mb-6 text-lg text-coolGray-500"
                    contentEditable="false"
                  >
                    Head of Engineering
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/souravudo/"}
                  >
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4 mb-10 md:mb-0">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/ronish.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
                  >
                    Ronish Sawal
                  </h3>
                  <span
                    className="inline-block mb-6 text-lg text-coolGray-500"
                    contentEditable="false"
                  >
                    Design Lead
                  </span>
                  <a
                    className="w-fit mx-auto"
                    target="_blank"
                    href={"https://www.linkedin.com/in/ronish-sawal-537a23131/"}
                  >
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
              <div className=" w-full md:w-1/2 lg:w-1/3 px-4">
                <div className="flex flex-col gap-2 h-full py-8 px-10 shadow-md border border-gray-200 bg-white rounded-md text-center">
                  <img
                    className="w-24 h-24 mx-auto mb-6 rounded-full"
                    src="images/sakin.png"
                    alt=""
                  />
                  <h3
                    className="mb-2 text-2xl md:text-3xl leading-tight font-medium font-heading"
                    contentEditable="false"
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
                    <img src="images/linkedin1.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ApplyNow />
        <Faq faqs={faqs} />
        <DownloadApp />
        <Newsletter />
        <Footer />
      </>
    </React.Fragment>
  );
}
