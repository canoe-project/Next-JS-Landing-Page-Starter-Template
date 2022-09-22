import React, { useRef } from 'react';

import { Canvas, MeshProps } from '@react-three/fiber';

import { useColor } from 'src/hook/useColor';

function Box(props: MeshProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<MeshProps>({});
  // Hold state for hovered and clicked events
  // const [hovered, hover] = useState<boolean>(false);
  // const [clicked, click] = useState<boolean>(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // Return the view, these are regular Threejs elements expressed in JSX
  // useFrame((state, delta) => (ref.current.rotation.z += 0.01));
  // useFrame(() => {
  //   ref.current.rotation.z += 0.01;
  // });
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={clicked ? 1.5 : 1}
      // onClick={(event) => click(!clicked)}
      // onPointerOver={(event) => hover(true)}
      // onPointerOut={(event) => hover(false)}
      rotation-x={Math.PI * -0.25}
      // rotation-y={Math.PI * 0.25}
      rotation-z={Math.PI * -0.25}
    >
      <boxGeometry args={[4, 4, 1]} />
      <meshStandardMaterial color={useColor('darkBlue')} />
    </mesh>
  );
}

const Floor = () => {
  return (
    <Canvas>
      {/* <OrbitControls /> */}
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
};

export { Floor };
