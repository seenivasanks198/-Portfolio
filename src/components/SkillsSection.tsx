import React, { useState } from 'react';
import { Tag, Progress, Input } from 'antd';
import {
  CodeOutlined,
  MobileOutlined,
  SlidersOutlined,
  DatabaseOutlined,
  ToolOutlined,
  SearchOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const SkillsSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData } = usePortfolioStore();
  const [filterKeyword, setFilterKeyword] = useState('');

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend':
        return <CodeOutlined style={{ color: '#0284c7' }} />;
      case 'Mobile':
        return <MobileOutlined style={{ color: '#10b981' }} />;
      case 'State Management':
        return <SlidersOutlined style={{ color: '#8b5cf6' }} />;
      case 'Backend & API':
        return <DatabaseOutlined style={{ color: '#f59e0b' }} />;
      default:
        return <ToolOutlined style={{ color: '#ec4899' }} />;
    }
  };

  return (
    <section id="skills" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="portfolio-container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.skills')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.skillsTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Categorized technical stack with proficiency, experience years, and ATS optimization keywords
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          {cmsData.technicalSkills.map((cat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <span style={{ fontSize: '24px' }}>{getCategoryIcon(cat.category)}</span>
                <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                  {cat.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
                        {skill.name}
                        {skill.tag && (
                          <Tag color="blue" style={{ marginLeft: '8px', fontSize: '10px' }}>
                            {skill.tag}
                          </Tag>
                        )}
                      </span>
                      <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                        {skill.experienceYears} Yrs ({skill.level}%)
                      </span>
                    </div>
                    <Progress
                      percent={skill.level}
                      strokeColor={{
                        '0%': 'var(--accent-primary)',
                        '100%': '#38bdf8'
                      }}
                      showInfo={false}
                      size="small"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ATS Recruiter Keywords Cloud */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                ATS Recruiter Keywords Cloud
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
                Searchable keywords extracted for Applicant Tracking Systems
              </p>
            </div>
            <Input
              prefix={<SearchOutlined style={{ color: 'var(--text-muted)' }} />}
              placeholder="Filter keywords..."
              value={filterKeyword}
              onChange={(e) => setFilterKeyword(e.target.value)}
              style={{ width: '240px', borderRadius: '8px' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {cmsData.recruiterKeywords
              .filter((kw) => kw.toLowerCase().includes(filterKeyword.toLowerCase()))
              .map((kw, i) => (
                <Tag
                  key={i}
                  color="blue"
                  style={{
                    padding: '6px 14px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: 500,
                    margin: '2px'
                  }}
                >
                  {kw}
                </Tag>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
