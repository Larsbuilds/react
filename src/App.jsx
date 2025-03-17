// You can work here or download the template
// Your components go here
import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/about";
import Footer from "../components/footer";
import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            ReactGA.send({
              hitType: "pageview",
              page: `/#${section}`
            });
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container fade-in">
      <Header className="header" />
      <main>
        <div id="home">
          <Hero className="hero" />
        </div>
        <div id="services">
          <Service className="service" />
        </div>
        <div id="about">
          <About className="about" />
        </div>
      </main>
      <div id="contact">
        <Footer className="footer" />
      </div>
    </div>
  );
};

export default App;
