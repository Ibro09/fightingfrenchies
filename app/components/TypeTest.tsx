"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  onComplete?: () => void;
};

export default function TypeText({
  text,
  speed = 40,
  delay = 0,
  className = "",
  onComplete,
}: Props) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let interval: number | undefined;
    const start = window.setTimeout(() => {
      interval = window.setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          if (interval) window.clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(start);
      if (interval) window.clearInterval(interval);
    };
  }, [text, speed, delay, onComplete]);

  return <div className={className}>{displayed}</div>;
}
