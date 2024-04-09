import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Faq } from "../components/Faq";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Download } from "../components/Download";

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
  const faqs = [
    {
      id: 1,
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
      id: 2,
      question:
        "How long will it be until I hear back from someone on Nemu's team",
      answer:
        "Our staff monitor our inbox and phones every day. Whether you leave us a voicemail or an email, we try our best to get back to every customer within 48 hours. ",
    },
    {
      id: 3,
      question: "I'm not great with technology. Is that going to be a problem?",
      answer:
        "Our app is designed for simplicity. We've spent countless hours testing it with real executors, beneficiaries, and people of all ages - which means you don't need to be a techie to get the job done. If you do get stuck, our team is always there to help.",
    },
    {
      id: 4,
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
      id: 5,
      question: "How much does Nemu cost?",
      answer: (
        <p>
          We have a variety of packages ranging from $100 to $999. To make sure
          you only pay for what you need, you can start small and then add the
          services that fit your situation. You can see our pricing options{" "}
          <HashLink className="underline" to={"/how-it-works#pricing"}>
            here
          </HashLink>
          . Still undecided? Start with a Free Trial and see for yourself!{" "}
        </p>
      ),
    },
    {
      id: 6,
      question: "Can I start with a free trial before buying?",
      answer: (
        <p>
          Of course! We offer a free trial for all of our users. We think you'll
          like what you see. You can Sign Up{" "}
          <a href="https://app.mynemu.com" className="underline">
            here
          </a>{" "}
          to get started.
        </p>
      ),
    },
    {
      id: 7,
      question: "How does Nemu work?",
      answer: (
        <p>
          Nemu has 4 main features, and you can use them in any order you like:
          <br></br>- Catalog: Cataloging your items is made quick and simple
          because our app will recognize how many items are in the photo and
          help you get them titled! <br></br>- Appraise: If you want something
          appraised, you can count on our network of certified appraisers to get
          the job done!<br></br>- Divide: Beneficiaries enter an Emotional Value
          Score to tell us how much they want a given item. Then, our Nash
          Equilibrium Algorithm looks at everyone’s scores, and ensures the
          items are divided as fairly as mathematically possible. <br></br>-
          Sell: If you’d like help selling any of your items, we’re here to
          help! We take into account the value of your item, current market
          conditions, and how quickly you need the item sold to ensure we sell
          through the right channels and get the best price
        </p>
      ),
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
              <div className="w-full mb-10 md:mb-0 md:w-[500px] ">
                <div className=" mx-auto text-center px-10 lg:px-32 pt-8 pb-12  bg-white border border-coolGray-200 shadow-sm rounded-lg">
                  <div className="inline-flex mb-3 items-center justify-center w-12 h-12 rounded-full">
                    <img alt="" loading="lazy" src="images/email-icon.svg" />
                  </div>
                  <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-medium font-heading">
                    Email us
                  </h3>
                  <p className="py-6 text-coolGray-500 text-lg">
                    Send us an email and someone from our team will get back to
                    you as soon as possible.
                  </p>
                  <a
                    className="text-lg text-emerald-500 hover:text-coolGray-600   "
                    href="mailto:hello@mynemu.com"
                  >
                    hello@mynemu.com
                  </a>
                </div>
              </div>
              <div className="w-full mb-10 md:mb-0 md:w-[500px] ">
                <div className=" mx-auto text-center px-10  pt-8 pb-12 lg:px-32 bg-white border border-coolGray-200 shadow-sm rounded-lg">
                  <div className="inline-flex mb-3 items-center justify-center w-12 h-12 rounded-full">
                    <img alt="" loading="lazy" src="images/call-icon.svg" />
                  </div>
                  <h3 className="mb-2 text-2xl md:text-3xl leading-9 text-coolGray-800 font-heading font-medium">
                    Call us
                  </h3>
                  <p className="py-6 text-coolGray-500 text-lg">
                    Can’t wait? We can’t either! Give us a call during our
                    office hours of 9am EST - 8pm EST.
                  </p>
                  <a
                    href="tel:623-432-1678"
                    className="text-lg text-emerald-500 "
                  >
                    623-432-1678
                  </a>
                </div>
              </div>
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
