import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleConsultationClick = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const elem = document.getElementById("contact");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
  };
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-200/80 w-full fixed top-0 z-50 shadow-md transition-all duration-300">
      <div className="w-full px-6 md:px-12 py-3 flex items-center justify-between">

        <Link to="/" className="flex items-center transition transform hover:scale-105 duration-300">
          <img src={logo} alt="ROU Global" className="h-[90px] w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6 text-[#123c5a] font-bold text-base xl:text-lg">
            <li>
              <Link to="/audit-services" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Audit Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/digital-solutions" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Digital Solutions
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/advisory" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Advisory
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/resources" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Resources
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/about-us" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/office-locations" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Locations
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="relative py-1 transition-colors duration-300 hover:text-orange-500 group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            </li>
          </ul>

          <button
            onClick={handleConsultationClick}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105 whitespace-nowrap cursor-pointer"
          >
            Get Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}
