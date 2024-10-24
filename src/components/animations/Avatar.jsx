import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Avatar = () => {
  const gltf = useGLTF('https://models.readyplayer.me/671aa54628caae2cc692328b.glb');

  return (
    <Canvas style={{ height: '500px', width: '100%' }} camera={{ position: [0, 1.6, 1.2], fov: 30 }}>
      {/* Lumières */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />

      {/* Modèle 3D */}
      <primitive object={gltf.scene} scale={1.6} position={[0, -2.6, 0]} />

      {/* Contrôles - limites pour la rotation et le zoom */}
      <OrbitControls 
        enablePan={false}
        minDistance={0.8} 
        maxDistance={2} 
        maxPolarAngle={Math.PI / 2}  // Limiter la rotation verticale pour rester en face
        minPolarAngle={Math.PI / 2.5} // Concentrer sur la partie supérieure du corps
      />
    </Canvas>
  );
};

export default Avatar;
