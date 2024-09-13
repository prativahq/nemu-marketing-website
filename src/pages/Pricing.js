import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Faq } from "../components/Faq";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

import { faqs } from "../lib/utils";
import PricingSection from "../components/PricingSection";

const meta = {
  title: "Nemu: Pricing Overview",
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

export default function Pricing() {
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
        <PricingSection title="Choose Your Plan" />
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
