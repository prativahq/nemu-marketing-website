import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export const Faq = ({ faqs }) => {
  console.log(window.location.href);
  return (
    <section className="py-10 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="tracking-widest text-center  mb-5   text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
            FAQs
          </span>
          <h2 className="mb-10 mt-3 text-center text-3xl md:text-4.5xl text-coolGray-900    font-medium font-heading tracking-normal">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col  max-w-3xl mx-auto">
          {faqs.map((faq) => {
            return (
              <div key={faq.id} id={`faq-${faq.id}`}>
                <Disclosure
                  defaultOpen={
                    window.location.href.split("#").length > 1 &&
                    window.location.href.split("#")[1] === `faq-${faq.id}`
                  }
                >
                  <Disclosure.Button className="w-full py-8  bg-white border-b border-b-[#e2e2e2] flex items-center justify-start ">
                    <div className="w-fit text-left font-semibold">
                      {" "}
                      {faq.question}
                    </div>
                    <ChevronDown className="ml-auto text-[#959595]" />
                  </Disclosure.Button>
                  <Disclosure.Panel className="p-2  text-coolGray-500">
                    {faq.answer}
                  </Disclosure.Panel>
                </Disclosure>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
