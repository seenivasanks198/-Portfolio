import React from 'react';
import { Card, Tag, Timeline, Badge } from 'antd';
import {
  UserOutlined,
  ReadOutlined,
  GlobalOutlined,
  SmileOutlined,
  CheckCircleOutlined,
  TrophyOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData } = usePortfolioStore();

  return (
    <section id="about" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.about')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.aboutTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Engaging, recruiter-friendly narrative and career background
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Story & Career Summary */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <UserOutlined style={{ fontSize: '22px', color: 'var(--accent-primary)' }} />
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Personal Story
                </h3>
              </div>
              {cmsData.about.story.map((paragraph, idx) => (
                <p key={idx} style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '12px' }}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Recruiter Career Summary Card */}
            <div className="glass-card" style={{ padding: '28px', borderLeft: '4px solid var(--accent-primary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <TrophyOutlined style={{ fontSize: '22px', color: '#f59e0b' }} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Recruiter Summary
                </h3>
              </div>
              <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'var(--text-primary)', fontWeight: 500 }}>
                {cmsData.careerSummary}
              </p>
            </div>

            {/* Hobbies & Declaration */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', fontSize: '15px' }}>
                Personal Hobbies & Interests
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                {cmsData.about.hobbies.map((hobby, i) => (
                  <Tag key={i} color="default" style={{ padding: '4px 10px', borderRadius: '6px' }}>
                    {hobby}
                  </Tag>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontStyle: 'italic', borderTop: '1px solid var(--border-color)', paddingTop: '12px' }}>
                <strong>Declaration:</strong> "{cmsData.about.declaration}"
              </div>
            </div>
          </div>

          {/* Education & Languages & Soft Skills */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Education Timeline Card */}
            <div className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <ReadOutlined style={{ fontSize: '22px', color: 'var(--accent-primary)' }} />
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Education Qualification
                </h3>
              </div>

              <Timeline
                items={cmsData.education.map((edu) => ({
                  color: 'blue',
                  children: (
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text-primary)' }}>
                        {edu.degree}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--accent-primary)', fontWeight: 600 }}>
                        {edu.institution} ({edu.period})
                      </div>
                      <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                        Grade Score: <strong>{edu.percentageGrade}</strong> | {edu.location}
                      </div>
                    </div>
                  )
                }))}
              />
            </div>

            {/* Languages Known Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <GlobalOutlined style={{ fontSize: '20px', color: 'var(--accent-primary)' }} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Languages Known
                </h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                {cmsData.languages.map((lang, idx) => (
                  <div key={idx} style={{ padding: '12px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>{lang.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-primary)' }}>{lang.proficiency}</div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                      {lang.capabilities.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <SmileOutlined style={{ fontSize: '20px', color: 'var(--accent-primary)' }} />
                <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Soft Skills
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {cmsData.softSkills.map((ss, i) => (
                  <Tag key={i} color="cyan" style={{ padding: '6px 12px', borderRadius: '12px', fontSize: '12px' }}>
                    <CheckCircleOutlined style={{ marginRight: '4px' }} />
                    {ss}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
