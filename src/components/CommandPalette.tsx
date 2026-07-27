import React, { useEffect, useState } from 'react';
import { Modal, Input, List, Tag } from 'antd';
import {
  SearchOutlined,
  UserOutlined,
  ThunderboltOutlined,
  ProjectOutlined,
  CodeOutlined,
  MailOutlined,
  SunOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { useThemeStore } from '../store/useThemeStore';

export const CommandPalette: React.FC = () => {
  const { isCommandPaletteOpen, setCommandPaletteOpen, setCmsModalOpen } = usePortfolioStore();
  const { toggleTheme } = useThemeStore();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(!isCommandPaletteOpen);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCommandPaletteOpen, setCommandPaletteOpen]);

  const actions = [
    {
      id: 'sec-hero',
      title: 'Go to Hero / Summary',
      category: 'Navigation',
      icon: <ThunderboltOutlined style={{ color: '#0284c7' }} />,
      action: () => {
        document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'sec-about',
      title: 'Go to About Me',
      category: 'Navigation',
      icon: <UserOutlined style={{ color: '#10b981' }} />,
      action: () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'sec-skills',
      title: 'Go to Technical Skills',
      category: 'Navigation',
      icon: <CodeOutlined style={{ color: '#f59e0b' }} />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'sec-experience',
      title: 'Go to Work Experience (MitrahSoft)',
      category: 'Navigation',
      icon: <ThunderboltOutlined style={{ color: '#8b5cf6' }} />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'sec-projects',
      title: 'Go to Featured Projects',
      category: 'Navigation',
      icon: <ProjectOutlined style={{ color: '#ec4899' }} />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'sec-contact',
      title: 'Go to Contact Form',
      category: 'Navigation',
      icon: <MailOutlined style={{ color: '#06b6d4' }} />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setCommandPaletteOpen(false);
      }
    },
    {
      id: 'tool-cms',
      title: 'Inspect Full Resume CMS Dataset (JSON)',
      category: 'Recruiter Tool',
      icon: <CodeOutlined style={{ color: '#3b82f6' }} />,
      action: () => {
        setCommandPaletteOpen(false);
        setCmsModalOpen(true);
      }
    },
    {
      id: 'tool-theme',
      title: 'Toggle Light / Dark Theme',
      category: 'Preferences',
      icon: <SunOutlined style={{ color: '#eab308' }} />,
      action: () => {
        toggleTheme();
        setCommandPaletteOpen(false);
      }
    }
  ];

  const filtered = actions.filter((act) =>
    act.title.toLowerCase().includes(query.toLowerCase()) || act.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Modal
      open={isCommandPaletteOpen}
      onCancel={() => setCommandPaletteOpen(false)}
      footer={null}
      title={null}
      closable={false}
      width={600}
      style={{ top: 100 }}
      bodyStyle={{ padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px' }}
    >
      <Input
        prefix={<SearchOutlined style={{ color: 'var(--text-muted)', fontSize: '18px' }} />}
        placeholder="Type a command or search section (Ctrl+K)..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        size="large"
        autoFocus
        style={{
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-tertiary)',
          color: 'var(--text-primary)',
          borderRadius: '8px',
          marginBottom: '16px'
        }}
      />

      <List
        dataSource={filtered}
        renderItem={(item) => (
          <List.Item
            onClick={item.action}
            style={{
              padding: '12px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '1px solid var(--border-color)'
            }}
            className="command-item-hover"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              <span style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{item.title}</span>
            </div>
            <Tag color="blue">{item.category}</Tag>
          </List.Item>
        )}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '12px', fontSize: '11px', color: 'var(--text-muted)' }}>
        <span>Navigate: ESC to exit</span>
        <span>K. Seenivasan Portfolio Command Palette</span>
      </div>
    </Modal>
  );
};
