import emailjs from 'emailjs-com';

// ✅ Your Actual EmailJS Configuration
const EMAILJS_SERVICE_ID = 'service_36oce7d';
const EMAILJS_TEMPLATE_ID = 'template_suh6nxi';
const EMAILJS_PUBLIC_KEY = 'kMQosmwOm4C9wgou4';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

/**
 * Send Contact Form Email
 * @param {Object} formData - Form data to send
 * @returns {Promise} - EmailJS promise
 */
export const sendContactEmail = async (formData) => {
  try {
    const templateParams = {
      from_name: formData.fullName || formData.name,
      from_email: formData.email,
      from_phone: formData.phone,
      company_name: formData.companyName || 'Not provided',
      service_required: formData.serviceRequired || formData.position || 'Not specified',
      message: formData.message,
      to_email: 'contact.rouglobal@gmail.com',
      subject: `New Inquiry: ${formData.service || formData.serviceRequired || 'General'} from ${formData.fullName || formData.name}`,
    };

    console.log('Sending email with params:', templateParams);

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    console.log('✅ Email sent successfully:', response);
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('❌ Email sending failed:', error);
    return { 
      success: false, 
      message: 'Failed to send email. Please try again.',
      error: error
    };
  }
};