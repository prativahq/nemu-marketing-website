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
import { Testimonial } from "../components/Testimonial";
import Blogs from "../posts.json";
import { BlogCard } from "../components/BlogCard";
import ScrollToTop from "react-scroll-to-top";
import { HashLink } from "react-router-hash-link";
import { Welcome } from "../components/Welcome";
import { Download } from "../components/Download";
import { Toaster } from "react-hot-toast";
import { Card } from "../components/Card";
import { faqs } from "../lib/utils";

const meta = {
  title: "Nemu - Revolutionizing Property Inheritance",
  meta: [
    {
      name: "description",
      content:
        "Nemu is a platform that helps you catalog, appraise, divide, and sell your property. We help you make sure your property goes to the right people, for the right price, and in the right way.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const [blogs, setBlogs] = useState(Blogs);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    setBlogs(Blogs.slice(0, 3));
    window.scrollTo(0, 0);

    const welcomeDialog = sessionStorage.getItem("welcome");
    if (welcomeDialog !== "true") {
      setTimeout(() => {
        setShowDialog(true);
      }, 4000);
    }
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
        <Toaster />
        {/* {showDialog && <Welcome />} */}

        <Navbar />
        {/* hero */}
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
                    WELCOME
                  </div>
                  <h1 className="mb-6 text-center md:text-left text-4xl md:text-5xl text-coolGray-900    font-medium font-heading tracking-normal">
                    Dividing property should be a piece of cake
                  </h1>
                  <p
                    style={{ lineHeight: "42px" }}
                    className="text-center md:text-left mb-8 text-lg   text-coolGray-500 "
                  >
                    Sometimes the responsibility associated with death, divorce,
                    or downsizing can be hard to bear. We’re here to make it a
                    lot easier.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-5">
                    {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> */}
                    {/* <a
                      className=" align-middle  py-5 sm:py-3 px-6 w-auto sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Get Started
                    </a> */}
                    {/* <Download /> */}
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className=" py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Get Started
                    </a>
                    {/* </div> */}
                    {/* <div className="w-full md:w-auto py-1 md:py-0"> */}
                    {/* <Link
                      className=" py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      to={"/how-it-works"}
                    >
                      Learn More
                    </Link> */}
                    {/* </div> */}
                  </div>
                </div>
                <div className="hidden sm:block md:w-1/2 ">
                  <div className=" mx-auto md:mr-0 max-w-max">
                    <img
                      // loading="lazy"
                      className=" right-0 z-99 rounded-7xl"
                      src="images/how-it-works-hero.webp"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AsSeen image={"images/how-it-works-hero.webp"} />
        {/* we get it */}
        <section
          className=" h-[920px] mb-32 sm:mb-0 sm:h-auto pt-32 pb-16 lg:pt-32 lg:pb-32 bg-white "
          style={{
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          <div className="relative">
            <div className="absolute  sm:relative container mx-auto">
              <div className="flex flex-wrap-reverse lg:items-center ">
                <div className="w-full md:w-1/2  mt-16 md:mb-0">
                  <div className="relative mx-auto md:ml-0 max-w-max">
                    <img
                      className="max-w-[300px] sm:max-w-full"
                      loading="lazy"
                      src="images/our-story.webp"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 ">
                  <div className="tracking-widest text-center md:text-left mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    OUR STORY
                  </div>
                  <h2 className="mb-6 text-center md:text-left text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
                    We get it, because we have been there
                  </h2>
                  <p className="mb-6 text-lg leading-9 text-center md:text-left text-coolGray-500 ">
                    A few years ago, Sarah, the founder of Nemu, experienced the
                    loss of her grandmother. Witnessing the emotional and
                    stressful process of dividing inherited property among
                    family members, she realized the need for an easy,
                    efficient, and fair solution. Unable to find one, she
                    decided to build it herself.
                  </p>
                  <div className="w-full text-center md:text-left md:w-auto py-1 md:py-0">
                    <Link
                      className="inline-block py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-transparent hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      to={"/about-us"}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className=" py-24 md:pb-32 ">
          <div className=" container mx-auto">
            <div className="md:max-w-4xl mb-12 mx-auto text-center">
              <span
                className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
                // contentEditable="false"
              >
                OVERVIEW
              </span>
              <h2
                className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-normal"
                // contentEditable="false"
              >
                As Easy as 1-2-3
              </h2>
            </div>
            <div className="flex flex-col gap-14 items-center  ">
              <div className="w-full flex flex-wrap justify-center gap-5  xl:grid grid-cols-3 xl:justify-between">
                {cards.map((card) => {
                  return <Card key={card.id} {...card} />;
                })}
              </div>
            </div>
          </div>
        </section>
        {/* download now */}
        <section className="relative py-24 mb-80 md:mb-0 ">
          <DownloadApp />
        </section>

        {/* testimonials */}

        <section
          className="md:pt-72 pt-96 pb-20 md:pb-36 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container md:h-[550px]  mx-auto">
            <div className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
              TESTIMONIALS
            </div>
            <h2 className="mb-10 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
              Hear from our customers
            </h2>
            <Testimonial />
          </div>
        </section>
        {/* faq */}
        <Faq faqs={faqs} />
        {/* resources */}
        <section
          className="py-12 md:py24 bg-white"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "left top",
          // }}
        >
          <div className="container px-6 mx-auto">
            <div className="md:max-w-5xl mx-auto mb-16 text-center">
              <span className=" tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                BLOGS
              </span>
              <h2 className="mb-6 mt-3 text-center  text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
                Resources to help you out
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5  mb-12 md:mb-20">
              {blogs.map((blog, index) => {
                if (index > 2) {
                  return null;
                } else
                  return (
                    <BlogCard
                      key={blog.id}
                      tag={blog.tag}
                      id={blog.id}
                      title={blog.title}
                      author={blog.author}
                      thumbnail={blog.thumbnail}
                      date={blog.date}
                    />
                  );
              })}
            </div>
            <div className="text-center">
              <Link
                className=" py-5 sm:py-3 px-6 w-fit mx-auto text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                to={"/blog"}
              >
                Read More
              </Link>
            </div>

            {/* <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg" /> */}
          </div>
        </section>
        {/* newsletter */}
        <Newsletter />
        {/* footer */}
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
