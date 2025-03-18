import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga4';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { format, subDays } from 'date-fns';
import { useLanguage } from '../utils/LanguageContext';
import { useTheme } from '../utils/ThemeContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

// Generate sample data for demonstration
const generateSampleData = () => {
  const pageViews = Array.from({ length: 30 }, (_, i) => ({
    date: format(subDays(new Date(), 29 - i), 'MMM dd'),
    views: Math.floor(Math.random() * 100) + 20,
  }));

  const events = [
    { name: 'Button Clicks', value: Math.floor(Math.random() * 100) + 50 },
    { name: 'Page Views', value: Math.floor(Math.random() * 200) + 100 },
    { name: 'Social Links', value: Math.floor(Math.random() * 50) + 20 },
    { name: 'Language Changes', value: Math.floor(Math.random() * 30) + 10 },
    { name: 'Theme Toggles', value: Math.floor(Math.random() * 40) + 15 },
  ];

  const userEngagement = Array.from({ length: 30 }, (_, i) => ({
    date: format(subDays(new Date(), 29 - i), 'MMM dd'),
    engagementDuration: Math.floor(Math.random() * 10) + 2,
    sessionDuration: Math.floor(Math.random() * 15) + 5,
  }));

  return { pageViews, events, userEngagement };
};

const AnalyticsDashboard = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [analyticsData, setAnalyticsData] = useState({
    pageViews: [],
    events: [],
    userEngagement: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    // For now, we'll use sample data since GA4 doesn't provide direct client-side access to detailed analytics
    const sampleData = generateSampleData();
    setAnalyticsData({
      ...sampleData,
      loading: false,
      error: null
    });

    // Track dashboard view
    ReactGA.send({ hitType: "pageview", page: "/analytics" });
  }, []);

  if (analyticsData.loading) {
    return <div className="analytics-loading">{t('analytics.loading')}</div>;
  }

  if (analyticsData.error) {
    return <div className="analytics-error">{analyticsData.error}</div>;
  }

  return (
    <div className="analytics-dashboard">
      <h2>{t('analytics.title')}</h2>
      <p className="dashboard-note">{t('analytics.sampleDataNote')}</p>
      
      <div className="analytics-grid">
        {/* Page Views Chart */}
        <div className="analytics-card">
          <h3>{t('analytics.pageViews')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analyticsData.pageViews}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Events Distribution */}
        <div className="analytics-card">
          <h3>{t('analytics.events')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={analyticsData.events}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => 
                  `${name}: ${(percent * 100).toFixed(0)}%`
                }
              >
                {analyticsData.events.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* User Engagement Chart */}
        <div className="analytics-card">
          <h3>{t('analytics.engagement')}</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analyticsData.userEngagement}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="engagementDuration"
                name={t('analytics.engagementDuration')}
                fill="#82ca9d"
              />
              <Bar
                dataKey="sessionDuration"
                name={t('analytics.sessionDuration')}
                fill="#8884d8"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <style jsx>{`
        .analytics-dashboard {
          padding: 2rem;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        .dashboard-note {
          text-align: center;
          color: var(--text-secondary);
          margin: 1rem 0;
          font-style: italic;
        }

        .analytics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .analytics-card {
          background: var(--bg-secondary);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .analytics-card h3 {
          margin-bottom: 1rem;
          color: var(--text-primary);
        }

        .analytics-loading,
        .analytics-error {
          text-align: center;
          padding: 2rem;
          font-size: 1.2rem;
          color: var(--text-primary);
        }

        .analytics-error {
          color: var(--error-color);
        }

        @media (max-width: 768px) {
          .analytics-dashboard {
            padding: 1rem;
          }

          .analytics-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AnalyticsDashboard; 