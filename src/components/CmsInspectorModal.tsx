import React, { useState } from 'react';
import { Drawer, Button, Select, Tooltip, message, Segmented } from 'antd';
import { CopyOutlined, DownloadOutlined, CodeOutlined, CheckOutlined } from '@ant-design/icons';
import { usePortfolioStore } from '../store/usePortfolioStore';

export const CmsInspectorModal: React.FC = () => {
  const { cmsData, isCmsModalOpen, setCmsModalOpen } = usePortfolioStore();
  const [copied, setCopied] = useState(false);
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [format, setFormat] = useState<'json' | 'summary'>('json');

  const getSectionData = () => {
    if (selectedSection === 'all') return cmsData;
    return (cmsData as unknown as Record<string, unknown>)[selectedSection] || {};
  };

  const handleCopy = () => {
    const jsonString = JSON.stringify(getSectionData(), null, 2);
    navigator.clipboard.writeText(jsonString);
    setCopied(true);
    message.success('Structured Resume JSON copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(cmsData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'seenivasan_k_resume_cms_data.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    message.success('Resume CMS JSON downloaded successfully!');
  };

  return (
    <Drawer
      title={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <CodeOutlined style={{ color: 'var(--accent-primary)', fontSize: '20px' }} />
          <div>
            <span style={{ fontWeight: 600 }}>Structured Resume CMS Inspector</span>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 400 }}>
              Live Headless CMS JSON for Recruiter ATS & System Integration
            </div>
          </div>
        </div>
      }
      placement="right"
      width={720}
      onClose={() => setCmsModalOpen(false)}
      open={isCmsModalOpen}
      extra={
        <div style={{ display: 'flex', gap: '8px' }}>
          <Tooltip title="Copy Selected JSON Data">
            <Button icon={copied ? <CheckOutlined /> : <CopyOutlined />} onClick={handleCopy}>
              {copied ? 'Copied' : 'Copy JSON'}
            </Button>
          </Tooltip>
          <Button type="primary" icon={<DownloadOutlined />} onClick={handleDownload}>
            Download .json
          </Button>
        </div>
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--text-secondary)' }}>Section Filter:</span>
            <Select
              defaultValue="all"
              style={{ width: 220 }}
              onChange={(value) => setSelectedSection(value)}
              options={[
                { value: 'all', label: '1-20 Full CMS Dataset' },
                { value: 'hero', label: '1. Hero Section' },
                { value: 'about', label: '2. About Me' },
                { value: 'careerSummary', label: '3. Career Summary' },
                { value: 'technicalSkills', label: '4. Technical Skills' },
                { value: 'projects', label: '5. Projects' },
                { value: 'experience', label: '6. Professional Experience' },
                { value: 'education', label: '7. Education' },
                { value: 'certifications', label: '8. Certifications' },
                { value: 'languages', label: '9. Languages' },
                { value: 'softSkills', label: '10. Soft Skills' },
                { value: 'recruiterKeywords', label: '11. Recruiter Keywords' },
                { value: 'portfolioHighlights', label: '12. Portfolio Highlights' },
                { value: 'githubRecommendations', label: '13. GitHub Recommendations' },
                { value: 'seo', label: '15. SEO Tags' },
                { value: 'socialBio', label: '16. Social Bios' },
                { value: 'statistics', label: '17. Realistic Statistics' },
                { value: 'testimonials', label: '19. Testimonials' }
              ]}
            />
          </div>

          <Segmented
            options={[
              { label: 'Raw JSON', value: 'json' },
              { label: 'ATS Summary', value: 'summary' }
            ]}
            value={format}
            onChange={(val) => setFormat(val as 'json' | 'summary')}
          />
        </div>

        {format === 'json' ? (
          <div
            style={{
              flex: 1,
              backgroundColor: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '16px',
              overflow: 'auto',
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              lineHeight: 1.5,
              color: 'var(--text-primary)'
            }}
          >
            <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
              {JSON.stringify(getSectionData(), null, 2)}
            </pre>
          </div>
        ) : (
          <div
            style={{
              flex: 1,
              overflow: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              padding: '8px'
            }}
          >
            <div className="glass-card" style={{ padding: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent-primary)' }}>Recruiter Quick Profile</h4>
              <p style={{ margin: 0 }}><strong>Name:</strong> {cmsData.hero.name}</p>
              <p style={{ margin: '4px 0 0 0' }}><strong>Title:</strong> {cmsData.hero.professionalTitle}</p>
              <p style={{ margin: '4px 0 0 0' }}><strong>Experience:</strong> {cmsData.statistics.yearsExperience}+ Years (MitrahSoft Software Solutions)</p>
              <p style={{ margin: '4px 0 0 0' }}><strong>Core Tech:</strong> React.js, React Native, TypeScript, FlatList Optimization, REST API Architecture</p>
            </div>

            <div className="glass-card" style={{ padding: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent-primary)' }}>ATS Optimized Keywords</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '8px' }}>
                {cmsData.recruiterKeywords.map((kw, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: 'var(--accent-subtle)',
                      color: 'var(--accent-primary)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '16px' }}>
              <h4 style={{ margin: '0 0 8px 0', color: 'var(--accent-primary)' }}>Key Achievements</h4>
              <ul style={{ paddingLeft: '20px', margin: 0 }}>
                {cmsData.experience[0].achievements.map((ach, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>{ach}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Drawer>
  );
};
