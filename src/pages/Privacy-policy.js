import React, { useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "Nemu: Privacy Policy",
  meta: [
    {
      name: "description",
      content:
        "Explore our Privacy Policy to understand how we collect, use, and protect your personal information. Learn about your rights, our commitment to data security, and how we prioritize your privacy in compliance with applicable regulations. Your trust matters to us; discover the details of our privacy practices here.",
    },
  ],
  link: [],
  style: [],
  script: [],
};

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section
          className="py-20 xl:pt-24 xl:pb-28 bg-[#F7F5F2] overflow-x-hidden"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light1.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-5 lg:mb-0">
                <h1 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      NEMU, INC. PRIVACY POLICY
                    </span>
                  </strong>
                </h1>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Effective date: 11/10/2023
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>1.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Introduction</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Welcome to&nbsp;</span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Nemu, Inc.</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu, Inc. (“us”, “we”, or “our”) operates http://nemu.com
                    and Nemu mobile application (hereinafter referred to as “
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Service</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>”).</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Privacy Policy governs your visit to http://nemu.com and
                    Nemu mobile application, and explains how we collect,
                    safeguard and disclose information that results from your
                    use of our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We use your data to provide and improve Service. By using
                    Service, you agree to the collection and use of information
                    in accordance with this policy. Unless otherwise defined in
                    this Privacy Policy, the terms used in this Privacy Policy
                    have the same meanings as in our Terms and Conditions.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Terms and Conditions (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Terms</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    ”) govern all use of our Service and together with the
                    Privacy Policy constitutes your agreement with us (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>agreement</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>”).</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>2.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Definitions</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>SERVICE&nbsp;</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    means the http://nemu.com website and Nemu mobile
                    application operated by Nemu, Inc.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>PERSONAL DATA</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;means data about a living individual who can be
                    identified from those data (or from those and other
                    information either in our possession or likely to come into
                    our possession).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>USAGE DATA</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;is data collected automatically either generated by
                    the use of Service or from Service infrastructure itself
                    (for example, the duration of a page visit).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>COOKIES</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;are small files stored on your device (computer or
                    mobile device).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>DATA CONTROLLER</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;means a natural or legal person who (either alone or
                    jointly or in common with other persons) determines the
                    purposes for which and the manner in which any personal data
                    are, or are to be, processed. For the purpose of this
                    Privacy Policy, we are a Data Controller of your data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      DATA PROCESSORS (OR SERVICE PROVIDERS)
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;means any natural or legal person who processes the
                    data on behalf of the Data Controller. We may use the
                    services of various Service Providers in order to process
                    your data more effectively.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>DATA SUBJECT&nbsp;</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    is any living individual who is the subject of Personal
                    Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>THE USER&nbsp;</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    is the individual using our Service. The User corresponds to
                    the Data Subject, who is the subject of Personal Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>3.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Information Collection and Use
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We collect several different types of information for
                    various purposes to provide and improve our Service to you.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>4.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Types of Data Collected
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Personal Data</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    While using our Service, we may ask you to provide us with
                    certain personally identifiable information that can be used
                    to contact or identify you (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Personal Data</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    ”). Personally identifiable information may include, but is
                    not limited to:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>Email address</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    First name and last name
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>Phone number</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Address, State, Province, ZIP/Postal code, City
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Cookies and Usage Data
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may use your Personal Data to contact you with
                    newsletters, marketing or promotional materials and other
                    information that may be of interest to you. You may opt out
                    of receiving any, or all, of these communications from us by
                    following the unsubscribe link.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Usage Data</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may also collect information that your browser sends
                    whenever you visit our Service or when you access Service by
                    or through a mobile device (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Usage Data</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>”).</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    This Usage Data may include information such as your
                    computer's Internet Protocol address (e.g. IP address),
                    browser type, browser version, the pages of our Service that
                    you visit, the time and date of your visit, the time spent
                    on those pages, unique device identifiers and other
                    diagnostic data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    When you access Service with a mobile device, this Usage
                    Data may include information such as the type of mobile
                    device you use, your mobile device unique ID, the IP address
                    of your mobile device, your mobile operating system, the
                    type of mobile Internet browser you use, unique device
                    identifiers and other diagnostic data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Tracking Cookies Data
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We use cookies and similar tracking technologies to track
                    the activity on our Service and we hold certain information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Cookies are files with a small amount of data which may
                    include an anonymous unique identifier. Cookies are sent to
                    your browser from a website and stored on your device. Other
                    tracking technologies are also used such as beacons, tags
                    and scripts to collect and track information and to improve
                    and analyze our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can instruct your browser to refuse all cookies or to
                    indicate when a cookie is being sent. However, if you do not
                    accept cookies, you may not be able to use some portions of
                    our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Examples of Cookies we use:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Session Cookies:</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;We use Session Cookies to operate our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Preference Cookies:
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;We use Preference Cookies to remember your preferences
                    and various settings.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Security Cookies:</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;We use Security Cookies for security purposes.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Advertising Cookies:
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;Advertising Cookies are used to serve you with
                    advertisements that may be relevant to you and your
                    interests.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>5.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Use of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu, Inc. uses the collected data for various purposes:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to provide and maintain our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to notify you about changes to our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to allow you to participate in interactive features of our
                    Service when you choose to do so;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to provide customer support;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to gather analysis or valuable information so that we can
                    improve our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to monitor the usage of our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to detect, prevent and address technical issues;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(h)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to fulfill any other purpose for which you provide it;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to carry out our obligations and enforce our rights arising
                    from any contracts entered into between you and us,
                    including for billing and collection;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(j)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to provide you with notices about your account and/or
                    subscription, including expiration and renewal notices,
                    email-instructions, etc.;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(k)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to provide you with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless you have opted not to
                    receive such information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(l)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    in any other way we may describe when you provide the
                    information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(m)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    for any other purpose with your consent.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>6.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Retention of Data
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We will retain your Personal Data only for as long as is
                    necessary for the purposes set out in this Privacy Policy.
                    We will retain and use your Personal Data to the extent
                    necessary to comply with our legal obligations (for example,
                    if we are required to retain your data to comply with
                    applicable laws), resolve disputes, and enforce our legal
                    agreements and policies.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We will also retain Usage Data for internal analysis
                    purposes. Usage Data is generally retained for a shorter
                    period, except when this data is used to strengthen the
                    security or to improve the functionality of our Service, or
                    we are legally obligated to retain this data for longer time
                    periods.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>7.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Transfer of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Your information, including Personal Data, may be
                    transferred to – and maintained on – computers located
                    outside of your state, province, country or other
                    governmental jurisdiction where the data protection laws may
                    differ from those of your jurisdiction.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you are located outside United States and choose to
                    provide information to us, please note that we transfer the
                    data, including Personal Data, to United States and process
                    it there.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Your consent to this Privacy Policy followed by your
                    submission of such information represents your agreement to
                    that transfer.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu, Inc. will take all the steps reasonably necessary to
                    ensure that your data is treated securely and in accordance
                    with this Privacy Policy and no transfer of your Personal
                    Data will take place to an organisation or a country unless
                    there are adequate controls in place including the security
                    of your data and other personal information.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>8.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Disclosure of Data
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may disclose personal information that we collect, or you
                    provide:
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Disclosure for Law Enforcement.
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Under certain circumstances, we may be required to disclose
                    your Personal Data if required to do so by law or in
                    response to valid requests by public authorities.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Business Transaction.
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If we or our subsidiaries are involved in a merger,
                    acquisition or asset sale, your Personal Data may be
                    transferred.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Other cases. We may disclose your information also:
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to our subsidiaries and affiliates;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(ii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to contractors, service providers, and other third parties
                    we use to support our business;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    to fulfill the purpose for which you provide it;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iv)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    with your consent in any other cases;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>9.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Security of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    The security of your data is important to us but remember
                    that no method of transmission over the Internet or method
                    of electronic storage is 100% secure. While we strive to use
                    commercially acceptable means to protect your Personal Data,
                    we cannot guarantee its absolute security.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>10.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Your Data Protection Rights Under General Data
                        Protection Regulation (GDPR)
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you are a resident of the European Union (EU) and
                    European Economic Area (EEA), you have certain data
                    protection rights, covered by GDPR. – See more at
                  </span>
                  <a href="https://eur-lex.europa.eu/eli/reg/2016/679/oj">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://eur-lex.europa.eu/eli/reg/2016/679/oj
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We aim to take reasonable steps to allow you to correct,
                    amend, delete, or limit the use of your Personal Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you wish to be informed what Personal Data we hold about
                    you and if you want it to be removed from our systems,
                    please email us at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    In certain circumstances, you have the following data
                    protection rights:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right to access, update or to delete the information we
                    have on you;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right of rectification. You have the right to have your
                    information rectified if that information is inaccurate or
                    incomplete;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right to object. You have the right to object to our
                    processing of your Personal Data;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right of restriction. You have the right to request that
                    we restrict the processing of your personal information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right to data portability. You have the right to be
                    provided with a copy of your Personal Data in a structured,
                    machine-readable and commonly used format;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    the right to withdraw consent. You also have the right to
                    withdraw your consent at any time where we rely on your
                    consent to process your personal information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Please note that we may ask you to verify your identity
                    before responding to such requests. Please note, we may not
                    able to provide Service without some necessary data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You have the right to complain to a Data Protection
                    Authority about our collection and use of your Personal
                    Data. For more information, please contact your local data
                    protection authority in the European Economic Area (EEA).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>11.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Your Data Protection Rights under the California Privacy
                        Protection Act (CalOPPA)
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    CalOPPA is the first state law in the nation to require
                    commercial websites and online services to post a privacy
                    policy. The law’s reach stretches well beyond California to
                    require a person or company in the United States (and
                    conceivable the world) that operates websites collecting
                    personally identifiable information from California
                    consumers to post a conspicuous privacy policy on its
                    website stating exactly the information being collected and
                    those individuals with whom it is being shared, and to
                    comply with this policy. – See more at:
                  </span>
                  <a href="https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    According to CalOPPA we agree to the following:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    users can visit our site anonymously;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    our Privacy Policy link includes the word “Privacy”, and can
                    easily be found on the page specified above on the home page
                    of our website;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    users will be notified of any privacy policy changes on our
                    Privacy Policy Page;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    users are able to change their personal information by
                    emailing us at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Policy on “Do Not Track” Signals:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We honor Do Not Track signals and do not track, plant
                    cookies, or use advertising when a Do Not Track browser
                    mechanism is in place. Do Not Track is a preference you can
                    set in your web browser to inform websites that you do not
                    want to be tracked.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can enable or disable Do Not Track by visiting the
                    Preferences or Settings page of your web browser.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>12.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Your Data Protection Rights under the California
                        Consumer Privacy Act (CCPA)
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you are a California resident, you are entitled to learn
                    what data we collect about you, ask to delete your data and
                    not to sell (share) it. To exercise your data protection
                    rights, you can make certain requests and ask us:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      What personal information we have about you
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    . If you make this request, we will return to you:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The categories of personal information we have collected
                    about you.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(ii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The categories of sources from which we collect your
                    personal information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The business or commercial purpose for collecting or selling
                    your personal information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iv)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The categories of third parties with whom we share personal
                    information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(v)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The specific pieces of personal information we have
                    collected about you.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(vi)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    A list of categories of personal information that we have
                    sold, along with the category of any other company we sold
                    it to. If we have not sold your personal information, we
                    will inform you of that fact.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    (vii)A list of categories of personal information that we
                    have disclosed for a business purpose, along with the
                    category of any other company we shared it with.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Please note, you are entitled to ask us to provide you with
                    this information up to two times in a rolling twelve-month
                    period. When you make this request, the information provided
                    may be limited to the personal information we collected
                    about you in the previous 12 months.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      To delete your personal information
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    . If you make this request, we will delete the personal
                    information we hold about you as of the date of your request
                    from our records and direct any service providers to do the
                    same. In some cases, deletion may be accomplished through
                    de-identification of the information. If you choose to
                    delete your personal information, you may not be able to use
                    certain functions that require your personal information to
                    operate.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      To stop selling your personal information
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    . We do not sell your personal information for monetary
                    consideration. However, under some circumstances, a transfer
                    of personal information to a third party, or within our
                    family of companies, without monetary consideration may be
                    considered a “sale” under California law.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you submit a request to stop selling your personal
                    information, we will stop making such transfers. If you are
                    a California resident, to opt-out of the sale of your
                    personal information, click “Do Not Sell My Personal
                    Information” at the bottom of our home page to submit your
                    request.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Please note, if you ask us to delete or stop selling your
                    data, it may impact your experience with us, and you may not
                    be able to participate in certain programs or membership
                    services which require the usage of your personal
                    information to function. But in no circumstances, we will
                    discriminate against you for exercising your rights.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    To exercise your California data protection rights described
                    above, please send your request(s) by one of the following
                    means:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    By email: support@mynemu.com
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    By phone number: 1-623-432-1678
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Your data protection rights, described above, are covered by
                    the CCPA, short for the California Consumer Privacy Act. To
                    find out more, visit the official
                  </span>
                  <a href="http://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        California Legislative Information website
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    . The CCPA took effect on 01/01/2020.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>13.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Service Providers
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may employ third party companies and individuals to
                    facilitate our Service (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Service Providers</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    ”), provide Service on our behalf, perform Service-related
                    services or assist us in analysing how our Service is used.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    These third parties have access to your Personal Data only
                    to perform these tasks on our behalf and are obligated not
                    to disclose or use it for any other purpose.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>14.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Analytics</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may use third-party Service Providers to monitor and
                    analyze the use of our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Google Analytics</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Google Analytics is a web analytics service offered by
                    Google that tracks and reports website traffic. Google uses
                    the data collected to track and monitor the use of our
                    Service. This data is shared with other Google services.
                    Google may use the collected data to contextualise and
                    personalise the ads of its own advertising network.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Google,
                    please visit the Google Privacy Terms web page:
                  </span>
                  <a href="https://policies.google.com/privacy?hl=en">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We also encourage you to review the Google's policy for
                    safeguarding your data:
                  </span>
                  <a href="https://support.google.com/analytics/answer/6004245">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://support.google.com/analytics/answer/6004245
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>.</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>15.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>CI/CD tools</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may use third-party Service Providers to automate the
                    development process of our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>GitHub</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitHub is provided by GitHub, Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitHub is a development platform to host and review code,
                    manage projects, and build software.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on what data GitHub collects for what
                    purpose and how the protection of the data is ensured,
                    please visit GitHub Privacy Policy page:
                  </span>
                  <a href="https://help.github.com/en/articles/github-privacy-statement">
                    <u>
                      <span style={{ color: "#0000ff", fontSize: "11pt" }}>
                        &nbsp;
                      </span>
                    </u>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://help.github.com/en/articles/github-privacy-statement
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>.</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>GitLab CI/CD</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitLab CI/CD is provided by GitLab, Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitLab CI (Continuous Integration) service is a part of
                    GitLab that build and test the software whenever developer
                    pushes code to application.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitLab CD (Continuous Deployment) is a software service that
                    places the changes of every code in the production which
                    results in every day deployment of production.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on what data GitLab CI/CD collects for
                    what purpose and how the protection of the data is ensured,
                    please visit GitLab CI/CD Privacy Policy page:
                  </span>
                  <a href="https://about.gitlab.com/privacy/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://about.gitlab.com/privacy/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>.</span>
                </p>
                <p>
                  <strong>
                    <span
                      style={{ backgroundColor: "#00ff00", fontSize: "11pt" }}
                    >
                      &nbsp;
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>16.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Behavioral Remarketing
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu, Inc. uses remarketing services to advertise on third
                    party websites to you after you visited our Service. We and
                    our third-party vendors use cookies to inform, optimise and
                    serve ads based on your past visits to our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Google Ads (AdWords)</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Google Ads (AdWords) remarketing service is provided by
                    Google Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can opt-out of Google Analytics for Display Advertising
                    and customize the Google Display Network ads by visiting the
                    Google Ads Settings page:
                  </span>
                  <a href="http://www.google.com/settings/ads">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://www.google.com/settings/ads
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Google also recommends installing the Google Analytics
                    Opt-out Browser Add-on –
                  </span>
                  <a href="https://tools.google.com/dlpage/gaoptout">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://tools.google.com/dlpage/gaoptout
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;– for your web browser. Google Analytics Opt-out
                    Browser Add-on provides visitors with the ability to prevent
                    their data from being collected and used by Google
                    Analytics.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Google,
                    please visit the Google Privacy Terms web page:
                  </span>
                  <a href="https://policies.google.com/privacy?hl=en">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Bing Ads Remarketing</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Bing Ads remarketing service is provided by Microsoft Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can opt-out of Bing Ads interest-based ads by following
                    their instructions:
                  </span>
                  <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can learn more about the privacy practices and policies
                    of Microsoft by visiting their Privacy Policy page:
                  </span>
                  <a href="https://privacy.microsoft.com/en-us/PrivacyStatement">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://privacy.microsoft.com/en-us/PrivacyStatement
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Facebook</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Facebook remarketing service is provided by Facebook Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can learn more about interest-based advertising from
                    Facebook by visiting this page:
                  </span>
                  <a href="https://www.facebook.com/help/164968693837950">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/help/164968693837950
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    To opt-out from Facebook's interest-based ads, follow these
                    instructions from Facebook:
                  </span>
                  <a href="https://www.facebook.com/help/568137493302217">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/help/568137493302217
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Facebook adheres to the Self-Regulatory Principles for
                    Online Behavioural Advertising established by the Digital
                    Advertising Alliance. You can also opt-out from Facebook and
                    other participating companies through the Digital
                    Advertising Alliance in the USA
                  </span>
                  <a href="http://www.aboutads.info/choices/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://www.aboutads.info/choices/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    , the Digital Advertising Alliance of Canada in Canada
                  </span>
                  <a href="http://youradchoices.ca/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://youradchoices.ca/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    &nbsp;or the European Interactive Digital Advertising
                    Alliance in Europe
                  </span>
                  <a href="http://www.youronlinechoices.eu/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://www.youronlinechoices.eu/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    , or opt-out using your mobile device settings.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Facebook,
                    please visit Facebook's Data Policy:
                  </span>
                  <a href="https://www.facebook.com/privacy/explanation">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/privacy/explanation
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>17.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Payments</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may provide paid products and/or services within Service.
                    In that case, we use third-party services for payment
                    processing (e.g. payment processors).
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We will not store or collect your payment card details. That
                    information is provided directly to our third-party payment
                    processors whose use of your personal information is
                    governed by their Privacy Policy. These payment processors
                    adhere to the standards set by PCI-DSS as managed by the PCI
                    Security Standards Council, which is a joint effort of
                    brands like Visa, Mastercard, American Express and Discover.
                    PCI-DSS requirements help ensure the secure handling of
                    payment information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    The payment processors we work with are:
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Apple Store In-App Payments:
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Their Privacy Policy can be viewed at:
                  </span>
                  <a href="https://www.apple.com/legal/privacy/en-ww/">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.apple.com/legal/privacy/en-ww/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>&nbsp;/</span>
                  <a href="https://support.apple.com/en-us/HT203027">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://support.apple.com/en-us/HT203027
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Google Play In-App Payments:
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Their Privacy Policy can be viewed at:
                  </span>
                  <a href="https://policies.google.com/privacy?hl=en&gl=us">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en&amp;gl=us
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>&nbsp;/</span>
                  <a href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=en">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&amp;ldt=privacynotice&amp;ldl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>Stripe:</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Their Privacy Policy can be viewed at:
                  </span>
                  <a href="https://stripe.com/us/privacy">
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://stripe.com/us/privacy
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>18.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Links to Other Sites
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Service may contain links to other sites that are not
                    operated by us. If you click a third party link, you will be
                    directed to that third party's site. We strongly advise you
                    to review the Privacy Policy of every site you visit.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We have no control over and assume no responsibility for the
                    content, privacy policies or practices of any third party
                    sites or services.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>19.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Children's Privacy
                      </span>
                    </u>
                  </strong>
                </p>
                <p>
                  <span
                    style={{ backgroundColor: "#ffffff", fontSize: "11pt" }}
                  >
                    &nbsp;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Services are not intended for use by children under the
                    age of 18 (“
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Child</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>” or “</span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Children</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>”).</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We do not knowingly collect personally identifiable
                    information from Children under 18. If you become aware that
                    a Child has provided us with Personal Data, please contact
                    us. If we become aware that we have collected Personal Data
                    from Children without verification of parental consent, we
                    take steps to remove that information from our servers.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>20.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>
                        Changes to This Privacy Policy
                      </span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may update our Privacy Policy from time to time. We will
                    notify you of any changes by posting the new Privacy Policy
                    on this page.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We will let you know via email and/or a prominent notice on
                    our Service, prior to the change becoming effective and
                    update “effective date” at the top of this Privacy Policy.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>21.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Contact Us</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you have any questions about this Privacy Policy, please
                    contact us:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    By email: support@mynemu.com.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                </p>
                <p>
                  <br />
                </p>
                <h1 style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "20pt" }}>
                    Nemu Terms and Conditions
                  </span>
                </h1>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>1.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      ACCEPTANCE OF THE TERMS
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Please read these Terms carefully before you start to use
                    the Services. By clicking "I Accept" when presented with
                    these Terms, you: &nbsp;(i) acknowledge that you have read,
                    understand, and agree to be legally bound by these Terms;
                    (ii) agree to comply with all applicable laws, rules and
                    regulations with respect to your use of the Service; and
                    (iii) represent that you have the legal capacity to enter
                    into contracts in the jurisdiction where you reside. IF YOU
                    DO NOT WANT TO AGREE TO THESE TERMS OR IF YOU ARE NOT
                    AUTHORIZED OR ELIGIBLE TO BE BOUND BY THEM, YOU MUST NOT
                    ACCESS OR USE THE SERVICES. These Terms are effective upon
                    acceptance by new Users. We may modify or change the Terms,
                    in whole or in part, at any time. We will post the revised
                    version of the Terms on our Site. You can determine when
                    such documents were last revised by referring to the "Last
                    Updated" legend at the top of the page. If the changes
                    include material changes that affect your rights or
                    obligations, you will be required to accept the revised
                    terms by clicking "I Accept" to continue using the Site, the
                    Services, or your Account (as defined below). Material
                    modifications will take effect when you accept the modified
                    Terms (otherwise, the version of the Terms most recently
                    accepted by you will apply). Any material changes that
                    affect your rights or obligations will become effective upon
                    acceptance. Immaterial modifications will take effect when
                    published. Some functionality of the Site and/or your
                    Account, including, without limitation, any Services
                    provided thereby, may be limited if you choose not to accept
                    the modified Terms.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      NOTICE REGARDING DISPUTE RESOLUTION FOR U.S. USERS
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    : PLEASE BE ADVISED THAT THESE TERMS CONTAIN PROVISIONS THAT
                    GOVERN HOW CLAIMS YOU AND WE HAVE AGAINST EACH OTHER ARE
                    RESOLVED. THESE TERMS CONTAIN AN AGREEMENT BY YOU TO
                    ARBITRATE ANY CLAIMS, WHICH WILL, WITH LIMITED EXCEPTION,
                    REQUIRE YOU TO SUBMIT CLAIMS YOU HAVE AGAINST US OR OUR
                    AGENTS TO BINDING AND FINAL ARBITRATION WHEREBY (1) YOU WILL
                    ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST US OR OUR AGENTS
                    ON AN INDIVIDUAL BASIS, NOT AS A PLAINTIFF OR CLASS MEMBER
                    IN ANY CLASS OR REPRESENTATIVE ACTION OR PROCEEDING AND (2)
                    YOU WILL ONLY BE PERMITTED TO SEEK RELIEF (INCLUDING
                    MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN
                    INDIVIDUAL BASIS.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>2.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>THE SERVICES</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu offers an online platform for Users going through life
                    transitions, through which Users can, among other things,
                    receive assistance in the disposition of personal property
                    (collectively, the Services). By choosing to use our
                    Services, you may receive consultation, recommendations,
                    support, tools, and comprehensive information related
                    thereto. The Site provides information regarding Nemu, the
                    Services, and other related content such as contact
                    information, videos, text, files, logos, button icons,
                    images, data compilations, links, other specialized content,
                    technical data, documentation, know-how, specifications
                    materials, designs, data, the "look and feel" of the Site,
                    algorithms, source and object code, interface, GUI,
                    interactive features and related graphics, illustrations,
                    drawings, animations, and other features obtained from or
                    through the Site (collectively, the "Content"). All rights
                    in and to the Content available on the Site and through the
                    Services are reserved to Nemu.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    In addition, through our Site and your use of the Services,
                    and other associated services, websites, and applications,
                    you can contribute a variety of information relating to
                    yourself, ranging from personal information, financial
                    information, and geolocation data (collectively, "your data"
                    or "user data"). You also may be required to provide certain
                    information about yourself as a condition to using the Site
                    and Services or certain of its features or functionality,
                    and the Site and Services will provide you with
                    opportunities to share information about yourself with us
                    and ultimately with our brand partners. By using and
                    providing information to or through the Site and Services,
                    you consent to all actions taken by us with respect to your
                    information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    The information provided through your use of the Site and
                    all related Services are provided for informational purposes
                    only and should never be construed or be used as a
                    substitute for legal, tax, financial, health or other
                    professional advice. Laws differ by state and country, and
                    we cannot guarantee the accuracy, completeness, or
                    usefulness of the information for your specific situation.
                    Your use of the Services and the Site content (including the
                    User Content available therein) and your reliance on any
                    information available to you as part of the Services
                    (including any materials, advice or recommendations provided
                    to you) is entirely at your own risk. You should consult an
                    experienced attorney, tax professional, financial advisor or
                    health professional concerning your specific situation.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Certain links provided within Nemu’s Site permit our Users
                    to leave Nemu’s Site and enter non-Nemu sites or services.
                    These linked sites and services are provided solely as a
                    convenience to you. These linked sites and services are not
                    under the control of Nemu, and Nemu is not responsible for
                    the availability of such external sites or services. Your
                    access to, use of and reliance upon any such sites, services
                    and content and your dealings with such third parties are at
                    your sole risk and expense. You further acknowledge and
                    agree that Nemu shall not be responsible or liable, directly
                    or indirectly, for any damage or loss caused, or alleged to
                    be caused, by or in connection with use of or reliance on
                    any services, content, products or other materials available
                    on or through such linked sites or resources.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    By using the Site and the Services, you agree to receive
                    certain communications, such as updates about the Services,
                    the Terms, reminders, or a periodic e-mail newsletter from
                    us. You can opt-out of non-essential communications by
                    emailing us at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>3.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      ELIGIBILITY AND ACCOUNTS
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    In order to use the Services and access the Site, you must
                    register and create an account (the "Account"). By creating
                    an Account, and accepting these Terms, you represent and
                    warrant that: (i) the information you provide us is
                    accurate, complete, and current at all times and that you
                    are legally authorized to disclose such information to us;
                    (ii) your use of the Services does not violate any
                    applicable law or regulation or these Terms; (iii) you are
                    over the age of 18, that you are of legal age in your
                    jurisdiction to form a binding contract, that you possess
                    the legal authority and capacity to enter into these Terms
                    and to form a binding agreement under any applicable law;
                    and (iv) that you agree to use the Services in accordance
                    with these Terms, and to fully perform your obligations
                    hereunder.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    You are solely responsible for your conduct while accessing
                    or using the Services. You are responsible for maintaining
                    the confidentiality of your password and Account and will be
                    fully responsible for any and all activities that occur
                    under your Account. You agree to immediately notify us of
                    any unauthorized access or use of your Account or any other
                    breach of Account security. Nemu will not be liable for any
                    loss or damage arising from your failure to comply with this
                    Section. We may cancel unconfirmed Accounts or Accounts that
                    have been inactive for a long time or modify or discontinue
                    access to the Services. Additionally, we reserve the right
                    to refuse or terminate all or part of the Services to anyone
                    for any reason at our sole discretion.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Please note that we cannot fully promise that we will have
                    backups for any data processed by us as part of providing
                    the Services, and as such, you are solely responsible for
                    backing up such data (which includes any data you upload to
                    the Site and to your Account). We are not providing any
                    archive services for storing such data. In addition, we
                    shall not be responsible for any unauthorized access, use or
                    other security intrusions, failure to store, and any other
                    damage or loss to such data. We cannot guaranty the
                    confidentiality of any information or data you submit to us.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    If you wish to cancel and remove your Account, please send
                    us an email of your request to: support@mynemu.com. Your
                    Account will terminate within a reasonable time period
                    following your request, and from that date of termination
                    you will no longer be able to access your Account or the
                    Services. Canceling your Account may cause the loss of
                    certain information you provided to us (including documents
                    you uploaded as part of your use of the Services) and/or the
                    capacity of your Account. We do not accept any liability for
                    such loss.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Our Services are not for persons under the age of sixteen
                    (16), and we do not knowingly collect personal information
                    from children under sixteen (16). We reserve the right to
                    request proof of age at any stage so that we can verify that
                    minors under the age of sixteen (16) are not using the
                    Services. If we learn we have collected or received personal
                    information from a child under sixteen (16) without
                    verification of parental consent, we will delete that
                    information. If you believe we might have any information
                    from or about a child under sixteen (16), please contact us
                    at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>4.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>INTERNATIONAL USE</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    The Site and the Services are operated by us in the United
                    States and are not intended to subject us to the laws or
                    jurisdiction of any state, country or territory other than
                    that of the United States. We do not represent or warrant
                    that the Services, or any part of the Services, are
                    appropriate or available for use in all jurisdictions. Those
                    who choose to access the Site or the Services from locations
                    outside the United States do so on their own initiative and
                    at their own risk, and are responsible for complying with
                    all local laws, rules and regulations, including laws
                    regulating the export of data. We may limit the availability
                    of the Site and the Services, in whole or in part, to any
                    person, geographic area or jurisdiction that we choose, at
                    any time and in our sole discretion. Accessing and
                    downloading the Site is prohibited from territories where
                    the content is illegal.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>5.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>PROHIBITED USE</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    There are certain activities and kinds of conduct that are
                    strictly prohibited when using the Services. Please read the
                    following restrictions carefully. Failure to comply with any
                    of the provisions set forth herein may result (at Nemu’s
                    sole discretion) in the termination of your use of the
                    Services and may also expose you to civil and/or criminal
                    liability.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    While using the Services, you agree that you will not:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Services if you are not able to form a legally
                    binding contract or if you are under the age of eighteen
                    (18) years old;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site, Services, Content, or your Account for any
                    prohibited purposes or to engage in any activity that could
                    result in suspension or termination of your Account;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use your Account if your Account has been previously
                    suspended or terminated;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site to advertise any commercial endeavor or
                    otherwise engages in any commercial activity (e.g.,
                    conducting raffles or contests, displaying sponsorship
                    banners, and/or soliciting goods or services) except as
                    specifically authorized by Nemu;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site or Services to post, list or upload any content
                    or items that are inappropriate, prohibited, false,
                    inaccurate, misleading, deceptive, defamatory, or libelous;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site, Services, or Content to conduct fraudulent
                    activities, which includes (i) posting content or creating
                    Accounts that misrepresent your identity, impersonates, or
                    attempts to impersonate any other person or entity, (ii)
                    using the personal information of others without their
                    express permission, (iii) falsely stating or otherwise
                    misrepresenting your affiliation with any person or entity,
                    (iv) stating or implying that Nemu endorses you, your site,
                    your business or any statement you make, or (v) presenting
                    false or inaccurate information about us or the Services;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site, Services, Content and/or the User Content for
                    any illegal, immoral, unlawful, or unauthorized purposes
                    (including, without limitation, any laws regarding the
                    export of data or software to and from the US or other
                    countries);
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(h)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Breach, violate, or circumvent any laws, regulations,
                    governmental orders, or industry standards or guidance in
                    any applicable jurisdiction;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Circumvent or manipulate our fee structure, the billing
                    process, any fees owed to Nemu or any third party, or any
                    technical measures we use to provide the Services;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(j)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Fail to deliver payment for associated fees or other agreed
                    upon costs;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(k)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Transfer or share your Account with a third party without
                    the prior written consent of an authorized representative of
                    Nemu;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(l)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Access or attempt to access data not intended for you or log
                    into a server or Account which you are not authorized to
                    access, which includes bypassing or attempting to bypass any
                    measures we may use to prevent or restrict access to the
                    Site, User Accounts, or the server on which the Site is
                    stored, or any server, computer, or database connected to
                    the Site;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(m)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Take any action or use the Services in any manner that would
                    interfere with, disrupt or inhibit anyone’s use or enjoyment
                    of the Site or the Services or which, as determined by us,
                    may harm us or Users of the Site, or expose us or Users to
                    liability;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(n)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Engage in any conduct that could damage, disable, overburden
                    or impair the functionality of the Services or otherwise
                    interfere with the working of the Site or Services, or take
                    any action that imposes, or may impose, an unreasonable or
                    disproportionately large load on our platform
                    infrastructure, as determined by us;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(o)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Remove or modify any proprietary notices or labels on the
                    Services or otherwise make any derivative uses of the
                    Services;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(p)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Infringe the copyright, trademark, patent, publicity, moral,
                    database, and/or other intellectual property rights
                    (collectively, "Intellectual Property Rights") that belong
                    to or are licensed to Nemu. Some, but not all, actions that
                    may constitute infringement are reproducing, performing,
                    displaying, distributing, copying, reverse engineering,
                    decompiling, disassembling, or preparing derivative works
                    from content that belongs to Nemu or someone else;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(q)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Infringe any Intellectual Property Rights that belong to
                    third parties affected by your use of the Services or post
                    content that does not belong to you;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(r)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site or the Services to transmit, distribute, post
                    or submit any information concerning any other person
                    without their permission;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(s)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Interfere with or violate Users’ rights to privacy and other
                    rights, or harvest or collect personally identifiable
                    information about Users without their express consent, and
                    the prior written consent of an authorized representative of
                    Nemu, whether manually or with the use of any robot, spider
                    or crawler, or any search or retrieval application, or use
                    other manual or automatic device, process or method;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(t)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use the Site or the Services to transmit, or procure the
                    sending of, any advertising or promotional material without
                    our prior written consent, including any "junk mail," "chain
                    letter," "spam," or any other similar solicitation;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(u)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Make any use of the Content and/or use-generated Content on
                    any other site or networked computer environment for any
                    purpose not expressly authorized in these Terms, without
                    Nemu’s prior written consent;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(v)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Use any device, software, or routine that interferes with
                    the proper working of the Services; Introduce any viruses,
                    Trojan horses, worms, logic bombs, or other material that is
                    malicious or technologically harmful;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(w)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Attempt to gain unauthorized access to, interfere with,
                    damage, or disrupt the operation of the Site, any parts of
                    the Services, any servers or networks that host the Site or
                    on which the Services are stored, or any server, computer,
                    or database connected to the Services;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(x)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Attack the Services via a denial-of-service attack or a
                    distributed denial-of-service attack; or
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(y)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Permit, advocate, encourage, or assist any third party in
                    doing any of the foregoing.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If we believe you are abusing the Services in any way,
                    whether specifically listed above or not, we may, in our
                    sole discretion, without notice and without limiting other
                    remedies, limit, suspend, or terminate your Account and
                    access to the Services, delay or remove hosted content,
                    remove any special status associated with your Account,
                    remove, not display, and/or demote listings, and take
                    technical and/or legal steps to prevent you from using the
                    Services. We will not be liable if for any reason all or any
                    part of the Services are unavailable at any time or for any
                    period. From time to time, we may restrict access to some
                    parts of the Services, or the entire Services, to all or
                    certain Users.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>6.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      ITEMS AND DESCRIPTIONS
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    NEMU IS NOT A BROKER OR DEALER AND NEMU DOES NOT SELL,
                    EXCHANGE, BUY, OR OFFER FOR SALE, NEGOTIATE OR ATTEMPT TO
                    NEGOTIATE, A SALE OR EXCHANGE OF AN INTEREST IN ANY ITEM
                    LISTED ON OUR SERVICE. NEMU DOES NOT MAINTAIN TITLE FOR ANY
                    ITEM LISTED ON THE SERVICES, AND TITLE PASSES TO RECIPIENT
                    IMMEDIATELY UPON OWNER NO LONGER HOLDING TITLE.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Prohibited Items</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . The following items are prohibited from being sold through
                    Nemu or the Services. If you become aware that any of these
                    items are being offered for sale, please contact us
                    immediately at support@mynemu.com. Nemu is not responsible
                    or liable to take any actions beyond what is outlined in
                    these Terms or required by non-waivable law relating to the
                    alleged prohibited items. However, Nemu reserves the right
                    at its sole discretion to limit, suspend, or terminate the
                    Account or Services with respect to any User who violates
                    this policy, de-list an item, or take any other action
                    available under law. Nemu reserves the right to add or
                    remove any items in its sole discretion and without notice,
                    or to otherwise determine an item is prohibited on an
                    individual basis whether or not it falls into an enumerated
                    category on the list below:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Alcoholic beverages or other items that require a special
                    permit or license to sell;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Devices that facilitate or encourage streaming digital
                    content in an unauthorized manner or interfering with the
                    functionality of electronic devices;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Wrongfully discriminatory items;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Fake, forged, misleading or fraudulent documents or
                    materials;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Financial instruments, contracts, securities, cryptocurrency
                    and their derivatives;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Potentially hazardous materials and substances;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Items that promote any form of human trafficking,
                    prostitution, escort, or sexual services;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Drugs, drug paraphernalia, or prescription products;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Items that have been stolen or illegally obtained;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Downloadable digital content, digital subscriptions, and
                    digital accounts; or
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>•</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Content that infringes upon or violates the Intellectual
                    Property Rights of Nemu or any third party. This includes,
                    but is not limited to, the promotion or sale of
                    counterfeits, such as goods that copy the trademark (name or
                    logo) and/or distinctive features of another company's
                    products to imitate a genuine product;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Item Descriptions</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . You are aware that, unless otherwise stated, the items
                    listed through use of the Services are not new nor in
                    perfect condition, may have patent and/or latent defects
                    (including those beyond ordinary wear and tear), may require
                    touch-up or repairs prior to use, and the available
                    information about these items may be limited. Nemu is not
                    responsible for documenting or listing every flaw associated
                    with each item. The descriptions provided, if any, will be
                    based on User and third-party assessments of an item, as
                    well as information provided to Nemu by the seller, owner,
                    possessor, custodian, or holder (herein the "Holder") of the
                    of the item. However, Users should not assume that the
                    assessment of condition will be the same as your assessment,
                    or that the information provided by a Holder upon which
                    Nemu, or a third-party assessor relies is accurate. It is
                    your responsibility to read and review all descriptions and
                    images of an item before offering, purchasing, or accepting
                    and to engage subject matter experts where appropriate to
                    determine the reliability of any description. Any brands of
                    items identified on or through the Services: (i) are not
                    involved in the authentication of the items being provided
                    through the Services, and (ii) do not assume responsibility
                    for any items obtained from or through the Services. Brands
                    of items made available on or through the Service are not
                    partners or affiliates of Nemu in any manner.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>7.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      ADDITIONAL USER OBLIGATIONS
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Items Not Insured</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Items are not insured by Nemu against loss or damage due
                    to fire, theft, vandalism, rain, water, criminal or
                    negligent acts of others, or any other cause. Nemu
                    recommends that each User carry or obtain insurance to
                    protect the items from any loss or damage so long as risk of
                    loss remains with such User. Users shall look to their own
                    insurance for recovery of any loss resulting from casualty,
                    and hereby releases and waives any claims against Nemu. This
                    release and waiver remains in effect if any User fails to
                    obtain insurance, and in that case such User will bear the
                    full risk of its own loss.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Stolen Goods</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . The Disposition of stolen items on the Services is
                    expressly prohibited. We are committed to keeping Nemu free
                    from illegal activity and will assist in a criminal
                    investigation and provide evidence to law enforcement as
                    appropriate.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Embargoed Goods and Prohibited Countries Policy
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Various US agencies have restrictions in place that
                    regulate or ban all trade with certain countries and Nemu
                    does not allow the Disposition of embargoed or restricted
                    items from these countries. Under U.S. law, buying or
                    selling certain items made in restricted countries may not
                    be lawful, depending on the nature of the item, when it was
                    manufactured, and when it left that specific country.
                    Federal agencies also ban or regulate trade between people
                    in the U.S. and certain organizations, businesses, and
                    individuals. Nemu does not allow those organizations,
                    businesses, or individuals to use our Site. Under U.S. law,
                    buying or selling certain items made in restricted countries
                    may not be lawful, depending on the nature of the item, when
                    it was manufactured, and when it left that specific country.
                    When submitting items for Disposition, you attest that the
                    items that you are submitting do not violate any U.S. laws,
                    policies or restrictions on items from countries that have
                    restrictions and regulations in place with the US
                    government. When purchasing items on Nemu, you attest that
                    you do not reside in any banned country and that you are
                    not, and are not affiliated with, any such banned
                    organizations, businesses, or individuals.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>8.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      PROCESS AND DISPOSITION
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Forum</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . All items made available by Users or to Users through the
                    Services are offered, provided, or sold using the structure
                    and method (each a "Forum") selected by the Users. Nemu will
                    facilitate the Users use of the selected Forum, which may
                    include, among others, individual valuations, structured
                    exchange, third-party valuations, an online marketplace, or
                    an auction process. Unless otherwise explicitly stated in
                    the Forum guidelines or item description, all offerings are
                    conducted without reserve by the Holder. Unless otherwise
                    explicitly stated by Nemu in writing, the offer, transfer,
                    or sale (herein "Disposition") of personal property through
                    the Services is conducted according to the selected Forum
                    guidelines, which will be provided to Users after completion
                    of the Forum selection process. Provided, however, that Nemu
                    reserves the right to withdraw any item from any Forum or to
                    amend any content on the Services at any time in its sole
                    discretion. Nemu will not be liable to Users or any third
                    party for any withdrawn item, amendment to any content
                    within the Forum, or denial or unavailability of any access
                    to the Services. The applicable Forum will close at the
                    scheduled date and time unless otherwise provided by Nemu.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Transfer Acceptance
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . You agree and acknowledge that, in exchange for valuable
                    consideration (including but not limited to the rights to
                    use the Services and participate in the online Forum), that
                    you will accept transfer of your item and agree to any
                    additional fees applicable for shipped items. It is your
                    responsibility to read the full item listing and to
                    understand the pickup and delivery options and costs for
                    each item before accepting or buying the available item. All
                    taxes, shipping, and handling charges are charged
                    separately. If you do not agree to the shipping terms and
                    costs, please do not accept or purchase the items.
                    Notwithstanding the foregoing, for motor vehicles, an offer
                    initiates a non-binding transaction representing an
                    offeror's serious expression of interest in buying the motor
                    vehicle and does not create a formal contract with Nemu nor
                    between the offeror and the Holder.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Title and Risk of Loss
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Subject to these Terms, title and risk of loss to
                    purchased items will transfer from the Holder to the
                    recipient (the "Recipient") upon either the close of the
                    Forum or, as applicable, the completed processing and
                    receipt of your payment. In the event that a Recipient takes
                    possession of any purchased item before the completed
                    processing and receipt of your payment, the risk of loss
                    will transfer to the Recipient upon Recipient taking
                    possession of the item, but Holder will retain title to the
                    item. Holders may, but are not obligated to, maintain
                    appropriate insurance on items and ensure its insurance
                    covers the items so long as Holder retains risk of loss as
                    provided in this Section.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Pickup Option</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Certain items may have a designated pickup time and
                    location. Before accepting or making an offer on an item,
                    confirm whether you can pick up your item at the designated
                    time and location. You may be required to provide your own
                    tools, labor and transportation to facilitate safe removal
                    of your item(s). Plan accordingly for large or bulky items.
                    Nemu will not be liable for any damages created or incurred
                    by you upon the pickup or transport of your item(s).
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Failure to take Possession
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . In the event that you fail to pickup or designate shipping
                    for items accepted or purchased in accordance with these
                    Terms within the previously agreed upon time limit following
                    the close of the Forum, the Holder may, in its sole
                    discretion and upon notice sent to Recipient through the
                    Services or otherwise, cause Recipient to be deemed to have
                    abandoned and forfeited the items (an "Abandonment"). In the
                    event of an Abandonment, Users agree that title and risk of
                    loss to such items will automatically transfer to, or remain
                    with, the prior lawful owner without any further action by
                    Users or Nemu. Recipient expressly agrees that failure to
                    receive any item in the event of Abandonment does not
                    relieve Recipient of its obligation to pay any fees or
                    expenses, plus all associated taxes, and collections and
                    legal fees incurred prior to and as a result of such
                    Abandonment.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp; &nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Returns</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Nemu will not accept or facilitate any returns or
                    exchanges.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Goods Not for Resale or Export
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . You represent and warrant that you are accepting or buying
                    items for your own personal or household use only, and not
                    for resale or export.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>9.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>PAYMENT</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Fees</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . We reserve the right to charge fees for the Services (the
                    "Fees"). Your Fees will be determined by Nemu based the
                    scope of the Services and provided in Additional Agreement.
                    Nemu reserves the right and to modify the Fees for our
                    Services at any time, at our discretion. We will make
                    reasonable efforts to notify you in advance of any changes
                    to the Fees that may affect your obligations under these
                    Terms or any Additional Agreement. Unless otherwise stated,
                    the fees do not include any taxes, levies, duties or similar
                    governmental assessments, including VAT, sales, use or
                    withholding taxes assessable by any local, state, provincial
                    or foreign jurisdiction (collectively "Taxes"). You are
                    responsible for paying Taxes except those assessable against
                    Nemu based on its revenue. We will invoice you for such
                    Taxes if we believe we have a legal obligation to do so.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Maintenance of Payment Information
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . By providing your credit card information to Nemu, you
                    irrevocably authorize Nemu to charge your credit card for
                    the fees, taxes, and any other previously agreed upon costs
                    associated with the Services. You represent and warrant that
                    (i) the credit card information you supply to us is true,
                    correct and complete, (ii) you are duly authorized to use
                    such credit card for the purchase, (iii) charges incurred by
                    you will be honored by your credit card company, and (iv)
                    subject to Subsection 9(a) above, you will pay charges
                    incurred by you at the posted rates, including all
                    applicable taxes. Nemu reserves the right in its sole and
                    absolute discretion to suspend the Account of any User not
                    maintaining valid payment information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Payment Forms Accepted
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . All invoices must be paid with a digital check, and/or
                    credit card. Notwithstanding the foregoing, in the event
                    Nemu accepts an alternate payment method in its sole
                    discretion and said payment method has been transacted,
                    cashed, and cleared as applicable, such acceptance and
                    completion of the payment method will constitute a valid
                    waiver of the preceding term of this Section by Nemu only
                    for that transaction, and shall not be deemed a waiver of
                    this Section for any other transaction.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Failure to Pay</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . If your payment method fails or your Account is otherwise
                    past due, we may collect amounts owed by charging other
                    payment methods on file with us, and/or retain collection
                    agencies and legal counsel to collect such fees at your
                    additional cost and expense. In addition, late fees will
                    accrue interest at a rate of 1.5% per month, or such lower
                    rate that is the maximum amount permitted by applicable law.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>10.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      DISCLAIMER OF WARRANTIES
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    ALL ITEMS AND ITEM DESCRIPTIONS PURCHASED OR PROVIDED
                    THROUGH THE SERVICES ARE PROVIDED "AS IS" AND "WHERE IS" AND
                    NEMU MAKES NO, AND EXPRESSLY DISCLAIMS ANY AND ALL,
                    GUARANTEES, WARRANTIES AND REPRESENTATIONS OF ANY KIND,
                    WHETHER EXPRESS OR IMPLIED, TO USERS WITH RESPECT TO ANY
                    ITEM OR THE ACCURACY OR COMPLETENESS OF ANY ITEM DESCRIPTION
                    OR THE ABILITY OF A HOLDER OR NEMU TO TRANSFER AN ITEM. NEMU
                    EXPRESSLY DISCLAIMS THE IMPLIED WARRANTIES OF
                    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
                    NON-INFRINGEMENT, AND NEMU EXPRESSLY DISCLAIMS ANY WARRANTY
                    OF TITLE WITH RESPECT TO NEMU. FURTHER, FOR THE AVOIDANCE OF
                    DOUBT, NEMU MAKES NO WARRANTIES, EXPRESS OR IMPLIED, WITH
                    RESPECT TO AN ITEM'S QUALITY, SAFETY, LEGALITY, RARITY,
                    IMPORTANCE, HISTORICAL RELEVANCE, OR CONDITION. UNLESS
                    EXPRESSLY PROVIDED IN A SEPARATE THIRD-PARTY AGREEMENT, TO
                    WHICH NEMU IS NOT A PARTY, NO ADVICE OR INFORMATION, WHETHER
                    ORAL OR WRITTEN, OBTAINED BY YOU FROM NEMU OR THROUGH THE
                    SERVICES WILL CREATE ANY WARRANTY NOT EXPRESSLY STATED
                    HEREIN. YOUR USE OF THE SERVICES, ITS CONTENT, AND ANY ITEMS
                    OBTAINED THROUGH THE SERVICES IS AT YOUR OWN RISK. THE
                    SERVICES, ITS CONTENT, AND ANY DOWNLOADS OR ITEMS OBTAINED
                    THROUGH THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS
                    AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER
                    EXPRESS OR IMPLIED. UNLESS EXPRESSLY PROVIDED IN A SEPARATE
                    THIRD-PARTY AGREEMENT, TO WHICH NEMU IS NOT A PARTY, NEITHER
                    NEMU
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    NOR ANY PERSON ASSOCIATED WITH NEMU MAKES ANY WARRANTY OR
                    REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY,
                    RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE
                    SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER NEMU NOR
                    ANYONE ASSOCIATED WITH NEMU REPRESENTS OR WARRANTS THAT THE
                    SERVICES, ITS CONTENT, OR ANY DOWNLOADS OR ITEMS OBTAINED
                    THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE,
                    OR
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>&nbsp;</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT OUR SITE
                    OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR
                    OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES OR ITEMS
                    OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS
                    OR EXPECTATIONS.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    YOU UNDERSTAND THAT WE CANNOT AND DO NOT GUARANTEE OR
                    WARRANT THAT ANY FILES AVAILABLE FOR DOWNLOADING FROM THE
                    INTERNET OR THROUGH THE SERVICES WILL BE FREE OF VIRUSES OR
                    OTHER DESTRUCTIVE CODE. YOU ARE RESPONSIBLE FOR IMPLEMENTING
                    SUFFICIENT PROCEDURES AND CHECKPOINTS TO SATISFY YOUR
                    PARTICULAR REQUIREMENTS FOR ANTI-VIRUS PROTECTION AND
                    ACCURACY OF DATA INPUT AND OUTPUT, AND FOR MAINTAINING A
                    MEANS EXTERNAL TO OUR SITE FOR ANY RECONSTRUCTION OF ANY
                    LOST DATA. TO THE FULLEST EXTENT PROVIDED BY LAW, WE WILL
                    NOT BE LIABLE FOR ANY LOSS OR DAMAGE CAUSED BY A DISTRIBUTED
                    DENIAL-OF-SERVICE ATTACK, VIRUSES, OR OTHER TECHNOLOGICALLY
                    HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT,
                    COMPUTER PROGRAMS, DATA, OR OTHER PROPRIETARY MATERIAL DUE
                    TO YOUR USE OF THE SERVICES OR ITEMS OBTAINED THROUGH THE
                    SERVICES OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON
                    THE SERVICES, OR ON ANY WEBSITE LINKED TO THE SERVICES. TO
                    THE FULLEST EXTENT PROVIDED BY LAW, NEMU HEREBY DISCLAIMS
                    ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED,
                    STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY
                    WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS
                    FOR PARTICULAR PURPOSE.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    SOME STATES DO NOT ALLOW EXCLUSION OF IMPLIED WARRANTIES, SO
                    THESE EXCLUSIONS MAY NOT APPLY IN INDIVIDUAL CASES. YOU MAY
                    HAVE ADDITIONAL RIGHTS THAT VARY FROM STATE TO STATE. TO THE
                    EXTENT THAT WE MAY NOT, AS A MATTER OF APPLICABLE LAW,
                    DISCLAIM ANY IMPLIED WARRANTY, THE SCOPE AND DURATION OF
                    SUCH WARRANTY WILL BE THE MINIMUM PERMITTED UNDER SUCH
                    APPLICABLE LAW.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>11.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>USER CONTENT</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    By providing User-generated content and material provided to
                    us in connection with the Services (the "User Content") to
                    Nemu directly or indirectly through the Services, you hereby
                    grant to Nemu its affiliates and service providers, and each
                    of their and our respective licensees, successors, and
                    assigns a perpetual, irrevocable, royalty-free, worldwide,
                    sublicensable, fully paid up, royalty-free, transferable,
                    and fully sub-licensable right and license to use, copy,
                    publish, translate, modify, reformat, create derivative
                    works from, distribute, reproduce, sell, publicly display
                    and perform, transmit, publish, broadcast, host. archive,
                    store, cache, use or otherwise exploit all or any portion of
                    the User Content and/or any other information associated
                    with the User Content, in any commercial or noncommercial
                    manner whatsoever, in whole or in part, in any and all
                    distribution channels, forms, media or technology, whether
                    now known or hereafter developed and for any other marketing
                    or promotional purposes with or without attribution and
                    without further notice to you. Neither you, nor any other
                    person or entity will have the right to (x) receive any
                    royalty or consideration of any kind for the use of the User
                    Content pursuant to these Terms or (y) inspect or approve
                    the editorial copy or other material that may be used in
                    connection with the User Content. You hereby agree and
                    understand that you will not be entitled to prevent any
                    transfer of User Content to any third party. Nemu shall not
                    bear any liability for any loss, damage, cost or expense
                    that you may suffer or incur as a result of or in connection
                    with any use by any third party of the User Content. In
                    addition, you hereby explicitly waive any moral right you
                    may have in and to the User Content and forever waive and
                    agree not to claim or assert any entitlement to any and all
                    moral rights in any of the User Content.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    To the extent you provide any feedback, comments or
                    suggestions to Nemu regarding the Site and/or the Services
                    (the "Feedback"), Nemu shall have an exclusive,
                    royalty-free, fully paid up, worldwide, perpetual and
                    irrevocable license to incorporate the Feedback into any of
                    Nemu’s current or future products, technologies or services
                    and to use such Feedback for any purpose, all without
                    further compensation to you and without your approval. You
                    agree that all such Feedback shall be deemed
                    non-confidential. Further, you warrant that your Feedback is
                    not subject to any license terms that would purport to
                    require Nemu to comply with any additional obligations with
                    respect to any of Nemu’s current or future products,
                    technologies or services that incorporate any Feedback.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu retains the right, in its sole discretion and without
                    prior notice, to remove, revise or refuse to post any User
                    Content for any reason or no reason. Subject to the licenses
                    granted in these Terms, you retain ownership of any
                    copyright and other rights you may have in the User Content.
                    To the fullest extent permitted under applicable law, you
                    waive your right to enforce against Nemu, our assignees, our
                    sublicensees, and their assignees your Intellectual Property
                    Rights in the User Content in connection with our, those
                    assignees', and those sublicensees' use of that User Content
                    in connection with our provision, expansion, and promotion
                    of the Services. By submitting User Content, you represent
                    and warrant that (i) you own or control any and all rights
                    in and to the User Content, and you have (and will continue
                    to have) all of the licenses, rights, consents and
                    permissions all rights required to provide the User Content
                    to Nemu and grant the licenses granted herein to Nemu , and
                    if you are not the holder of such rights, the holder of such
                    rights has completely and effectively waived all such rights
                    and irrevocably granted you the right to grant the rights
                    and licenses to Nemu herein without the need for payment to
                    you or any other person or entity; (ii) you have obtained
                    permission from all individuals that appear in the User
                    Content to use, and grant others the right to use, their
                    name, image, voice and/or likeness without the need for
                    payment to you or any other person or entity; (iii) you are
                    18 years of age or older; and (iv) the User Content is
                    accurate and complete and does not violate these Terms. You
                    understand and acknowledge that you are responsible for any
                    User Content you submit or provide, and you, not Nemu, have
                    full responsibility for such content, including its
                    legality, reliability, accuracy, and appropriateness. You
                    understand and acknowledge that Nemu is not responsible or
                    liable to any third party for the content or accuracy of any
                    User Content provided by you or any other User.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Upon request by Nemu, you will furnish Nemu any
                    documentation, substantiation or releases necessary to
                    verify your compliance with these Terms. You are solely
                    responsible for the User Content and the consequences of
                    posting or publishing such material on the Site in any way.
                    Nemu does not guarantee the truthfulness, accuracy or
                    reliability of any User Content or endorse any opinions
                    expressed by any User or anyone else. Although Nemu has no
                    obligation to screen, edit or monitor any of the User
                    Content, Nemu explicitly reserves the right, at its sole
                    discretion, to remove or edit, without giving any prior
                    notice, any User Content available on the Site at any time
                    and for any reason, and you are solely responsible for
                    creating backup copies of and replacing any User Content you
                    post or store on the Site at your sole expense. By
                    submitting the User Content you fully and unconditionally
                    release and forever discharge Nemu and its officers,
                    directors, employees and agents from any and all claims,
                    demands and damages (actual or consequential, direct or
                    indirect), whether now known or unknown, of every kind and
                    nature relating to, arising out of or in any way connected:
                    (i) disputes between you and another User or one or more
                    Users or any other person or entity, or (ii) the use by Nemu
                    or you of the User Content, including, without limitation,
                    any and all claims that use of the User Content pursuant to
                    these Terms violates any of your Intellectual Property
                    Rights. You acknowledge and agree that Nemu has no control
                    over and shall have no liability for any damages resulting
                    from, the use (including, without limitation,
                    re-publication) or misuse by you or any third party of any
                    User Content. Nemu acts as a passive conduit for User
                    Content and has no obligation to modify, screen or monitor
                    User Content. If Nemu becomes aware of any User Content that
                    allegedly may not conform to these Terms, Nemu may
                    investigate the allegation and determine in its sole
                    discretion whether to take action in accordance with these
                    Terms. Nemu has no liability or responsibility to Users for
                    performance or nonperformance of such activities.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Without limiting the foregoing, we have the right to
                    cooperate fully with any law enforcement authorities or
                    court order requesting or directing us to disclose the
                    identity or other information of anyone posting any
                    materials on or through the Services. YOU WAIVE AND HOLD
                    HARMLESS NEMU AND ITS LICENSEES AND SERVICE PROVIDERS FROM
                    ANY CLAIMS RESULTING FROM ANY ACTION TAKEN BY ANY OF THE
                    FOREGOING PARTIES DURING, OR TAKEN AS A CONSEQUENCE OF,
                    INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT
                    AUTHORITIES.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>12.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      COPYRIGHT COMPLAINTS
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    It is our policy to respond to alleged infringement notices
                    that comply with the Digital Millennium Copyright Act of
                    1998 ("DMCA"). If you believe that your copyrighted work has
                    been copied in a way that constitutes copyright infringement
                    and is accessible via the Service, please notify Nemu's
                    copyright agent as set forth in the DMCA.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    The above information must be submitted to the following
                    DMCA Agent:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Attn: DMCA Notice, Nemu, Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Address:</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Telephone:</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Email:</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Under federal law, if you knowingly misrepresent that online
                    material is infringing, you may be subject to criminal
                    prosecution for perjury and civil penalties, including
                    monetary damages, court costs, and attorneys' fees. Please
                    note that this procedure is exclusively for notifying Nemu
                    and its affiliates that our copyrighted material has been
                    infringed. The preceding requirements are intended to comply
                    with Nemu's rights and obligations under the DMCA, including
                    17 U.S.C. §512©, but do not constitute legal advice. It may
                    be advisable to contact an attorney regarding your rights
                    and obligations under the DMCA and other applicable laws. In
                    accordance with the DMCA and other applicable law, Nemu has
                    adopted a policy of terminating, in appropriate
                    circumstances, Users who are deemed to be repeat infringers.
                    Nemu may also at its sole discretion limit access to the
                    Services and/or terminate the Accounts of any Users who
                    infringe any Intellectual Property Rights of others, whether
                    or not there is any repeat infringement.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>13.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>INDEMNITY</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    You agree to defend, indemnify, and hold harmless Nemu and
                    its affiliates and their respective employees, contractors,
                    agents, officers, licensors, managers and directors, from
                    and against any and all claims, damages, suits, proceedings,
                    investigations, actions, demands, obligations, losses,
                    damages, settlement amounts, fines, penalties, costs,
                    expenses and any and all other liabilities (including but
                    not limited to reasonable attorneys' fees and court costs)
                    arising from or related to: (i) your use misuse of,
                    inability to use, activities in connection with, and/or
                    access to the Services, including any data or content
                    transmitted or received by you; (ii) your violation of any
                    term of these Terms or any Additional Agreement, including
                    without limitation your breach of any of the representations
                    and warranties set forth herein; (iii) your violation of any
                    third-party right, including without limitation any right of
                    privacy, publicity or intellectual property; (iv) your
                    violation of any applicable law, rule, regulation or
                    guideline; (v) your User Content or any content that is
                    submitted via your Account, including, without limitation,
                    any misleading, false, or inaccurate information you submit
                    or otherwise provide; (vi) your acts, omissions, negligence
                    or willful misconduct; (vii) any other party's access and
                    use of the Service with your unique username, password or
                    security code and any failure by you to properly secure your
                    password and security codes and (viii) your items, including
                    without limitation any product liability claims, warranty or
                    quality disputes, claims for damage to person or property,
                    including death, or otherwise arising out of or relating in
                    any way to the items purchased, acquired, offered, or sold
                    by you through the Services.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Without derogating from the foregoing, we reserve the right
                    to assume the exclusive defense and control of any matter
                    that is subject to indemnification by you, which will not
                    excuse your indemnity obligations hereunder and in which
                    event you will fully cooperate with us in asserting any
                    available defense. You agree not to settle any matter
                    subject to an indemnification by you without first obtaining
                    our prior express written approval.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>14.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      LIMITATION OF LIABILITY; RELEASE
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      General Limitation of Liability
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL
                    WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR CONSEQUENTIAL,
                    INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE OR
                    ENHANCED DAMAGES, LOST PROFITS OR REVENUES OR DIMINUTION IN
                    VALUE, ARISING OUT OF, OR RELATING TO, AND/OR IN CONNECTION
                    WITH THE SERVICES, REGARDLESS OF (i) WHETHER SUCH DAMAGES
                    WERE FORESEEABLE, (ii) WHETHER OR NOT WE WERE ADVISED OF THE
                    POSSIBILITY OF SUCH DAMAGES AND (iii) THE LEGAL OR EQUITABLE
                    THEORY (CONTRACT, TORT OR OTHERWISE) UPON WHICH THE CLAIM IS
                    BASED. OUR SOLE AND ENTIRE MAXIMUM LIABILITY, FOR ANY
                    REASON, AND YOUR SOLE AND EXCLUSIVE REMEDY FOR ANY CAUSE
                    WHATSOEVER, SHALL BE LIMITED TO, AND SHALL NOT EXCEED, THE
                    GREATER OF (i) THE TOTAL FEES WHICH YOU PAID TO US IN THE 3
                    MONTHS PRIOR TO THE ACTION GIVING RISE TO THE LIABILITY AND
                    (ii) $100. THE LIMITATION OF LIABILITY SET FORTH ABOVE SHALL
                    NOT APPLY TO (I) LIABILITY RESULTING FROM OUR GROSS
                    NEGLIGENCE OR WILLFUL MISCONDUCT AND (II) DEATH OR BODILY
                    INJURY RESULTING FROM OUR ACTS OR OMISSIONS.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Items Disclaimer</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . TO THE MAXIMUM EXTENT PERMITTED BY LAW, AND WITHOUT
                    LIMITING ANY OTHER PROVISION OF THESE TERMS, NEMU SHALL NOT
                    BE LIABLE TO ANY USER FOR ANY LOSS OR DAMAGE TO ITEMS OR ANY
                    OTHER ITEMS TENDERED, STORED OR HANDLED OR FOR ANY OTHER
                    PROPERTY OF USER HOWEVER CAUSED UNLESS SUCH LOSS OR DAMAGE
                    DIRECTLY AND PROXIMATELY RESULTS FROM THE GROSS NEGLIGENCE
                    OR WILLFUL MISCONDUCT OF NEMU. IF THE FOREGOING LIMITATIONS
                    ARE NOT ENFORCEABLE FOR ANY REASON, THE USER AGREES THAT
                    NEMU'S MAXIMUM TOTAL AGGREGATE LIABILITY FOR ANY DAMAGE TO
                    ANY ITEM SHALL BE LIMITED TO THE CURRENT MARKET VALUE OF THE
                    ITEM, NOT TO EXCEED $100 PER ITEM.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Release</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . IF YOU HAVE A DISPUTE WITH ONE OR MORE USERS, YOU RELEASE
                    NEMU (AND ITS AFFILIATES AND SUBSIDIARIES, AND ITS AND THEIR
                    RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES AND AGENTS) FROM
                    CLAIMS, DEMANDS AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF
                    EVERY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING OUT OF OR
                    IN ANY WAY CONNECTED WITH SUCH DISPUTES. IN ENTERING INTO
                    THIS RELEASE, YOU EXPRESSLY WAIVE ANY PROTECTIONS (WHETHER
                    STATUTORY OR OTHERWISE) THAT WOULD OTHERWISE LIMIT THE
                    COVERAGE OF THIS RELEASE TO INCLUDE ONLY THOSE CLAIMS WHICH
                    YOU MAY KNOW OR SUSPECT TO EXIST IN YOUR FAVOR AT THE TIME
                    OF AGREEING TO THIS RELEASE. YOU EXPRESSLY ACKNOWLEDGE AND
                    AGREE THAT ALL RIGHTS UNDER SECTION 1542 OF THE CALIFORNIA
                    CIVIL CODE AND ARE EXPRESSLY WAIVED. WHICH PROVIDES AS
                    FOLLOWS: "A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH
                    THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER
                    FAVOR AT THE TIME OF EXECUTING THE RELEASE AND THAT, IF
                    KNOWN BY HIM OR HER, WOULD HAVE MATERIALLY AFFECTED HIS OR
                    HER SETTLEMENT WITH THE DEBTOR OR RELEASED PARTY." IN
                    ADDITION, YOU HEREBY KNOWINGLY AND VOLUNTARILY WAIVE ANY
                    PROTECTION THAT MAY EXIST UNDER ANY COMPARABLE OR SIMILAR
                    STATUTES AND PRINCIPLES OF COMMON LAW OR ANY OTHER STATE
                    LAWS AS IT PERTAINS TO THE ENFORCEMENT OF THE RELEASES
                    PROVIDED IN THIS SECTION.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>15.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>LEGAL DISPUTES</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR RIGHTS
                    AND WILL HAVE A SUBSTANTIAL IMPACT ON HOW CLAIMS YOU AND
                    NEMU HAVE AGAINST EACH OTHER ARE RESOLVED. YOU ARE AGREEING
                    TO GIVE UP ANY RIGHTS TO LITIGATE CLAIMS IN A COURT OR
                    BEFORE A JURY, OR TO PARTICIPATE IN A CLASS ACTION OR
                    REPRESENTATIVE ACTION WITH RESPECT TO A CLAIM. OTHER RIGHTS
                    THAT YOU WOULD HAVE IF YOU WENT TO COURT MAY ALSO BE
                    UNAVAILABLE OR MAY BE LIMITED IN ARBITRATION.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    FOR ALL MATTERS, DISPUTES, OR CLAIMS BETWEEN YOU AND NEMU
                    (INCLUDING ANY CLAIM OR DISPUTE BETWEEN YOU AND A
                    THIRD-PARTY AGENT OF NEMU) THAT RELATES IN ANY WAY TO OR
                    ARISES OUT OF THIS OR PREVIOUS VERSIONS OF THESE TERMS, YOUR
                    USE OF OR ACCESS TO THE SERVICES, YOUR RELATIONSHIP WITH
                    NEMU, THE ACTIONS OF NEMU OR ITS AGENTS, OR ANY PRODUCTS OR
                    SERVICES SOLD OR PURCHASED THROUGH THE SERVICES, WHETHER
                    BASED IN CONTRACT, TORT, STATUTE, FRAUD, MISREPRESENTATION
                    OR ANY OTHER LEGAL THEORY, INCLUDING ANY DISPUTE ABOUT THE
                    INTERPRETATION OR APPLICATION OF THIS DISPUTE RESOLUTION
                    PROVISION OR THE ENFORCEABILITY, REVOCABILITY OR VALIDITY OF
                    THIS ARBITRATION PROVISION OR ANY PORTION OF THE ARBITRATION
                    PROVISION ("DISPUTES"), WILL BE RESOLVED BY THE PROCESSES
                    AND PROCEDURES DESCRIBED IN THIS SECTION, FIRST AMICABLY AND
                    THEN THROUGH FINAL AND BINDING ARBITRATION BEFORE A NEUTRAL
                    ARBITRATOR INSTEAD OF IN A COURT BY A JUDGE OR JURY. EACH
                    PARTY WAIVES ITS RIGHTS TO A JURY TRIAL AND TO HAVE ANY
                    DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS OR THE
                    SERVICE RESOLVED IN COURT.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Expiration of Claims
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . You agree that any dispute, claim or cause of action (each
                    a "Dispute") you may have with respect to Nemu, or the
                    Services must be commenced within one hundred eighty (180)
                    days after the date the Dispute arose.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Governing Law</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . You agree that: (i) the Services and these Terms shall be
                    deemed solely based in Delaware; and (ii) the Services shall
                    be deemed passive that do not give rise to personal
                    jurisdiction over us, either specific or general, in
                    jurisdictions other than Delaware. These Terms shall be
                    governed by the internal substantive laws of the State of
                    Delaware, without giving effect to any choice or conflict of
                    law provision or rule (whether of the State of Delaware or
                    any other jurisdiction) that would cause the application of
                    the laws of any jurisdiction other than those of the State
                    of Delaware. The parties acknowledge that these Terms
                    evidence a transaction involving interstate commerce.
                    Notwithstanding the preceding sentences with respect to the
                    substantive law, any arbitration conducted pursuant to the
                    terms of these Terms shall be governed by the Federal
                    Arbitration Act (9 U.S.C. §§ 1-16). The application of the
                    United Nations Convention on Contracts for the International
                    Sale of Goods is expressly excluded.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Amicable Resolution and Agreement to Arbitrate
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . READ THIS SECTION CAREFULLY BECAUSE IT REQUIRES THE
                    PARTIES TO ARBITRATE THEIR DISPUTES AND LIMITS THE MANNER IN
                    WHICH YOU CAN SEEK RELIEF FROM NEMU. For any Dispute with
                    Nemu, you agree to first contact us at Nemu at
                    support@mynemu.com and attempt to resolve the Dispute with
                    us informally. In the unlikely event that Nemu has not been
                    able to resolve a Dispute it has with you after sixty (60)
                    days, you and Nemu agree to resolve any Dispute, claim, or
                    controversy (excluding any claims for injunctive or other
                    equitable relief as provided below) by binding arbitration
                    to be administered by the American Arbitration Association
                    in Delaware (unless the parties both expressly agree on
                    another location) in accordance with the American
                    Arbitration Association's Commercial Arbitration Rules. Each
                    of the parties to this Agreement hereby agrees and consents
                    to such venue and waives any objection thereto. The
                    arbitrability of any such dispute, claim or controversy
                    shall likewise be determined in such arbitration. Such
                    arbitration proceeding shall be conducted in as expedited a
                    manner as is then permitted by the commercial arbitration
                    rules (formal or informal) of the American Arbitration
                    Association. Both the foregoing agreement of the parties to
                    this agreement to arbitrate any and all such disputes,
                    claims and controversies and the results, determinations,
                    findings, judgments and/or awards rendered through any such
                    arbitration shall be final and binding on the parties hereto
                    and may be specifically enforced by legal proceedings.
                    Notwithstanding any provision of this Agreement relating to
                    which state laws govern this Agreement, all issues relating
                    to arbitrability or the enforcement of the agreement to
                    arbitrate contained herein shall be governed by the Federal
                    Arbitration Act (9 U.S.C. §§ 1 et seq.) and the federal
                    common law of arbitration. Each party will be responsible
                    for paying any filing, administrative and arbitrator fees
                    pursuant to and in accordance with AAA rules, and the award
                    rendered by the arbitrator shall include costs of
                    arbitration, reasonable attorneys' fees and reasonable costs
                    for expert and other witnesses. Any judgment on the award
                    rendered by the arbitrator may be entered in any court of
                    competent jurisdiction. Nothing in this paragraph shall be
                    deemed as preventing Nemu from seeking injunctive or other
                    equitable relief from the courts as necessary to prevent the
                    actual or threatened infringement, misappropriation, or
                    violation of our data security, proprietary or Intellectual
                    Property Rights. If an arbitrator or court decides that any
                    part of this agreement to arbitrate is invalid or
                    unenforceable, the other parts of this Section shall still
                    apply. If the value of the relief sought is $10,000 or less,
                    you or Nemu may elect to have the arbitration conducted by
                    telephone or based solely on written submissions, which
                    election shall be binding on you and Nemu subject to the
                    arbitrator's discretion to require an in-person hearing, if
                    the circumstances warrant. In cases where an in-person
                    hearing is held, you and/or Nemu may attend by telephone,
                    unless the arbitrator requires otherwise. You may elect to
                    pursue your claim in small-claims court rather than
                    arbitration if the amount in controversy is less than $2,000
                    and you provide us with written notice of your intention do
                    so within 60 days of the event giving rise to the claim. The
                    arbitration or small-claims court proceeding will be limited
                    solely to your individual dispute or controversy.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Class Action/Jury Trial Waiver
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . WITH RESPECT TO ALL PERSONS AND ENTITIES, REGARDLESS OF
                    WHETHER THEY HAVE OBTAINED OR USED THE SERVICE FOR PERSONAL,
                    COMMERCIAL OR OTHER PURPOSES, ALL CLAIMS MUST BE BROUGHT IN
                    THE PARTIES' INDIVIDUAL CAPACITIES, AND NOT AS A PLAINTIFFS
                    OR CLASS MEMBERS IN ANY PURPORTED CLASS ACTION, COLLECTIVE
                    ACTION, PRIVATE ATTORNEY GENERAL ACTION OR OTHER
                    REPRESENTATIVE PROCEEDING. THIS WAIVER APPLIES TO CLASS
                    ARBITRATION, AND, UNLESS WE AGREE OTHERWISE, THE ARBITRATOR
                    MAY NOT CONSOLIDATE MORE THAN ONE PERSON'S CLAIMS. YOU AGREE
                    THAT, BY AGREEING TO THESE NEMU TERMS YOU AND NEMU ARE EACH
                    WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A
                    CLASS ACTION, COLLECTIVE ACTION, PRIVATE ATTORNEY GENERAL
                    ACTION, OR OTHER REPRESENTATIVE PROCEEDING OF ANY KIND.
                    ALSO, THE ARBITRATOR MAY AWARD RELIEF (INCLUDING MONETARY,
                    INJUNCTIVE, AND DECLARATORY RELIEF) ONLY IN FAVOR OF THE
                    INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO THE EXTENT
                    NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT PARTY'S
                    INDIVIDUAL CLAM. ANY RELIEF AWARDED CANNOT AFFECT OTHER
                    USERS. IF A COURT DECIDES THAT APPLICABLE LAW PRECLUDES
                    ENFORCEMENT OF ANY OF THIS PARAGRAPH'S LIMITATIONS AS TO A
                    PARTICULAR CLAIM FOR RELIEF, THEN THAT CLAIM (AND ONLY THAT
                    CLAIM) MUST BE SEVERED FROM THE ARBITRATION AND MAY BE
                    BROUGHT IN COURT, SUBJECT TO YOUR AND NEMU'S RIGHT TO APPEAL
                    THE COURT'S DECISION. ALL OTHER CLAIMS WILL BE ARBITRATED.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Jurisdiction</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . Unless you and we agree otherwise, in the event that the
                    agreement to arbitrate above is found not to apply to you or
                    to a particular claim or dispute, either as a result of a
                    decision by the arbitrator or a court order, or for any
                    actions for which we retain the right to seek injunctive or
                    other equitable relief in a court of competent jurisdiction
                    to prevent the actual or threatened infringement,
                    misappropriation or violation of our proprietary or
                    Intellectual Property Rights as set forth in the provisions
                    above, including any provisional relief required to prevent
                    irreparable harm, you agree that any claim or dispute that
                    has arisen or may arise between you and Nemu must be
                    resolved exclusively by a state or federal court located in
                    Delaware. You and Nemu irrevocable agree to submit to the
                    exclusive personal jurisdiction of the courts located within
                    Delaware for the purpose of litigating all such claims or
                    disputes. You further agree that Delaware is the proper
                    forum for any appeals of an arbitration award or for trial
                    court proceedings in the event that the arbitration
                    provision below is found to be unenforceable.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>16.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>TERMINATION</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    These Terms shall remain in effect until terminated as set
                    forth herein.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu may, in its sole discretion, immediately temporarily or
                    permanently limit, suspend or terminate your Account and any
                    licenses granted therein. We may provide you a notice in the
                    event of any such limitation, suspension, or termination.
                    During any such limitation or suspension, you will not have
                    the ability to use or access your Account. In the event that
                    we will determine, at our sole discretion, that the reason
                    for the limitation or suspension of access to your Account
                    has been resolved, we will restore access to your Account.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    If you object to any term hereof, as may be amended from
                    time to time, or become dissatisfied with the Services, you
                    may terminate your Account as provided in Section 3(d)
                    herein. This will be your sole remedy in such circumstances.
                    Upon termination of these Terms: (i) the license and all
                    other rights granted to you hereunder will automatically
                    terminate, (ii) you must immediately cease all use of the
                    Services; and (iii) the provisions of these Terms that, by
                    their nature and content, must survive the termination of
                    these Terms in order to achieve the fundamental purposes of
                    these Terms shall so survive.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <span style={{ fontSize: "11pt" }}>
                    Additionally, Nemu may at any time, at its sole discretion,
                    cease the operation of the Services or any part thereof
                    temporarily or permanently, delete any information from the
                    Site, or correct, modify, amend, enhance, improve and make
                    any other changes thereto or discontinue displaying or
                    providing any information, content or features therein,
                    without giving any prior notice. You agree and acknowledge
                    that Nemu does not assume any responsibility with respect to
                    or in connection with the termination of the Site’s
                    operation and loss of any data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>17.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;
                  </span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>MISCELLANEOUS</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Third Party Components
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;The Site and/or the Services may use or include
                    third-party software, files and components that are subject
                    to open source and third-party license terms ("Third Party
                    Components"). Your right to use such Third-Party Components
                    as part of, or in connection with, the Site and/or the
                    Services is subject to any applicable acknowledgements and
                    license terms accompanying such Third-Party Components,
                    contained therein or related thereto, and Nemu disclaims all
                    liability related thereto. You acknowledge that Nemu is not
                    the author, owner or licensor of any Third-Party Components,
                    and that Nemu makes no warranties or representations,
                    express or implied, as to the quality, capabilities,
                    operations, performance or suitability of Third-Party
                    Components. Under no circumstances shall the Site and/or the
                    Services or any portion thereof (except for the Third-Party
                    Components contained therein) be deemed to be "open source"
                    or "publicly available" software.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      California Residents
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;If you are a California resident, in accordance with
                    Cal. Civ. Code §1789.3, you may report complaints to the
                    Complaint Assistance Unit of the Division of Consumer
                    Services of the California Department of Consumer Affairs by
                    contacting them in writing at 400 R Street, Sacramento, CA
                    95814, or by telephone at (800) 952-5210.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Electronic Communications
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;All information communicated as part of the Services
                    is considered an electronic communication. When you
                    communicate with us through the Site or via other forms of
                    electronic media, such as e-mail, you are communicating with
                    us electronically. You agree that we may communicate
                    electronically with you and that such communications, as
                    well as notices, disclosures, agreements, and other
                    communications that we provide to you electronically, are
                    equivalent to communications in writing and shall have the
                    same force and effect as if they were in writing and signed
                    by the party sending the communication. You further
                    acknowledge and agree that by clicking on a button labeled
                    "SUBMIT," "CONTINUE," "REGISTER," "I AGREE" or similar links
                    or buttons, you are submitting a legally binding electronic
                    signature and are entering into a legally binding contract.
                    You acknowledge that your electronic submissions constitute
                    your agreement and intent to be bound by these Terms. YOU
                    HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
                    ORDERS AND OTHER RECORDS AND TO ELECTRONIC DELIVERY OF
                    NOTICES, POLICIES AND RECORDS OF TRANSACTIONS INITIATED OR
                    COMPLETED THROUGH THE SERVICES.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Notices to You</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;We may provide any notice to you under these Terms
                    by: (i) sending a message to the e-mail address you provide
                    or (ii) by posting to the Site. Notices sent by e-mail will
                    be effective when we send the e-mail and notices we provide
                    by posting will be effective upon posting. It is your
                    responsibility to keep your e-mail address current and keep
                    us informed of any changes in your email or mailing address
                    so that you continue to receive all communications without
                    interruption. You hereby (x) consent to receive all
                    communications from us in an electronic form; and (y) agree
                    that all terms and conditions, agreements, notices,
                    documents, disclosures, and other communications that we
                    provide to you electronically satisfy any legal requirement
                    that such communications would satisfy if they were in
                    writing. Your consent to receive communications and do
                    business electronically, and our agreement to do so, applies
                    to all of your interactions and transactions with us. The
                    foregoing does not affect your non-waivable rights.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Notices to Us</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;To give us notice under these Terms, you must
                    contact us as follows: Nemu, support@mynemu.com. We may
                    update the contact information for notices to us by posting
                    a notice on the Services or amending these Terms. Notices
                    will be effective when received by Nemu.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Relationship</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;No agency, partnership, joint venture,
                    employee-employer or franchiser-franchisee relationship is
                    intended or created by these Terms.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>No Waiver</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;Any requested waiver of any provision of the Terms
                    by Nemu must be made in writing and signed by an authorized
                    representative of Nemu specifically referencing the Terms
                    and the provision to be waived. The failure by us to enforce
                    any right or provision of these Terms will not constitute a
                    waiver of future enforcement of that right or provision.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(h)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>
                      Cumulative Remedies
                    </span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;All rights and remedies provided to Nemu are
                    cumulative and not exclusive, and the exercise by Nemu of
                    any right or remedy does not preclude the exercise of any
                    other rights or remedies that may now or subsequently be
                    available at law, in equity, by statute, in any other
                    agreement between the parties or otherwise.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Severability</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;If any term or provision of these Terms is held to
                    be invalid, illegal or unenforceable in any jurisdiction,
                    such invalidity, illegality or unenforceability shall not
                    affect any other term or provision of these Terms or
                    invalidate or render unenforceable such term or provision in
                    any other jurisdiction. Upon a determination that any term
                    or provision is invalid, illegal or unenforceable, the court
                    may modify these Terms to effect the original intent of the
                    parties as closely as possible in order that the
                    transactions contemplated hereby be consummated as
                    originally contemplated to the greatest extent possible.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(j)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Force Majeure</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;We will not be liable or responsible to you, nor be
                    deemed to have defaulted or breached these Terms, for any
                    failure or delay in our performance hereunder when and to
                    the extent such failure or delay is caused by or results
                    from acts or circumstances beyond our reasonable control,
                    each a "Force Majeure Event"). For the avoidance of doubt,
                    Nemu is not liable or responsible for any interruptions or
                    outages of the Services due to technical issues outside of
                    Nemu's reasonable control, including but not limiting to web
                    hosts or service providers, that may lead to the
                    interruption or interference with your ability to offer,
                    sell, acquire, accept or buy items, or otherwise use the
                    Services in any capacity.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(k)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Survival</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;The following Sections survive any termination of
                    these Terms: Payment, User Content, Disclaimer of
                    Warranties, Limitation of Liability, Indemnification, Legal
                    Disputes, and Miscellaneous.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(l)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;
                  </span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Assignment</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;You will not assign any of your rights or delegate
                    any of your obligations under these Terms without our prior
                    written consent. Any purported assignment or delegation in
                    violation of this paragraph is null and void. No assignment
                    or delegation relieves you of any of your obligations under
                    these Terms. Nemu may assign or transfer these Terms and/or
                    its rights and/or obligations hereunder.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(m)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Entire Agreement</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;These Terms and any Additional Agreement between us
                    will be deemed the final and integrated agreement between
                    you and us on the matters contained in these Terms.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>(n)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }}>
                    &nbsp; &nbsp;&nbsp;
                  </span>
                  <u>
                    <span style={{ fontSize: "11pt" }}>Trademarks</span>
                  </u>
                  <span style={{ fontSize: "11pt" }}>
                    . &nbsp;The name "Nemu" and other Nemu marks, logos,
                    designs, phrases, and all other proprietary identifiers that
                    we use in connection with the Services are all trademarks
                    and/or trade names of Nemu in the U.S. and other countries,
                    whether or not registered. They may not be used without the
                    express written prior permission of Nemu.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
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
}
