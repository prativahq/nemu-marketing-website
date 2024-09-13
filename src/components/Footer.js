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
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-24 pb-12 -mx-4 justify-between ">
          <div
            className="flex flex-col gap-8  px-4 mb-16 lg:mb-0"
            style={{ maxWidth: "360px" }}
          >
            <Link className="inline-block " to={"/"}>
              <img
                loading="lazy"
                className="h-6"
                src="/images/nemu-logo-light.svg"
                alt=""
              />
            </Link>
            <p className="text-base leading-9 mb-8 lg:w-96 text-[#B2CACE]">
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
                <img src="/images/instagram-footer.svg" alt="" loading="lazy" />
              </a>
              <a
                href={"https://www.linkedin.com/company/mynemu/"}
                target="_blank"
                className="p-3 rounded-lg bg-white"
              >
                <img src="/images/linkedin-footer.svg" alt="" loading="lazy" />
              </a>
              <a
                href={"https://www.facebook.com/mynemuapp"}
                target="_blank"
                className="p-3 rounded-lg bg-white"
              >
                <img src="/images/facebook-footer.svg" alt="" loading="lazy" />
              </a>
            </div>
          </div>
          <div className=" px-4 mb-16 lg:mb-0">
            <h3
              className="mb-5  font-medium text-white"
              // contentEditable="false"
            >
              Pages
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/about-us"
                  // contentEditable="false"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/estate-management"
                  // contentEditable="false"
                >
                  Estate Management
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/downsizing"
                  // contentEditable="false"
                >
                  Downsizing
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/divorce"
                  // contentEditable="false"
                >
                  Divorce
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/partner"
                  // contentEditable="false"
                >
                  Partner
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/blog"
                  // contentEditable="false"
                >
                  Resources
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/pricing"
                  // contentEditable="false"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/contact-us"
                  // contentEditable="false"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className=" px-4 mb-16 lg:mb-0">
            <h3
              className="mb-5  font-medium text-white"
              // contentEditable="false"
            >
              Contact Us
            </h3>
            <ul>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  href="tel:+16234321678"
                  // contentEditable="false"
                >
                  +1 623-432-1678
                </a>
              </li>
              <li className="mb-4">
                <a
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  href="mailto:support@mynemu.com"
                  // contentEditable="false"
                >
                  support@mynemu.com
                </a>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/terms-of-use"
                  // contentEditable="false"
                >
                  Terms Of Use
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/privacy-policy"
                  // contentEditable="false"
                >
                  Privacy Policy
                </Link>
              </li>

              <li className="mb-4">
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/refund-policy"
                  // contentEditable="false"
                >
                  Refund Policy
                </Link>
              </li>

              <li>
                <Link
                  className="inline-block hover:text-[#598C96]  text-[#B2CACE]"
                  to="/delete-account"
                  // contentEditable="false"
                >
                  Account Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className=" px-4">
            <h3
              className="mb-5  font-medium text-white"
              // contentEditable="false"
            >
              Get the app
            </h3>
            <div className="flex flex-wrap">
              <div className="w-full lg:flex-1 py-1 lg:py-0 lg:mr-3">
                <a
                  target="_blank"
                  href="https://apps.apple.com/us/app/nemu/id6471528649"
                >
                  <img
                    loading="lazy"
                    src="/images/App-Store.svg"
                    alt=""
                    className="py-3 rounded "
                  />
                </a>
                <a
                  target="_blank"
                  href="https://play.google.com/store/apps/details?id=com.company.nemu"
                >
                  {" "}
                  <img
                    loading="lazy"
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
        © 2024 Nemu, Inc. All rights reserved.
      </p>
    </section>
  );
};
