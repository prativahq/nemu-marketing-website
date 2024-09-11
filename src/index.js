import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./index.css";
import IndexPage from "./pages/Index.js";
import HowItWorksPage from "./pages/How-it-works.js";
import TermsOfServicePage from "./pages/Terms-of-service.js";
import PrivacyPolicyPage from "./pages/Privacy-policy.js";
// import LegalPage from "./pages/Legal.js";
import RefundsCancellationPage from "./pages/Refunds-cancellation.js";
import ContactUsPage from "./pages/Contact-us.js";
import PartnerPage from "./pages/Partner.js";
import AboutUsPage from "./pages/About-us.js";
import BlogsPage from "./pages/Blog.js";
import ReactDOM from "react-dom/client";
import { BlogPage } from "./pages/BlogPage.js";
import NotFound from "./pages/NotFound.js";
import DeleteAccount from "./pages/Delete-account.js";
import EstateManagementPage from "./pages/Estate-Management.js";
import DownsizingPage from "./pages/Downsizing.js";
import DivorcePage from "./pages/Divorce.js";
import * as amplitude from "@amplitude/analytics-browser";
import { sessionReplayPlugin } from "@amplitude/plugin-session-replay-browser";
import { Experiment } from "@amplitude/experiment-js-client";

//import { ParallaxProvider } from "react-scroll-parallax";

amplitude.init(process.env.REACT_APP_AMPLITUDE_API_KEY, {
  autocapture: {
    attribution: true,
    pageViews: true,
    sessions: true,
    formInteractions: true,
    fileDownloads: true,
    elementInteractions: true,
  },
});
const amplitudeSessionReplayTracking = sessionReplayPlugin({
  sampleRate: 1,
});
amplitude.add(amplitudeSessionReplayTracking);
const experiment = Experiment.initializeWithAmplitudeAnalytics(
  process.env.REACT_APP_AMPLITUDE_API_KEY,
  { debug: true }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />

        {/* <Route path="/how-it-works" element={<HowItWorksPage />} /> */}

        <Route path="/terms-of-use" element={<TermsOfServicePage />} />

        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

        <Route path="/estate-management" element={<EstateManagementPage />} />

        <Route path="/divorce" element={<DivorcePage />} />

        <Route path="/downsizing" element={<DownsizingPage />} />

        <Route path="/refund-policy" element={<RefundsCancellationPage />} />

        <Route path="/delete-account" element={<DeleteAccount />} />

        <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="/partner" element={<PartnerPage />} />

        <Route path="/about-us" element={<AboutUsPage />} />

        <Route path="/blog" element={<BlogsPage />} />

        <Route path="/blog/:id" element={<BlogPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// reportWebVitals();
