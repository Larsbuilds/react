import { useLanguage } from '../src/utils/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage, languages } = useLanguage();

  return (
    <div className="language-selector">
      <FaGlobe className="globe-icon" />
      <select
        value={currentLanguage}
        onChange={(e) => changeLanguage(e.target.value)}
        className="language-select"
        aria-label="Select language"
      >
        {Object.entries(languages).map(([code, lang]) => (
          <option key={code} value={code}>
            {lang.name}
          </option>
        ))}
      </select>

      <style jsx>{`
        .language-selector {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          position: relative;
        }

        .globe-icon {
          color: var(--text-secondary);
          font-size: 1.2rem;
        }

        .language-select {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.9rem;
          padding: 0.5rem;
          appearance: none;
          outline: none;
          transition: color var(--transition-speed) ease;
        }

        .language-select:hover {
          color: var(--accent-color);
        }

        .language-select option {
          background-color: var(--bg-primary);
          color: var(--text-primary);
        }

        /* Dark mode styles */
        :global(.dark-mode) .language-select option {
          background-color: var(--bg-secondary);
        }
      `}</style>
    </div>
  );
};

export default LanguageSelector; 