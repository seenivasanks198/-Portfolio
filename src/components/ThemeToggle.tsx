import React from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { SunOutlined, MoonOutlined, DesktopOutlined } from '@ant-design/icons';
import { useThemeStore } from '../store/useThemeStore';
import { ThemeMode } from '../types';

export const ThemeToggle: React.FC = () => {
  const { theme, resolvedTheme, setTheme } = useThemeStore();

  const items: MenuProps['items'] = [
    {
      key: 'light',
      label: 'Light Theme',
      icon: <SunOutlined />,
      onClick: () => setTheme('light')
    },
    {
      key: 'dark',
      label: 'Dark Theme',
      icon: <MoonOutlined />,
      onClick: () => setTheme('dark')
    },
    {
      key: 'system',
      label: 'System Default',
      icon: <DesktopOutlined />,
      onClick: () => setTheme('system')
    }
  ];

  return (
    <Dropdown menu={{ items, selectedKeys: [theme] }} placement="bottomRight" trigger={['click']}>
      <Button
        type="text"
        shape="circle"
        icon={resolvedTheme === 'dark' ? <MoonOutlined style={{ color: '#38bdf8' }} /> : <SunOutlined style={{ color: '#0284c7' }} />}
        title="Switch Theme"
        style={{
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-tertiary)'
        }}
      />
    </Dropdown>
  );
};
