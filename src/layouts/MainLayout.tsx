import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ReadingProgress } from '../components/ReadingProgress';
import { BackToTop } from '../components/BackToTop';
import { CommandPalette } from '../components/CommandPalette';
import { CmsInspectorModal } from '../components/CmsInspectorModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ReadingProgress />
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
      <BackToTop />
      <CommandPalette />
      <CmsInspectorModal />
    </div>
  );
};
