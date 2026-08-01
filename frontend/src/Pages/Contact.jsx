import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact">

      <div className="contact-heading">
        <h1>Contact Us</h1>
        <p>
          We're always here to help you. Feel free to contact us for
          appointments or any healthcare-related assistance.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-card">
          <FaPhoneAlt className="icon" />
          <h3>Call Us</h3>
          <p>+91 6201084280</p>
          <p>+91 9876543210</p>
        </div>

        <div className="contact-card">
          <FaEnvelope className="icon" />
          <h3>Email Us</h3>
          <p>medicare@gmail.com</p>
          <p>support@medicare.com</p>
        </div>

        <div className="contact-card">
          <FaMapMarkerAlt className="icon" />
          <h3>Visit Us</h3>
          <p>Patna, Bihar</p>
          <p>India - 800001</p>
        </div>

        <div className="contact-card">
          <FaClock className="icon" />
          <h3>Working Hours</h3>
          <p>Monday - Saturday</p>
          <p>9:00 AM - 7:00 PM</p>
        </div>

      </div>

      <div className="contact-map">

        <iframe
          title="Google Map"
          src="https://www.google.com/maps?q=Patna,Bihar&output=embed"
          loading="lazy"
        ></iframe>

      </div>

    </section>
  );
}

export default Contact;