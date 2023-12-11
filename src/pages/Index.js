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
import Blogs from "../posts.json";
import { BlogCard } from "../components/BlogCard";

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
          <div className="pt-10 pb-16">
            <div className="container px-4 mx-auto">
              <div className="flex flex-wrap xl:items-center -mx-4">
                <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                  <div className="text-center md:text-left mb-4 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                    WELCOME
                  </div>
                  <h1 className="mb-6 text-center md:text-left text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                    Split Property, Not Relationships
                  </h1>
                  <p className="text-center md:text-left mb-8 text-lg leading-9  text-coolGray-500 ">
                    Sometimes the responsibility associated with death, divorce,
                    or downsizing can be hard to bear. We’re here to make it a
                    lot easier.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-5">
                    {/* <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"> */}
                    <a
                      className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                    >
                      Free Sign Up
                    </a>
                    {/* </div> */}
                    {/* <div className="w-full md:w-auto py-1 md:py-0"> */}
                    <Link
                      className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
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
          className="pt-48 pb-32 bg-white overflow-hidden"
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
                <div className="text-center md:text-left mb-4 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                  OUR STORY
                </div>
                <h2 className="mb-6 text-center md:text-left text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                  We get it, because we have been there
                </h2>
                <p className="mb-6 text-lg leading-9 text-center md:text-left text-coolGray-500 ">
                  A few years ago, Sarah, the founder of Nemu, experienced the
                  loss of her grandmother. Witnessing the emotional and
                  stressful process of dividing inherited property among family
                  members, she realized the need for an easy, efficient, and
                  fair solution. Unable to find one, she decided to build it
                  herself.
                </p>
                <div className="w-full text-center md:text-left md:w-auto py-1 md:py-0">
                  <Link
                    className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-transparent hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
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
                    <span className="text-center md:text-left mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                      OUR SERVICES
                    </span>
                    <h2 className="mb-6 mt-3 text-center md:text-left text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                      How we help
                    </h2>
                    <p className="text-lg  leading-9 text-coolGray-500 ">
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
                        className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                        href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww"
                      >
                        Free Sign Up
                      </a>
                      {/* </div> */}
                      {/* <div className="w-full md:w-auto py-1 md:py-0"> */}
                      <Link
                        className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-emerald-500  text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
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
        <section className="relative py-24 ">
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
          <div className="container md:h-[550px] px-4 mx-auto">
            <div className="text-center  mb-3 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
              TESTIMONIALS
            </div>
            <h2 className="mb-10 mt-3 text-center  text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
              Hear from our customers
            </h2>
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
          <div className="container px-6 mx-auto">
            <div className="md:max-w-5xl mx-auto mb-16 text-center">
              <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                BLOGS
              </span>
              <h3 className="mb-6 mt-3 text-center  text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                Resources to help you out
              </h3>
            </div>
            <div className="flex flex-wrap gap-5 -mx-4 mb-12 md:mb-20">
              {Blogs.map((blog) => {
                return (
                  <BlogCard
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
