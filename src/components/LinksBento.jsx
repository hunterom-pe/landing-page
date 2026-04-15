import { FiInstagram, FiLinkedin, FiFilm, FiBriefcase, FiGithub } from 'react-icons/fi';
import { FaSpotify } from 'react-icons/fa';
import './LinksBento.css';

const links = [
  {
    name: 'Precision QA Consulting',
    url: 'https://www.precisionqaconsulting.com',
    icon: <FiBriefcase size={20} />,
    description: 'My Consulting Business'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/hunterom/',
    icon: <FiLinkedin size={20} />,
    description: 'Professional Profile'
  },
  {
    name: 'Letterboxd',
    url: 'https://letterboxd.com/plantscatslegos/',
    icon: <FiFilm size={20} />,
    description: 'Films I\'ve watched'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/hunter_thecatlady', 
    icon: <FiInstagram size={20} />,
    description: 'Photography & Life'
  },
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/user/1231408?si=cc42178c115249c3',
    icon: <FaSpotify size={20} />,
    description: 'My Playlists'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/hunterom-pe',
    icon: <FiGithub size={20} />,
    description: 'My Code'
  }
];

export default function LinksBento() {
  return (
    <section className="links-section">
      <div className="links-grid">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <div className="link-icon">{link.icon}</div>
            <div className="link-content">
              <h3>{link.name}</h3>
              <p>{link.description}</p>
            </div>
            <div className="link-arrow">↗</div>
          </a>
        ))}
      </div>
    </section>
  );
}
