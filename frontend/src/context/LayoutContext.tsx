import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface LayoutContextProps {
  scrolled: boolean;
  savedScrollPosition: number;
  saveScrollPosition: () => void;
  restoreScrollPosition: () => void;
}

const LayoutContext = createContext<LayoutContextProps>({
  scrolled: false,
  savedScrollPosition: 0,
  saveScrollPosition: () => {},
  restoreScrollPosition: () => {}
});

export const useLayout = () => useContext(LayoutContext);

interface LayoutProviderProps {
  children: ReactNode;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [savedScrollPosition, setSavedScrollPosition] = useState(0);

  const saveScrollPosition = () => {
    setSavedScrollPosition(window.scrollY);
  };

  const restoreScrollPosition = () => {
    window.scrollTo(0, savedScrollPosition);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LayoutContext.Provider value={{ 
      scrolled, 
      savedScrollPosition, 
      saveScrollPosition, 
      restoreScrollPosition 
    }}>
      <div className={scrolled ? 'scrolled-layout' : ''}>
        {children}
      </div>
    </LayoutContext.Provider>
  );
};
