import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function RotatingGlobe({ scrollProgress = 0 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    ref.current.rotation.y = t * 0.15;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.1;

    // Fade out as user scrolls
    const opacity = Math.max(0, 1 - scrollProgress * 3);
    ref.current.material.opacity = opacity * 0.2;
    ref.current.scale.setScalar(2.5 - scrollProgress * 2);
  });

  return (
    <mesh ref={ref} position={[3, 0, -3]}>
      <sphereGeometry args={[2.5, 24, 24]} />
      <meshStandardMaterial
        color="#00f5ff"
        emissive="#00f5ff"
        emissiveIntensity={0.4}
        wireframe
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}
