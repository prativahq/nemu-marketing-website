import React from "react";
import { Check } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="relative   lg:mb-[450px] pt-64 pb-64 lg:pb-96 bg-[#F7F5F2]"
    >
      <div className="lg:absolute left-0 right-0 -my-48 container mx-auto ">
        <div className="text-center ">
          <span
            className="tracking-widest text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500"
            // contentEditable="false"
          >
            PRICING
          </span>
          <h2
            className="mb-6 mt-3 text-center text-3xl md:text-4.5xl text-coolGray-900     font-medium font-heading tracking-normal"
            // contentEditable="false"
          >
            That Sounds Great!
            <div>What does all of this cost?</div>
          </h2>
        </div>
        <div className=" ">
          <div className="text-center">
            {/* <TabsList className="my-6 relative">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="annual">Annual</TabsTrigger>
              <div className="absolute right-0 -top-3 text-[10px] rounded-sm px-2 py-1 font-bold bg-[#EBF9ED] border-2 border-[#B5DEBC] text-[#2B973D]">
                Save 15%
              </div>
            </TabsList> */}
            {/* <TabsContent value="monthly">
              <img
                loading="lazy"
                className="sm:w-[327px] my-6 mx-auto"
                src="images/money-back-guarantee.svg"
                alt=""
              />
              <div className="text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8  mt-16 ">
                <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                  <div className="">
                    <h3
                      style={{ fontSize: "1.8rem" }}
                      className="mb-6  font-heading  text-coolGray-800 font-medium"
                      // contentEditable="false"
                    >
                      Heritage
                    </h3>
                    <div
                      style={{ fontSize: "2rem" }}
                      className="mb-6 text-emerald-500 font-medium text-xl"
                    >
                      $5.99
                      <span
                        className="text-[#A0A2A3]"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        Monthly
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start text-lg  py-8">
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Catalog up to 150 items{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Capture family stories{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Access division, appraising, and selling services{" "}
                      </span>
                    </li>
                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Start 15 Day Free Trial
                    </a>
                  </div>
                  <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                    You won’t be charged until the trial expires
                  </p>
                </div>
                <div
                  className="bg-gradient-to-b from-[#C7A4EA] to-white rounded-2xl shadow-sm  h-fit relative"
                  style={{ padding: "2px" }}
                >
                  <div
                    style={{ fontSize: "12px" }}
                    className="rounded-full border-2 border-[#C7A4EA] p-2 px-3 absolute -top-5  left-auto right-5 bg-[#E5D5F6] text-[#6526A3] font-bold"
                  >
                    MOST POPULAR
                  </div>
                  <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl    ">
                    <div className="">
                      <h3
                        style={{ fontSize: "1.8rem" }}
                        className="mb-6  font-heading  text-coolGray-800 font-medium"
                      >
                        Harmony
                      </h3>
                      <div
                        style={{ fontSize: "2rem" }}
                        className="mb-6 text-emerald-500 font-medium "
                      >
                        $9.99
                        <span
                          className="text-[#A0A2A3]"
                          style={{ fontSize: "18px" }}
                        >
                          {" "}
                          Monthly
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-coolGray-100" />
                    <ul className="self-start text-lg  py-8">
                      <li className="flex items-center mb-6  ">
                        <Check
                          color="green"
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="text-[#747878]">
                          Everything in Heritage Plan
                        </span>
                      </li>
                      <li className="flex items-center mb-6  ">
                        <Check
                          color="green"
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="text-[#747878]">
                          Catalog up to 400 items
                        </span>
                      </li>
                      <li className="flex items-center mb-6  ">
                        <Check
                          color="green"
                          className="mr-2 flex-shrink-0"
                        />
                        <span className="text-[#747878]">
                          Download reports and checklists
                        </span>
                      </li>
                    </ul>
                    <div className="border-b flex-1 border-coolGray-100" />
                    <div className="flex justify-center mt-8">
                      <a
                        href="https://app.mynemu.com/sign-up"
                        className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      >
                        Start 15 Day Free Trial
                      </a>
                    </div>
                    <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                      You won’t be charged until the trial expires
                    </p>
                  </div>
                </div>
                <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                  <div className="">
                    <h3
                      style={{ fontSize: "1.8rem" }}
                      className="mb-6  font-heading  text-coolGray-800 font-medium"
                    >
                      Legacy
                    </h3>
                    <div
                      style={{ fontSize: "2rem" }}
                      className="mb-6 text-emerald-500 font-medium text-xl"
                    >
                      $14.99
                      <span
                        className="text-[#A0A2A3]"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        Monthly
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-coolGray-100" />

                  <ul className="self-start  text-lg py-8">
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Everything in Harmony Plan{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Catalog unlimited items{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        10% off appraising and selling services
                      </span>
                    </li>

                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className="flex justify-center mt-8">
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Start 15 Day Free Trial
                    </a>
                  </div>
                  <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                    You won’t be charged until the trial expires
                  </p>
                </div>
              </div>
            </TabsContent> */}
            <div value="annual">
              <img
                loading="lazy"
                className="sm:w-[327px] my-6 mx-auto"
                src="images/money-back-guarantee.svg"
                alt=""
              />
              <div className="text-start grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8  mt-16 ">
                {/* <div className="w-full   p-4"> */}
                <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                  <div className="">
                    <h3
                      style={{ fontSize: "1.8rem" }}
                      className="mb-6  font-heading  text-coolGray-800 font-medium"
                      // contentEditable="false"
                    >
                      Heritage
                    </h3>
                    <div
                      style={{ fontSize: "2rem" }}
                      className="mb-6 text-emerald-500 font-medium text-xl"
                    >
                      $59
                      <span
                        className="text-[#A0A2A3]"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        One Time Fee
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  <ul className="self-start text-lg  py-8">
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Catalog up to 150 items{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Capture family stories{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Access division, appraising, and selling services{" "}
                      </span>
                    </li>
                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className="flex justify-center mt-8">
                    {/* <Download /> */}
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Start 15 Day Free Trial
                    </a>
                  </div>
                  <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                    You won’t be charged until the trial expires
                  </p>
                </div>
                {/* </div> */}
                <div
                  className="bg-gradient-to-b from-[#C7A4EA] to-white rounded-2xl shadow-sm  h-fit relative"
                  style={{ padding: "2px" }}
                >
                  <div
                    style={{ fontSize: "12px" }}
                    className="rounded-full border-2 border-[#C7A4EA] p-2 px-3 absolute -top-5  left-auto right-5 bg-[#E5D5F6] text-[#6526A3] font-bold"
                  >
                    MOST POPULAR
                  </div>
                  <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl    ">
                    <div className="">
                      <h3
                        style={{ fontSize: "1.8rem" }}
                        className="mb-6  font-heading  text-coolGray-800 font-medium"
                        // contentEditable="false"
                      >
                        Harmony
                      </h3>
                      <div
                        style={{ fontSize: "2rem" }}
                        className="mb-6 text-emerald-500 font-medium "
                      >
                        $99
                        <span
                          className="text-[#A0A2A3]"
                          style={{ fontSize: "18px" }}
                        >
                          {" "}
                          One Time Fee
                        </span>
                      </div>
                    </div>
                    <div className="border-b border-coolGray-100" />
                    {/* <p className="text-[#747878] mt-8 text-lg">
                        Everything in the Fair Start Plan plus:{" "}
                      </p> */}
                    <ul className="self-start text-lg  py-8">
                      <li className="flex items-center mb-6  ">
                        <Check color="green" className="mr-2 flex-shrink-0" />
                        <span className="text-[#747878]">
                          Everything in Heritage Plan
                        </span>
                      </li>
                      <li className="flex items-center mb-6  ">
                        <Check color="green" className="mr-2 flex-shrink-0" />
                        <span className="text-[#747878]">
                          Catalog up to 400 items
                        </span>
                      </li>
                      <li className="flex items-center mb-6  ">
                        <Check color="green" className="mr-2 flex-shrink-0" />
                        <span className="text-[#747878]">
                          Download reports and checklists
                        </span>
                      </li>
                      <li className="flex items-center mb-6  ">
                        <Check color="green" className="mr-2 flex-shrink-0" />
                        <span className="text-[#747878]">
                          1 Free Division Round{" "}
                        </span>
                      </li>
                    </ul>
                    <div className="border-b flex-1 border-coolGray-100" />
                    <div className="flex justify-center mt-8">
                      {/* <Download /> */}
                      <a
                        href="https://app.mynemu.com/sign-up"
                        className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                      >
                        Start 15 Day Free Trial
                      </a>
                    </div>
                    <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                      You won’t be charged until the trial expires
                    </p>
                  </div>
                </div>
                {/* <div className="w-full   p-4"> */}
                <div className="flex flex-col pt-10 px-10 pb-10 bg-white rounded-2xl border-2 border-[#EAEBEB] shadow-sm  ">
                  <div className="">
                    <h3
                      style={{ fontSize: "1.8rem" }}
                      className="mb-6  font-heading  text-coolGray-800 font-medium"
                      // contentEditable="false"
                    >
                      Legacy
                    </h3>
                    <div
                      style={{ fontSize: "2rem" }}
                      className="mb-6 text-emerald-500 font-medium text-xl"
                    >
                      $149
                      <span
                        className="text-[#A0A2A3]"
                        style={{ fontSize: "18px" }}
                      >
                        {" "}
                        One Time Fee
                      </span>
                    </div>
                  </div>
                  <div className="border-b border-coolGray-100" />
                  {/* <p className="text-[#747878] mt-8 text-lg">
                      Everything in the Harmony Plan plus:
                    </p> */}
                  <ul className="self-start  text-lg py-8">
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Everything in Harmony Plan{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Catalog unlimited items{" "}
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        10% off appraising and selling services
                      </span>
                    </li>
                    <li className="flex items-center mb-6 text-coolGray-500 ">
                      <Check color="green" className="mr-2 flex-shrink-0" />
                      <span className="text-[#747878]">
                        Unlimited Division Rounds{" "}
                      </span>
                    </li>
                  </ul>
                  <div className="border-b flex-1 border-coolGray-100" />
                  <div className="flex justify-center mt-8">
                    {/* <Download /> */}
                    <a
                      href="https://app.mynemu.com/sign-up"
                      className="block py-5 sm:py-3 px-6 w-full sm:w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
                    >
                      Start 15 Day Free Trial
                    </a>
                  </div>
                  <p className="text-[#A0A2A3] text-sm font-normal text-center mt-5">
                    You won’t be charged until the trial expires
                  </p>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
