export const useSmoothScroll = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      // Update URL without jumping
      window.history.pushState({}, '', `#${targetId}`);
    }
  };

  return { scrollToSection };
}; 