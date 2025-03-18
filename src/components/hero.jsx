import { trackButtonClick } from '../utils/analytics';
import { useLanguage } from '../utils/LanguageContext';

const Hero = ({ className }) => {
  const { t } = useLanguage();

  const handleGetStarted = () => {
    // Track the button click
    trackButtonClick('Get Started', 'hero');
    
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
        <h1>{t('hero.title')}</h1>
        <p>{t('hero.subtitle')}</p>
        <div className="hero-subtext">
          <p>{t('hero.disclaimer')}</p>
          <p>{t('hero.disclaimer2')}</p>
        </div>
        <button className="cta-button" onClick={handleGetStarted}>
          {t('hero.cta')}
        </button>
        <p className="button-footnote">{t('hero.ctaFootnote')}</p>
      </div>
    </section>
  );
};

export default Hero;
