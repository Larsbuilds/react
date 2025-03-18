import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const languages = {
  en: {
    name: 'English',
    code: 'en'
  },
  de: {
    name: 'Deutsch',
    code: 'de'
  },
  uk: {
    name: 'Українська',
    code: 'uk'
  }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Check local storage for saved language preference
    const saved = localStorage.getItem('language');
    if (saved && languages[saved]) {
      return saved;
    }
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage]);

  const changeLanguage = (langCode) => {
    if (languages[langCode]) {
      setCurrentLanguage(langCode);
    }
  };

  const t = (key) => {
    // Split the key by dots to access nested properties
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    // Traverse the translations object using the key path
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        console.warn(`Translation missing for key: ${key} in language: ${currentLanguage}`);
        // Fallback to English if translation is missing
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object') {
            value = value[k];
          } else {
            return key; // Return the key if even English translation is missing
          }
        }
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 