import React, { useEffect } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useThemeStore } from './store/useThemeStore';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';

import './config/i18n';
import './styles/theme.css';

export default function App() {
  const { resolvedTheme } = useThemeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme);
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [resolvedTheme]);

  return (
    <ConfigProvider
      theme={{
        algorithm: resolvedTheme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#0284c7',
          borderRadius: 8,
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
        }
      }}
    >
      <ErrorBoundary>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </ErrorBoundary>
    </ConfigProvider>
  );
}
