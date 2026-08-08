import { Link } from "react-router-dom";
import { FaUsers, FaGlobe, FaIndustry, FaCheckCircle, FaClock, FaFileInvoiceDollar, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function Services() {
  return (
    <>
      
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-orange-500 tracking-widest uppercase text-sm font-semibold">
              What We Do
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Our Service Lines
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Comprehensive solutions across audit, digital transformation, and strategic advisory.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* Audit */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group flex flex-col justify-between">
              <div>
                <div className="bg-gradient-to-r from-[#274c66] to-[#7c8f9c] p-8 text-white flex flex-col items-start gap-3">
                  <FaFileInvoiceDollar className="w-8 h-8 text-white"/>
                  <p className="uppercase text-xs tracking-widest opacity-80">Audit</p>
                  <h3 className="text-2xl font-bold mt-3">Audit Services</h3>
                  <p className="text-sm mt-3 opacity-90">
                    Independent, risk-focused and compliance-driven audit solutions aligned with international standards.
                  </p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>Internal Audit</li>
                    <li>External Audit Support</li>
                    <li>Statutory Compliance Audit</li>
                    <li>Due Diligence Audit</li>
                    <li>Recovery Audit</li>
                    <li>Forensic Audit</li>
                    <li>Financial Statement Preparation</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white px-8 pb-8">
                <Link to="/audit-services" className="inline-block text-orange-500 font-semibold hover:underline cursor-pointer">Learn More →</Link>
              </div>
            </div>

            {/* Digital */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group flex flex-col justify-between">
              <div>
                <div className="bg-gradient-to-r from-[#123b5a] to-[#1f4f85] p-8 text-white flex flex-col items-start gap-3">
                  <FaLaptopCode className="w-8 h-8 text-white"/>
                  <p className="uppercase text-xs tracking-widest opacity-80">Digital</p>
                  <h3 className="text-2xl font-bold mt-3">Digital Solutions</h3>
                  <p className="text-sm mt-3 opacity-90">
                    Modern digital transformation solutions for smarter financial management.
                  </p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>Digital Accounting Systems</li>
                    <li>Cloud Accounting Implementation</li>
                    <li>ERP Advisory</li>
                    <li>Financial Dashboard & Reporting</li>
                    <li>Process Automation</li>
                    <li>Internal Control Digitalization</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white px-8 pb-8">
                <Link to="/digital-solutions" className="inline-block text-orange-500 font-semibold hover:underline cursor-pointer">Learn More →</Link>
              </div>
            </div>

            {/* Advisory */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 group flex flex-col justify-between">
              <div>
                <div className="bg-gradient-to-r from-[#f2a33b] to-[#e6c08f] p-8 text-white flex flex-col items-start gap-3">
                  <FaLightbulb className="w-8 h-8 text-white"/>
                  <p className="uppercase text-xs tracking-widest opacity-90">Advisory</p>
                  <h3 className="text-2xl font-bold mt-3">Advisory Services</h3>
                  <p className="text-sm mt-3 opacity-95">
                    Strategic advisory to drive sustainable growth and financial clarity.
                  </p>
                </div>
                <div className="bg-white p-8">
                  <ul className="space-y-3 text-gray-700 text-sm">
                    <li>Business Consulting</li>
                    <li>Tax Advisory</li>
                    <li>Business Valuation</li>
                    <li>FDI Consultancy</li>
                    <li>Loan Consulting</li>
                    <li>Financial Modelling</li>
                    <li>Startup Business Solutions</li>
                    <li>Business Plan & Feasibility</li>
                  </ul>
                </div>
              </div>
              <div className="bg-white px-8 pb-8">
                <Link to="/advisory" className="inline-block text-orange-500 font-semibold hover:underline cursor-pointer">Learn More →</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= Why ROU Global Section ================= */}
      <section className="py-24 bg-gradient-to-br from-[#0f3558] via-[#1c4f7f] to-[#1f4f85] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Why ROU Global?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            
            <div className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <FaUsers className="w-10 h-10 mb-3"/>
              <h3 className="text-3xl font-extrabold">100+</h3>
              <p className="text-sm mt-2">Clients Served</p>
            </div>

            <div className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <FaGlobe className="w-10 h-10 mb-3"/>
              <h3 className="text-3xl font-extrabold">5+</h3>
              <p className="text-sm mt-2">Multi-Country Exposure</p>
            </div>

            <div className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <FaIndustry className="w-10 h-10 mb-3"/>
              <h3 className="text-3xl font-extrabold">14+</h3>
              <p className="text-sm mt-2">Industry-Specific Expertise</p>
            </div>

            <div className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <FaCheckCircle className="w-10 h-10 mb-3"/>
              <h3 className="text-3xl font-extrabold">100%</h3>
              <p className="text-sm mt-2">Compliance-Driven</p>
            </div>

            <div className="bg-white/10 rounded-2xl shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-2 hover:shadow-2xl">
              <FaClock className="w-10 h-10 mb-3"/>
              <h3 className="text-3xl font-extrabold">10+</h3>
              <p className="text-sm mt-2">Years Trusted</p>
            </div>

          </div>
        </div>
      </section>
      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Financial Confidence Together
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Partner with ROU Global for world-class audit, advisory, and digital solutions.
          </p>
          <Link to="/contact" className="inline-block bg-orange-400 hover:bg-orange-500 text-white font-semibold px-10 py-4 rounded-lg shadow-xl transition transform hover:scale-105">
            Schedule Consultation
          </Link>
        </div>
      </section>

    </>
  );
}