import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function RefundsCancellation() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
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
                  <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h3 className="mb-4 text-3xl md:text-4xl text-coolGray-900 font-bold tracking-tighter">
                      Refunds and cancellation
                    </h3>
                  </div>
                  <div className="w-full md:w-auto"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
                <p className="mb-5 text-lg font-medium leading-7 text-coolGray-500">
                  Thank you for buying your Nemu package. We are committed to
                  making your experience easy, fair, and convenient. Please
                  note, if you change your mind about your purchase within 14
                  days, you are eligible for a full refund. If you have any
                  additional questions or concerns, please contact
                  support@mynemu.com
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className=" "
          style={{
            background: "var(--primary-primary-500, #075362)",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap pt-24 pb-12 -mx-4">
              <div className="w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
                <a className="inline-block mb-4" href="#">
                  <img
                    className="h-8"
                    src="images/nemu-logo-light.svg"
                    alt=""
                  />
                </a>
                <p className="text-base md:text-lg font-medium lg:w-64 text-white">
                  We are on a mission to simplify managing and dividing
                  heirlooms so families can focus on what matters most during
                  life’s most trying times.
                </p>
              </div>
              <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                <h3
                  className="mb-5 text-lg font-bold text-white"
                  contentEditable="false"
                >
                  Pages
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="#"
                      contentEditable="false"
                    >
                      About
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="#"
                      contentEditable="false"
                    >
                      Services
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="#"
                      contentEditable="false"
                    >
                      Partner
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="#"
                      contentEditable="false"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="#"
                      contentEditable="false"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
                <h3
                  className="mb-5 text-lg font-bold text-white"
                  contentEditable="false"
                >
                  Contact Us
                </h3>
                <ul>
                  <li className="mb-4" contentEditable="false">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="tel:+16234321678"
                      contentEditable="false"
                    >
                      +1 623-432-1678
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="mailto:support@mynemu.com"
                      contentEditable="false"
                    >
                      support@mynemu.com
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="/terms-of-service.html"
                      contentEditable="false"
                    >
                      Terms Of Service
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="/privacy-policy.html"
                      contentEditable="false"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block hover:text-coolGray-600 font-medium text-white"
                      href="/legal-information.html"
                      contentEditable="false"
                    >
                      Legal Information
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-4/12 px-4">
                <h3
                  className="mb-5 text-lg font-bold text-white"
                  contentEditable="false"
                >
                  Get the app
                </h3>
                <div className="flex flex-wrap">
                  <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                    <img
                      src="images/App-Store.svg"
                      alt=""
                      className="py-3 rounded shadow-md"
                    />
                    <img
                      src="images/Play-Store.svg"
                      alt=""
                      className="py-3 rounded shadow-md"
                    />
                  </div>
                  <div className="w-full lg:w-auto py-1 lg:py-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-coolGray-100" />
          <p
            className="py-6 md:pb-6 text-sm font-medium text-center text-white"
            contentEditable="false"
          >
            © 2023 Nemu, Inc. All rights reserved.
          </p>
        </section>
      </>
    </React.Fragment>
  );
}
