import { useLayoutEffect } from 'react';

// This hook ensures that demo pages have proper spacing from the header
const useHeaderSpacing = () => {
  useLayoutEffect(() => {
    // Add extra spacing to make sure content doesn't get hidden under the header
    window.scrollTo(0, 0);

    // Ensure the page has the demo-page class for proper styling
    document.body.classList.add('has-demo-page');

    return () => {
      // Clean up when component unmounts
      document.body.classList.remove('has-demo-page');
    };
  }, []);
};

export default useHeaderSpacing;
