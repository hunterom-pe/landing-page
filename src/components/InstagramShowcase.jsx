import './InstagramShowcase.css';
import img1 from '../assets/ig1.jpg';
import img2 from '../assets/ig2.jpg';
import img3 from '../assets/ig3.jpg';

export default function InstagramShowcase() {
  const images = [
    { id: 1, src: img1, alt: "Instagram visual 1" },
    { id: 2, src: img2, alt: "Instagram visual 2" },
    { id: 3, src: img3, alt: "Instagram visual 3" },
  ];

  return (
    <section className="ig-showcase" id="visuals">
      <h3 className="section-label">VISUALS</h3>
      <div className="ig-grid-brutalist">
        {images.map((img, index) => (
          <a key={img.id} href="https://www.instagram.com/hunter_thecatlady" target="_blank" rel="noopener noreferrer" className={`ig-image-container item-${index}`}>
            <img src={img.src} alt={img.alt} className="ig-image" />
          </a>
        ))}
      </div>
    </section>
  );
}
