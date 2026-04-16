import { FiArrowUpRight } from 'react-icons/fi';
import './LinksBento.css';

const links = [
  { name: 'Precision QA', url: 'https://precisionqaconsulting.com', number: '01', desc: 'Consulting' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hunter-om/', number: '02', desc: 'Professional' },
  { name: 'Letterboxd', url: 'https://boxd.it/3Urvd', number: '03', desc: 'Film Diary' },
  { name: 'Spotify', url: 'https://open.spotify.com/user/1231408?si=cc42178c115249c3', number: '04', desc: 'Playlists' },
  { name: 'GitHub', url: 'https://github.com/hunterom-pe', number: '05', desc: 'Code' }
];

export default function LinksBento() {
  return (
    <section className="links-section" id="work">
      <div className="section-label">INDEX</div>
      <div className="links-list">
        {links.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="link-row">
            <span className="link-number">{link.number}</span>
            <span className="link-name">{link.name}</span>
            <span className="link-desc">{link.desc}</span>
            <FiArrowUpRight className="link-arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
