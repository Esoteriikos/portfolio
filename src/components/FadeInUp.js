"use client";

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const FadeInUp = ({ children, delay = 0, threshold = 0.1, triggerOnce = true }) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    triggerOnce: triggerOnce,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    }
    // else if (!inView && !triggerOnce) {
    //   setIsVisible(false);
    // }
  }, [inView, delay, triggerOnce]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInUp;
