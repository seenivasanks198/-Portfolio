import React, { useState } from 'react';
import { Tag, Input, Modal, Button, Segmented, Card } from 'antd';
import {
  SearchOutlined,
  ProjectOutlined,
  CheckOutlined,
  BulbOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  RocketOutlined,
  CloseOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';
import { ProjectCard } from './ProjectCard';
import { ProjectItem } from '../types';

export const ProjectsSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData, searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedProject, setSelectedProject } = usePortfolioStore();

  const categories = ['All', 'Mobile', 'Web'];

  const filteredProjects = cmsData.projects.filter((proj) => {
    const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="portfolio-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.projects')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.projectsTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Production-grade mobile and web applications with detailed architectural breakdown
          </p>
        </div>

        {/* Filters Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '40px',
            backgroundColor: 'var(--bg-secondary)',
            padding: '16px',
            borderRadius: '12px',
            border: '1px solid var(--border-color)'
          }}
        >
          <Segmented
            options={categories.map((cat) => ({
              label: cat === 'All' ? 'All Projects' : `${cat} Apps`,
              value: cat
            }))}
            value={selectedCategory}
            onChange={(val) => setSelectedCategory(val as string)}
            size="large"
          />

          <Input
            prefix={<SearchOutlined style={{ color: 'var(--text-muted)' }} />}
            placeholder={t('projects.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '300px', borderRadius: '8px' }}
            allowClear
          />
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '28px'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={(p) => setSelectedProject(p)} />
          ))}
        </div>

        {/* Project Case Study Detail Modal */}
        <Modal
          open={!!selectedProject}
          onCancel={() => setSelectedProject(null)}
          footer={null}
          width={800}
          title={null}
          closable={false}
          bodyStyle={{ padding: '0', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', overflow: 'hidden' }}
        >
          {selectedProject && (
            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <Tag color="blue" style={{ marginBottom: '8px', fontWeight: 600 }}>
                    {selectedProject.category} Application
                  </Tag>
                  <h2 style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    {selectedProject.title}
                  </h2>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Period: {selectedProject.period} ({selectedProject.year})
                  </div>
                </div>

                <Button type="text" icon={<CloseOutlined />} onClick={() => setSelectedProject(null)} />
              </div>

              <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '24px' }}>
                {selectedProject.fullDescription}
              </p>

              {/* Features Section */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <RocketOutlined style={{ color: 'var(--accent-primary)' }} />
                  {t('projects.features')}
                </h4>
                <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', fontSize: '14px', lineHeight: 1.6 }}>
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div style={{ marginBottom: '24px', backgroundColor: 'var(--bg-tertiary)', padding: '20px', borderRadius: '12px' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ThunderboltOutlined style={{ color: '#f59e0b' }} />
                  {t('projects.challenges')}
                </h4>
                {selectedProject.challenges.map((item, idx) => (
                  <div key={idx} style={{ marginBottom: '12px' }}>
                    <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '14px' }}>
                      Challenge: {item.challenge}
                    </div>
                    <div style={{ color: 'var(--accent-primary)', fontSize: '13px', marginTop: '4px', fontWeight: 500 }}>
                      Solution: {item.solution}
                    </div>
                  </div>
                ))}
              </div>

              {/* Resume Bullet Point Improvements */}
              <div style={{ marginBottom: '24px', backgroundColor: 'var(--accent-subtle)', padding: '20px', borderRadius: '12px', borderLeft: '4px solid var(--accent-primary)' }}>
                <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <TrophyOutlined style={{ color: 'var(--accent-primary)' }} />
                  {t('projects.improvements')}
                </h4>
                <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-primary)', fontSize: '14px', lineHeight: 1.6, fontWeight: 500 }}>
                  {selectedProject.resumeBulletImprovements.map((bullet, idx) => (
                    <li key={idx} style={{ marginBottom: '6px' }}>{bullet}</li>
                  ))}
                </ul>
              </div>

              {/* What I Learned & Business Value */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <BulbOutlined style={{ color: '#8b5cf6' }} />
                    {t('projects.learned')}
                  </h4>
                  <ul style={{ paddingLeft: '20px', margin: 0, color: 'var(--text-secondary)', fontSize: '13px' }}>
                    {selectedProject.whatILearned.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <TrophyOutlined style={{ color: '#10b981' }} />
                    {t('projects.value')}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
                    {selectedProject.businessValue}
                  </p>
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <Button type="primary" onClick={() => setSelectedProject(null)}>
                  {t('projects.closeModal')}
                </Button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};
