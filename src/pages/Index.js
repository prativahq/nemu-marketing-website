import { Disclosure } from "@headlessui/react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import React from "react";
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

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  const faqs = [
    {
      question: "I'm not great with technology. Is that going to be a problem?",
      answer:
        "Our app is designed for simplicity. We've spent countless hours testing it with real executors, beneficiaries, and people of all ages - which means you don't need to be a techie to get the job done. If you do get stuck, our team is always there to help.",
    },
    {
      question: "Is this something that will fit my situation?",
      answer:
        "Nemu works for items big and small. We've helped those in small apartments and those with 3 vacation homes. We've divided items among families of 2 and families much, much larger. Whether you've been given the responsiblitiy of settling someone's estate, or you're trying to make sure no one has to worry about yours, we're here for you.To make sure you only pay for what you need, we have several packages that you can customize to fit your situation. Check them out here! [Hyperlink to pricing section of How-it-works page]",
    },
    {
      question: "How much does Nemu cost?",
      answer:
        "We have a variety of packages ranging from $100 to $999. To make sure you only pay for what you need, you can start small and then add the services that fit your situation. You can see our pricing options here [Hyperlink to pricing section of How-it-works page]. Still undecided? Start with a Free Trial and see for yourself!",
    },
    {
      question: "Can I start with a free trial before buying?",
      answer:
        "Of course! We offer a free trial for all of our users. We think you'll like what you see. You can sign up here [hyper link to sign up now]",
    },
    {
      question: "When is the right time to start using Nemu?",
      answer:
        "Getting started early allows you to move at whatever pace is best for you. Waiting until the last minute could mean the burden is left on your loved ones during an already difficult time. Getting ahead will give everyone peace of mind, and will allow them to celebrate and enjoy what you've left behind, rather than stress and fight over it. ",
    },
    {
      question: "How does Nemu work?",
      answer: `Nemu has 4 main features, and you can use them in any order you like:
      - Catalog: Cataloging your items is made quick and simple because our app will recognize how many items are in the photo and help you get them titled!
      - Appraise: If you want something appraised, you can count on our network of certified appraisers to get the job done!
      - Divide: Beneficiaries enter an Emotional Value Score to tell us how much they want a given item. Then, our Nash Equilibrium Algorithm looks at everyone’s scores, and ensures the items are divided as fairly as mathematically possible. 
      - Sell: If you’d like help selling any of your items, we’re here to help! We take into account the value of your item, current market conditions, and how quickly you need the item sold to ensure we sell through the right channels and get the best price.`,
    },
    {
      question:
        "How do I know the algorithm is fair? Is there a way to cheat the system?",
      answer: `Our tool is groudned in mathematical fundamentals (a Nash Equalibrium Algorithm, to be exact).There isn't a way to cheat the system, and those that do often find they've cheated themselves. Be true to yourself when entering your emotional value scores, and our app will take care of the rest.

      For example, let's say you rank everything as your "top choice". You are conveying that you like everything the same amount and are indifferent between items. We don't recommend this approach as a strategy to get popular items.`,
    },
    {
      question: "Does this require a bunch of family meetings?",
      answer:
        "The awkward and contentious family meetings are exactly what Nemu was designed to replace! Beneficiaries privately enter their emotional scores for each item, which means everyone gets the time and privacy they need to think about what they want most. It means everyone has a choice and everyone has a voice. As one of our executors put it, “the whole family is confident about what they should do”.",
    },
    {
      question: "  What if I need help?",
      answer:
        "You aren't alone! Our team is available to answer any and every question you have. And, if your family needs assistance, we can also provide 1-1 support throughout the entire process. Have a question? Reach out through our contact page [hyperlink to contact page]",
    },
  ];

  const cards = [
    {
      color: "border-t-cardGreen",
      title: "1. Catalog",
      description:
        "Nemu helps you quickly create an organized inventory of your treasures. You and your family can browse, comment, record voice-notes, and share memories about heirlooms - all from the comfort of your home.",
      icon: "/images/card-1.png",
    },
    {
      color: "border-t-cardPeach",
      title: "2. Appraise",
      description:
        "We pull in price estimates to help you gauge how much your treasured items are worth. When needed, we can connect you with one of our experienced partners for a certified appraisal. ",
      icon: "/images/card-2.png",
    },
    {
      color: "border-t-cardPink",
      title: "3. Divide",
      description:
        "Dividing heirlooms can be stressful, require travel, and, unfortunately, cause fights. We help you divide heirlooms equitably based on emotional value. No fighting and no travel - just celebrating your loved ones and what they’ve left behind.",
      icon: "/images/card-3.png",
    },
    {
      color: "border-t-cardBlue",
      title: "4. Sell",
      description:
        "Dividing cash is often the most equitable path forward, but selling your heirlooms can be a difficult and time-intensive process. We help you find the best place to sell your items based on their value, your location, and the desired time-frame.",
      icon: "/images/card-4.png",
    },
  ];

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        {/* hero */}
        <section
          className="relative bg-white overflow-hidden"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          {/* <div className="bg-tarnsparent">
            <div className="navbar-menu hidden fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50">
              <div className="fixed top-0 left-0 bottom-0 w-full w-4/6 max-w-xs bg-white">
                <nav className="relative p-6 h-full overflow-y-auto">
                  <div className="flex flex-col justify-between h-full">
                    <a className="inline-block" href="#">
                      <img
                        className="h-8"
                        src="flex-ui-assets/logos/flex-ui-green-light.svg"
                        alt=" "
                      />
                    </a>
                    <ul className="py-6">
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900  hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900  hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900  hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          className="block py-3 px-4 text-coolGray-500 hover:text-coolGray-900  hover:bg-coolGray-50 rounded-md"
                          href="#"
                        >
                          Resources
                        </a>
                      </li>
                    </ul>
                    <div className="flex flex-wrap">
                      <div className="w-full mb-2">
                        <a
                          className="inline-block py-2 px-4 w-full text-sm leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent  text-center rounded-md"
                          href="#"
                        >
                          Log In
                        </a>
                      </div>
                      <div className="w-full">
                        <a
                          className="inline-block py-2 px-4 w-full text-sm leading-5 text-white bg-green-500 hover:bg-green-600  text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md"
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
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <div className="text-center md:text-left mb-4  leading-5 uppercase rounded-9xl text-emerald-500">
                    WELCOME
                  </div>
                  <h1 className="mb-6 text-center md:text-left text-4xl text-coolGray-900 md:text-5xl lg:text-6xl leading-tight font-medium font-heading tracking-tight">
                    Split Property, Not Relationships
                  </h1>
                  <p className="text-center md:text-left mb-8 text-lg  text-coolGray-500 ">
                    Sometimes the responsibility associated with death, divorce,
                    or downsizing can be hard to bear. We’re here to make it a
                    lot easier.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-5">
                    {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> */}
                    <a
                      className="inline-block py-3 px-5 w-fit text-base md:text-lg leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Free Sign Up
                    </a>
                    {/* </div> */}
                    {/* <div className="w-full md:w-auto py-1 md:py-0"> */}
                    <Link
                      className="inline-block py-3 px-5 w-fit text-base md:text-lg leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                      to={"/how-it-works"}
                    >
                      Learn more
                    </Link>
                    {/* </div> */}
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-4">
                  <div className="relative mx-auto md:mr-0 max-w-max">
                    <img
                      className="relative rounded-7xl"
                      src="images/Frame-422-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <AsSeen />
        {/* we get it */}
        <section
          className="py-24 md:pt-56 md:pb-30 bg-white overflow-hidden"
          style={{
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap lg:items-center -mx-4">
              <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                <div className="relative mx-auto md:ml-0 max-w-max">
                  <img src="images/our-story.png" alt="" />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-4">
                <div className="text-center md:text-left mb-4  leading-5 text-emerald-500  uppercase rounded-full shadow-sm">
                  OUR STORY
                </div>
                <h1 className="mb-8 text-center md:text-left text-4xl md:text-5xl leading-tight text-coolGray-900 font-medium tracking-tighter font-heading">
                  We get it, because we have been there
                </h1>
                <p className="mb-6 text-lg text-center md:text-left text-coolGray-500 ">
                  A few years ago, Sarah, the founder of Nemu, experienced the
                  loss of her grandmother. Witnessing the emotional and
                  stressful process of dividing inherited property among family
                  members, she realized the need for an easy, efficient, and
                  fair solution. Unable to find one, she decided to build it
                  herself.
                </p>
                <div className="w-full text-center md:text-left md:w-auto py-1 md:py-0">
                  <Link
                    className="w-fit inline-block py-3 px-5 mx-auto text-base md:text-lg leading-4 text-emerald-500  text-center bg-transparent hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                    to={"/how-it-works"}
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* how we help */}
        <section
          className="py-20 xl:pt-24 xl:pb-28 bg-white"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-10">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
                    <span className="inline-block py-px px-2 mb-4  leading-5 text-emerald-500  uppercase rounded-9xl">
                      OUR SERVICES
                    </span>
                    <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-medium tracking-tighter font-heading">
                      How we help
                    </h3>
                    <p className="text-lg  leading-8 text-coolGray-500 ">
                      Managing and dividing property doesn’t need to be
                      challenging. Families who use our app are able to quickly
                      catalog their items, reliably appraise their valuables,
                      equitably divide what’s most wanted, and confidently sell
                      what’s left. Not sure you need all of these tools at once?
                      No problem - choose the package that fits your situation.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <div className="flex gap-4 flex-wrap justify-center items-center -mb-2">
                      <a
                        className="w-fit inline-block py-3 px-5  text-base md:text-lg leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                        href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                      >
                        Free Sign Up
                      </a>
                      {/* <div className="w-full md:w-auto py-1 md:py-0"> */}
                      <Link
                        className="w-fit inline-block py-3 px-5  text-base md:text-lg leading-4 text-emerald-500  text-center bg-transparent hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-md shadow-sm"
                        to={"/how-it-works"}
                      >
                        Learn more
                      </Link>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap justify-between w-full gap-10 px-4 mb-5 lg:mb-0">
                {cards.map((card) => {
                  return <LandingCard {...card} />;
                })}
              </div>
            </div>
          </div>
        </section>
        {/* download now */}
        <DownloadApp />
        {/* testimonials */}

        <section
          className="py-24 md:pb-28 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light-big.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container md:h-[550px] px-4 mx-auto">
            <div className="text-center   mb-4  leading-5 text-emerald-500  uppercase rounded-9xl">
              TESTIMONIALS
            </div>
            <h3 className="mb-10 text-center text-3xl md:text-4xl text-coolGray-900 font-medium tracking-tighter font-heading">
              Hear from our customers
            </h3>
            <Testimonial />
          </div>
        </section>
        {/* faq */}
        <Faq faqs={faqs} />
        {/* resources */}
        <section
          className="py-24 bg-white"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundRepeat: "no-repeat",
          //   backgroundPosition: "left top",
          // }}
        >
          <div className="container px-4 mx-auto">
            <div className="md:max-w-5xl mx-auto mb-16 text-center">
              <span className="inline-block py-px px-2 mb-4  leading-5 text-emerald-500  uppercase rounded-full shadow-sm">
                BLOGS
              </span>
              <h3 className="mb-4 text-3xl md:text-5xl leading-tight text-darkCoolGray-900 font-medium tracking-tighter font-heading">
                Resources to help you out
              </h3>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 md:mb-20">
              <div className="w-full px-4 mb-8 md:w-1/3">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img className="w-full" src="images/blog-1.png" alt="" />
                </a>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium hover:underline"
                  href="#"
                >
                  Appointing an executor for your estate
                </a>
                <p className="mb-4 text-base md:text-lg text-coolGray-400 ">
                  We've all experienced the chaos of multiple spreadsheets,
                  tracking and insight tools, and scrambling for the right data
                  at the right time.
                </p>
                <a
                  className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 "
                  href="#"
                >
                  <span className="mr-3">Read Post</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/3">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img className="w-full" src="images/blog-1.png" alt="" />
                </a>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium hover:underline"
                  href="#"
                >
                  Find a valuator for your precious items
                </a>
                <p className="mb-4 text-base md:text-lg text-coolGray-400 ">
                  We've all experienced the chaos of multiple spreadsheets,
                  tracking and insight tools, and scrambling for the right data
                  at the right time.
                </p>
                <a
                  className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 "
                  href="#"
                >
                  <span className="mr-3">Read Post</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
              <div className="w-full px-4 mb-8 md:w-1/3">
                <a className="block mb-6 overflow-hidden rounded-md" href="#">
                  <img className="w-full" src="images/blog-2.png" alt="" />
                </a>
                <a
                  className="inline-block mb-4 text-2xl leading-tight text-coolGray-800 hover:text-coolGray-900 font-medium hover:underline"
                  href="#"
                >
                  Who can I add as a beneficiary to my estate?
                </a>
                <p className="mb-4 text-base md:text-lg text-coolGray-400 ">
                  We've all experienced the chaos of multiple spreadsheets,
                  tracking and insight tools, and scrambling for the right data
                  at the right time.
                </p>
                <a
                  className="inline-flex items-center text-base md:text-lg text-green-500 hover:text-green-600 "
                  href="#"
                >
                  <span className="mr-3">Read Post</span>
                  <svg
                    width={8}
                    height={10}
                    viewBox="0 0 8 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.94667 4.74665C7.91494 4.66481 7.86736 4.59005 7.80666 4.52665L4.47333 1.19331C4.41117 1.13116 4.33738 1.08185 4.25617 1.04821C4.17495 1.01457 4.08791 0.997253 4 0.997253C3.82246 0.997253 3.6522 1.06778 3.52667 1.19331C3.46451 1.25547 3.4152 1.32927 3.38156 1.41048C3.34792 1.4917 3.33061 1.57874 3.33061 1.66665C3.33061 1.84418 3.40113 2.01445 3.52667 2.13998L5.72667 4.33331H0.666667C0.489856 4.33331 0.320286 4.40355 0.195262 4.52858C0.070238 4.6536 0 4.82317 0 4.99998C0 5.17679 0.070238 5.34636 0.195262 5.47138C0.320286 5.59641 0.489856 5.66665 0.666667 5.66665H5.72667L3.52667 7.85998C3.46418 7.92196 3.41458 7.99569 3.38074 8.07693C3.34689 8.15817 3.32947 8.24531 3.32947 8.33331C3.32947 8.42132 3.34689 8.50846 3.38074 8.5897C3.41458 8.67094 3.46418 8.74467 3.52667 8.80665C3.58864 8.86913 3.66238 8.91873 3.74361 8.95257C3.82485 8.98642 3.91199 9.00385 4 9.00385C4.08801 9.00385 4.17514 8.98642 4.25638 8.95257C4.33762 8.91873 4.41136 8.86913 4.47333 8.80665L7.80666 5.47331C7.86736 5.40991 7.91494 5.33515 7.94667 5.25331C8.01334 5.09101 8.01334 4.90895 7.94667 4.74665Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex justify-center mx-auto max-w-max bg-white border border-coolGray-100 rounded-md shadow-lg" />
          </div>
        </section>
        {/* newsletter */}
        <Newsletter />
        {/* footer */}
        <Footer />
      </>
    </React.Fragment>
  );
}
