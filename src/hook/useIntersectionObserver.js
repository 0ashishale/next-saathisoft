import React, { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (cb, options = {}) => {
  const [isInterescting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          cb();

          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [cb, options]);

  return [ref, isInterescting];
};

export default useIntersectionObserver;
