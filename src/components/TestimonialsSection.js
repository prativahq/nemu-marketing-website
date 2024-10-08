import React from "react";
import { Testimonial } from "../components/Testimonial";

const TestimonialsSection = ({ backgroundColor = "#F7F5F2" }) => {
  return (
    <section
      className={"md:py-24 py-16 md:pb-32 bg-[" + backgroundColor + "]"}
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
  );
};

export default TestimonialsSection;
