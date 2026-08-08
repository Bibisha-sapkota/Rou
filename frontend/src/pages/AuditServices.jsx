import { useNavigate } from "react-router-dom";
import { 
  FaClipboardCheck, 
  FaFileInvoice, 
  FaBalanceScale, 
  FaSearchDollar, 
  FaMoneyBillWave, 
  FaUserSecret, 
  FaFileAlt
} from "react-icons/fa";

export default function AuditServices() {
  const navigate = useNavigate();

  const services = [
    {
      id: "internal-audit",
      title: "Internal Audit",
      desc: "Assessing governance, internal controls, operational efficiency, and risk management systems.",
      icon: <FaClipboardCheck />,
    },
    {
      id: "external-audit-support",
      title: "External Audit Support",
      desc: "Comprehensive audit-ready documentation and preparation for seamless statutory audits.",
      icon: <FaFileInvoice />,
    },
    {
      id: "statutory-compliance-audit",
      title: "Statutory Compliance Audit",
      desc: "Full alignment with Nepal tax laws, regulatory standards, and statutory reporting guidelines.",
      icon: <FaBalanceScale />,
    },
    {
      id: "due-diligence-audit",
      title: "Due Diligence Audit",
      desc: "In-depth pre-merger, acquisition, and investment financial reviews to mitigate risk.",
      icon: <FaSearchDollar />,
    },
    {
      id: "recovery-audit",
      title: "Recovery Audit",
      desc: "Systematic identification of overpayments, billing errors, and financial leakages.",
      icon: <FaMoneyBillWave />,
    },
    {
      id: "forensic-audit",
      title: "Forensic Audit",
      desc: "Specialized fraud investigation, financial forensics, and dispute resolution evidence.",
      icon: <FaUserSecret />,
    },
    {
      id: "financial-statement-preparation",
      title: "Financial Statement Preparation",
      desc: "Standards-compliant financial statements prepared under NFRS and IFRS reporting frameworks.",
      icon: <FaFileAlt />,
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#081b2c] via-[#123c5a] to-[#1e5278] text-white pt-36 pb-20 px-6 text-center shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-orange-400 text-xs md:text-sm font-semibold tracking-wider border border-white/20 uppercase mb-4 shadow-sm backdrop-blur-md">
            Audit & Assurance Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">
            Audit <span className="text-orange-400">Services</span>
          </h1>
          <p className="text-gray-200 mt-4 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Independent, risk-focused, and compliance-driven audit solutions aligned with international & Nepalese standards.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(`/audit-services/${service.id}`)}
              className="
                group
                relative
                bg-white
                p-8
                rounded-2xl
                border border-slate-200
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                hover:border-[#123c5a]
                transition-all
                duration-300
                cursor-pointer
                overflow-hidden
                flex
                flex-col
                justify-between
              "
            >
              {/* Top Accent Line (Unified Corporate Navy Blue) */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#123c5a] group-hover:bg-orange-500 transition-colors duration-300"></div>

              <div>
                {/* Header row: Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-[#123c5a] text-white flex items-center justify-center text-2xl shadow-md group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#123c5a] mb-3 group-hover:text-orange-500 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              {/* Action Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-[#123c5a] group-hover:text-orange-500 transition-colors">
                <span>View Service Details</span>
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-gradient-to-r from-[#0b2844] via-[#123c5a] to-[#164470] py-16 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Need Expert Audit & Assurance?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8">
            Schedule a consultation with our senior audit professionals today.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Request Consultation →
          </button>
        </div>
      </div>
    </div>
  );
}