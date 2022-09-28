import React, { useRef } from 'react';

import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type DreiGLTF = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.MeshStandardMaterial>;
};

export default function Tree(props) {
  const group = useRef();

  const { nodes, materials } = useGLTF('assets/gltf/tree.gltf') as DreiGLTF;

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.큐브.geometry}
        material={materials['SVGMat.002']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.큐브_1.geometry}
        material={materials['SVGMat.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.큐브_2.geometry}
        material={materials['SVGMat.004']}
      />
    </group>
  );
}
export { Tree };

// Object
// Curve
// :
// Mesh {isObject3D: true, uuid: 'c291c8d9-5fce-4dcc-9a54-e01866d99c67', name: 'Curve', type: 'Mesh', parent: Group, …}
// Curve003
// :
// Mesh {isObject3D: true, uuid: 'ffec4239-a200-4553-a87f-51deeadf7d78', name: 'Curve003', type: 'Mesh', parent: Group, …}
// Scene
// :
// Group {isObject3D: true, uuid: '94044a49-ee74-4052-9399-dbb1f9ede71f', name: 'Scene', type: 'Group', parent: null, …}
// 큐브
// :
// Mesh {isObject3D: true, uuid: '306a7cb9-0346-4dcc-8779-e1f165d90f8e', name: '큐브', type: 'Mesh', parent: Group, …}
// [[Prototype]]
// :
// Object
// Tree.tsx?9783:12
// Object
// SVGMat.001
// :
// MeshStandardMaterial {isMaterial: true, uuid: '35b733e4-5f9a-4bb3-946c-ee7dea054b3b', name: 'SVGMat.001', type: 'MeshStandardMaterial', blending: 1, …}
// SVGMat.002
// :
// MeshStandardMaterial {isMaterial: true, uuid: '0a9d66fa-6bce-4841-9904-afb610d8bfff', name: 'SVGMat.002', type: 'MeshStandardMaterial', blending: 1, …}
// SVGMat.004
// :
// MeshStandardMaterial {isMaterial: true, uuid: '4e6a8f81-4844-44dd-93c5-a1d6f71eaf77', name: 'SVGMat.004', type: 'MeshStandardMaterial', blending: 1, …}
// [[Prototype]]
// :
// Object
