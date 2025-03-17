// You can work here or download the template
// Your components go here
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/about";
import Footer from "../components/footer";
import { trackSectionView, trackScrollDepth, trackTimeSpent } from './utils/analytics';
import "./App.css";

const App = () => {
  const [lastTrackedSection, setLastTrackedSection] = useState('');
  const [sectionStartTime, setSectionStartTime] = useState(Date.now());

  useEffect(() => {
    // Scroll tracking
    const handleScroll = () => {
      const sections = ['home', 'services', 'about', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            if (lastTrackedSection !== section) {
              // Track time spent in previous section
              if (lastTrackedSection) {
                const timeSpent = (Date.now() - sectionStartTime) / 1000;
                trackTimeSpent(lastTrackedSection, timeSpent);
              }
              
              // Track new section view
              trackSectionView(section);
              setLastTrackedSection(section);
              setSectionStartTime(Date.now());
              
              // Track navigation between sections
              ReactGA.send({
                hitType: "pageview",
                page: `/#${section}`
              });
            }
          }
        }
      });

      // Calculate scroll depth
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = document.documentElement.clientHeight;
      const scrollPercentage = Math.round((scrollTop / (scrollHeight - clientHeight)) * 100);

      // Track scroll depth at 25%, 50%, 75%, and 100%
      if (scrollPercentage >= 25 && scrollPercentage < 50) {
        trackScrollDepth(25);
      } else if (scrollPercentage >= 50 && scrollPercentage < 75) {
        trackScrollDepth(50);
      } else if (scrollPercentage >= 75 && scrollPercentage < 100) {
        trackScrollDepth(75);
      } else if (scrollPercentage === 100) {
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Track initial section view
    trackSectionView('home');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Track time spent in last section before unmounting
      if (lastTrackedSection) {
        const timeSpent = (Date.now() - sectionStartTime) / 1000;
        trackTimeSpent(lastTrackedSection, timeSpent);
      }
    };
  }, [lastTrackedSection, sectionStartTime]);

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
