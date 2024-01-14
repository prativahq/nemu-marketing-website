import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";

const meta = {
  title: "Nemu - Revolutionizing Property Inheritance",
  meta: [
    {
      name: "not found",
      content:
        "Nemu is a platform that helps you catalog, appraise, divide, and sell your property. We help you make sure your property goes to the right people, for the right price, and in the right way.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <Navbar />
      <section className="bg-[#F7F5F2] flex-1 py-32">
        <div className="container mx-auto">
          <h1 className="mb-6 text-center md:text-left text-4xl md:text-5xl text-coolGray-900    font-medium font-heading tracking-normal">
            404 Page Not Found
          </h1>
          <p
            style={{ lineHeight: "42px" }}
            className="text-center md:text-left mb-8 text-lg   text-coolGray-500 "
          >
            Sorry, we couldn't find the page you were looking for.
          </p>
        </div>
      </section>
      <div className="mt-auto">
        {" "}
        <Footer />
      </div>
    </div>
  );
}
