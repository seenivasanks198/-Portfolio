import React, { useState } from 'react';
import { Button, Drawer, Space, Tooltip } from 'antd';
import {
  CodeOutlined,
  MenuOutlined,
  SearchOutlined,
  FileTextOutlined,
  ThunderboltOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageSwitcher } from './LanguageSwitcher';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const { setCommandPaletteOpen, setCmsModalOpen } = usePortfolioStore();
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'skills', label: t('nav.skills') },
    { id: 'experience', label: t('nav.experience') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'services', label: t('nav.services') },
    { id: 'contact', label: t('nav.contact') }
  ];

  const handleScrollTo = (id: string) => {
    setMobileDrawerOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        width: '100%',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="portfolio-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
        {/* Brand Logo */}
        <div
          onClick={() => handleScrollTo('hero')}
          style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              backgroundColor: 'var(--accent-primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '18px',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            KS
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: '16px', lineHeight: 1.2, color: 'var(--text-primary)' }}>
              K. SEENIVASAN
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 500 }}>
              Software Engineer | React & React Native
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'color 0.2s ease',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-primary)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Utility Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Tooltip title="Command Palette (Ctrl+K)">
            <Button
              type="text"
              icon={<SearchOutlined />}
              onClick={() => setCommandPaletteOpen(true)}
              style={{
                border: '1px solid var(--border-color)',
                backgroundColor: 'var(--bg-tertiary)',
                color: 'var(--text-primary)'
              }}
            >
              <span className="kbd-shortcut" style={{ fontSize: '11px', color: 'var(--text-muted)', marginLeft: '4px' }}>
                ⌘K
              </span>
            </Button>
          </Tooltip>

          <Tooltip title="View Structured Resume CMS JSON">
            <Button
              type="dashed"
              icon={<CodeOutlined style={{ color: 'var(--accent-primary)' }} />}
              onClick={() => setCmsModalOpen(true)}
              style={{
                borderColor: 'var(--accent-primary)',
                color: 'var(--text-primary)'
              }}
            >
              CMS JSON
            </Button>
          </Tooltip>

          <LanguageSwitcher />
          <ThemeToggle />

          <Button
            type="primary"
            icon={<ThunderboltOutlined />}
            onClick={() => handleScrollTo('contact')}
            style={{ fontWeight: 600 }}
          >
            {t('nav.hireMe')}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            className="mobile-menu-btn"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setMobileDrawerOpen(true)}
            style={{ display: 'none' }}
          />
        </div>
      </div>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation & Controls"
        placement="right"
        onClose={() => setMobileDrawerOpen(false)}
        open={mobileDrawerOpen}
        width={280}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              style={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--text-primary)',
                padding: '8px 0',
                borderBottom: '1px solid var(--border-color)'
              }}
            >
              {link.label}
            </a>
          ))}

          <Button
            type="primary"
            icon={<CodeOutlined />}
            onClick={() => {
              setMobileDrawerOpen(false);
              setCmsModalOpen(true);
            }}
            block
          >
            Inspect Structured Resume JSON
          </Button>
        </div>
      </Drawer>

      <style>{`
        @media (max-width: 992px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: inline-flex !important;
          }
          .kbd-shortcut {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};
