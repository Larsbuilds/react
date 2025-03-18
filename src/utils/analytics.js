import ReactGA from 'react-ga4';
import { useState, useEffect } from 'react';

// User Engagement Events
export const trackButtonClick = (buttonName, location) => {
  ReactGA.event({
    category: 'User Interaction',
    action: 'Button Click',
    label: buttonName,
    location: location
  });
};

export const trackSectionView = (sectionName) => {
  ReactGA.event({
    category: 'Content',
    action: 'Section View',
    label: sectionName
  });
};

export const trackSocialLink = (platform) => {
  ReactGA.event({
    category: 'Social',
    action: 'Social Link Click',
    label: platform
  });
};

// Navigation Events
export const trackNavigation = (from, to) => {
  ReactGA.event({
    category: 'Navigation',
    action: 'Internal Navigation',
    label: `${from} to ${to}`
  });
};

// User Engagement Metrics
export const trackTimeSpent = (section, timeInSeconds) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Time Spent',
    label: section,
    value: Math.round(timeInSeconds) // GA4 requires integer values
  });
};

// Scroll Depth Tracking
export const trackScrollDepth = (depth) => {
  ReactGA.event({
    category: 'Engagement',
    action: 'Scroll Depth',
    label: `${depth}%`
  });
};

// Error Tracking
export const trackError = (errorType, errorMessage) => {
  ReactGA.event({
    category: 'Error',
    action: errorType,
    label: errorMessage
  });
};

// Feature Usage
export const trackFeatureUsage = (featureName, action) => {
  ReactGA.event({
    category: 'Feature',
    action: action,
    label: featureName
  });
};

// Custom Events
export const trackCustomEvent = (category, action, label, value) => {
  ReactGA.event({
    category,
    action,
    label,
    value
  });
};

// Scroll Tracking Hook
export const useScrollTracking = () => {
  const [lastTrackedSection, setLastTrackedSection] = useState('');
  const [sectionStartTime, setSectionStartTime] = useState(Date.now());

  useEffect(() => {
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
}; 