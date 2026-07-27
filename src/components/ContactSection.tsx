import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input, Button, Tag, message, Card } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  SendOutlined,
  CheckCircleOutlined,
  LinkedinOutlined,
  GithubOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { usePortfolioStore } from '../store/usePortfolioStore';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(3, 'Subject must be at least 3 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const { cmsData } = usePortfolioStore();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate async submission
    await new Promise((resolve) => setTimeout(resolve, 800));
    message.success(t('contact.successMsg'));
    reset();
  };

  return (
    <section id="contact" style={{ padding: '80px 0', backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
      <div className="portfolio-container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
          <Tag color="blue" style={{ marginBottom: '8px' }}>
            {t('nav.contact')}
          </Tag>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '12px' }}>
            {t('sections.contactTitle')}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Available for Senior Frontend & React Native opportunities, contracts, or technical consultations
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Direct Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '20px' }}>
                Contact Information
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--accent-subtle)', borderRadius: '10px', color: 'var(--accent-primary)' }}>
                    <MailOutlined style={{ fontSize: '20px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>EMAIL ADDRESS</div>
                    <a href={`mailto:${cmsData.about.email}`} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {cmsData.about.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--accent-subtle)', borderRadius: '10px', color: 'var(--accent-primary)' }}>
                    <PhoneOutlined style={{ fontSize: '20px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>PHONE / WHATSAPP</div>
                    <a href={`tel:${cmsData.about.phone}`} style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {cmsData.about.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                  <div style={{ padding: '10px', backgroundColor: 'var(--accent-subtle)', borderRadius: '10px', color: 'var(--accent-primary)' }}>
                    <EnvironmentOutlined style={{ fontSize: '20px' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 600 }}>LOCATION</div>
                    <div style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: 600 }}>
                      {cmsData.about.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div style={{ marginTop: '28px', padding: '16px', backgroundColor: 'var(--bg-tertiary)', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircleOutlined style={{ color: '#10b981', fontSize: '20px' }} />
                <span style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 600 }}>
                  {cmsData.about.availability}
                </span>
              </div>
            </div>

            {/* Social Bios Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '12px' }}>
                Social Bios
              </h4>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
                <strong>LinkedIn Headline:</strong> {cmsData.socialBio.linkedInHeadline}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', margin: 0 }}>
                <strong>GitHub Bio:</strong> {cmsData.socialBio.githubBio}
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '24px' }}>
              Send a Direct Message
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Name */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {t('contact.nameLabel')} *
                </label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="e.g. John Doe" size="large" status={errors.name ? 'error' : ''} />
                  )}
                />
                {errors.name && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.name.message}</div>}
              </div>

              {/* Email */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {t('contact.emailLabel')} *
                </label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="john@company.com" size="large" status={errors.email ? 'error' : ''} />
                  )}
                />
                {errors.email && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.email.message}</div>}
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {t('contact.subjectLabel')} *
                </label>
                <Controller
                  name="subject"
                  control={control}
                  render={({ field }) => (
                    <Input {...field} placeholder="React Native Mobile Developer Hiring Inquiry" size="large" status={errors.subject ? 'error' : ''} />
                  )}
                />
                {errors.subject && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.subject.message}</div>}
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '6px' }}>
                  {t('contact.messageLabel')} *
                </label>
                <Controller
                  name="message"
                  control={control}
                  render={({ field }) => (
                    <Input.TextArea {...field} rows={4} placeholder="Tell me about your project or job position..." status={errors.message ? 'error' : ''} />
                  )}
                />
                {errors.message && <div style={{ color: '#ef4444', fontSize: '12px', marginTop: '4px' }}>{errors.message.message}</div>}
              </div>

              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={isSubmitting}
                icon={<SendOutlined />}
                style={{ borderRadius: '8px', fontWeight: 600, marginTop: '8px' }}
                block
              >
                {isSubmitting ? t('contact.sending') : t('contact.submitButton')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
