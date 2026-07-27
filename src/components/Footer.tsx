import React from 'react';
import { Button, Divider } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
  CodeOutlined,
  EnvironmentOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData, setCmsModalOpen } = usePortfolioStore();

  const handleScrollTo = (id: string) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 0 30px 0',
        marginTop: '80px'
      }}
    >
      <div className="portfolio-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}
        >
          {/* Brand & Bio Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--accent-primary)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700
                }}
              >
                KS
              </div>
              <span style={{ fontWeight: 700, fontSize: '18px', color: 'var(--text-primary)' }}>
                {cmsData.hero.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6, marginBottom: '20px' }}>
              {cmsData.hero.tagline}
            </p>
            <Button
              type="dashed"
              icon={<CodeOutlined />}
              onClick={() => setCmsModalOpen(true)}
              style={{ borderColor: 'var(--accent-primary)' }}
            >
              Open Headless CMS Data (JSON)
            </Button>
          </div>

          {/* Quick Navigation Column */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 600 }}>Quick Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <a onClick={() => handleScrollTo('hero')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                Home & Hero
              </a>
              <a onClick={() => handleScrollTo('about')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                About Me & Career Story
              </a>
              <a onClick={() => handleScrollTo('skills')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                Technical Skills Stack
              </a>
              <a onClick={() => handleScrollTo('experience')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                Work Experience (MitrahSoft)
              </a>
              <a onClick={() => handleScrollTo('projects')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                Featured Engineering Projects
              </a>
              <a onClick={() => handleScrollTo('contact')} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}>
                Get In Touch
              </a>
            </div>
          </div>

          {/* Contact & Location Column */}
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '16px', fontWeight: 600 }}>Contact Information</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MailOutlined style={{ color: 'var(--accent-primary)' }} />
                <a href={`mailto:${cmsData.about.email}`} style={{ color: 'var(--text-secondary)' }}>
                  {cmsData.about.email}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <PhoneOutlined style={{ color: 'var(--accent-primary)' }} />
                <a href={`tel:${cmsData.about.phone}`} style={{ color: 'var(--text-secondary)' }}>
                  {cmsData.about.phone}
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <EnvironmentOutlined style={{ color: 'var(--accent-primary)' }} />
                <span>{cmsData.about.location}</span>
              </div>
            </div>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
              <Button
                type="text"
                shape="circle"
                icon={<GithubOutlined style={{ fontSize: '18px' }} />}
                href={cmsData.socials.github}
                target="_blank"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              />
              <Button
                type="text"
                shape="circle"
                icon={<LinkedinOutlined style={{ fontSize: '18px', color: '#0077b5' }} />}
                href={cmsData.socials.linkedin}
                target="_blank"
                style={{ backgroundColor: 'var(--bg-tertiary)' }}
              />
            </div>
          </div>
        </div>

        <Divider style={{ borderColor: 'var(--border-color)', margin: '24px 0' }} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {new Date().getFullYear()} {cmsData.hero.name}. {t('footer.rights')}
          </div>
          <div>{t('footer.builtWith')}</div>
        </div>
      </div>
    </footer>
  );
};
