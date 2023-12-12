import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Blogs from "../posts.json";
import Markdown from "react-markdown";
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { Navbar } from "../components/Navbar";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { ChevronLeft } from "lucide-react";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  LinkedinIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import ScrollToTop from "react-scroll-to-top";
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
  const path = window.location.href;
  // console.log(path);
  //   console.log(blog);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
            {/* <Link className="w-fit mb-5" to={"/blog"}>
              <div className="bg-white p-5 w-fit rounded-md shadow-md ">
                <ChevronLeft className="text-emerald-500" />
              </div>
            </Link> */}
            <div className="flex flex-wrap justify-center gap-20 ">
              <img className="w-full md:w-1/3" src={`${blog[0].thumbnail}`} />
              <div className="flex flex-col gap-5 w-full lg:w-1/2">
                <div className="flex gap-3">
                  <p className="text-lg text-gray-500">{blog[0].author}</p>.
                  <p className="text-lg text-gray-500">{blog[0].date}</p>
                </div>

                <h1 className="mb-2 text-4xl md:text-5xl leading-tight text-darkCoolGray-900 font-medium font-heading tracking-tighter">
                  {blog[0].title}
                </h1>
                <div className="mb-2 ">
                  <span className="inline-block py-1 px-3 text-xs leading-5 text-emerald-500 hover:text-emerald-600 font-medium uppercase bg-emerald-100 hover:bg-emerald-200 rounded-full shadow-sm">
                    {blog[0].tag}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 relative py-20 bg-white">
          <div className="flex gap-4 mx-auto">
            <FacebookShareButton url={`${path}`} hashtag="#Nemu #NemuBlog">
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <EmailShareButton
              subject={`${blog[0].title}`}
              body="I want to tell you about this blog..."
            >
              <EmailIcon size={32} round />
            </EmailShareButton>
            <LinkedinShareButton
              url={`${path}`}
              title={`${blog[0].title}`}
              source="Nemu"
            >
              <LinkedinIcon size={32} round />
            </LinkedinShareButton>
            <TwitterShareButton title={`${blog[0].title}`} url={`${path}`}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={`${path}`} title={`${blog[0].title}`}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>

          <Markdown
            className={"px-5 md:w-3/4 w-full text-coolGray-800 text-lg mx-auto"}
          >
            {blog[0].content}
          </Markdown>
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
          }}
          smooth
        />
      </>
    </React.Fragment>
  );
};
