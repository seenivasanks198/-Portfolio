import React from 'react';
import { Tag } from 'antd';
import {
  MobileOutlined,
  DesktopOutlined,
  ThunderboltOutlined,
  ApiOutlined,
  AndroidOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

export const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: 'React Native Mobile App Development',
      icon: <MobileOutlined style={{ fontSize: '32px', color: '#10b981' }} />,
      description: 'Building fluid, native-feeling mobile applications for Android and iOS using React Native, React Navigation, and custom UI components.'
    },
    {
      title: 'React.js Web Engineering',
      icon: <DesktopOutlined style={{ fontSize: '32px', color: '#0284c7' }} />,
      description: 'Architecting fast, responsive, and accessible web applications using modern React.js, TypeScript, and state management frameworks.'
    },
    {
      title: 'FlatList & List Performance Optimization',
      icon: <ThunderboltOutlined style={{ fontSize: '32px', color: '#f59e0b' }} />,
      description: 'Tuning mobile media lists, virtualized FlatLists, memoization, and image caching pipelines to achieve constant 60 FPS scrolling.'
    },
    {
      title: 'REST API Architecture & State Flow',
      icon: <ApiOutlined style={{ fontSize: '32px', color: '#8b5cf6' }} />,
      description: 'Designing clean API integration layers, Axios interceptors, offline storage sync, and predictable Zustand/Redux state architecture.'
    },
    {
      title: 'Android App Release & Maintenance',
      icon: <AndroidOutlined style={{ fontSize: '32px', color: '#3b82f6' }} />,
      description: 'Managing end-to-end Android build pipelines, APK generation, bug triage, and Google Play Store application publishing.'
    }
  ];

  return (
    <section id="services" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="portfolio-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.services')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.servicesTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Core engineering capabilities delivered for clients, products, and enterprises
          </p>
        </div>

        {/* Services Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {services.map((serv, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ marginBottom: '20px' }}>{serv.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                {serv.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                {serv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
