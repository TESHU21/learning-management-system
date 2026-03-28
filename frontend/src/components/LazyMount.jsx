import React, { useEffect, useRef, useState } from "react";

const LazyMount = ({ children, rootMargin = "300px 0px", minHeight }) => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={containerRef} style={minHeight ? { minHeight } : undefined}>
      {isVisible ? children : null}
    </div>
  );
};

export default LazyMount;
