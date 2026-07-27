import React from 'react';
import { Tag, Button } from 'antd';
import {
  MobileOutlined,
  DesktopOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  RocketOutlined
} from '@ant-design/icons';
import { ProjectItem } from '../types';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <div>
        {/* Header Tags */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <Tag
            icon={project.category === 'Mobile' ? <MobileOutlined /> : <DesktopOutlined />}
            color={project.category === 'Mobile' ? 'green' : 'blue'}
            style={{ fontWeight: 600, padding: '4px 10px', borderRadius: '12px' }}
          >
            {project.category} App
          </Tag>

          {project.badge && (
            <Tag color="gold" icon={<RocketOutlined />}>
              {project.badge}
            </Tag>
          )}
        </div>

        {/* Title & Date */}
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '14px', fontWeight: 500 }}>
          {project.period}
        </div>

        {/* Short Description */}
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
          {project.shortDescription}
        </p>

        {/* Key Feature Highlight */}
        <div style={{ backgroundColor: 'var(--bg-tertiary)', padding: '12px', borderRadius: '8px', marginBottom: '20px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--accent-primary)', textTransform: 'uppercase', marginBottom: '4px' }}>
            Top Feature
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-primary)', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
            <CheckCircleOutlined style={{ color: '#10b981', marginTop: '3px' }} />
            <span>{project.features[0]}</span>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
          {project.technologies.map((tech, idx) => (
            <Tag key={idx} color="default" style={{ borderRadius: '6px', fontSize: '12px', margin: 0 }}>
              {tech}
            </Tag>
          ))}
        </div>
      </div>

      {/* Footer Action */}
      <Button
        type="primary"
        ghost
        icon={<ArrowRightOutlined />}
        onClick={() => onSelect(project)}
        block
        style={{ borderRadius: '8px', fontWeight: 600 }}
      >
        View Full Case Study & Resume Bullets
      </Button>
    </div>
  );
};
