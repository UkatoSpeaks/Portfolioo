"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { 
  Float, 
  PerspectiveCamera, 
  MeshDistortMaterial, 
  MeshWobbleMaterial,
  OrbitControls,
  Text,
  ContactShadows,
  Environment
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShapes() {
  const shapeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (shapeRef.current) {
      shapeRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      shapeRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <group>
      {/* Central Abstract Shape */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh ref={shapeRef}>
          <torusKnotGeometry args={[1, 0.3, 128, 32]} />
          <MeshDistortMaterial
            color="#6C63FF"
            speed={2}
            distort={0.4}
            radius={1}
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Floating accent orbiters */}
      <Float speed={5} rotationIntensity={2} floatIntensity={5}>
        <mesh position={[3, 2, -2]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <MeshWobbleMaterial color="#22D3EE" speed={3} factor={0.6} />
        </mesh>
      </Float>

      <Float speed={4} rotationIntensity={1} floatIntensity={3}>
        <mesh position={[-3, -1, -3]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#8B5CF6" roughness={0} metalness={1} />
        </mesh>
      </Float>

      <ContactShadows
        opacity={0.4}
        scale={10}
        blur={2.4}
        far={4.5}
        resolution={256}
        color="#000000"
      />
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
        <Environment preset="city" />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#6C63FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#22D3EE" />

        <FloatingShapes />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5} 
        />
      </Canvas>
    </div>
  );
}
