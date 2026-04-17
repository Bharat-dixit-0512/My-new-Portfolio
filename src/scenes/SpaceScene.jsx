import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Preload } from '@react-three/drei';
import * as THREE from 'three';
import FloatingShapes from './FloatingShapes';
import ParticleField from './ParticleField';
import GlowLights from './GlowLights';
import RotatingGlobe from './RotatingGlobe';

function CameraController({ scrollProgress, mouseX, mouseY }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetZ = 8 + scrollProgress * 10;
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseX * 1.5, 0.05);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouseY * 1.0, 0.05);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function SpaceScene() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="canvas-container">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 60, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={['#000008', 10, 40]} />
        <CameraController
          scrollProgress={scrollProgress}
          mouseX={mouse.x}
          mouseY={mouse.y}
        />
        <FloatingShapes
          scrollProgress={scrollProgress}
          mouseX={mouse.x}
          mouseY={mouse.y}
        />
        <ParticleField count={400} scrollProgress={scrollProgress} />
        <GlowLights scrollProgress={scrollProgress} />
        <RotatingGlobe scrollProgress={scrollProgress} />
        <Preload all />
      </Canvas>
    </div>
  );
}
