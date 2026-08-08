import { useState } from "react";
import { LuMapPin, LuMail, LuPhone } from "react-icons/lu";
import { sendContactForm } from "../services/apiService";
import { sendContactEmail } from "../services/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      await sendContactForm({
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.companyName || "Not Provided",
        service: formData.service,
        message: formData.message,
      });

      // Send the beautiful email via EmailJS
      await sendContactEmail(formData);

      setStatus("Thank you! Your message has been saved successfully.");
      setFormData({ fullName: "", companyName: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      console.error("Contact API error:", error);
      setStatus("Failed to save message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-[#0b2e4f] to-[#123c5a] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-white/80">Ready to discuss how we can help your business? Reach out today.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <form onSubmit={sendEmail} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#123c5a]" />
            <input type="text" name="companyName" placeholder="Company Name" value={formData.companyName} onChange={handleChange} className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#123c5a]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#123c5a]" />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#123c5a]" />
          </div>
          <select name="service" value={formData.service} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#123c5a]">
            <option value="" disabled>Service Required</option>
            <option value="Audit Services">Audit Services</option>
            <option value="Digital Solutions">Digital Solutions</option>
            <option value="Advisory">Advisory</option>
            <option value="Consultation">Consultation</option>
          </select>
          <textarea name="message" rows="5" placeholder="Your Message" value={formData.message} onChange={handleChange} required className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#123c5a]" />
          <button type="submit" disabled={isSubmitting} className={`text-white font-semibold px-6 py-3 rounded-lg transition ${isSubmitting ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"}`}>{isSubmitting ? "Sending..." : "Send Message"}</button>
          {status && <p className="text-[#123c5a] font-medium mt-2">{status}</p>}
        </form>

        <div>
          <h2 className="text-2xl font-bold text-[#123c5a] mb-6">Contact Information</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3.5 rounded-full text-black flex items-center justify-center">
                <LuMapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office Address</p>
                <p className="text-gray-600">Thaiba, Lalitpur, Nepal</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3.5 rounded-full text-black flex items-center justify-center">
                <LuMail className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">contact.rouglobal@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-3.5 rounded-full text-black flex items-center justify-center">
                <LuPhone className="w-5 h-5 text-black" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">981-8642082</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}