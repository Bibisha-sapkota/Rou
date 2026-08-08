import { 
  FaLaptopCode, 
  FaCloud, 
  FaCogs, 
  FaChartBar, 
  FaRobot, 
  FaShieldAlt 
} from "react-icons/fa";

export default function DigitalSolutions() {

  const services = [
    {
      title: "Digital Accounting Systems",
      desc: "Implementation of modern digital accounting infrastructure for accurate, real-time financial tracking.",
      icon: <FaLaptopCode />,
    },
    {
      title: "Cloud Accounting Implementation",
      desc: "Seamless migration to cloud-based accounting platforms for accessibility and scalability.",
      icon: <FaCloud />,
    },
    {
      title: "ERP Advisory",
      desc: "Enterprise Resource Planning system selection, implementation, and optimization advisory.",
      icon: <FaCogs />,
    },
    {
      title: "Financial Dashboard & Reporting",
      desc: "Custom financial dashboards providing real-time insights for data-driven decision making.",
      icon: <FaChartBar />,
    },
    {
      title: "Process Automation",
      desc: "Automating repetitive financial processes to improve efficiency and reduce errors.",
      icon: <FaRobot />,
    },
    {
      title: "Internal Control Digitalization",
      desc: "Digitalizing internal financial controls for enhanced security and compliance monitoring.",
      icon: <FaShieldAlt />,
    },
  ];

  return (
    <div>
     
      <div className="bg-[#123c5a] py-16 text-center">
        <h1 className="text-4xl font-bold text-white">
          Digital Solutions
        </h1>
        <p className="text-gray-200 mt-4 text-lg max-w-2xl mx-auto">
          Modern digital transformation solutions for smarter financial management.
        </p>
      </div>

      <div className="bg-gray-50 py-16">
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
                  transition-all
                  duration-500
                  cursor-pointer
                  hover:bg-[#123c5a]
                  hover:border-[#123c5a]
                  hover:shadow-xl
                  hover:-translate-y-2
                  group
                "
              >

                <div className="
                  text-3xl
                  text-[#123c5a]
                  mb-4
                  transition-colors
                  duration-500
                  group-hover:text-white
                ">
                  {service.icon}
                </div>

                <h3 className="
                  text-xl
                  font-semibold
                  text-[#123c5a]
                  mb-3
                  transition-colors
                  duration-500
                  group-hover:text-white
                ">
                  {service.title}
                </h3>

                <p className="
                  text-gray-600
                  text-sm
                  leading-relaxed
                  transition-colors
                  duration-500
                  group-hover:text-gray-200
                ">
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