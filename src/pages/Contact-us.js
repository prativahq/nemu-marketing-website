import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Faq } from "../components/Faq";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "",
  meta: [],
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
      question: "What if I need help?",
      answer:
        "You aren't alone! Our team is available to answer any and every question you have. And, if your family needs assistance, we can also provide 1-1 support throughout the entire process. Have a question? Reach out through our contact page [hyperlink to contact page]",
    },
    {
      question:
        "How long will it be until I hear back from someone on Nemu's team",
      answer:
        "Our staff monitor our inbox and phones every day. Whether you leave us a voicemail or an email, we try our best to get back to every customer within 48 hours. ",
    },
    {
      question: "I'm not great with technology. Is that going to be a problem?",
      answer:
        "Our app is designed for simplicity. We've spent countless hours testing it with real executors, beneficiaries, and people of all ages - which means you don't need to be a techie to get the job done. If you do get stuck, our team is always there to help.",
    },
    {
      question: "Is this something that will fit my situation?",
      answer: `Nemu works for items big and small. We've helped those in small apartments and those with 3 vacation homes. We've divided items among families of 2 and families much, much larger. Whether you've been given the responsiblitiy of settling someone's estate, or you're trying to make sure no one has to worry about yours, we're here for you.

      To make sure you only pay for what you need, we have several packages that you can customize to fit your situation. Check them out here! [Hyperlink to pricing section of How-it-works page]`,
    },
    {
      question: "How much does Nemu cost?",
      answer:
        "We have a variety of packages ranging from $100 to $999. To make sure you only pay for what you need, you can start small and then add the services that fit your situation. You can see our pricing options here [Hyperlink to pricing section of How-it-works page]. Still undecided? Start with a Free Trial and see for yourself! ",
    },
    {
      question: "Can I start with a free trial before buying?",
      answer: `Of course! We offer a free trial for all of our users. We think you'll like what you see. You can sign up here [hyper link to sign up now]`,
    },
    {
      question: "How does Nemu work?",
      answer: `Nemu has 4 main features, and you can use them in any order you like:
      - Catalog: Cataloging your items is made quick and simple because our app will recognize how many items are in the photo and help you get them titled!
      - Appraise: If you want something appraised, you can count on our network of certified appraisers to get the job done!
      - Divide: Beneficiaries enter an Emotional Value Score to tell us how much they want a given item. Then, our Nash Equilibrium Algorithm looks at everyone’s scores, and ensures the items are divided as fairly as mathematically possible. 
      - Sell: If you’d like help selling any of your items, we’re here to help! We take into account the value of your item, current market conditions, and how quickly you need the item sold to ensure we sell through the right channels and get the best price`,
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
          className="relative py-24 lg:py-[300px] pt-20 lg:mb-64 "
          style={{
            background: "var(--surface-light-bg, #F7F5F2)",
            backgroundPosition: "center",
          }}
        >
          <div className="lg:absolute lg:-my-44 right-0 left-0 container px-4 mx-auto">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                CONTACT US
              </span>
              <h1
                className="mb-6 mt-3 text-4xl md:text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight"
                contentEditable="false"
              >
                A Real Inbox, Monitored
                <div>by Real People</div>
              </h1>
              <img src="images/contact-1.svg" className="mx-auto" />
            </div>
            <div className="flex flex-wrap -mx-4 pb-16">
              <div className="w-full mb-10 md:mb-0 md:w-1/2 px-4">
                <div className=" mx-auto text-center px-10 lg:px-32 py-8  bg-white border border-coolGray-200 shadow-sm rounded-lg">
                  <div className="inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="h-6"
                    >
                      <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z" />
                    </svg>
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
              <div className="w-full mb-10 md:mb-0 md:w-1/2 px-4">
                <div className=" mx-auto text-center px-10  py-8 lg:px-32 bg-white border border-coolGray-200 shadow-sm rounded-lg">
                  <div className="inline-flex mb-6 items-center justify-center w-12 h-12 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
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
