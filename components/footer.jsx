import { trackSocialLink } from '../src/utils/analytics';
import { useLanguage } from '../src/utils/LanguageContext';
import { useState, useEffect } from 'react';

const Footer = ({ className }) => {
  const { t } = useLanguage();
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex(prevIndex => {
        const quotes = t('footer.randomQuotes');
        return (prevIndex + 1) % quotes.length;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [t]);

  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com/Larsbuilds/react", tooltip: t('footer.social.github') },
    { name: "Twitter", icon: "🐦", url: "#", tooltip: t('footer.social.twitter') },
    { name: "LinkedIn", icon: "💼", url: "#", tooltip: t('footer.social.linkedin') },
    { name: "Instagram", icon: "📸", url: "#", tooltip: t('footer.social.instagram') }
  ];

  const handleSocialClick = (platform) => {
    trackSocialLink(platform);
  };

  return (
    <footer className={`fun-footer ${className || ''}`}>
      <div className="footer-waves" />
      <div className="footer-content">
        {/* Main Content Section */}
        <div className="footer-main">
          <div className="footer-message">
            <h3 className="typing-effect">{t('footer.thanks')}</h3>
            <p className="footer-tagline bounce-on-hover">
              {t('footer.madeWith')} <span className="emoji-stack">☕️ + 💻 + 🎵 + 🍕</span>
              <span className="tooltip">
                ({t('footer.andOccasionally')} 🍷)
                <span className="tooltiptext">{t('footer.madeWithTooltip')}</span>
              </span>
            </p>
            <p className="random-quote fade-transition">
              {t('footer.randomQuotes')[currentQuoteIndex]}
            </p>
          </div>

          {/* Social Links Section */}
          <div className="social-section">
            <h4 className="section-title">{t('footer.findUs')}</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url} 
                  className="social-icon bounce-on-hover"
                  data-tooltip={link.tooltip}
                  onClick={() => handleSocialClick(link.name)}
                >
                  <span className="icon">{link.icon}</span>
                  <span className="name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Easter Egg & Copyright Section */}
        <div className="footer-bottom">
          <div className="footer-easter-egg">
            <p className="code-comment">
              {/* eslint-disable-next-line no-console */}
              {t('footer.easterEgg')}
            </p>
          </div>

          <div className="copyright">
            <p>{t('footer.copyright.company').replace('{year}', new Date().getFullYear())}</p>
            <p className="small-print">{t('footer.copyright.bugs')}</p>
            <p className="really-small-print">{t('footer.copyright.bugsAsterisk')}</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .fun-footer {
          position: relative;
          margin-top: 4rem;
          padding: 3rem 2rem 2rem;
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: white;
          overflow: hidden;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .footer-main {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-bottom: 3rem;
          width: 100%;
        }

        .footer-message {
          text-align: center;
          width: 100%;
        }

        .typing-effect {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-tagline {
          font-size: 1.2rem;
          margin: 1rem 0;
          color: rgba(255, 255, 255, 0.9);
        }

        .emoji-stack {
          display: inline-block;
          padding: 0.3rem 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          margin: 0 0.3rem;
        }

        .random-quote {
          font-style: italic;
          color: rgba(255, 255, 255, 0.8);
          margin: 1.5rem 0;
          font-family: monospace;
          transform: rotate(-1deg);
          font-size: 1.1rem;
          min-height: 1.5em;
        }

        .fade-transition {
          opacity: 1;
          transition: opacity 0.3s ease;
        }

        .fade-transition:not(:hover) {
          opacity: 0.8;
        }

        .section-title {
          color: white;
          margin-bottom: 1rem;
          font-size: 1.2rem;
          text-align: center;
        }

        .social-section {
          text-align: center;
          width: 100%;
        }

        .social-links {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          width: 100%;
        }

        .social-icon {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: white;
          padding: 0.7rem 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .social-icon .icon {
          font-size: 1.5em;
        }

        .tooltip {
          position: relative;
          cursor: help;
          margin-left: 0.5rem;
        }

        .tooltiptext {
          visibility: hidden;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          text-align: center;
          border-radius: 6px;
          padding: 8px 12px;
          position: absolute;
          z-index: 1;
          bottom: 125%;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
          transition: all 0.3s ease;
          width: max-content;
          font-size: 0.9rem;
        }

        .tooltip:hover .tooltiptext {
          visibility: visible;
          opacity: 1;
          transform: translateX(-50%) translateY(-5px);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          width: 100%;
        }

        .footer-easter-egg {
          margin-bottom: 2rem;
          font-family: monospace;
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }

        .footer-easter-egg:hover {
          opacity: 1;
        }

        .code-comment {
          color: rgba(255, 255, 255, 0.8);
          font-style: italic;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.8);
        }

        .small-print {
          font-size: 0.9rem;
          margin-top: 0.5rem;
          opacity: 0.8;
        }

        .really-small-print {
          font-size: 0.8rem;
          margin-top: 0.2rem;
          opacity: 0.7;
        }

        .bounce-on-hover {
          transition: transform 0.2s ease;
        }

        .bounce-on-hover:hover {
          transform: scale(1.05);
        }

        @media (min-width: 768px) {
          .footer-main {
            align-items: center;
          }

          .social-section {
            text-align: center;
          }

          .social-links {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .fun-footer {
            padding: 2rem 1rem;
          }

          .footer-main {
            flex-direction: column;
          }

          .footer-message,
          .social-section {
            width: 100%;
            text-align: center;
          }

          .typing-effect {
            font-size: 1.4rem;
          }

          .footer-tagline {
            font-size: 1rem;
          }

          .social-icon {
            padding: 0.5rem 0.8rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
