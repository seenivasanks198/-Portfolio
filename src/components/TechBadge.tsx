import React from 'react';
import { Tag } from 'antd';

interface TechBadgeProps {
  name: string;
  color?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  active?: boolean;
}

export const TechBadge: React.FC<TechBadgeProps> = ({
  name,
  color,
  icon,
  onClick,
  active = false
}) => {
  return (
    <Tag
      icon={icon}
      onClick={onClick}
      style={{
        padding: '4px 12px',
        borderRadius: '16px',
        fontSize: '13px',
        fontWeight: 500,
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.2s ease',
        border: active ? '1px solid var(--accent-primary)' : '1px solid var(--border-color)',
        backgroundColor: active ? 'var(--accent-subtle)' : 'var(--bg-tertiary)',
        color: active ? 'var(--accent-primary)' : 'var(--text-primary)',
        margin: '3px'
      }}
      color={color}
    >
      {name}
    </Tag>
  );
};
