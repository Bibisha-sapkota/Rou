import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function OfficeLocations() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      {/* 🔵 Header Section */}
      <div className="bg-[#123c5a] py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Office Locations</h1>
        <h2 className="text-xl text-gray-200 mb-2 font-light">
          ROU Global Professional Services Pvt. Ltd.
        </h2>
        <p className="text-lg text-blue-100">
          Find us at our main office in Thaiba, Lalitpur, Nepal
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        
        {/* 📍 Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          
          {/* Address Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-orange-500">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaMapMarkerAlt className="text-[#123c5a] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#123c5a] mb-2">Address</h3>
            <p className="text-gray-600">Thaiba, 44700</p>
            <p className="text-gray-600">Lalitpur, Nepal</p>
          </div>

          {/* Phone Card (Clickable) */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-orange-500">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaPhoneAlt className="text-[#123c5a] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#123c5a] mb-2">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+9779818642082" className="hover:text-orange-500 transition font-medium">
                981-8642082
              </a>
            </p>
          </div>

          {/* Email Card (Clickable) */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:-translate-y-2 transition duration-300 border-b-4 border-orange-500">
            <div className="bg-blue-50 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6">
              <FaEnvelope className="text-[#123c5a] text-3xl" />
            </div>
            <h3 className="text-xl font-bold text-[#123c5a] mb-2">Email</h3>
            <p className="text-gray-600">
              <a href="mailto:content.rouglobal@gmail.com" className="hover:text-orange-500 transition font-medium">
                content.rouglobal@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* 🗺️ Google Map Section (Updated Link) */}
        <div className="mt-12 bg-white p-2 rounded-2xl shadow-xl">
          <div className="rounded-xl overflow-hidden h-[450px] w-full relative">
            <iframe
              title="ROU Global Thaiba Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14139.832352503328!2d85.3393290838283!3d27.625814681204552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb172e79b37167%3A0x45a12c11b0a4ee33!2sThaiba%2C%2044700!5e0!3m2!1sen!2snp!4v1772016638762!5m2!1sen!2snp"
              width="100%"
              height="100%"
              className="border-0 w-full h-full"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  );
}