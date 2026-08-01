import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>🩺 Medicare Appointment</h2>

          <p>
            Your trusted healthcare partner. Book appointments
            with experienced doctors anytime, anywhere.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul className="footer-links">

            <li><Link to="/">Home</Link></li>
            

            <li><Link to="/doctors">Doctors</Link></li>

            <li><Link to="/appointment">Appointment</Link></li>

            <li><Link to="/about">About</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Departments</h3>

          <ul>

            <li>Cardiology</li>

            <li>Dentist</li>

            <li>Neurology</li>

            <li>Pediatrics</li>

            <li>Orthopedic</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact Us</h3>

          <p><FaPhone /> +91 6201084280</p>

          <p><FaEnvelope /> medicare@gmail.com</p>

          <p><FaMapMarkerAlt /> Patna, Bihar</p>

        </div>

      </div>

      {/* Social */}

      <div className="social-icons">

        <FaFacebook />

        <FaInstagram />

        <FaLinkedin />

        <FaTwitter />

      </div>

      <hr />

      <p className="copyright">
        © 2026 Medicare Appointment. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;