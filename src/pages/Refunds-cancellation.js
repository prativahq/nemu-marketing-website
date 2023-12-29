import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "Nemu: Refund Policy",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function RefundsCancellation() {
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
          className="py-20 xl:pt-24 xl:pb-28 bg-[#F7F5F2]"
          // style={{
          //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-10">
                <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full md:w-1/2 mb-10 md:mb-0">
                    <h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                      Refund Policy
                    </h3>
                  </div>
                  <div className="w-full md:w-auto"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-5 lg:mb-0">
                <p className="mb-5  text-lg leading-9 text-coolGray-500">
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
