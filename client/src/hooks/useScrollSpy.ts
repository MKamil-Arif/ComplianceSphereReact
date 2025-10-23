import { useState, useEffect } from 'react';

export interface UseScrollSpyOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollSpy(
  elementIds: string[],
  options: UseScrollSpyOptions = {}
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const { threshold = 0.1, rootMargin = '0px 0px -50% 0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the highest intersection ratio
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Observe all elements
    const elements = elementIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [elementIds, threshold, rootMargin]);

  return activeId;
}

export default useScrollSpy;
