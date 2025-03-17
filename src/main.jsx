import React from 'react';
import ReactDOM from 'react-dom/client';
import ReactGA from 'react-ga4';
import App from './App.jsx';

// Initialize Google Analytics
ReactGA.initialize('G-93PFRZCS1G');

// Track initial pageview
ReactGA.send({ hitType: "pageview", page: window.location.pathname });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
