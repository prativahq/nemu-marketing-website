import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { HelmetProvider } from "react-helmet-async";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ScrollToTop from "react-scroll-to-top";

const meta = {
  title: "Nemu: Play Store Account Deletion Policy",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function DeleteAccount() {
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
            <h2 className="text-center font-semibold text-xl mb-4">
              Nemu: Play Store Account Deletion Policy
            </h2>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Effective Date: 1/29/2024
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Introduction:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Nemu, Inc. is committed to providing a positive and
                user-friendly experience for our customers on the Play Store. We
                understand that users may, at times, wish to delete their
                accounts. This document outlines the policy and procedures for
                account deletion on the Nemu, Inc. platform.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                1. Account Deletion Request:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Users who wish to delete their accounts can do so by following
                the steps outlined in our application or website. This ensures a
                straightforward and secure process for users to exercise their
                right to delete their accounts.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Within our application, navigate to your profile section. From
                there, you will see a button &lsquo;Delete Account.&rsquo; By
                selecting this button, you will delete your account, removing
                all resources tied to your account from our system.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                To ensure deletion of images and voice notes, please submit a
                request to&nbsp;
              </span>
              <a href="mailto:support@mynemu.com">
                <u>
                  <span style={{ color: "#1155cc", fontSize: "12pt" }}>
                    support@mynemu.com
                  </span>
                </u>
              </a>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                &nbsp;and our team will remove these records accordingly.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                2. Account Deletion Time Frame:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Account deletion requests will be processed within 7-10 business
                days from the date of submission. During this period, users will
                have the option to cancel their account deletion request if they
                change their mind.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                4. Data Retention and Privacy:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Upon account deletion, Nemu, Inc. will securely delete all user
                data associated with the account. This includes personal
                information, preferences, and any other data collected during
                the user&apos;s interaction with our platform.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                5. Impact on Services:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Users should be aware that deleting their account will result in
                the loss of access to Nemu Inc. services, including any
                purchased products or subscriptions. It is the responsibility of
                the user to ensure they have taken the necessary steps, such as
                canceling subscriptions, before initiating the account deletion
                process.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                6. Legal Compliance:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Nemu Inc. will comply with all relevant data protection laws and
                regulations in the processing of account deletion requests.
                Users can refer to our Privacy Policy for more information on
                how their data is handled.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                7. Contact Information:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                If users have any questions or concerns regarding the account
                deletion process, they can contact our customer support team at
                support@mynemu.com.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Changes to this Policy:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Nemu, Inc. reserves the right to update or modify this account
                deletion policy at any time. Users will be notified of any
                changes through our official communication channels.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                By using Nemu Inc. services, users agree to abide by this
                account deletion policy.
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                Nemu Inc. Contact Information:
              </span>
            </p>
            <p>
              <span style={{ color: "#374151", fontSize: "12pt" }}>
                support@mynemu.com
              </span>
            </p>
            <p>
              <strong>
                <span style={{ color: "#374151", fontSize: "12pt" }}>
                  We Value Your Privacy and User Experience!
                </span>
              </strong>
            </p>
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
