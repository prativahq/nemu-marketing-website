import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Download } from "./Download";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordian";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const path = window.location.pathname;
  // console.log(path);

  useEffect(() => {
    document.body.style.zoom = "100%";
  });

  const toggleZoom = () => {
    if (document.body.style.zoom === "100%") {
      document.body.style.zoom = "120%";
    } else document.body.style.zoom = "100%";
  };

  return (
    <section className="shadow shadow-[#EAEBEB] bg-white font-body">
      <nav className=" flex justify-between py-6  container mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-16">
            <div className=" ">
              <Link className="block max-w-max" to="/">
                <img
                  loading="lazy"
                  className="h-6"
                  src="/images/nemu-logo-dark.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden xl:block ">
              <ul className="flex justify-center">
                <li className="mr-12">
                  <DropdownMenu
                    open={servicesDropdownOpen}
                    onOpenChange={setServicesDropdownOpen}
                  >
                    <DropdownMenuTrigger>
                      <div
                        className={`${
                          servicesDropdownOpen && "text-emerald-500"
                        } flex items-center gap-1 text-coolGray-500 hover:text-coolGray-900 text-base`}
                      >
                        <span>Services</span>
                        {servicesDropdownOpen ? (
                          <ChevronDown
                            className="mt-1 transform rotate-180"
                            size={17}
                          />
                        ) : (
                          <ChevronDown className="mt-1" size={17} />
                        )}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-coolGray-500 rounded-lg border border-[#EAECF0] shadow-none px-3 py-2">
                      <div>
                        <Link to={"/estate-management"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Estate Management
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link to={"/downsizing"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Downsizing
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />

                        <Link to={"/divorce"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Divorce
                          </DropdownMenuItem>
                        </Link>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="mr-12">
                  <Link
                    className={`${
                      path === "/about-us"
                        ? "text-emerald-500"
                        : "text-coolGray-500"
                    }  hover:text-coolGray-900 text-base`}
                    to="/about-us"
                    // contentEditable="false"
                  >
                    About
                  </Link>
                </li>
                <li className="mr-12">
                  <DropdownMenu
                    open={resourcesDropdownOpen}
                    onOpenChange={setResourcesDropdownOpen}
                  >
                    <DropdownMenuTrigger>
                      <div
                        className={`${
                          resourcesDropdownOpen && "text-emerald-500"
                        } flex items-center gap-1 text-coolGray-500 hover:text-coolGray-900 text-base`}
                      >
                        <span>Resources</span>
                        {resourcesDropdownOpen ? (
                          <ChevronDown
                            className="mt-1 transform rotate-180"
                            size={17}
                          />
                        ) : (
                          <ChevronDown className="mt-1" size={17} />
                        )}
                        {/* <ChevronDown className="mt-1" size={17} /> */}
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-coolGray-500 rounded-lg border border-[#EAECF0] shadow-none px-3 py-2">
                      <div>
                        <Link to={"/blog"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Blogs & Press
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <HashLink to={"/contact-us#faq"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            FAQs
                          </DropdownMenuItem>
                        </HashLink>
                        <DropdownMenuSeparator />
                        <Link to={"/pricing"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Pricing
                          </DropdownMenuItem>
                        </Link>
                        <DropdownMenuSeparator />
                        <Link to={"/contact-us"}>
                          <DropdownMenuItem className="hover:text-coolGray-900 focus:bg-transparent">
                            Contact Us
                          </DropdownMenuItem>
                        </Link>
                      </div>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </li>
                <li className="mr-12">
                  <Link
                    className={`${
                      path === "/partner"
                        ? "text-emerald-500"
                        : "text-coolGray-500"
                    }  hover:text-coolGray-900 text-base`}
                    to="/partner"
                    // contentEditable="false"
                  >
                    Partner
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden xl:block ">
            <div className="flex gap-5 items-center justify-end">
              <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Adjust text size"
                onClick={toggleZoom}
              >
                <img loading="lazy" alt="" src="images/zoom-nav.svg" />
              </button>
              <Tooltip className="absolute z-40" id="my-tooltip" />
              {/* <Download /> */}
              <a
                href="https://app.mynemu.com/sign-up"
                className="flex items-center py-5 sm:py-3 px-6 w-fit text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
              >
                Start For Free
              </a>
            </div>
          </div>
        </div>
        <div className="flex gap-6">
          <button className="xl:hidden" onClick={toggleZoom}>
            <img loading="lazy" alt="" src="images/zoom-nav.svg" />
          </button>
          <button
            onClick={() => setToggle(!toggle)}
            className="navbar-burger self-center xl:hidden"
          >
            <img
              loading="lazy"
              className="w-8"
              alt=""
              src="images/hamburger-menu.svg"
            />
          </button>
        </div>
      </nav>
      <div
        className={`navbar-menu ${
          toggle ? "block" : "hidden"
        } fixed top-0 left-0 z-50 w-full h-full bg-coolGray-900 bg-opacity-50`}
      >
        <div className="fixed top-0 left-0 bottom-0  w-4/6 max-w-xs bg-white">
          <nav className="relative p-6 h-full overflow-y-auto">
            <div className="flex flex-col justify-between h-full">
              <Link className="inline-block" to="/">
                <img
                  loading="lazy"
                  className="h-6"
                  src="/images/nemu-logo-dark.svg"
                  alt=""
                />
              </Link>
              <ul className="py-6">
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={` py-3 px-4 flex text-coolGray-500 hover:text-coolGray-900 text-base hover:bg-coolGray-50 rounded-md`}
                      >
                        Services
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col  text-[13px] px-4 text-coolGray-500 ">
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/estate-management"}
                          >
                            Estate Management
                          </Link>
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/downsizing"}
                          >
                            Downsizing
                          </Link>
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/divorce"}
                          >
                            Divorce
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="border-b">
                  <Link
                    className={`block py-3 px-4 ${
                      path === "/about-us" && "bg-coolGray-50"
                    } text-coolGray-500 hover:text-coolGray-900 text-base hover:bg-coolGray-50 rounded-md`}
                    to="/about-us"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger
                        className={` py-3 px-4 flex text-coolGray-500 hover:text-coolGray-900 text-base hover:bg-coolGray-50 rounded-md`}
                      >
                        Resources
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col  text-[13px] px-4 text-coolGray-500 ">
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/blog"}
                          >
                            Blogs & Press
                          </Link>
                          <HashLink
                            className="py-3 hover:text-coolGray-900"
                            to={"/contact-us#faq"}
                          >
                            FAQs
                          </HashLink>
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/pricing"}
                          >
                            Pricing
                          </Link>
                          <Link
                            className="py-3 hover:text-coolGray-900"
                            to={"/contact-us"}
                          >
                            Contact Us
                          </Link>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li>
                  <Link
                    className={`block py-3 px-4 ${
                      path === "/partner" && "bg-coolGray-50"
                    } text-coolGray-500 hover:text-coolGray-900 text-base hover:bg-coolGray-50 rounded-md`}
                    to="/partner"
                  >
                    Partner
                  </Link>
                </li>
              </ul>

              <a
                href="https://app.mynemu.com/sign-up"
                className=" py-5 sm:py-3 px-6 w-full  text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
              >
                Start For Free
              </a>
            </div>
          </nav>
          <button
            onClick={() => setToggle(!toggle)}
            className="navbar-close absolute top-5 p-4 right-3"
          >
            <svg
              width={12}
              height={12}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.94004 6L11.14 1.80667C11.2656 1.68113 11.3361 1.51087 11.3361 1.33333C11.3361 1.1558 11.2656 0.985537 11.14 0.860002C11.0145 0.734466 10.8442 0.66394 10.6667 0.66394C10.4892 0.66394 10.3189 0.734466 10.1934 0.860002L6.00004 5.06L1.80671 0.860002C1.68117 0.734466 1.51091 0.663941 1.33337 0.663941C1.15584 0.663941 0.985576 0.734466 0.860041 0.860002C0.734505 0.985537 0.66398 1.1558 0.66398 1.33333C0.66398 1.51087 0.734505 1.68113 0.860041 1.80667L5.06004 6L0.860041 10.1933C0.797555 10.2553 0.747959 10.329 0.714113 10.4103C0.680267 10.4915 0.662842 10.5787 0.662842 10.6667C0.662842 10.7547 0.680267 10.8418 0.714113 10.9231C0.747959 11.0043 0.797555 11.078 0.860041 11.14C0.922016 11.2025 0.99575 11.2521 1.07699 11.2859C1.15823 11.3198 1.24537 11.3372 1.33337 11.3372C1.42138 11.3372 1.50852 11.3198 1.58976 11.2859C1.671 11.2521 1.74473 11.2025 1.80671 11.14L6.00004 6.94L10.1934 11.14C10.2554 11.2025 10.3291 11.2521 10.4103 11.2859C10.4916 11.3198 10.5787 11.3372 10.6667 11.3372C10.7547 11.3372 10.8419 11.3198 10.9231 11.2859C11.0043 11.2521 11.0781 11.2025 11.14 11.14C11.2025 11.078 11.2521 11.0043 11.286 10.9231C11.3198 10.8418 11.3372 10.7547 11.3372 10.6667C11.3372 10.5787 11.3198 10.4915 11.286 10.4103C11.2521 10.329 11.2025 10.2553 11.14 10.1933L6.94004 6Z"
                fill="#556987"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
