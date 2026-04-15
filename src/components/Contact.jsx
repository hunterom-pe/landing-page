import { FiMail, FiBriefcase } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h2>Get in Touch</h2>
        <p>Feel free to reach out for business inquiries or just to say hi.</p>
      </div>
      <div className="contact-grid">
        <a href="mailto:hello@precisionqaconsulting.com" className="contact-card">
          <div className="contact-icon"><FiBriefcase size={20} /></div>
          <div className="contact-content">
            <h3>Business Inquiries</h3>
            <p>hello@precisionqaconsulting.com</p>
          </div>
        </a>
        <a href="mailto:hunterom8@proton.me" className="contact-card">
          <div className="contact-icon"><FiMail size={20} /></div>
          <div className="contact-content">
            <h3>Personal</h3>
            <p>hunterom8@proton.me</p>
          </div>
        </a>
      </div>
    </section>
  );
}
