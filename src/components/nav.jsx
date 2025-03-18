import { useLanguage } from '../utils/LanguageContext';

const Nav = () => {
  const { t } = useLanguage();

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <ul className="nav-list">
        <li><a href="#home" className="nav-link" aria-current="page">{t('header.home')}</a></li>
        <li><a href="#services" className="nav-link">{t('header.services')}</a></li>
        <li><a href="#about" className="nav-link">{t('header.about')}</a></li>
        <li><a href="#analytics" className="nav-link">{t('header.analytics')}</a></li>
        <li><a href="#contact" className="nav-link">{t('header.contact')}</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
