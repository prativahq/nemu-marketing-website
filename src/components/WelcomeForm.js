import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export const WelcomeForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (email) => {
    if (!email) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/email`,
        {
          email: email,
        }
      );

      if (response.data.status === 200) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <>
        <div className="flex flex-col gap-6 justify-start px-5 py-10">
          <h3 className="text-3xl font-medium font-heading">
            Thanks for joining the Nemu community!
          </h3>

          <div className="flex items-center shrink-0 gap-3 bg-[#EBF9ED] p-3 rounded-lg border-2 border-[#B5DEBC]">
            <img alt="" src="images/iconSuccess.svg" />
            <p className="text-[#2B973D]">
              Please check your email inbox for the discount code!
            </p>
          </div>
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="flex flex-col gap-6 justify-start px-5 py-10">
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-medium font-heading">
              Get 15% off now!
            </h3>
            <p className="text-lg  leading-9 text-coolGray-500">
              We’d love to keep you in the loop for deals, tips, and ideas.
            </p>
          </div>
          <form className="flex flex-col gap-5">
            <label
              className="text-lg font-medium  text-coolGray-500"
              htmlFor="email"
            >
              Email
            </label>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="john@gmail.com"
              name="email"
              className="py-5 sm:py-3 px-6 text-base md:text-lg h-14"
            />
            {error && (
              <p className="text-red-500">Email not sent. Please try again.</p>
            )}
            <button
              disabled={loading}
              onClick={() => {
                handleSubmit(email);
              }}
              type="button"
              className="inline-block py-5 sm:py-3 px-6 w-full  text-base md:text-lg font-semibold leading-4 text-white  text-center bg-emerald-500 hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50 border border-emerald-500 rounded-lg shadow-sm"
            >
              Claim Discount
            </button>
          </form>
        </div>
      </>
    );
};
