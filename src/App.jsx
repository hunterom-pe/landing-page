import Hero from './components/Hero';
import About from './components/About';
import LinksBento from './components/LinksBento';
import InstagramShowcase from './components/InstagramShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>
      
      <div className="container">
        <div className="animate-enter" style={{ '--delay': '0.1s' }}>
          <Hero />
        </div>
        <div className="animate-enter" style={{ '--delay': '0.3s' }}>
          <About />
        </div>
        <div className="animate-enter" style={{ '--delay': '0.5s' }}>
          <LinksBento />
        </div>
        <div className="animate-enter" style={{ '--delay': '0.7s' }}>
          <InstagramShowcase />
        </div>
        <div className="animate-enter" style={{ '--delay': '0.9s' }}>
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
