import { useState } from "react";
import { sendContactForm } from "../services/apiService";
import { sendContactEmail } from "../services/emailService";

export default function ContactForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "", 
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      await sendContactForm({
        name: data.name,
        email: data.email,
        phone: data.phone,
        companyName: "Not Provided (Home Form)",
        service: data.service || "General Inquiry",
        message: data.message,
      });

      await sendContactEmail(data);

      setStatus("Message saved successfully. We will contact you soon.");
      setData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Contact API error:", error);
      setStatus("Failed to save message. Please try again.");
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#0f3c6e] via-[#1f4e79] to-[#2a5d9f] relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12 text-white">
          <h2 className="text-4xl font-bold mb-3">Start Your Journey With Us</h2>
          <p className="text-gray-200">
            Tell us about your business needs, and we will provide the right financial solution.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="name" placeholder="Full Name" value={data.name} onChange={handleChange} required className="w-full p-4 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-orange-400 text-gray-800" />
              <input type="email" name="email" placeholder="Email Address" value={data.email} onChange={handleChange} required className="w-full p-4 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-orange-400 text-gray-800" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" name="phone" placeholder="Phone Number" value={data.phone} onChange={handleChange} required className="w-full p-4 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-orange-400 text-gray-800" />
              
              <select name="service" value={data.service} onChange={handleChange} required className="w-full p-4 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 cursor-pointer">
                <option value="" disabled>Select Inquiry Topic</option>
                <option value="Audit & Assurance">Audit & Assurance</option>
                <option value="Taxation & Compliance">Taxation & Compliance</option>
                <option value="FDI & Market Entry">FDI & Market Entry</option>
                <option value="Digital Solutions">Digital Solutions</option>
                <option value="Advisory">Advisory</option>
                <option value="Other">Other Inquiry</option>
              </select>
            </div>

            <textarea name="message" rows="5" placeholder="How can we help you?" value={data.message} onChange={handleChange} required className="w-full p-4 rounded-lg bg-white/90 focus:bg-white outline-none focus:ring-2 focus:ring-orange-400 text-gray-800 resize-none" />

            <button type="submit" disabled={loading} className={`w-full text-white py-4 rounded-lg font-semibold text-lg transition transform hover:scale-[1.02] shadow-lg ${loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"}`}>
              {loading ? "Sending..." : "Submit Inquiry"}
            </button>

            {status && <p className="text-center font-medium mt-3 text-white animate-pulse">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}