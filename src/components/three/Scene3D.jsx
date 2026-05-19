import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function LuxuryDumbbell() {
  const groupRef = useRef();

  useFrame((state) => {
    // Elegant, premium continuous rotation (just like a high-end product ad)
    groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
    groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.15;
    
    // Subtle float animation up and down
    groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.5) * 0.05;
  });

  return (
    <group ref={groupRef} scale={[1.3, 1.3, 1.3]}>
      {/* Central Knurled Grip Handle */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.035, 0.035, 0.9, 32]} />
        {/* Luxury Gold/Champagne Knurled Metal Material */}
        <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.9} />
      </mesh>

      {/* LEFT WEIGHT BLOCK ASSEMBLY */}
      <group position={[-0.32, 0, 0]}>
        {/* Outer Heavy Plate */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.26, 0.26, 0.08, 64]} />
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Inner Accent Ring */}
        <mesh position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.02, 64]} />
          <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* End Cap Bolt */}
        <mesh position={[-0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 32]} />
          <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>

      {/* RIGHT WEIGHT BLOCK ASSEMBLY */}
      <group position={[0.32, 0, 0]}>
        {/* Outer Heavy Plate */}
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.26, 0.26, 0.08, 64]} />
          <meshStandardMaterial color="#111111" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Inner Accent Ring */}
        <mesh position={[-0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.27, 0.27, 0.02, 64]} />
          <meshStandardMaterial color="#d4af37" roughness={0.1} metalness={0.9} />
        </mesh>
        {/* End Cap Bolt */}
        <mesh position={[0.05, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.06, 0.06, 0.04, 32]} />
          <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.6} />
        </mesh>
      </group>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full min-h-[350px] md:min-h-[450px]">
      <Canvas camera={{ position: [0, 0, 1.3], fov: 55 }}>
        <ambientLight intensity={0.2} />
        
        {/* Studio Spotlight settings to bounce reflections off the gold and black surfaces */}
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />
        <directionalLight position={[3, 3, 2]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-3, 2, 1]} intensity={1.5} color="#d4af37" />
        <pointLight position={[0, -2, 2]} intensity={0.6} color="#ffffff" />
        
        <LuxuryDumbbell />
      </Canvas>
    </div>
  );
}