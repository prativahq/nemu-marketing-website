import React from "react";
import { useParams } from "react-router-dom";
import Blogs from "../posts.json";
import Markdown from "react-markdown";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export const BlogPage = () => {
  const { id } = useParams();
  const blog = Blogs.filter((blog) => blog.id === Number(id));
  //   console.log(blog);
  return (
    // <div>
    //   <Markdown>{blog[0].content}</Markdown>
    // </div>

    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section className="relative py-24 bg-[#F7F5F2]">
          <div className="container relative z-10 px-4 mx-auto">
            <div className="flex flex-wrap justify-center gap-20 ">
              <img className="w-1/3" src={`${blog[0].thumbnail}`} />
              <div className="flex flex-col gap-5">
                <p className="text-lg text-gray-500">{blog[0].date}</p>
                <h1 className="mb-4 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-medium font-heading tracking-tighter">
                  {blog[0].title}
                </h1>
                <p className="text-lg text-gray-500">{blog[0].author}</p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20 bg-white">
          <Markdown className={"px-5 md:w-1/2 w-full text-lg mx-auto"}>
            {blog[0].content}
          </Markdown>
        </section>
        <Newsletter />
        <Footer />
      </>
    </React.Fragment>
  );
};
