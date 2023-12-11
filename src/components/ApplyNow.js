import { Check } from "lucide-react";
import React from "react";

export const ApplyNow = () => {
  return (
    <section className="bg-white py-10">
      <div className="container px-4 mx-auto">
        <div
          className="relative py-11 px-16 rounded-2xl overflow-hidden bg-cover"
          style={{
            backgroundImage: 'url("images/applynow-banner.svg")',
          }}
        >
          <div className="relative z-20 flex flex-wrap items-center -m-3">
            <div className="flex flex-col gap-6 w-full md:w-1/2 p-3">
              <h2 className=" font-medium text-center md:text-left text-white tracking-tighter text-4xl font-heading">
                Join our team!
              </h2>
              <p className="text-lg text-center md:text-left text-coolGray-200 leading-9">
                Interested in helping families split property not relationships?
                Come join our team! We are a nimble but growing team eager to
                make life a lot easier for families going through difficult
                times.
              </p>
              {/* <ul className="flex flex-col gap-4">
                <li className="flex gap-2 items-center mr-6 text-sm text-white ">
                  <Check />
                  <span>Catalog Your Treasures</span>
                </li>
                <li className="flex gap-2 items-center mr-6 text-sm text-white ">
                  <Check />
                  <span>Appraise and Sell With Experts</span>
                </li>
                <li className="flex gap-2 items-center mr-6 text-sm text-white ">
                  <Check />
                  <span>Avoid the Family Fighting</span>
                </li>
              </ul> */}
              <a
                className="inline-block py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-transparent  focus:ring-2 focus:ring-white focus:ring-opacity-50 border border-white rounded-lg shadow-sm"
                href="https://forms.gle/5MM55hwYDsrxRGSG8"
                target="_blank"
              >
                Apply now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
