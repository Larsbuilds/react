// You can work here or download the template
// Your components go here
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Header from "../components/header";
import Hero from "../components/hero";
import Service from "../components/service";
import About from "../components/about";
import Footer from "../components/footer";
import { useScrollTracking } from './utils/analytics';
import { ThemeProvider } from './utils/ThemeContext';
import { LanguageProvider } from './utils/LanguageContext';
import "./App.css";

const AppContent = () => {
  // Use the scroll tracking hook
  useScrollTracking();

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

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
