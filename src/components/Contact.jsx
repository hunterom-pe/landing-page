import './Contact.css';

export default function Contact() {
  return (
    <footer className="contact-footer" id="contact">
      <div className="section-label">CONTACT</div>
      <div className="contact-grid-brutalist">
        <div className="contact-info">
          <h4>BUSINESS INQUIRIES</h4>
          <a href="mailto:hello@precisionqaconsulting.com">HELLO@PRECISIONQACONSULTING.COM</a>
        </div>
        <div className="contact-info">
          <h4>PERSONAL</h4>
          <a href="mailto:hunterom8@proton.me">HUNTEROM8@PROTON.ME</a>
        </div>
        <div className="contact-info">
          <h4>SOCIAL</h4>
          <a href="https://www.instagram.com/hunter_thecatlady" target="_blank" rel="noopener noreferrer">@HUNTER_THECATLADY</a>
        </div>
      </div>
      <div className="footer-credits">
        <span>© 2026 HUNTER ORTEGA-MATHEWS</span>
        <span>BASED IN PHOENIX, AZ</span>
      </div>
    </footer>
  );
}
