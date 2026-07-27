import React from 'react';
import { Tag, Collapse, Rate, Card } from 'antd';
import {
  QuestionCircleOutlined,
  CommentOutlined,
  GithubOutlined,
  CodeOutlined,
  StarOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const FaqSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData } = usePortfolioStore();

  const faqItems = cmsData.faqs.map((faq) => ({
    key: faq.id,
    label: (
      <span style={{ fontWeight: 600, fontSize: '15px', color: 'var(--text-primary)' }}>
        {faq.question}
      </span>
    ),
    children: (
      <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
        {faq.answer}
      </p>
    )
  }));

  return (
    <section id="faqs" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="portfolio-container">
        {/* Section Title */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.faqs')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.faqsTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Insights for Engineering Managers, Recruiters, and Hiring Teams
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          {/* FAQs Accordion */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <QuestionCircleOutlined style={{ fontSize: '22px', color: 'var(--accent-primary)' }} />
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Recruiter FAQs
              </h3>
            </div>
            <Collapse items={faqItems} defaultActiveKey={['faq-1']} style={{ backgroundColor: 'var(--bg-glass)', borderRadius: '12px' }} />
          </div>

          {/* Testimonials */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <CommentOutlined style={{ fontSize: '22px', color: '#10b981' }} />
              <h3 style={{ margin: 0, fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Peer & Lead Recommendations
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cmsData?.testimonials?.map((tst) => (
                <div key={tst.id} className="glass-card" style={{ padding: '24px' }}>
                  <Rate disabled defaultValue={tst.rating} style={{ fontSize: '14px', marginBottom: '12px' }} />
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '16px' }}>
                    "{tst.content}"
                  </p>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-primary)' }}>{tst.author}</div>
                    <div style={{ fontSize: '12px', color: 'var(--accent-primary)' }}>
                      {tst.role} • {tst.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* GitHub Repository Recommendations */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <GithubOutlined style={{ fontSize: '24px', color: 'var(--text-primary)' }} />
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)' }}>
                Recommended GitHub Repositories to Create
              </h3>
              <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-muted)' }}>
                Strategic open-source repositories to showcase specialized engineering expertise
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
            {cmsData.githubRecommendations.map((repo, idx) => (
              <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '8px' }}>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>
                  {repo.repoName}
                </div>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: '8px 0 12px 0', lineHeight: 1.5 }}>
                  {repo.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {repo.suggestedTech.map((tech, i) => (
                    <Tag key={i} color="default" style={{ fontSize: '11px', margin: 0 }}>
                      {tech}
                    </Tag>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
