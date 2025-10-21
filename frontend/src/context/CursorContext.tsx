import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export type CursorStyleType = 'default' | 'magnetic' | 'minimal' | 'ultra';

interface CursorContextProps {
  cursorStyle: CursorStyleType;
  setCursorStyle: (style: CursorStyleType) => void;
  primaryColor: string;
  setPrimaryColor: (color: string) => void;
  secondaryColor: string;
  setSecondaryColor: (color: string) => void;
  isTouchDevice: boolean;
  enableCustomCursor: boolean;
  setEnableCustomCursor: (enabled: boolean) => void;
}

const defaultContextValue: CursorContextProps = {
  cursorStyle: 'minimal', // Always use minimal style (dot cursor)
  setCursorStyle: () => {},
  primaryColor: '#0EA5E9',
  setPrimaryColor: () => {},
  secondaryColor: '#ffffff',
  setSecondaryColor: () => {},
  isTouchDevice: false,
  enableCustomCursor: true, // Enable by default
  setEnableCustomCursor: () => {},
};

const CursorContext = createContext<CursorContextProps>(defaultContextValue);

export const useCursor = () => useContext(CursorContext);

interface CursorProviderProps {
  children: ReactNode;
}

export const CursorProvider = ({ children }: CursorProviderProps) => {
  // Initialize isTouchDevice first to prevent hydration issues
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const [cursorStyle] = useState<CursorStyleType>('minimal');
  const [primaryColor, setPrimaryColor] = useState('#0EA5E9');
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');
  const [enableCustomCursor, setEnableCustomCursor] = useState(true);  // Detect touch device on mount and apply global styles
  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    
    // Disable custom cursor on touch devices
    if (isTouch) {
      setEnableCustomCursor(false);
    }
    
    // Add global style to override default text selection behavior
    const style = document.createElement('style');
    style.innerHTML = `
      /* Global text selection prevention */
      body {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
      
      /* Prevent native cursor on most elements so custom cursor is sole visible cursor */
      div, p, h1, h2, h3, h4, h5, h6, span, button, a, li, header, nav, footer, section, article, aside {
        cursor: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      /* Stronger prevention for headers and navigation */
      header, nav, h1, h2, h3, h4, h5, h6, .title, .hero-title, .section-title {
        cursor: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
        -webkit-user-drag: none !important;
        -webkit-touch-callout: none !important;
      }
      
      /* Only allow text selection on specific elements */
      .selectable-text, textarea, input, [contenteditable="true"] {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
        cursor: text;
      }
    `;
    document.head.appendChild(style);
    
    // Add class to body for more specific styling
    document.body.classList.add('no-text-select');
    
    return () => {
      document.head.removeChild(style);
      document.body.classList.remove('no-text-select');
    };
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem('cursorPrimaryColor', primaryColor);
    } catch {}
  }, [primaryColor]);

  useEffect(() => {
    try {
      localStorage.setItem('cursorSecondaryColor', secondaryColor);
    } catch {}
  }, [secondaryColor]);

  useEffect(() => {
    try {
      localStorage.setItem('enableCustomCursor', enableCustomCursor.toString());
    } catch {}
  }, [enableCustomCursor]);

  return (
    <CursorContext.Provider 
      value={{ 
        cursorStyle, 
        setCursorStyle: () => {}, // No-op function since style is always minimal
        primaryColor,
        setPrimaryColor,
        secondaryColor,
        setSecondaryColor,
        isTouchDevice,
        enableCustomCursor,
        setEnableCustomCursor
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};
