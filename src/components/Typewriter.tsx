"use client";

import { useEffect, useState } from "react";

export function Typewriter({
  words,
  typingSpeed = 70,
  deletingSpeed = 40,
  pause = 1600,
  className = "",
}: {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const atFull = !deleting && text === current;
    const atEmpty = deleting && text === "";
    const delay = atFull ? pause : deleting ? deletingSpeed : typingSpeed;

    const timer = setTimeout(() => {
      if (atFull) {
        setDeleting(true);
      } else if (atEmpty) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((prev) =>
          deleting
            ? current.slice(0, prev.length - 1)
            : current.slice(0, prev.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, words, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className} aria-live="polite">
      {text}
      <span className="caret" aria-hidden="true" />
    </span>
  );
}
