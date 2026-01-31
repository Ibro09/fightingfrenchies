"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  animationClass?: string;
  className?: string;
  delayClass?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
};

export default function AnimateOnView({
  children,
  animationClass = "animate-slide-up",
  className = "",
  delayClass = "",
  threshold = 0.25,
  rootMargin = "0px",
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once && el) obs.unobserve(el);
        }
      },
      { threshold, rootMargin },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin, once]);

  const classes =
    `${className} ${visible ? `${animationClass} ${delayClass}` : "opacity-0"}`.trim();

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
