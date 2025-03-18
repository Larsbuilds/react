import Nav from "./nav";
import { useTheme } from "../src/utils/ThemeContext";
import { useLanguage } from "../src/utils/LanguageContext";
import { FaSun, FaMoon } from 'react-icons/fa';
import LanguageSelector from './LanguageSelector';

const Header = ({ className }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={className} role="banner">
      <div className="header-content">
        <h1>
          <button 
            onClick={scrollToTop} 
            className="logo-text"
            aria-label={t('header.returnToTop')}
            title={t('header.logoTitle')}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'pointer'
            }}
          >
            Lars Builds React
          </button>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSelector />
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={isDark ? t('header.switchTheme.light') : t('header.switchTheme.dark')}
            title={isDark ? "Let there be light! ☀️" : "Embrace the darkness! 🌙"}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
