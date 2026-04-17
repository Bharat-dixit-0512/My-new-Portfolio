import React, { useEffect, useRef, useState } from 'react';

export default function CursorGlow() {
  const glowRef = useRef(null);
  const trailRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide on touch devices
    if ('ontouchstart' in window) {
      setVisible(false);
      return;
    }

    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    let trailX = 0, trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.15;
      glowY += (mouseY - glowY) * 0.15;
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowX - 20}px, ${glowY - 20}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailX - 60}px, ${trailY - 60}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div ref={glowRef} className="cursor-glow" />
      <div ref={trailRef} className="cursor-trail" />
    </>
  );
}
