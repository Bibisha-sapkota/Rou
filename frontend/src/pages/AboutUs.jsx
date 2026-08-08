import { FaHandshake, FaGlobe, FaChartLine, FaBalanceScale } from "react-icons/fa";
import bishal from "../images/bishal.png";
import ranjit from "../images/ranjit.png";
import bishwo from "../images/bishow.png";
import aluf from "../images/ALuf A. Limbu.png";

export default function AboutUs() {

  const founders = [
    {
      name: "Bishal Sapkota",
      role: "Co-Founder",
      image: bishal,
    },
    {
      name: "Ranjit Thapa",
      role: "Co-Founder",
      image: ranjit,
    },
    {
      name: "Bishwo Rawal",
      role: "Co-Founder",
      image: bishwo,
    },
    {
      name: "Aluf A. Limbu",
      role: "Co-Founder",
      image: aluf,
    }
  ];

  return (
    <div className="bg-gray-50">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#081b2c] via-[#123c5a] to-[#1e5278] text-white pt-36 pb-20 px-6 text-center shadow-inner">
        {/* Background Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/20 text-orange-400 text-xs md:text-sm font-semibold tracking-wider border border-orange-500/30 uppercase mb-4 shadow-sm">
            Empowering Financial Excellence
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-orange-500 mb-4 tracking-tight">
            About Us
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ROU Global Professional Services
          </h2>
          <p className="text-lg md:text-2xl font-medium max-w-3xl mx-auto text-blue-100/90 leading-relaxed mb-3">
            Right of Use. Clarity. Compliance. Confidence.
          </p>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-300 leading-relaxed">
            Bridging the gap between Nepalese businesses and Global Financial Standards.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-20">

        {/* Who We Are */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-[#123c5a] mb-6">Who We Are</h2>
            <p className="text-gray-700 text-lg">
              ROU Global Professional Services Pvt. Ltd. is a premier financial consulting firm based in Nepal.
            </p>
            <p className="text-gray-700 text-lg mt-4">
              We provide Audit, Taxation, FDI Consultancy, and Digital Transformation services to help businesses grow.
            </p>
          </div>

          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt="Team"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500 hover:bg-[#123c5a] hover:text-white transition duration-300">
            <FaHandshake className="text-4xl mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p>
              To empower businesses with financial clarity and compliance.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-orange-500 hover:bg-[#123c5a] hover:text-white transition duration-300">
            <FaGlobe className="text-4xl mb-4"/>
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p>
              To be the most trusted professional services firm in South Asia.
            </p>
          </div>

        </div>

        {/* Core Values */}
        <div className="bg-white p-10 rounded-3xl shadow-lg text-center">

          <h2 className="text-3xl font-bold text-[#123c5a] mb-10">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <FaBalanceScale className="text-3xl mx-auto mb-3 text-[#123c5a]"/>
              <h4 className="font-bold text-xl">Integrity</h4>
              <p className="text-gray-600">Highest ethical standards</p>
            </div>

            <div>
              <FaChartLine className="text-3xl mx-auto mb-3 text-[#123c5a]"/>
              <h4 className="font-bold text-xl">Excellence</h4>
              <p className="text-gray-600">International quality service</p>
            </div>

            <div>
              <FaHandshake className="text-3xl mx-auto mb-3 text-[#123c5a]"/>
              <h4 className="font-bold text-xl">Client Focus</h4>
              <p className="text-gray-600">Client success is our priority</p>
            </div>

          </div>

        </div>

        {/* Founders Section */}
        <div>

          <h2 className="text-3xl font-bold text-center text-[#123c5a] mb-12">
            Meet Our Founders
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {founders.map((founder, index) => (

              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-72 object-cover object-top"
                />

                <div className="p-6 text-center">

                  <h3 className="text-xl font-bold text-[#123c5a]">
                    {founder.name}
                  </h3>

                  <p className="text-orange-500 font-semibold mt-1">
                    {founder.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}