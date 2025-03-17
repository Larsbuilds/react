import ReactGA from 'react-ga4';

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