import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaInstagram } from 'react-icons/fa'; // Import the Instagram icon
import './ContactSection.css';

const ContactSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState(null); // null, 'success', 'error'
  const [errors, setErrors] = useState({});

  const email = "mariadomar2000@gmail.com"; // Replace with your actual email
  const instagramUrl = "https://www.instagram.com/marcoutinh0/"; // Your Instagram profile URL

  // --- EmailJS Configuration ---
  const SERVICE_ID = "service_mar_model";
  const TEMPLATE_ID = "template_mar_model";
  const PUBLIC_KEY = "42awK1IIf_Kx2SeXW";
  // ---------------------------

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: null,
      }));
    }
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.from_name.trim()) {
      formErrors.from_name = 'Name is required';
      isValid = false;
    }
    if (!formData.from_email.trim()) {
      formErrors.from_email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      formErrors.from_email = 'Email address is invalid';
      isValid = false;
    }
    // Optional fields don't need validation here unless specific format is needed

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // Stop submission if validation fails
    }

    setIsSending(true);
    setSendStatus(null);
    setErrors({});

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSendStatus('success');
          setIsSending(false);
          // Reset form after successful send
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
          form.current.reset(); // Also reset the native form element
        },
        (error) => {
          console.log('FAILED...', error.text);
          setSendStatus('error');
          setIsSending(false);
        }
      );
  };

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-content">
        <h2>Get In Touch</h2>
        <p className="contact-description">
          Feel free to reach out via email or connect on Instagram.
        </p>

        {/* Contact Form */} 
        <form ref={form} onSubmit={handleSubmit} className="contact-form" noValidate>
          <div className="form-group">
            <label htmlFor="from_name">Name *</label>
            <input
              type="text"
              id="from_name"
              name="from_name"
              value={formData.from_name}
              onChange={handleInputChange}
              required
              aria-invalid={errors.from_name ? "true" : "false"}
              aria-describedby={errors.from_name ? "name-error" : null}
            />
            {errors.from_name && <p className="error-message" id="name-error">{errors.from_name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="from_email">Email *</label>
            <input
              type="email"
              id="from_email"
              name="from_email"
              value={formData.from_email}
              onChange={handleInputChange}
              required
              aria-invalid={errors.from_email ? "true" : "false"}
              aria-describedby={errors.from_email ? "email-error" : null}
            />
            {errors.from_email && <p className="error-message" id="email-error">{errors.from_email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-button" disabled={isSending}>
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {/* Submission Status Messages */} 
          {sendStatus === 'success' && (
            <p className="status-message success-message">Message Sent! Thank you.</p>
          )}
          {sendStatus === 'error' && (
            <p className="status-message error-message">Failed to send message. Please try again later or contact me directly.</p>
          )}
        </form>

        {/* Existing Contact Details (Optional: Keep or remove) */} 
        <div className="contact-divider">OR CONNECT VIA</div>
        <div className="contact-details">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-instagram-button"
            aria-label="Visit Instagram profile (opens in a new tab)"
          >
            <FaInstagram className="instagram-icon" />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection; 