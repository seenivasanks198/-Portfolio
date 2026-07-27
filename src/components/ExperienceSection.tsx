import React from 'react';
import { Tag, Badge } from 'antd';
import {
  ThunderboltOutlined,
  CheckOutlined,
  TrophyOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  BankOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const ExperienceSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData } = usePortfolioStore();

  return (
    <section id="experience" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.experience')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.experienceTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Software Engineering track record, achievements, best practices, and impact
          </p>
        </div>

        {/* Experience List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {cmsData.experience.map((exp) => (
            <div key={exp.id} className="glass-card" style={{ padding: '36px', position: 'relative' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                    <h3 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {exp.role}
                    </h3>
                    <Tag color="green" style={{ fontWeight: 600 }}>
                      Present / Active Role
                    </Tag>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <BankOutlined />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <Tag icon={<CalendarOutlined />} color="blue" style={{ padding: '6px 12px', fontSize: '13px', fontWeight: 600 }}>
                    {exp.period}
                  </Tag>
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                    <EnvironmentOutlined /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Role Summary */}
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '24px', backgroundColor: 'var(--bg-tertiary)', padding: '16px', borderRadius: '8px' }}>
                {exp.summary}
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '24px' }}>
                {/* Responsibilities */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ThunderboltOutlined style={{ color: 'var(--accent-primary)' }} />
                    Key Responsibilities
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} style={{ marginBottom: '8px' }}>{resp}</li>
                    ))}
                  </ul>
                </div>

                {/* Achievements & Impact */}
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <TrophyOutlined style={{ color: '#f59e0b' }} />
                    Measurable Impact & Achievements
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} style={{ marginBottom: '8px', fontWeight: 500 }}>{ach}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '16px', padding: '12px 16px', backgroundColor: 'var(--accent-subtle)', borderRadius: '8px', borderLeft: '3px solid var(--accent-primary)' }}>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
                      Measured Business Impact
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600, marginTop: '2px' }}>
                      {exp.impact}
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies & Best Practices Tags */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Tech Stack:</span>
                  {exp.technologies.map((tech, i) => (
                    <Tag key={i} color="blue" style={{ borderRadius: '12px' }}>
                      {tech}
                    </Tag>
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>Engineering Practices:</span>
                  {exp.bestPractices.map((bp, i) => (
                    <Tag key={i} color="purple" style={{ borderRadius: '12px' }}>
                      <CheckOutlined style={{ marginRight: '4px' }} />
                      {bp}
                    </Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
