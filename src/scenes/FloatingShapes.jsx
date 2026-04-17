import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const SHAPE_TYPES = ['sphere', 'box', 'torus', 'octahedron', 'icosahedron'];

function Shape({ type, position, scale, color, speed, rotSpeed, scrollProgress, mouseX, mouseY }) {
  const ref = useRef();
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;

    // Slow rotation
    ref.current.rotation.x += rotSpeed * 0.003;
    ref.current.rotation.y += rotSpeed * 0.005;

    // Float animation
    ref.current.position.x = initialPos.x + Math.sin(t * speed * 0.5) * 0.3 + (mouseX || 0) * 2;
    ref.current.position.y = initialPos.y + Math.cos(t * speed * 0.4) * 0.4 + (mouseY || 0) * 2;
    ref.current.position.z = initialPos.z - scrollProgress * 3;

    // Scale pulse
    const s = scale * (1 + Math.sin(t * speed * 0.3) * 0.05);
    ref.current.scale.setScalar(s);
  });

  const Geometry = () => {
    switch (type) {
      case 'sphere':
        return <sphereGeometry args={[1, 12, 12]} />;
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'torus':
        return <torusGeometry args={[1, 0.3, 8, 16]} />;
      case 'octahedron':
        return <octahedronGeometry args={[1]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[1, 0]} />;
      default:
        return <sphereGeometry args={[1, 12, 12]} />;
    }
  };

  return (
    <mesh ref={ref} position={position}>
      <Geometry />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        transparent
        opacity={0.15}
        wireframe
        roughness={0.5}
        metalness={0.8}
      />
    </mesh>
  );
}

export default function FloatingShapes({ scrollProgress = 0, mouseX = 0, mouseY = 0 }) {
  const shapes = useMemo(() => {
    const colors = ['#00f5ff', '#a855f7', '#3b82f6', '#f472b6', '#06b6d4'];
    const arr = [];
    for (let i = 0; i < 18; i++) {
      arr.push({
        type: SHAPE_TYPES[i % SHAPE_TYPES.length],
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15 - 5,
        ],
        scale: Math.random() * 0.5 + 0.2,
        color: colors[i % colors.length],
        speed: Math.random() * 0.5 + 0.3,
        rotSpeed: Math.random() * 2 + 0.5,
      });
    }
    return arr;
  }, []);

  return (
    <group>
      {shapes.map((shape, i) => (
        <Shape
          key={i}
          {...shape}
          scrollProgress={scrollProgress}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
    </group>
  );
}
