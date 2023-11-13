import { useState, useEffect } from 'react';

const useOnScreen = (ref, rootMargin = '0px') => {
  // State and setter for storing whether the element is visible
  const [isIntersecting, setIntersecting] = useState(false);
    //Here is a comment
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when the observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};

export default useOnScreen;

