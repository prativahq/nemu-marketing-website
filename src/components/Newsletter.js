import React from "react";

export const Newsletter = () => {
  return (
    <section
      className="py-24 mt-10 bg-white"
      style={{
        background: "var(--surface-light-bg, #F7F5F2)",
        backgroundPosition: "center",
      }}
      // style={{
      //   backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
      //   backgroundPosition: "center",
      // }}
    >
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
            <h2 className="mb-4 text-3xl text-coolGray-900 md:text-4.5xl   font-medium tracking-tighter font-heading">
              Subscribe to our newsletter <br></br>and stay updated!
            </h2>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="mx-auto md:mr-0 md:max-w-md">
              <form
                name="contact"
                method="POST"
                className="flex flex-wrap mb-1"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
                  <input
                    required
                    name="email"
                    className="w-full py-3 px-4 text-coolGray-500   placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="w-full md:w-auto">
                  <button
                    type="submit"
                    className="inline-block py-3 px-6 w-full leading-5 text-white font-semibold bg-emerald-500 hover:bg-emerald-600  text-center focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-transparent rounded-lg shadow-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <span className=" text-coolGray-500 "></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
