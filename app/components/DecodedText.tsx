"use client";

import { useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// How long the full decode animation takes (ms)
const DURATION = 800;

type Props = {
  text: string;
  className?: string;
};

export default function DecodedText({ text: originalText, className }: Props) {
  const [displayText, setDisplayText] = useState(originalText);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  const cancel = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    startRef.current = null;
  };

  const animate = (timestamp: number) => {
    if (startRef.current === null) startRef.current = timestamp;

    const elapsed = timestamp - startRef.current;
    // progress 0 → 1 over DURATION
    const progress = Math.min(elapsed / DURATION, 1);

    // How many characters have been "resolved" (eased)
    const resolvedCount = Math.floor(
      easeOutCubic(progress) * originalText.length
    );

    setDisplayText(
      originalText
        .split("")
        .map((char, i) => {
          // Preserve spaces and punctuation immediately
          if (char === " " || char === "_" || char === "-") return char;
          if (i < resolvedCount) return char;
          // Scramble unresolved characters
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
        .join("")
    );

    if (progress < 1) {
      rafRef.current = requestAnimationFrame(animate);
    } else {
      setDisplayText(originalText);
      rafRef.current = null;
      startRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    cancel();
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseLeave = () => {
    cancel();
    setDisplayText(originalText);
  };

  return (
    <span
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer inline-block font-mono tracking-widest select-none ${className ?? ""}`}
      aria-label={originalText}
    >
      {displayText}
    </span>
  );
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}
