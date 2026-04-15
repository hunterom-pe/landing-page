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
    <section className="ig-showcase">
      <div className="ig-header">
        <h2>Latest Visuals</h2>
        <a href="https://www.instagram.com/hunter_thecatlady" target="_blank" rel="noopener noreferrer" className="ig-link">@hunter_thecatlady</a>
      </div>
      <div className="ig-grid">
        {images.map(img => (
          <div key={img.id} className="ig-image-container">
            <img src={img.src} alt={img.alt} className="ig-image" />
          </div>
        ))}
      </div>
    </section>
  );
}
