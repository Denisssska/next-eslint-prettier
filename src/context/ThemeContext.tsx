'use client';

import { ReactNode, createContext, useState } from 'react';

interface Props {
  children: ReactNode;
}
interface ThemeContextType {
  toggle: () => void;
  mode: string;
}
export const ThemeContext = createContext<ThemeContextType>({ mode: 'light', toggle: () => {} });

export const ThemeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState('dark');
  const toggle = () => setMode(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider value={{ toggle, mode } as ThemeContextType}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
