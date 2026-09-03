import React, { useState } from 'react';
import {
  IoCheckmarkCircle,
  IoAlertCircle,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoTimeOutline,
} from 'react-icons/io5';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field validation rules
  const validateField = (name, value) => {
    let error = '';

    if (name === 'name') {
      if (!value.trim()) {
        error = 'Name is required';
      } else if (value.trim().length < 2) {
        error = 'Name must be at least 2 characters';
      }
    }

    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = 'Email is required';
      } else if (!emailRegex.test(value.trim())) {
        error = 'Enter a valid email address';
      }
    }

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (!value.trim()) {
        error = 'Phone number is required';
      } else if (digitsOnly.length < 10 || digitsOnly.length > 13) {
        error = 'Enter a valid 10-digit mobile number';
      }
    }

    if (name === 'message') {
      if (!value.trim()) {
        error = 'Message is required';
      } else if (value.trim().length < 10) {
        error = 'Message must be at least 10 characters';
      }
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const err = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: err }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: err }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const err = validateField(key, formData[key]);
      if (err) newErrors[key] = err;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-8 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column (Editorial Info & Concierge Details on Desktop) */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#77736D] uppercase mb-1">
                REACH OUT
              </p>
              <h2 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold tracking-tight text-[#1D1D1B] leading-tight mb-3 md:mb-4">
                Let's Make Your <br />
                Space Beautiful.
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-[#77736D] leading-relaxed mb-6">
                Have a custom bespoke furniture requirement, fabric swatch query,
                or architectural project inquiry? Our design advisors are ready to help.
              </p>

              {/* Contact Information Cards (Visible on tablet & desktop, compact on mobile) */}
              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ECE6DC] text-[#1D1D1B] flex items-center justify-center flex-shrink-0 text-base shadow-2xs">
                    <IoCallOutline />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-semibold text-[#A19B92]">Direct Concierge</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1D1D1B]">+91 (022) 4982-NESTA</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ECE6DC] text-[#1D1D1B] flex items-center justify-center flex-shrink-0 text-base shadow-2xs">
                    <IoMailOutline />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-semibold text-[#A19B92]">Studio Inquiries</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1D1D1B]">concierge@nesta.in</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ECE6DC] text-[#1D1D1B] flex items-center justify-center flex-shrink-0 text-base shadow-2xs">
                    <IoLocationOutline />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-semibold text-[#A19B92]">Flagship Atelier</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1D1D1B]">Kala Ghoda Art District, Mumbai 400001</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#ECE6DC] text-[#1D1D1B] flex items-center justify-center flex-shrink-0 text-base shadow-2xs">
                    <IoTimeOutline />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase font-semibold text-[#A19B92]">Consultation Hours</p>
                    <p className="text-xs sm:text-sm font-bold text-[#1D1D1B]">Monday – Saturday: 10:00 AM – 7:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Validated Form) */}
          <div className="md:col-span-7">
            <div className="rounded-[32px] sm:rounded-[36px] bg-[#FCFAF6] border border-[#E5DED4] p-5 sm:p-8 md:p-10 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#1D1D1B] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#77736D] mb-5">
                Fill in your details below and a design consultant will respond within 24 hours.
              </p>

              {/* Success Confirmation Alert */}
              {isSubmitted && (
                <div className="mb-5 p-4 rounded-2xl bg-[#ECE6DC] border border-[#E5DED4] text-[#1D1D1B] flex items-start gap-3 animate-fade-in">
                  <IoCheckmarkCircle className="text-2xl text-[#74765B] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold text-[#1D1D1B]">Message received successfully!</p>
                    <p className="text-[#77736D] mt-0.5">
                      Thank you for contacting NESTA. Our interior design team will be in touch shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Form with Inline Field Validation */}
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs sm:text-sm font-semibold text-[#1D1D1B] mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Aarav Sharma"
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F1EA] border text-xs sm:text-sm text-[#1D1D1B] placeholder-[#A19B92] focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-[#E5DED4] focus:border-[#171715]'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                      <IoAlertCircle className="text-xs sm:text-sm" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs sm:text-sm font-semibold text-[#1D1D1B] mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="aarav@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F1EA] border text-xs sm:text-sm text-[#1D1D1B] placeholder-[#A19B92] focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-[#E5DED4] focus:border-[#171715]'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <IoAlertCircle className="text-xs sm:text-sm" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs sm:text-sm font-semibold text-[#1D1D1B] mb-1.5"
                    >
                      Mobile Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="+91 98765 43210"
                      className={`w-full px-4 py-3 rounded-xl bg-[#F5F1EA] border text-xs sm:text-sm text-[#1D1D1B] placeholder-[#A19B92] focus:outline-none transition-colors ${
                        errors.phone
                          ? 'border-rose-400 focus:border-rose-500'
                          : 'border-[#E5DED4] focus:border-[#171715]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-medium">
                        <IoAlertCircle className="text-xs sm:text-sm" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs sm:text-sm font-semibold text-[#1D1D1B] mb-1.5"
                  >
                    Project Details / Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Tell us about the space or furniture pieces you have in mind..."
                    className={`w-full px-4 py-3 rounded-xl bg-[#F5F1EA] border text-xs sm:text-sm text-[#1D1D1B] placeholder-[#A19B92] focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? 'border-rose-400 focus:border-rose-500'
                        : 'border-[#E5DED4] focus:border-[#171715]'
                    }`}
                  />
                  <div className="flex justify-between items-center mt-1 text-[11px] text-[#A19B92]">
                    {errors.message ? (
                      <span className="text-rose-500 flex items-center gap-1">
                        <IoAlertCircle className="text-xs" />
                        {errors.message}
                      </span>
                    ) : (
                      <span>Minimum 10 characters</span>
                    )}
                    <span>{formData.message.length} chars</span>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#171715] hover:bg-[#2c2c28] text-[#FFFEFB] font-medium text-xs sm:text-sm flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-60 transition-all shadow-xs"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <span>→</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
