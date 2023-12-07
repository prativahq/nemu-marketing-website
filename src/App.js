import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import IndexPage from "./pages/Index.js";
import HowItWorksPage from "./pages/How-it-works.js";
import TermsOfServicePage from "./pages/Terms-of-service.js";
import PrivacyPolicyPage from "./pages/Privacy-policy.js";
import LegalPage from "./pages/Legal.js";
import RefundsCancellationPage from "./pages/Refunds-cancellation.js";
import ContactUsPage from "./pages/Contact-us.js";
import PartnerPage from "./pages/Partner.js";
import AboutUsPage from "./pages/About-us.js";
import BlogPage from "./pages/Blog.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />

      <Route path="/how-it-works" element={<HowItWorksPage />} />

      <Route path="/terms-of-service" element={<TermsOfServicePage />} />

      <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />

      <Route path="/legal" element={<LegalPage />} />

      <Route
        path="/refunds-cancellation"
        element={<RefundsCancellationPage />}
      />

      <Route path="/contact-us" element={<ContactUsPage />} />

      <Route path="/partner" element={<PartnerPage />} />

      <Route path="/about-us" element={<AboutUsPage />} />

      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
