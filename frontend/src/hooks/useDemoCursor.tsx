import { useEffect, useRef } from 'react';

// Hook compartilhado para configurar o cursor pontinho azul nas demos
const useDemoCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Esconde o cursor padrão do navegador
    document.documentElement.style.cursor = 'none';
    
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    
    // Efeito especial quando passa por cima de links e botões
    const interactiveElements = document.querySelectorAll('a, button');
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('demo-cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('demo-cursor-hover');
      }
    };
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      // Limpa os event listeners quando o componente desmonta
      document.removeEventListener('mousemove', handleMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      // Restaura o cursor padrão quando sai da página demo
      document.documentElement.style.cursor = 'auto';
    };
  }, []);
  
  return {
    cursorRef
  };
};

export default useDemoCursor;
