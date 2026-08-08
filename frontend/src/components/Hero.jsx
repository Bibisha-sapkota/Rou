import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= COUNTER COMPONENT ================= */
function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 20);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

/* ================= FULL-WIDTH RUNNING MARQUEE COMPONENT ================= */
function TextReel() {
  const valuesSequence = [
    "OUR CORE VALUES",
    "EMPOWERING FINANCIAL EXCELLENCE",
    "RIGHT OF USE",
    "CLARITY",
    "COMPLIANCE",
    "CONFIDENCE",
  ];

  return (
    <div className="w-full bg-[#0a233c]/90 border-y border-orange-500/30 backdrop-blur-xl py-4 shadow-2xl overflow-hidden relative z-20 mt-16">
      <div className="overflow-hidden whitespace-nowrap relative flex items-center">
        <div className="animate-marquee inline-flex gap-8 sm:gap-12 font-black tracking-widest text-lg sm:text-xl md:text-2xl uppercase">
          {[...valuesSequence, ...valuesSequence, ...valuesSequence, ...valuesSequence].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-8 sm:gap-12">
              <span
                className={
                  item === "OUR CORE VALUES" || item === "EMPOWERING FINANCIAL EXCELLENCE"
                    ? "text-amber-400 font-extrabold underline decoration-orange-500 underline-offset-8"
                    : "text-white hover:text-orange-400 transition-colors"
                }
              >
                {item}
              </span>
              <span className="text-orange-400 text-sm md:text-base">✦</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================= HERO COMPONENT ================= */
export default function Hero() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact");
  };

  const handleServicesClick = () => {
    navigate("/audit-services");
  };

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative text-white overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `
            linear-gradient(
              to bottom right,
              rgba(11, 40, 68, 0.94),
              rgba(18, 60, 90, 0.92),
              rgba(26, 75, 110, 0.94)
            ),
            url('https://www.uniwide.co.uk/wp-content/uploads/2024/12/When-Is-a-Company-Audit-Required-768x439.jpg')
          `,
        }}
      >
        {/* Animated Background Glowing Orbs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-[100px] animate-glow pointer-events-none"></div>
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-glow pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-36 pb-12">

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold max-w-5xl leading-tight tracking-tight animate-fade-in-up animate-delay-100">
            Global Financial{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">
              Audit
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-500 bg-clip-text text-transparent">
              Advisory
            </span>{" "}
            Excellence
          </h1>

          {/* Subtext */}
          <p className="text-gray-200 text-lg md:text-xl mt-6 max-w-3xl leading-relaxed animate-fade-in-up animate-delay-200">
            Serving Nepal and International Markets with Audit, Compliance,
            Digital and Strategic Advisory Solutions.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-wrap gap-5 animate-fade-in-up animate-delay-300">
            <button
              onClick={handleServicesClick}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3.5 rounded-xl font-bold shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Explore Services →
            </button>
            <button
              onClick={handleContactClick}
              className="bg-[#123c5a]/80 hover:bg-[#123c5a] border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:border-white/40 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Stats Section with Glassmorphism */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animate-delay-400">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-orange-400 text-3xl sm:text-4xl font-extrabold group-hover:scale-110 transition-transform duration-300">
                <Counter end={100} suffix="+" />
              </div>
              <p className="text-sm text-gray-200 font-medium mt-1">Clients Served</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-orange-400 text-3xl sm:text-4xl font-extrabold group-hover:scale-110 transition-transform duration-300">
                <Counter end={5} suffix="+" />
              </div>
              <p className="text-sm text-gray-200 font-medium mt-1">Countries</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-orange-400 text-3xl sm:text-4xl font-extrabold group-hover:scale-110 transition-transform duration-300">
                <Counter end={14} suffix="+" />
              </div>
              <p className="text-sm text-gray-200 font-medium mt-1">Service Lines</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 hover:bg-white/15 hover:border-orange-400/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group">
              <div className="text-orange-400 text-3xl sm:text-4xl font-extrabold group-hover:scale-110 transition-transform duration-300">
                <Counter end={10} suffix="+" />
              </div>
              <p className="text-sm text-gray-200 font-medium mt-1">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Animated Full-Width Value Marquee Banner at bottom of Hero */}
        <TextReel />
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-orange-500 mb-4 tracking-tight leading-none">
              About Us
            </h2>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#123c5a] mb-6 leading-tight">
              Who We Are
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ROU Global Professional Services Private Limited is a registered
              professional services firm engaged in Accounting, Bookkeeping,
              Financial Modelling, Taxation, Audit, Financial Advisory and FDI
              Consultancy services.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We help businesses operate with clarity, compliance, and confidence —
              serving Nepal and international markets with world-class standards.
            </p>
          </div>

          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://www.robeycpa.ca/wp-content/uploads/2015/09/Audit.png"
              alt="Audit Services"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#123c5a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b2844] via-[#0f3558] to-[#164470] py-24 px-6 text-white">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Let’s Build <span className="text-orange-400">Financial Confidence</span> Together
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Partner with ROU Global for world-class audit, advisory, and digital
              solutions tailored to your business growth.
            </p>

            <div className="flex flex-wrap gap-5">
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 px-8 py-3.5 rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 cursor-pointer"
              >
                Get Started
              </button>
              <button
                onClick={handleContactClick}
                className="border-2 border-white/80 px-8 py-3.5 rounded-xl font-bold hover:bg-white hover:text-[#0f3558] transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT5FmxFPVEcocOuELBtqAI4uIi8FIRQz9ldZDfk1tFapHDofRZba-Ja_2_&s=10"
              alt="Financial Confidence"
              className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>
    </>
  );
}
