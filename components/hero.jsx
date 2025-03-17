const Hero = ({ className }) => {
  const handleGetStarted = () => {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
    
    // Add a pulse animation to the services section
    servicesSection.classList.add('pulse-attention');
    // Remove the class after animation completes
    setTimeout(() => {
      servicesSection.classList.remove('pulse-attention');
    }, 1000);
  };

  return (
    <section className={className}>
      <div className="hero-content">
        <h1>Welcome to Yet Another Website™</h1>
        <p>Because the internet definitely needed one more of these! 🎉</p>
        <div className="hero-subtext">
          <p>* No developers were harmed in the making of this website</p>
          <p>** Results may vary based on how many Stack Overflow posts we could find</p>
        </div>
        <button className="cta-button" onClick={handleGetStarted}>
          Click Here to Start Your Journey*
        </button>
        <p className="button-footnote">*Journey may include unexpected features we're calling "surprise mechanics"</p>
      </div>
    </section>
  );
};

export default Hero;
