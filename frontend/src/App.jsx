import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Features from "./components/Features";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import AuditServices from "./pages/AuditServices";
import AuditServiceDetail from "./pages/AuditServiceDetail";
import DigitalSolutions from "./pages/DigitalSolutions";
import Advisory from "./pages/Advisory";
import Resources from "./pages/Resources";
import AboutUs from "./pages/AboutUs";
import OfficeLocations from "./pages/OfficeLocations";
import Contact from "./pages/Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <ContactForm />
    </>
  );
}

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div className="overflow-x-hidden">
        <Navbar />

        <div className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/audit-services" element={<AuditServices />} />
            <Route path="/audit-services/:slug" element={<AuditServiceDetail />} />
            <Route path="/digital-solutions" element={<DigitalSolutions />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/office-locations" element={<OfficeLocations />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
