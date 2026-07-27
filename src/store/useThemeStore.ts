import { create } from 'zustand';
import { ThemeMode } from '../types';

interface ThemeState {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const getStoredTheme = (): ThemeMode => {
  if (typeof window === 'undefined') return 'system';
  const saved = localStorage.getItem('portfolio_theme');
  return (saved as ThemeMode) || 'system';
};

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const useThemeStore = create<ThemeState>((set, get) => ({
  theme: getStoredTheme(),
  resolvedTheme: getStoredTheme() === 'system' ? getSystemTheme() : (getStoredTheme() as 'light' | 'dark'),

  setTheme: (mode: ThemeMode) => {
    localStorage.setItem('portfolio_theme', mode);
    const resolved = mode === 'system' ? getSystemTheme() : mode;
    
    // Apply dataset attribute to document root for CSS variables styling
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', resolved);
      if (resolved === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }

    set({ theme: mode, resolvedTheme: resolved });
  },

  toggleTheme: () => {
    const current = get().resolvedTheme;
    const next: ThemeMode = current === 'light' ? 'dark' : 'light';
    get().setTheme(next);
  }
}));
