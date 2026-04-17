import { useState, useEffect } from 'react';

export function useMouseParallax(sensitivity = 0.05) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * sensitivity,
        y: (e.clientY / window.innerHeight - 0.5) * sensitivity,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [sensitivity]);

  return mouse;
}
