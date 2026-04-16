import Hero from './components/Hero';
import About from './components/About';
import LinksBento from './components/LinksBento';
import InstagramShowcase from './components/InstagramShowcase';
import Contact from './components/Contact';

function App() {
  return (
    <div className="layout-wrapper">
      <Hero />
      
      <div className="grid-split">
        <div className="grid-left">
          <About />
        </div>
        <div className="grid-right">
          <InstagramShowcase />
        </div>
      </div>
      
      <LinksBento />
      <Contact />
    </div>
  );
}

export default App;
