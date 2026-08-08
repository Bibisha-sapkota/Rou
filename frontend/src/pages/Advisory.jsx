import {  
  FaHandshake, 
  FaBalanceScale, 
  FaChartLine, 
  FaGlobe, 
  FaFileInvoiceDollar, 
  FaCalculator, 
  FaRocket, 
  FaRegFileAlt 
} from "react-icons/fa";

export default function Advisory() {

  const services = [
    {
      title: "Business Consulting",
      desc: "Integrated solutions covering deals, transaction support, performance improvement and forensic advisory.",
      icon: <FaHandshake />,
    },
    {
      title: "Tax Advisory",
      desc: "Tax planning, compliance supervision, and tax efficiency strategies.",
      icon: <FaBalanceScale />,
    },
    {
      title: "Business Valuation",
      desc: "Corporate valuation services for M&A, venture capital, FPO and restructuring.",
      icon: <FaChartLine />,
    },
    {
      title: "FDI Consultancy",
      desc: "Foreign Direct Investment advisory including regulatory navigation and market entry strategies.",
      icon: <FaGlobe />,
    },
    {
      title: "Loan Consulting",
      desc: "Complete loan documentation preparation and bank coordination support.",
      icon: <FaFileInvoiceDollar />,
    },
    {
      title: "Financial Modelling",
      desc: "Sophisticated financial models for forecasting, investment analysis and strategic planning.",
      icon: <FaCalculator />,
    },
    {
      title: "Startup Business Solutions",
      desc: "Complete startup package including registration, accounting setup, tax planning and growth advisory.",
      icon: <FaRocket />,
    },
    {
      title: "Business Plan & Feasibility",
      desc: "Preparation of bank-ready business plans and financial models for investors and financing.",
      icon: <FaRegFileAlt />,
    },
  ];

  return (
    <div>
      <div className="bg-[#123c5a] py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Advisory
        </h1>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Strategic consulting, risk advisory and financial restructuring.
        </p>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white
                  p-8
                  rounded-2xl
                  border-2
                  border-gray-200
                  shadow-sm
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:bg-[#123c5a]
                  hover:text-white
                  hover:shadow-xl
                  hover:-translate-y-1
                  group
                "
              >
                <div className="text-3xl mb-4 transition-colors duration-500 group-hover:text-white">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 transition-colors duration-500 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed transition-colors duration-500 group-hover:text-gray-200">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}