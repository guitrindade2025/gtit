import { useEffect, useRef, useState } from 'react';

interface FastCursorProps {
  primaryColor?: string;
  secondaryColor?: string;
  cursorSize?: number;
  cursorRingSize?: number;
  cursorStyle?: 'default' | 'magnetic' | 'minimal' | 'ultra';
}

/**
 * FastCursor component - ultra responsive cursor with zero delay
 */
const FastCursor = ({
  primaryColor = '#0EA5E9',
  secondaryColor = '#ffffff',
  cursorSize = 8,
  cursorRingSize = 30,
  cursorStyle = 'default'
}: FastCursorProps) => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const isClicking = useRef(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Component mount handler
    setMounted(true);

    // Hide the default cursor
    document.documentElement.style.cursor = 'none';
    
    // Add a class to the body for global styling of text selection
    document.body.classList.add('custom-cursor-active');
    
    // Track current hovered element for magnetic effect
    let currentHoveredElement: Element | null = null;
    
    // Ultra-responsive direct DOM manipulation for cursor positioning
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorDotRef.current || !cursorRingRef.current || !glowRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      // Use requestAnimationFrame for smoother movement with better performance
      requestAnimationFrame(() => {
        if (!cursorDotRef.current || !cursorRingRef.current || !glowRef.current) return;
        
        // Use transform for better performance
        cursorDotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        
        // Direct positioning for ring with only scale transforms
        cursorRingRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
        
        // Direct positioning for glow
        glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      });
      
      // Apply magnetic effect for interactive elements
      if (cursorStyle === 'magnetic' && currentHoveredElement) {
        const element = currentHoveredElement as HTMLElement;
        const rect = element.getBoundingClientRect();
        
        // Calculate center and distance
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = x - centerX;
        const distanceY = y - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        const maxDistance = Math.max(rect.width, rect.height) * 0.5;
        
        // Apply pull effect if within range
        if (distance < maxDistance) {
          const pullStrength = 0.3;
          const pullX = distanceX * pullStrength;
          const pullY = distanceY * pullStrength;
          
          cursorDotRef.current.style.left = `${x - pullX}px`;
          cursorDotRef.current.style.top = `${y - pullY}px`;
          cursorRingRef.current.style.left = `${x - pullX}px`;
          cursorRingRef.current.style.top = `${y - pullY}px`;
        }
      }
    };
    
    // Mouse down effect
    const handleMouseDown = () => {
      isClicking.current = true;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(0.9)';
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = 'translate(-50%, -50%) scale(0.8)';
      }
    };
    
    // Mouse up effect
    const handleMouseUp = () => {
      isClicking.current = false;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };
    
    // Element hover effects - check for selectable text elements
    const handleElementEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      isHovering.current = true;
      
      // Check if this element should have text selection behavior
      const isTextSelectable = 
        target.classList.contains('selectable-text') || 
        target.tagName.toLowerCase() === 'textarea' ||
        target.tagName.toLowerCase() === 'input' ||
        target.getAttribute('contenteditable') === 'true' || 
        target.closest('.selectable-text, textarea, input, [contenteditable="true"]') !== null;
      
      // Change the cursor appearance based on whether text is selectable
      if (isTextSelectable) {
        // Text cursor style - make it less prominent
        currentHoveredElement = null; // Disable magnetic effect for text
        
        if (cursorDotRef.current) {
          cursorDotRef.current.style.opacity = '0.4';
          cursorDotRef.current.style.width = `${cursorSize/2}px`;
          cursorDotRef.current.style.height = `${cursorSize/2}px`;
          cursorDotRef.current.style.backgroundColor = '#222222';
        }
        
        if (cursorRingRef.current) {
          cursorRingRef.current.style.opacity = '0';
        }
        
        if (glowRef.current) {
          glowRef.current.style.opacity = '0';
        }
      } else {
        // Regular interactive element style
        currentHoveredElement = target;
        
        if (cursorDotRef.current) {
          cursorDotRef.current.style.opacity = '1';
          cursorDotRef.current.style.width = `${cursorSize}px`;
          cursorDotRef.current.style.height = `${cursorSize}px`;
          cursorDotRef.current.style.backgroundColor = secondaryColor;
        }
        
        if (cursorRingRef.current) {
          cursorRingRef.current.style.opacity = '1';
          cursorRingRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
          cursorRingRef.current.style.borderColor = `${primaryColor}80`;
        }
        
        // Subtle element animation if magnetic
        if (cursorStyle === 'magnetic') {
          target.style.transition = 'transform 0.2s ease';
          target.style.transform = 'scale(1.02)';
        }
      }
    };
    
    // Reset on element leave
    const handleElementLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      isHovering.current = false;
      currentHoveredElement = null;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.opacity = '1';
        cursorDotRef.current.style.width = `${cursorSize}px`;
        cursorDotRef.current.style.height = `${cursorSize}px`;
        cursorDotRef.current.style.backgroundColor = primaryColor;
      }
      
      if (cursorRingRef.current) {
        cursorRingRef.current.style.opacity = '1';
        cursorRingRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorRingRef.current.style.borderColor = `${primaryColor}90`;
      }
      
      // Reset element transform
      if (cursorStyle === 'magnetic') {
        target.style.transform = '';
      }
    };
    
    // Add all event listeners at once for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Find all elements to apply hover effects
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], input, select, textarea, label, .clickable, .selectable-text, [contenteditable="true"], p, h1, h2, h3, h4, h5, h6, span, div'
    );
    
    // Apply hover effects to all elements
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleElementEnter);
      element.addEventListener('mouseleave', handleElementLeave);
      (element as HTMLElement).style.cursor = 'none';
    });
    
    // Clean up
    return () => {
      document.documentElement.style.cursor = '';
      document.body.classList.remove('custom-cursor-active');
      
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleElementEnter);
        element.removeEventListener('mouseleave', handleElementLeave);
        (element as HTMLElement).style.cursor = '';
      });
    };
  }, [primaryColor, secondaryColor, cursorStyle, cursorSize]);

  // Get cursor styles based on selected style
  const getCursorStyles = () => {
    switch (cursorStyle) {      case 'ultra':
        return {
          cursor: {
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor: primaryColor,
            borderRadius: '50%',
            boxShadow: `0 0 10px ${primaryColor}60`,
          },
          ring: {
            width: `${cursorRingSize}px`,
            height: `${cursorRingSize}px`,
            border: `1px solid ${primaryColor}90`,
            borderRadius: '50%',
          },
          glow: {
            width: '70px',
            height: '70px',
            background: `radial-gradient(circle, ${primaryColor}30, transparent 70%)`,
            filter: 'blur(2px)',
          }
        };
        
      case 'magnetic':
        return {
          cursor: {
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor: primaryColor,
            borderRadius: '50%',
            boxShadow: `0 0 15px ${primaryColor}80`
          },
          ring: {
            width: `${cursorRingSize}px`,
            height: `${cursorRingSize}px`,
            border: `1.5px solid ${primaryColor}`,
            borderRadius: '50%',
            backdropFilter: 'blur(1px)'
          },
          glow: {
            width: '60px',
            height: '60px',
            background: `radial-gradient(circle, ${primaryColor}40, transparent 70%)`,
          }
        };
        
      case 'minimal':
        return {
          cursor: {
            width: `${cursorSize - 2}px`,
            height: `${cursorSize - 2}px`,
            backgroundColor: 'transparent',
            border: `1.5px solid ${primaryColor}`,
            borderRadius: '50%'
          },
          ring: {
            width: `${cursorRingSize - 10}px`,
            height: `${cursorRingSize - 10}px`,
            border: '0',
            background: `radial-gradient(circle, ${primaryColor}30, transparent 70%)`,
            borderRadius: '50%'
          },
          glow: {
            opacity: '0'
          }
        };
        
      default:
        return {
          cursor: {
            width: `${cursorSize}px`,
            height: `${cursorSize}px`,
            backgroundColor: primaryColor,
            borderRadius: '50%',
          },
          ring: {
            width: `${cursorRingSize}px`,
            height: `${cursorRingSize}px`,
            border: `1px solid ${primaryColor}90`,
            borderRadius: '50%',
          },
          glow: {
            width: '80px',
            height: '80px',
            background: `radial-gradient(circle, ${primaryColor}30, transparent 70%)`
          }
        };
    }
  };

  const styles = getCursorStyles();

  if (!mounted) return null;

  return (
    <>
      {/* Main cursor dot - using direct positioning for zero delay */}      <div 
        ref={cursorDotRef}
        className={`fixed pointer-events-none z-[9999] ${cursorStyle === 'default' ? 'mix-blend-exclusion' : ''}`}
        style={{
          ...styles.cursor,
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          willChange: 'transform',
        }}
      />
      
      {/* Cursor ring */}      <div 
        ref={cursorRingRef}
        className="fixed pointer-events-none z-[9998]"
        style={{
          ...styles.ring,
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          willChange: 'transform',
        }}
      />
      
      {/* Glow effect */}      <div 
        ref={glowRef}
        className="fixed pointer-events-none z-[9997] mix-blend-overlay"
        style={{
          ...styles.glow,
          borderRadius: '50%',
          opacity: 0.3,
          transform: 'translate(-50%, -50%)',
          left: '0px',
          top: '0px',
          willChange: 'transform',
        }}
      />

      {/* Styles for interactive elements */}
      <style>
        {`
          /* Fast transitions for interactive elements */
          a, button, [role="button"], input[type="button"], input[type="submit"], .clickable {
            transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.15s ease !important;
          }
          
          /* Subtle hover effect */
          a:hover, button:hover, [role="button"]:hover, input[type="button"]:hover, 
          input[type="submit"]:hover, .clickable:hover {
            transform: translateY(-1px) !important;
          }
          
          /* Global text selection prevention with custom cursor */
          body.custom-cursor-active * {
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            cursor: none !important;
          }
          
          /* Allow text selection only for specific elements */
          body.custom-cursor-active .selectable-text,
          body.custom-cursor-active textarea,
          body.custom-cursor-active input[type="text"],
          body.custom-cursor-active input[type="email"],
          body.custom-cursor-active input[type="password"],
          body.custom-cursor-active input[type="number"],
          body.custom-cursor-active input[type="tel"],
          body.custom-cursor-active input[type="url"],
          body.custom-cursor-active [contenteditable="true"] {
            -webkit-user-select: text;
            -moz-user-select: text;
            -ms-user-select: text;
            user-select: text;
            cursor: text !important;
          }
          
          /* No selection for headers specifically */
          body.custom-cursor-active h1,
          body.custom-cursor-active h2, 
          body.custom-cursor-active h3,
          body.custom-cursor-active h4,
          body.custom-cursor-active h5,
          body.custom-cursor-active h6,
          body.custom-cursor-active .header,
          body.custom-cursor-active .navbar,
          body.custom-cursor-active .nav-link,
          body.custom-cursor-active .hero-title,
          body.custom-cursor-active .section-title {
            cursor: none !important;
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
          }
            
          /* Optimize performance with hardware acceleration */
          .fixed {
            will-change: transform;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            transform: translateZ(0);
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
          }
        `}
      </style>
    </>
  );
};

export default FastCursor;
