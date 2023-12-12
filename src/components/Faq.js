import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import React from "react";

export const Faq = ({ faqs }) => {
  return (
    <section
      className="py-10 md:py-24 bg-white"
      // style={{
      //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-center  mb-5   text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
            FAQs
          </span>
          <h2 className="mb-10 mt-3 text-center text-3xl md:text-4.5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="flex flex-col gap-4  max-w-3xl mx-auto">
          {faqs.map((faq) => {
            return (
              <Disclosure>
                <Disclosure.Button className="py-6  bg-white border-b border-b-[#e2e2e2] flex items-center justify-start ">
                  <div className="w-fit text-left font-semibold">
                    {" "}
                    {faq.question}
                  </div>
                  <ChevronDown className="ml-auto" />
                </Disclosure.Button>
                <Disclosure.Panel className="p-2  text-coolGray-500">
                  {faq.answer}
                </Disclosure.Panel>
              </Disclosure>
            );
          })}
        </div>
      </div>
    </section>
  );
};
