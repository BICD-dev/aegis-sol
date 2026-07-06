import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Safety from './components/Safety';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CoreValues from './components/Values';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <CoreValues />
        <Safety />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}