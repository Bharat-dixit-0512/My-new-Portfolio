import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

export default function GlowLights({ scrollProgress = 0 }) {
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.3) * 8;
      light1.current.position.y = Math.cos(t * 0.2) * 5;
      light1.current.position.z = -2 - scrollProgress * 5;
      light1.current.intensity = 2 + Math.sin(t * 0.5) * 0.5;
    }

    if (light2.current) {
      light2.current.position.x = Math.cos(t * 0.25) * 6;
      light2.current.position.y = Math.sin(t * 0.35) * 7;
      light2.current.position.z = -scrollProgress * 3;
      light2.current.intensity = 1.5 + Math.cos(t * 0.4) * 0.3;
    }

    if (light3.current) {
      light3.current.position.x = Math.sin(t * 0.15 + 2) * 10;
      light3.current.position.y = Math.cos(t * 0.25 + 1) * 4;
      light3.current.position.z = 3 - scrollProgress * 4;
      light3.current.intensity = 1.8 + Math.sin(t * 0.6) * 0.4;
    }
  });

  return (
    <>
      <pointLight ref={light1} color="#00f5ff" intensity={2} distance={25} />
      <pointLight ref={light2} color="#a855f7" intensity={1.5} distance={20} />
      <pointLight ref={light3} color="#3b82f6" intensity={1.8} distance={22} />
      <ambientLight intensity={0.08} />
    </>
  );
}
