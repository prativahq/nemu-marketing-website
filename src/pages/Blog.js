import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import Blogs from "../posts.json";
import { BlogCard } from "../components/BlogCard";
import ScrollToTop from "react-scroll-to-top";
const meta = {
  title: "Nemu Blog: Property Inheritance Insights",
  meta: [
    {
      name: "description",
      content:
        "Dive into expert advice, tips, and stories on handling family property, heirlooms, and ensuring fair value with Nemu",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function Blog() {
  const [tag, setTag] = useState("all");
  const [blogs, setBlogs] = useState(Blogs);
  const [search, setSearch] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearch = (value) => {
    setSearch(value);
    const filteredBlogs = Blogs.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    );
    setBlogs(filteredBlogs);
  };

  useEffect(() => {
    if (tag === "all") {
      setBlogs(Blogs);
    } else {
      const filteredBlogs = Blogs.filter((blog) => blog.tag === tag);
      setBlogs(filteredBlogs);
    }
  }, [tag]);

  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="relative py-32 md:py-28 bg-[#F7F5F2] mb-16 md:mb-20 ">
          <div className="container absolute -my-16  md:-my-8 left-0 right-0 z-10 px-4 mx-auto">
            <div className=" md:max-w-5xl mx-auto mb-8 md:mb-16 text-center">
              <span className="text-center  mb-5 text-sm font-semibold leading-5 uppercase rounded-9xl text-emerald-500">
                Blog
              </span>
              <h1 className="mb-6 mt-5 text-4xl md:text-5xl text-coolGray-900   leading-tight font-medium font-heading tracking-tight">
                Resources to help you out
              </h1>
              <div className="relative mx-auto md:w-80">
                <img
                  loading="lazy"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2"
                  src="images/search.svg"
                  alt=""
                />
                <input
                  value={search}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="w-full py-3 pl-12 pr-4 text-coolGray-900 leading-tight placeholder-coolGray-500 border border-coolGray-200 rounded-lg shadow-xsm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-opacity-50"
                  type="text"
                  placeholder="Search for a resource"
                />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container relative z-10 px-4 mx-auto">
            <ul className="flex flex-wrap gap-2 mb-10 justify-center text-center ">
              <li className="w-auto ">
                <button
                  onClick={() => setTag("all")}
                  className="inline-block w-full py-2 px-4 mb-4 md:mb-0  text-coolGray-400 hover:text-emerald-500 hover:bg-emerald-100  rounded-md hover:shadow-sm"
                >
                  All
                </button>
              </li>
              <li className="w-auto ">
                <button
                  onClick={() => setTag("educational")}
                  className="inline-block w-full py-2 px-4 mb-4 md:mb-0  text-coolGray-400 hover:text-emerald-500 hover:bg-emerald-100  rounded-md hover:shadow-sm"
                >
                  Educational
                </button>
              </li>
              <li className="w-auto ">
                <button
                  onClick={() => setTag("news")}
                  className="inline-block w-full py-2 px-4 mb-4 md:mb-0  text-coolGray-400 hover:text-emerald-500 hover:bg-emerald-100  rounded-md hover:shadow-sm"
                >
                  News
                </button>
              </li>
              <li className="w-auto ">
                <button
                  onClick={() => setTag("press")}
                  className="inline-block w-full py-2 px-4 mb-4 md:mb-0  text-coolGray-400 hover:text-emerald-500 hover:bg-emerald-100  rounded-md hover:shadow-sm"
                >
                  Press
                </button>
              </li>
            </ul>
            <div className="flex flex-wrap gap-10 px-5 -mx-4 mb-12 md:mb-20">
              {blogs.length > 0 ? (
                blogs.map((blog) => {
                  return (
                    <BlogCard
                      tag={blog.tag}
                      id={blog.id}
                      title={blog.title}
                      author={blog.author}
                      thumbnail={blog.thumbnail}
                      date={blog.date}
                    />
                  );
                })
              ) : (
                <p className="text-lg text-center my-5">
                  No blogs available matching this tag
                </p>
              )}
            </div>
          </div>
        </section>
        <Newsletter />
        <Footer />
        <ScrollToTop
          color="white"
          style={{
            backgroundColor: "#075362",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            fontWeight: "bold",
            zIndex: "100",
          }}
          smooth
        />
      </>
    </React.Fragment>
  );
}
