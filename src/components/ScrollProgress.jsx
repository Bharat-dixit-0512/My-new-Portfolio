import React from 'react';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="scroll-progress-bar">
      <div
        className="scroll-progress-fill"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}
