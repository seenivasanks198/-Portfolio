import React from 'react';
import { Button, Dropdown, MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from '../config/i18n';
import { LanguageCode } from '../types';

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (code: LanguageCode, dir: 'ltr' | 'rtl') => {
    i18n.changeLanguage(code);
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', code);
  };

  const currentLang = SUPPORTED_LANGUAGES.find((l) => l.code === i18n.language) || SUPPORTED_LANGUAGES[0];

  const items: MenuProps['items'] = SUPPORTED_LANGUAGES.map((lang) => ({
    key: lang.code,
    label: (
      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span>{lang.flag}</span>
        <span>{lang.nativeName}</span>
        <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>({lang.label})</span>
      </span>
    ),
    onClick: () => handleLanguageChange(lang.code, lang.dir)
  }));

  return (
    <Dropdown menu={{ items, selectedKeys: [i18n.language] }} placement="bottomRight" trigger={['click']}>
      <Button
        type="text"
        style={{
          border: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-tertiary)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-primary)'
        }}
      >
        <GlobalOutlined />
        <span>{currentLang.flag}</span>
        <span style={{ fontSize: '13px', fontWeight: 500 }}>{currentLang.code.toUpperCase()}</span>
      </Button>
    </Dropdown>
  );
};
