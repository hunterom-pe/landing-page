import { useState, useEffect } from 'react';
import './Hero.css';

export default function Hero() {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', {
    timeZone: 'America/Phoenix',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <header className="hero-section">
      <div className="top-nav">
        <div className="status-widget">
          <div className="status-indicator">
            <span className="blink-dot"></span>
            SYS.ONLINE
          </div>
          <span className="time-display">{timeString} PHX</span>
        </div>
        
        <button 
          className="mobile-menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>WORK</a>
          <a href="#visuals" onClick={() => setIsMenuOpen(false)}>VISUALS</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>CONTACT</a>
        </nav>
      </div>
      <h1 className="hero-name">
        HUNTER<br/>
        ORTEGA-<br/>
        MATHEWS
      </h1>
    </header>
  );
}
