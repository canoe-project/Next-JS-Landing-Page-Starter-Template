import { ReactNode } from 'react';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

interface Props {
  wheel?: boolean;
  onClick?: Function;
  hidden?: boolean;
  children?: ReactNode;
  className?: string;
}

const CanvasLayer = ({ hidden = true, children, className }: Props) => {
  return (
    <Canvas
      className={`${
        hidden ? 'opacity-30' : 'z-10 '
      } ${className} cursor-pointer`}
      style={{ position: 'absolute' }}
      camera={{
        position: [226.09, 227.99, 330.16],
        rotation: [-45, 0, -45],
        zoom: 3,
      }}
    >
      <OrbitControls enabled={false} />
      <directionalLight
        position={[-10, 10, 5]}
        shadow-mapSize={[256, 256]}
        shadow-bias={-0.0001}
        castShadow
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10]} />
      </directionalLight>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
};

export { CanvasLayer };
