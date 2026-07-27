import React from 'react';
import { Button, Tag, Card } from 'antd';
import {
  CodeOutlined,
  ThunderboltOutlined,
  DownloadOutlined,
  CheckCircleOutlined,
  ProjectOutlined,
  MobileOutlined,
  CalendarOutlined,
  StarOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData, setCmsModalOpen } = usePortfolioStore();

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" style={{ padding: '80px 0 60px 0', position: 'relative' }}>
      <div className="portfolio-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', alignItems: 'center' }}>
          {/* Left Column: Text & CTAs */}
          <div>
            <Tag
              color="blue"
              icon={<CheckCircleOutlined />}
              style={{
                padding: '6px 14px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: 600,
                marginBottom: '20px',
                border: '1px solid var(--accent-primary)',
                backgroundColor: 'var(--accent-subtle)',
                color: 'var(--accent-primary)'
              }}
            >
              {t('hero.availableBadge')}
            </Tag>

            <h1
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: 'var(--text-primary)',
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              {cmsData.hero.name}
            </h1>

            <h2
              style={{
                fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                fontWeight: 600,
                color: 'var(--accent-primary)',
                marginBottom: '20px'
              }}
            >
              {cmsData.hero.professionalTitle}
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                marginBottom: '16px'
              }}
            >
              {cmsData.hero.introduction[0]}
            </p>

            <p
              style={{
                fontSize: '15px',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                marginBottom: '32px'
              }}
            >
              {cmsData.hero.introduction[1]}
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
              <Button
                type="primary"
                size="large"
                icon={<ProjectOutlined />}
                onClick={() => handleScrollTo('projects')}
                style={{ borderRadius: '10px', fontWeight: 600, padding: '0 28px', height: '48px' }}
              >
                {t('hero.viewProjects')}
              </Button>

              <Button
                size="large"
                icon={<CodeOutlined />}
                onClick={() => setCmsModalOpen(true)}
                style={{
                  borderRadius: '10px',
                  fontWeight: 600,
                  height: '48px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)'
                }}
              >
                {t('hero.exploreCms')}
              </Button>
            </div>

            {/* Key Strengths */}
            <div>
              <div style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.05em', marginBottom: '12px' }}>
                {t('hero.keyStrengthsTitle')}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cmsData.hero.keyStrengths.map((strength, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-primary)' }}>
                    <ThunderboltOutlined style={{ color: 'var(--accent-primary)', fontSize: '16px' }} />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Stats & Highlights Cards */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {/* Stat 1 */}
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <CalendarOutlined style={{ fontSize: '28px', color: 'var(--accent-primary)', marginBottom: '8px' }} />
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {cmsData.statistics.yearsExperience}+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>Years Professional Exp.</div>
              </div>

              {/* Stat 2 */}
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <MobileOutlined style={{ fontSize: '28px', color: '#10b981', marginBottom: '8px' }} />
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {cmsData.statistics.applicationsDeployed}+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>Mobile & Web Apps</div>
              </div>

              {/* Stat 3 */}
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <ProjectOutlined style={{ fontSize: '28px', color: '#f59e0b', marginBottom: '8px' }} />
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {cmsData.statistics.completedProjects}+
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>Completed Projects</div>
              </div>

              {/* Stat 4 */}
              <div className="glass-card" style={{ padding: '24px', textAlign: 'center' }}>
                <StarOutlined style={{ fontSize: '28px', color: '#8b5cf6', marginBottom: '8px' }} />
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-primary)' }}>
                  100%
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>MitrahSoft Delivery Rate</div>
              </div>
            </div>

            {/* Current Position Banner */}
            <div className="glass-card" style={{ marginTop: '20px', padding: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
                Current Role
              </div>
              <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)' }}>
                Software Engineer @ MitrahSoft Software Solutions
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                09/2022 – Present | Kovilpatti, Tamil Nadu
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
