import { useParams, useNavigate, Link } from "react-router-dom";
import { 
  FaClipboardCheck, 
  FaFileInvoice, 
  FaBalanceScale, 
  FaSearchDollar, 
  FaMoneyBillWave, 
  FaUserSecret, 
  FaFileAlt,
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export const auditServicesData = {
  "internal-audit": {
    title: "Internal Audit",
    tag: "Governance & Risk",
    icon: <FaClipboardCheck />,
    subtitle: "Evaluating governance, internal controls, operational efficiency, and risk management systems.",
    overview: "Our Internal Audit service provides independent, objective assurance designed to evaluate and improve the effectiveness of your organization's governance, risk management, and internal control processes. We help leadership identify operational inefficiencies, safeguard corporate assets, and ensure policy compliance.",
    keyFocus: [
      "Internal Financial Control (IFC) testing & design evaluation",
      "Operational efficiency & workflow bottleneck assessment",
      "Fraud risk management & policy compliance review",
      "Management reporting integrity & data accuracy checks",
      "Inventory & asset physical verification audits"
    ],
    deliverables: [
      "Comprehensive Internal Audit Executive Report",
      "Risk & Control Matrix (RCM) with prioritized action plans",
      "Management Recommendation Tracker & Follow-up Matrix",
      "Board Audit Committee Presentation Deck"
    ],
    standards: ["Institute of Internal Auditors (IIA) Standards", "NFRS / NAS Frameworks", "Nepal Companies Act 2063"],
  },
  "external-audit-support": {
    title: "External Audit Support",
    tag: "Audit Ready",
    icon: <FaFileInvoice />,
    subtitle: "Comprehensive audit-ready documentation and preparation for seamless statutory audits.",
    overview: "We act as your finance team's advocate and preparation partner, ensuring your financial books, lead schedules, and audit files are 100% accurate, reconciled, and audit-ready before external statutory auditors step into your office.",
    keyFocus: [
      "Year-end trial balance scrubbing & lead schedule preparation",
      "Technical accounting position papers under NFRS / NAS",
      "Intercompany reconciliation & vendor balance confirmations",
      "Direct audit query resolution support during external audit field work",
      "Fixed asset register & depreciation schedule audit readiness"
    ],
    deliverables: [
      "Audit-Ready Preparedness Binder & Lead Schedules",
      "Technical Accounting Memos & Disclosure Position Papers",
      "External Auditor Query Resolution Log",
      "Final Trial Balance Reconciliation Dossier"
    ],
    standards: ["NFRS / NAS Standards", "International Standards on Auditing (ISA)", "Nepal Accounting Standards Board"],
  },
  "statutory-compliance-audit": {
    title: "Statutory Compliance Audit",
    tag: "Nepal Tax & Law",
    icon: <FaBalanceScale />,
    subtitle: "Full alignment with Nepal tax laws, regulatory standards, and statutory reporting guidelines.",
    overview: "Ensure absolute compliance with Nepal Income Tax Act 2058, VAT Act 2052, Companies Act 2063, and Social Security Regulations to eliminate penalty exposure, tax audit risks, and legal non-compliance penalties.",
    keyFocus: [
      "Tax Deducted at Source (TDS) reconciliation & monthly filing audit",
      "Value Added Tax (VAT) return verification & purchase/sales register audit",
      "Corporate tax return computation & Inland Revenue Department (IRD) assessment support",
      "Labor law, Social Security Fund (SSF), and Provident Fund compliance audit",
      "Customs & Foreign Exchange (NRB) compliance reviews"
    ],
    deliverables: [
      "Statutory Tax Compliance Audit Certificate",
      "IRD Tax Exposure & Risk Mitigation Matrix",
      "Annual Statutory Compliance Health Check Report",
      "TDS & VAT Discrepancy Correction Schedule"
    ],
    standards: ["Income Tax Act 2058 (Nepal)", "VAT Act 2052 (Nepal)", "Nepal Rastra Bank (NRB) Directives"],
  },
  "due-diligence-audit": {
    title: "Due Diligence Audit",
    tag: "M&A Review",
    icon: <FaSearchDollar />,
    subtitle: "In-depth pre-merger, acquisition, and investment financial reviews to mitigate risk.",
    overview: "Comprehensive financial, operational, and tax due diligence for investors, acquirers, and lenders to uncover hidden liabilities, assess Quality of Earnings (QoE), and evaluate target company valuation before closing deals.",
    keyFocus: [
      "Quality of Earnings (QoE) & EBITDA adjustments review",
      "Historical tax liability & contingent obligation assessment",
      "Working capital peg & net debt verification",
      "Off-balance sheet commitments & legal claim investigation",
      "Related party transaction & transfer pricing scrutiny"
    ],
    deliverables: [
      "Comprehensive Financial Due Diligence (FDD) Report",
      "EBITDA & Working Capital Adjustment Schedule",
      "Red-Flag Risk Summary for Deal Negotiation",
      "Post-Acquisition Integration Checklist"
    ],
    standards: ["International Valuation Standards", "IFRS 3 Business Combinations", "NFRS 3"],
  },
  "recovery-audit": {
    title: "Recovery Audit",
    tag: "Leakage Prevention",
    icon: <FaMoneyBillWave />,
    subtitle: "Systematic identification of overpayments, billing errors, and financial leakages.",
    overview: "A specialized data-mining audit of historical transactional data (Accounts Payable, Procurement, Tax) to identify and recover profit leakages caused by vendor overpayments, missed discounts, contract miscalculations, or accounting system glitches.",
    keyFocus: [
      "Duplicate invoice payment identification & cash recovery",
      "Unclaimed vendor rebates, volume discounts & credit notes audit",
      "Contract pricing variance & overcharge detection",
      "Miscalculated VAT / Tax overpayments recovery",
      "Unclaimed cash discounts & early payment penalty audit"
    ],
    deliverables: [
      "Profit Leakage & Overpayment Recovery Ledger",
      "Vendor Refund Claim Dossier & Claim Letters",
      "Procurement & AP Internal Control Enhancement Plan",
      "Cash Recovered Summary Report"
    ],
    standards: ["Accounts Payable Best Practices", "Internal Financial Control (IFC)", "Data Analytics Auditing"],
  },
  "forensic-audit": {
    title: "Forensic Audit",
    tag: "Fraud Investigation",
    icon: <FaUserSecret />,
    subtitle: "Specialized fraud investigation, financial forensics, and dispute resolution evidence.",
    overview: "Discreet, confidential, and legally defensible financial investigations to detect white-collar crime, asset misappropriation, financial statement manipulation, occupational fraud, and shareholder financial disputes.",
    keyFocus: [
      "Asset misappropriation & ghost employee payment tracing",
      "Digital transaction forensics & hidden fund flow reconstruction",
      "Financial statement alteration & artificial revenue detection",
      "Whistleblower allegation investigation & interview protocols",
      "Litigation support & legal expert witness testimony"
    ],
    deliverables: [
      "Confidential Forensic Investigation Report",
      "Evidence Dossier & Reconstructed Fund Trail",
      "Legal & Prosecution Support Documentation",
      "Fraud Vulnerability & Prevention Roadmap"
    ],
    standards: ["ACFE Fraud Audit Guidelines", "Digital Forensic Standards", "Nepal Evidence Act 2031"],
  },
  "financial-statement-preparation": {
    title: "Financial Statement Preparation",
    tag: "NFRS / IFRS",
    icon: <FaFileAlt />,
    subtitle: "Standards-compliant financial statements prepared under NFRS and IFRS reporting frameworks.",
    overview: "End-to-end compilation of annual and interim financial statements strictly aligned with Nepal Financial Reporting Standards (NFRS), Nepal Accounting Standards (NAS), and International Financial Reporting Standards (IFRS).",
    keyFocus: [
      "NFRS-compliant Statement of Financial Position & Profit or Loss compilation",
      "Statement of Cash Flows (Direct & Indirect methods)",
      "Comprehensive Notes to Accounts & Significant Accounting Policies",
      "Segment reporting, impairment testing & fair value accounting adjustments",
      "Deferred tax computation & financial instrument disclosures"
    ],
    deliverables: [
      "Complete NFRS / IFRS Financial Statement Set",
      "Detailed Disclosure Notes & Accounting Policy Manual",
      "Auditor-Ready Financial Compilation File & Trial Balance Map"
    ],
    standards: ["Nepal Financial Reporting Standards (NFRS)", "International Financial Reporting Standards (IFRS)", "NAS"],
  },
};

export default function AuditServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = auditServicesData[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-center">
        <div>
          <h2 className="text-3xl font-bold text-[#123c5a] mb-4">Service Not Found</h2>
          <p className="text-slate-600 mb-6">The requested audit service detail page does not exist.</p>
          <Link
            to="/audit-services"
            className="inline-flex items-center gap-2 bg-[#123c5a] text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-500 transition-colors"
          >
            <FaArrowLeft /> Back to Audit Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#081b2c] via-[#123c5a] to-[#1e5278] text-white pt-36 pb-20 px-6 shadow-lg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <Link
            to="/audit-services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-white transition-colors mb-6"
          >
            <FaArrowLeft /> Back to Audit Services
          </Link>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 text-white">
            {service.title}
          </h1>

          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            {service.subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-12">
        {/* Left 2 Columns: Main Details */}
        <div className="lg:col-span-2 space-y-12">
          {/* Overview Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#123c5a] mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-orange-500 rounded-full"></span>
              Service Overview
            </h2>
            <p className="text-slate-700 text-base leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* Key Focus Areas */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#123c5a] mb-6 flex items-center gap-3">
              <span className="w-2 h-7 bg-orange-500 rounded-full"></span>
              Key Focus Areas & Methodology
            </h2>
            <div className="space-y-4">
              {service.keyFocus.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-orange-200 transition-colors">
                  <FaCheckCircle className="text-orange-500 text-xl mt-0.5 flex-shrink-0" />
                  <span className="text-slate-800 font-medium text-base leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#123c5a] mb-6 flex items-center gap-3">
              <span className="w-2 h-7 bg-orange-500 rounded-full"></span>
              Key Audit Deliverables
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.deliverables.map((item, idx) => (
                <div key={idx} className="bg-blue-50/60 border border-blue-100 p-5 rounded-2xl flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#123c5a] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-[#123c5a] font-bold text-sm leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Applicable Frameworks */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#123c5a] mb-4 flex items-center gap-3">
              <span className="w-2 h-7 bg-orange-500 rounded-full"></span>
              Compliance & Audit Frameworks
            </h2>
            <div className="flex flex-wrap gap-3">
              {service.standards.map((std, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 font-semibold text-sm border border-slate-200">
                  ✓ {std}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar: Quick Actions & Other Services */}
        <div className="space-y-8">
          {/* Consultation Box */}
          <div className="bg-gradient-to-br from-[#0b2844] via-[#123c5a] to-[#1e5278] text-white p-8 rounded-3xl shadow-xl border border-blue-950">
            <h3 className="text-2xl font-extrabold mb-3">
              Inquire for {service.title}
            </h3>
            <p className="text-blue-100 text-sm mb-6 leading-relaxed">
              Schedule a dedicated consultation with ROU Global's senior audit partners today.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 cursor-pointer text-center"
            >
              Book Consultation →
            </button>

            <div className="mt-8 pt-6 border-t border-white/15 space-y-3 text-xs text-blue-200">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                <span>+977 981-8642082</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                <span>contact.rouglobal@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Other Audit Services Navigation */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
            <h4 className="text-base font-extrabold text-[#123c5a] mb-4 pb-3 border-b border-slate-100">
              Other Audit Services
            </h4>
            <div className="space-y-2">
              {Object.keys(auditServicesData).map((key) => {
                const item = auditServicesData[key];
                if (key === slug) return null;
                return (
                  <Link
                    key={key}
                    to={`/audit-services/${key}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-orange-500 transition-colors group text-sm font-semibold"
                  >
                    <span>{item.title}</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
