import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-description">
            Have a question or just want to say hello? We would love to hear
            from you.
          </p>
        </div>
        {/* Contact Information */}
        <div className="contact-info-container">
          <div className="contact-info">
            <h3 className="contact-info-title">For Contact</h3>
            <p className="contact-info-item">
              <i className="bx bxs-envelope icon"></i> support@perfume.com
            </p>
            <p className="contact-info-item">
              <i className="bx bx-phone icon"></i> +92 234 567 880
            </p>
            <p className="contact-info-item">
              <i className="bx bx-location-plus icon"></i> 457 perfume fb, Misto
              City
            </p>
          </div>
          <form className="contact-form">
            <div className="contact-form-grid">
              <input
                type="text"
                className="input-name"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="input-email"
                placeholder="Your Email"
              />
            </div>
            <textarea className="input-message" placeholder="Your Message" />
            <button
              type="submit"
              className="submit-button"
              aria-placeholder="Submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
