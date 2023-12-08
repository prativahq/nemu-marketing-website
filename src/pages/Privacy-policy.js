import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const meta = {
  title: "",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function PrivacyPolicy() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <Navbar />
        <section
          className="py-20 xl:pt-24 xl:pb-28 bg-white"
          // style={{
          //   backgroundImage:
          //     'url("flex-ui-assets/elements/pattern-light1.svg")',
          //   backgroundPosition: "center",
          // }}
        >
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 mb-5 lg:mb-0">
                <h1 style={{ textAlign: "center" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      NEMU, INC. TERMS OF SERVICE
                    </span>
                  </strong>
                </h1>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Effective Date: 11/24/2023
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>1.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Introduction</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>Welcome to</span>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Nemu, Inc.</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>2.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Definitions</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>SERVICE</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    means the http://nemu.com website and Nemu mobile
                    application operated by Nemu, Inc.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>PERSONAL DATA</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    means data about a living individual who can be identified
                    from those data (or from those and other information either
                    in our possession or likely to come into our possession).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>USAGE DATA</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    is data collected automatically either generated by the use
                    of Service or from Service infrastructure itself (for
                    example, the duration of a page visit).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>COOKIES</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    are small files stored on your device (computer or mobile
                    device).
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>DATA CONTROLLER</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    means a natural or legal person who (either alone or jointly
                    or in common with other persons) determines the purposes for
                    which and the manner in which any personal data are, or are
                    to be, processed. For the purpose of this Privacy Policy, we
                    are a Data Controller of your data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      DATA PROCESSORS (OR SERVICE PROVIDERS)
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    means any natural or legal person who processes the data on
                    behalf of the Data Controller. We may use the services of
                    various Service Providers in order to process your data more
                    effectively.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>DATA SUBJECT</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    is any living individual who is the subject of Personal
                    Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>THE USER</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    is the individual using our Service. The User corresponds to
                    the Data Subject, who is the subject of Personal Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>3.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>4.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>Email address</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    First name and last name
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>Phone number</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    Address, State, Province, ZIP/Postal code, City
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    Cookies and Usage Data
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Examples of Cookies we use:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Session Cookies:</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    We use Session Cookies to operate our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Preference Cookies:
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    We use Preference Cookies to remember your preferences and
                    various settings.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <span style={{ fontSize: "11pt" }}>Security Cookies:</span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    We use Security Cookies for security purposes.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Advertising Cookies:
                    </span>
                  </strong>
                  <span style={{ fontSize: "11pt" }}>
                    Advertising Cookies are used to serve you with
                    advertisements that may be relevant to you and your
                    interests.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>5.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Use of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Nemu, Inc. uses the collected data for various purposes:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to provide and maintain our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to notify you about changes to our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to allow you to participate in interactive features of our
                    Service when you choose to do so;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to provide customer support;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to gather analysis or valuable information so that we can
                    improve our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to monitor the usage of our Service;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(g)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to detect, prevent and address technical issues;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(h)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to fulfill any other purpose for which you provide it;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to carry out our obligations and enforce our rights arising
                    from any contracts entered into between you and us,
                    including for billing and collection;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(j)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to provide you with notices about your account and/or
                    subscription, including expiration and renewal notices,
                    email-instructions, etc.;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(k)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to provide you with news, special offers and general
                    information about other goods, services and events which we
                    offer that are similar to those that you have already
                    purchased or enquired about unless you have opted not to
                    receive such information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(l)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    in any other way we may describe when you provide the
                    information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(m)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    for any other purpose with your consent.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>6.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>7.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Transfer of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Your consent to this Privacy Policy followed by your
                    submission of such information represents your agreement to
                    that transfer.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>8.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <span style={{ fontSize: "11pt" }}>
                      Other cases. We may disclose your information also:
                    </span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }} />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to our subsidiaries and affiliates;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(ii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to contractors, service providers, and other third parties
                    we use to support our business;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    to fulfill the purpose for which you provide it;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iv)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    with your consent in any other cases;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>9.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Security of Data</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>10.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://eur-lex.europa.eu/eli/reg/2016/679/oj
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We aim to take reasonable steps to allow you to correct,
                    amend, delete, or limit the use of your Personal Data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    If you wish to be informed what Personal Data we hold about
                    you and if you want it to be removed from our systems,
                    please email us at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    In certain circumstances, you have the following data
                    protection rights:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right to access, update or to delete the information we
                    have on you;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right of rectification. You have the right to have your
                    information rectified if that information is inaccurate or
                    incomplete;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right to object. You have the right to object to our
                    processing of your Personal Data;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right of restriction. You have the right to request that
                    we restrict the processing of your personal information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(e)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right to data portability. You have the right to be
                    provided with a copy of your Personal Data in a structured,
                    machine-readable and commonly used format;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(f)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    the right to withdraw consent. You also have the right to
                    withdraw your consent at any time where we rely on your
                    consent to process your personal information;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Please note that we may ask you to verify your identity
                    before responding to such requests. Please note, we may not
                    able to provide Service without some necessary data.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>11.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://consumercal.org/about-cfc/cfc-education-foundation/california-online-privacy-protection-act-caloppa-3/
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    According to CalOPPA we agree to the following:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    users can visit our site anonymously;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    our Privacy Policy link includes the word “Privacy”, and can
                    easily be found on the page specified above on the home page
                    of our website;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    users will be notified of any privacy policy changes on our
                    Privacy Policy Page;
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(d)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    users are able to change their personal information by
                    emailing us at support@mynemu.com.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Our Policy on “Do Not Track” Signals:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can enable or disable Do Not Track by visiting the
                    Preferences or Settings page of your web browser.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>12.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(a)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(i)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    The categories of personal information we have collected
                    about you.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(ii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    The categories of sources from which we collect your
                    personal information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iii)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    The business or commercial purpose for collecting or selling
                    your personal information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(iv)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    The categories of third parties with whom we share personal
                    information.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(v)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    The specific pieces of personal information we have
                    collected about you.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>(vi)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <span style={{ fontSize: "11pt" }}>
                    A list of categories of personal information that we have
                    sold, along with the category of any other company we sold
                    it to. If we have not sold your personal information, we
                    will inform you of that fact.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    (vii)A list of categories of personal information that we
                    have disclosed for a business purpose, along with the
                    category of any other company we shared it with.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(b)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "10pt" }}>(c)</span>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    To exercise your California data protection rights described
                    above, please send your request(s) by one of the following
                    means:
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    By email: support@mynemu.com
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    By phone number: 1-623-432-1678
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Your data protection rights, described above, are covered by
                    the CCPA, short for the California Consumer Privacy Act. To
                    find out more, visit the official
                  </span>
                  <a href="http://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180AB375">
                    <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>13.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    These third parties have access to your Personal Data only
                    to perform these tasks on our behalf and are obligated not
                    to disclose or use it for any other purpose.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>14.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Analytics</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Google,
                    please visit the Google Privacy Terms web page:
                  </span>
                  <a href="https://policies.google.com/privacy?hl=en">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We also encourage you to review the Google's policy for
                    safeguarding your data:
                  </span>
                  <a href="https://support.google.com/analytics/answer/6004245">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://support.google.com/analytics/answer/6004245
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>.</span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>15.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>CI/CD tools</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    We may use third-party Service Providers to automate the
                    development process of our Service.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }} />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>GitHub</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitHub is provided by GitHub, Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitHub is a development platform to host and review code,
                    manage projects, and build software.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on what data GitHub collects for what
                    purpose and how the protection of the data is ensured,
                    please visit GitHub Privacy Policy page:
                  </span>
                  <a href="https://help.github.com/en/articles/github-privacy-statement">
                    <u>
                      <span style={{ color: "#0000ff", fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>GitLab CI/CD</span>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }} />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitLab CI/CD is provided by GitLab, Inc.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    GitLab CD (Continuous Deployment) is a software service that
                    places the changes of every code in the production which
                    results in every day deployment of production.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on what data GitLab CI/CD collects for
                    what purpose and how the protection of the data is ensured,
                    please visit GitLab CI/CD Privacy Policy page:
                  </span>
                  <a href="https://about.gitlab.com/privacy/">
                    <span style={{ fontSize: "11pt" }} />
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
                    />
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>16.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can opt-out of Google Analytics for Display Advertising
                    and customize the Google Display Network ads by visiting the
                    Google Ads Settings page:
                  </span>
                  <a href="http://www.google.com/settings/ads">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://www.google.com/settings/ads
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    Google also recommends installing the Google Analytics
                    Opt-out Browser Add-on –
                  </span>
                  <a href="https://tools.google.com/dlpage/gaoptout">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://tools.google.com/dlpage/gaoptout
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    – for your web browser. Google Analytics Opt-out Browser
                    Add-on provides visitors with the ability to prevent their
                    data from being collected and used by Google Analytics.
                  </span>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Google,
                    please visit the Google Privacy Terms web page:
                  </span>
                  <a href="https://policies.google.com/privacy?hl=en">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can opt-out of Bing Ads interest-based ads by following
                    their instructions:
                  </span>
                  <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can learn more about the privacy practices and policies
                    of Microsoft by visiting their Privacy Policy page:
                  </span>
                  <a href="https://privacy.microsoft.com/en-us/PrivacyStatement">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://privacy.microsoft.com/en-us/PrivacyStatement
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You can learn more about interest-based advertising from
                    Facebook by visiting this page:
                  </span>
                  <a href="https://www.facebook.com/help/164968693837950">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/help/164968693837950
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    To opt-out from Facebook's interest-based ads, follow these
                    instructions from Facebook:
                  </span>
                  <a href="https://www.facebook.com/help/568137493302217">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/help/568137493302217
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        http://youradchoices.ca/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>
                    or the European Interactive Digital Advertising Alliance in
                    Europe
                  </span>
                  <a href="http://www.youronlinechoices.eu/">
                    <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    For more information on the privacy practices of Facebook,
                    please visit Facebook's Data Policy:
                  </span>
                  <a href="https://www.facebook.com/privacy/explanation">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.facebook.com/privacy/explanation
                      </span>
                    </u>
                  </a>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>17.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Payments</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    The payment processors we work with are:
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://www.apple.com/legal/privacy/en-ww/
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>/</span>
                  <a href="https://support.apple.com/en-us/HT203027">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://support.apple.com/en-us/HT203027
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
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
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://policies.google.com/privacy?hl=en&amp;gl=us
                      </span>
                    </u>
                  </a>
                  <span style={{ fontSize: "11pt" }}>/</span>
                  <a href="https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&ldt=privacynotice&ldl=en">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://payments.google.com/payments/apis-secure/u/0/get_legal_document?ldo=0&amp;ldt=privacynotice&amp;ldl=en
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>Stripe:</span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    Their Privacy Policy can be viewed at:
                  </span>
                  <a href="https://stripe.com/us/privacy">
                    <span style={{ fontSize: "11pt" }} />
                    <u>
                      <span style={{ color: "#1155cc", fontSize: "11pt" }}>
                        https://stripe.com/us/privacy
                      </span>
                    </u>
                  </a>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>18.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>19.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                  />
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
                  <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>20.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ fontSize: "11pt" }}>
                    You are advised to review this Privacy Policy periodically
                    for any changes. Changes to this Privacy Policy are
                    effective when they are posted on this page.
                  </span>
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <span style={{ fontSize: "11pt" }}>21.</span>
                  </strong>
                  <span style={{ fontSize: "6.999999999999999pt" }} />
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }}>Contact Us</span>
                    </u>
                  </strong>
                </p>
                <p style={{ textAlign: "justify" }}>
                  <strong>
                    <u>
                      <span style={{ fontSize: "11pt" }} />
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
                  <span style={{ fontSize: "11pt" }} />
                </p>
                <p>
                  <span style={{ fontSize: "11pt" }}>
                    By email: support@mynemu.com.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    </React.Fragment>
  );
}
