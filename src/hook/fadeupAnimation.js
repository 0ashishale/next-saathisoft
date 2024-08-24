import { useEffect, useRef } from 'react';

const useFadeUpAnimation = () => {
  const elementRefs = useRef([]);

  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeUp');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.3, // Adjust the threshold as needed
    });

    elementRefs.current.forEach((el) => el && observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return elementRefs;
};

export default useFadeUpAnimation;
