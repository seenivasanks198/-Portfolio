export type ThemeMode = 'light' | 'dark' | 'system';

export type LanguageCode = 'en' | 'ta' | 'ar' | 'fr' | 'de' | 'es';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeName: string;
  flag: string;
  dir: 'ltr' | 'rtl';
}

export interface HeroData {
  name: string;
  professionalTitle: string;
  tagline: string;
  introduction: string[];
  keyStrengths: string[];
}

export interface AboutData {
  title: string;
  story: string[];
  declaration: string;
  hobbies: string[];
  availability: string;
  location: string;
  email: string;
  phone: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: number; // 0 - 100
    experienceYears?: number;
    popular?: boolean;
    tag?: string;
  }[];
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Mobile' | 'Web' | 'Fullstack' | 'OpenSource';
  shortDescription: string;
  fullDescription: string;
  year: string;
  period: string;
  technologies: string[];
  features: string[];
  challenges: ProjectChallenge[];
  whatILearned: string[];
  businessValue: string;
  resumeBulletImprovements: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  status: 'Completed' | 'In Production' | 'Maintained';
  badge?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  type: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  bestPractices: string[];
  impact: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  percentageGrade: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

export interface LanguageItem {
  name: string;
  proficiency: string;
  capabilities: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  content: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StatisticsData {
  yearsExperience: number;
  completedProjects: number;
  technologiesMastered: number;
  applicationsDeployed: number;
  gitCommitsCount: number;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  location: string;
}

export interface SocialBios {
  githubBio: string;
  linkedInHeadline: string;
}

export interface SeoData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  openGraphDescription: string;
}

export interface CallToActionData {
  heroCta: string;
  projectCta: string;
  contactCta: string;
  hireMeCta: string;
}

export interface PortfolioFullCms {
  hero: HeroData;
  about: AboutData;
  careerSummary: string;
  technicalSkills: SkillCategory[];
  projects: ProjectItem[];
  experience: WorkExperience[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: LanguageItem[];
  softSkills: string[];
  recruiterKeywords: string[];
  portfolioHighlights: {
    projectId: string;
    reasonToFeature: string;
  }[];
  githubRecommendations: {
    repoName: string;
    description: string;
    suggestedTech: string[];
  }[];
  portfolioContent: {
    homeNotice: string;
    aboutHighlight: string;
    experienceFocus: string;
  };
  seo: SeoData;
  socialBio: SocialBios;
  statistics: StatisticsData;
  callToAction: CallToActionData;
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  socials: SocialLinks;
}
