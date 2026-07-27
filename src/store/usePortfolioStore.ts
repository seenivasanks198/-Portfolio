import { create } from 'zustand';
import { PortfolioFullCms, ProjectItem } from '../types';
import portfolioCmsData from '../cms/portfolio_data.json';

interface PortfolioState {
  cmsData: PortfolioFullCms;
  searchQuery: string;
  selectedCategory: string;
  selectedTechTag: string | null;
  selectedProject: ProjectItem | null;
  isCommandPaletteOpen: boolean;
  isCmsModalOpen: boolean;
  activeSection: string;
  
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string) => void;
  setSelectedTechTag: (tech: string | null) => void;
  setSelectedProject: (project: ProjectItem | null) => void;
  setCommandPaletteOpen: (isOpen: boolean) => void;
  setCmsModalOpen: (isOpen: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  cmsData: portfolioCmsData as unknown as PortfolioFullCms,
  searchQuery: '',
  selectedCategory: 'All',
  selectedTechTag: null,
  selectedProject: null,
  isCommandPaletteOpen: false,
  isCmsModalOpen: false,
  activeSection: 'hero',

  setSearchQuery: (query: string) => set({ searchQuery: query }),
  setSelectedCategory: (category: string) => set({ selectedCategory: category }),
  setSelectedTechTag: (tech: string | null) => set({ selectedTechTag: tech }),
  setSelectedProject: (project: ProjectItem | null) => set({ selectedProject: project }),
  setCommandPaletteOpen: (isOpen: boolean) => set({ isCommandPaletteOpen: isOpen }),
  setCmsModalOpen: (isOpen: boolean) => set({ isCmsModalOpen: isOpen }),
  setActiveSection: (section: string) => set({ activeSection: section })
}));
