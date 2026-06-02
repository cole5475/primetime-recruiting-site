'use client';

import { useEffect } from 'react';

export default function RevealInit() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('.reveal'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      },
    );

    elements.forEach((element) => observer.observe(element));

    const timeout = window.setTimeout(() => {
      const hidden = document.querySelectorAll('.reveal:not(.visible)');
      hidden.forEach((element) => element.classList.add('visible'));
    }, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(timeout);
    };
  }, []);

  return null;
}
