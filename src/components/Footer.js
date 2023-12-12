import React from "react";
import {
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section
      className=" "
      style={{
        background: "var(--primary-primary-500, #075362)",
        backgroundPosition: "center",
      }}
    >
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4 justify-around ">
          <div className="flex flex-col gap-4 w-full md:w-1/2 lg:w-4/12 px-4 mb-16 lg:mb-0">
            <Link className="inline-block mb-4" to={"/"}>
              <img className="h-8" src="/images/nemu-logo-light.svg" alt="" />
            </Link>
            <p className="text-base md:text-lg  lg:w-64 text-white">
              We are on a mission to simplify managing and dividing heirlooms so
              families can focus on what matters most during life’s most trying
              times.
            </p>
            <div className="gap-4 flex">
              <a
                href={"https://www.instagram.com/my_nemu/"}
                target="_blank"
                className="p-3 rounded-lg bg-white"
              >
                <Instagram color="#075362" />
              </a>
              <a
                href={"https://www.linkedin.com/company/mynemu/"}
                target="_blank"
                className="p-3 rounded-lg bg-white"
              >
                <Linkedin color="#075362" />
              </a>
              <a
                href={"https://www.facebook.com/mynemuapp"}
                target="_blank"
                className="p-3 rounded-lg bg-white"
              >
                <Facebook color="#075362" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3
              className="mb-5 text-lg font-medium text-white"
              // contentEditable="false"
            >
              Pages
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/about-us"
                  // contentEditable="false"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/how-it-works"
                  // contentEditable="false"
                >
                  Services
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/partner"
                  // contentEditable="false"
                >
                  Partner
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/blog"
                  // contentEditable="false"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/contact-us"
                  // contentEditable="false"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 lg:w-2/12 px-4 mb-16 lg:mb-0">
            <h3
              className="mb-5 text-lg font-medium text-white"
              // contentEditable="false"
            >
              Contact Us
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-coolGray-600  text-white"
                  href="tel:+16234321678"
                  // contentEditable="false"
                >
                  +1 623-432-1678
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-coolGray-600  text-white"
                  href="mailto:support@mynemu.com"
                  // contentEditable="false"
                >
                  support@mynemu.com
                </a>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/terms-of-use"
                  // contentEditable="false"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/privacy-policy"
                  // contentEditable="false"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-coolGray-600  text-white"
                  to="/legal"
                  // contentEditable="false"
                >
                  Legal Information
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 lg:w-4/12 px-4">
            <h3
              className="mb-5 text-lg font-medium text-white"
              // contentEditable="false"
            >
              Get the app
            </h3>
            <div className="flex flex-wrap">
              <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                <a href="https://apps.apple.com/us/app/nemu/id6471528649">
                  <img
                    src="/images/App-Store.svg"
                    alt=""
                    className="py-3 rounded "
                  />
                </a>
                <a href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww">
                  {" "}
                  <img
                    src="/images/Play-Store.svg"
                    alt=""
                    className="py-3 rounded "
                  />
                </a>
              </div>
              <div className="w-full lg:w-auto py-1 lg:py-0" />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="border-b border-coolGray-500 " /> */}
      <p
        className="py-6 md:pb-6 text-sm bg-emerald-700 text-center text-white"
        // contentEditable="false"
      >
        © 2023 Nemu, Inc. All rights reserved.
      </p>
    </section>
  );
};
