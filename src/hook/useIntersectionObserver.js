import { useEffect, useRef, useState } from "react";

const useIntersectionObserver = (cb, options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Store ref in a variable

    if (!currentRef) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          cb();
          observer.unobserve(entry.target);
        }
      });
    }, options);

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [cb, options]);

  return [ref, isIntersecting];
};

export default useIntersectionObserver;
