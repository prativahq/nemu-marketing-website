import { Check } from "lucide-react";
import React from "react";

export const DownloadApp = () => {
  return (
    <section className="bg-white py-10">
      <div className="container px-4 mx-auto">
        <div
          className="relative py-11 px-16 rounded-md overflow-hidden bg-cover"
          style={{
            backgroundImage: 'url("images/banner.png")',
          }}
        >
          <div className="relative z-20 flex flex-wrap items-center -m-3">
            <div className="flex flex-col gap-6 w-full md:w-1/2 p-3">
              <h2 className=" font-medium text-center md:text-left text-white tracking-tighter text-3xl font-heading">
                Download Now to Start your Free Trial
              </h2>
              <ul className="flex flex-col gap-4">
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
              </ul>
              <div className="flex justify-center md:justify-start flex-wrap gap-4">
                <a href="https://apps.apple.com/us/app/nemu/id6471528649">
                  <img
                    src="images/App-Store.svg"
                    alt=""
                    className=" rounded "
                  />
                </a>
                <a href="https://share.hsforms.com/1Vj_1vX50RUSNaNpFPu969Qq6kww">
                  {" "}
                  <img
                    src="images/Play-Store.svg"
                    alt=""
                    className=" rounded "
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
